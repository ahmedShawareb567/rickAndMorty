import { $apollo } from "../../../apollo";
import {
  episodeByIdQuery,
  episodesQuery,
} from "../../../graphQl/Queries/Episodes";

const episodeById = async (id) => {
  try {
    const {
      data: { episode },
    } = await $apollo.query({
      query: episodeByIdQuery,
      variables: {
        id,
      },
    });

    if (episode) return episode;
  } catch (e) {
    console.log(e);
  }
};

const filterEpisodes = async (filter) => {
  try {
    const {
      data: { episodes },
    } = await $apollo.query({
      query: episodesQuery,
      variables: {
        filter,
      },
    });

    if (episodes) return episodes;
  } catch (e) {
    console.log(e);
  }
};

export { episodeById, filterEpisodes };
