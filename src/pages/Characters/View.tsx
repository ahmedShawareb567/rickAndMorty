import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppCard } from "../../components/AppCard/Index";
import { AppShimmer } from "../../components/AppShimmer/Index";
import { Header } from "../../components/Header/Index";
import { getCharacterById } from "./services";

export default () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState();
  const params: { id: string } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const character = await getCharacterById(params?.id);
      if (character) setCharacter(character);

      setLoading(false);
    })();
  }, []);

  return (
    <div className="character">
      <Header />
      <div className="container">
        {loading ? (
          <div className="pt-xl pb-xl">
            <AppShimmer />
          </div>
        ) : (
          <>
            <div className="row justify-content-center pt-xxl pb-xxl">
              <div className="col-lg-3">
                <AppCard item={character} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
