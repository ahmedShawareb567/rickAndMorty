import {
  LoadingMessage,
  ReactSelectCustomNoOptionsMessage,
} from "../../components/ReactSelectOptions/Index";
import { reactSelectAsyncCustomStyles } from "../../components/ReactSelectOptions/Options";
import AsyncSelect from "react-select/async";
import { AppCard } from "../../components/AppCard/Index";
import { useEffect, useState } from "react";
import { AppShimmer } from "../../components/AppShimmer/Index";
import { Character } from "../../graphQl/Queries/Characters/types";
import { Header } from "../../components/Header/Index";
import { filterEpisodes, episodeById } from "./services";
import { NoData } from "../../components/NoData/Index";

export default () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEpisodesData = async (inputValue: string) => {
    const { results } = await filterEpisodes({ name: inputValue });

    if (results && results.length)
      return results.map((item) => ({
        value: item.id,
        label: item.name,
      }));
  };

  const loadEpisodesOptions: any = (inputValue: string) =>
    new Promise((resolve) => {
      resolve(fetchEpisodesData(inputValue));
    });

  const handleChange = async ({ value }) => {
    setLoading(true);

    const episode = await episodeById(value);
    if (episode) setCharacters(episode?.characters);

    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);

      const episode = await episodeById(1);
      if (episode) setCharacters(episode?.characters);

      setLoading(false);
    })();
  }, []);

  return (
    <div className="">
      <Header>
        <AsyncSelect
          cacheOptions
          defaultOptions
          loadOptions={loadEpisodesOptions}
          placeholder={"Select Location"}
          components={{
            NoOptionsMessage: ReactSelectCustomNoOptionsMessage,
            LoadingMessage,
          }}
          onChange={handleChange}
          menuPosition="fixed"
          styles={{
            ...reactSelectAsyncCustomStyles,
          }}
        />
      </Header>

      <div className="container pt-xl pb-xl">
        {loading ? (
          <AppShimmer />
        ) : (
          <>
            {characters.length > 0 ? (
              <div className="row">
                {characters.map((character: any) => (
                  <div className="col-lg-3 col-md-4 mb-lg" key={character?.id}>
                    <AppCard item={character} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <NoData />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
