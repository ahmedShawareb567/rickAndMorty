import gql from "graphql-tag";
import { paginationFields } from "../../Fragments/Common";
import { episodesFields } from "../../Fragments/Episode";

const episodesQuery = gql`
  ${paginationFields}
  ${episodesFields}
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        ...episodesFields
      }
      info {
        ...paginationFields
      }
    }
  }
`;

const episodeByIdQuery = gql`
  ${episodesFields}
  query episode($id: ID!) {
    episode(id: $id) {
      ...episodesFields
    }
  }
`;

export { episodesQuery, episodeByIdQuery };
