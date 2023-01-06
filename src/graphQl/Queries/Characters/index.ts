import gql from "graphql-tag";
import { charactersFields } from "../../Fragments/Characters";
import { paginationFields } from "../../Fragments/Common";

const characterByIdQuery = gql`
  ${charactersFields}
  query character($id: ID!) {
    character(id: $id) {
      ...charactersFields
    }
  }
`;

const characterQuery = gql`
  ${paginationFields}
  ${charactersFields}
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        ...charactersFields
      }
      info {
        ...paginationFields
      }
    }
  }
`;

export { characterByIdQuery, characterQuery };
