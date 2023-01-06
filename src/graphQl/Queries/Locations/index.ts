import gql from "graphql-tag";
import { charactersFields } from "../../Fragments/Characters";
import { paginationFields } from "../../Fragments/Common";

const locationsQuery = gql`
  ${paginationFields}
  ${charactersFields}
  query locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        id
        name
        type
        created
        residents {
          ...charactersFields
        }
      }
      info {
        ...paginationFields
      }
    }
  }
`;

const locationsByIdsQuery = gql`
  ${charactersFields}
  query locationsByIds($ids: [ID!]!) {
    locationsByIds(ids: $ids) {
      id
      name
      type
      created
      residents {
        ...charactersFields
      }
    }
  }
`;

const locationsByIdQuery = gql`
  ${charactersFields}
  query location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      residents {
        ...charactersFields
      }
      created
    }
  }
`;

export { locationsQuery, locationsByIdsQuery, locationsByIdQuery };
