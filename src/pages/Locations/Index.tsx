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
import { filterLocations, locationById } from "./services";
import { NoData } from "../../components/NoData/Index";

export default () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLocationsData = async (inputValue: string) => {
    const { results } = await filterLocations({ name: inputValue });

    if (results && results.length)
      return results.map((item) => ({
        value: item.id,
        label: item.name,
      }));
  };

  const loadLocationsOptions: any = (inputValue: string) =>
    new Promise((resolve) => {
      resolve(fetchLocationsData(inputValue));
    });

  const handleChange = async ({ value }) => {
    setLoading(true);

    const location = await locationById(value);
    if (location) setCharacters(location?.residents);

    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);

      const location = await locationById(1);
      if (location) setCharacters(location?.residents);

      setLoading(false);
    })();
  }, []);

  return (
    <div className="">
      <Header>
        <AsyncSelect
          cacheOptions
          defaultOptions
          loadOptions={loadLocationsOptions}
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
              <NoData />
            )}
          </>
        )}
      </div>
    </div>
  );
};
