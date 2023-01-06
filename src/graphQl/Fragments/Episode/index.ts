import gql from "graphql-tag";
import { charactersFields } from "../Characters";

const episodesFields = gql`
  ${charactersFields}
  fragment episodesFields on Episode {
    id
    name
    created
    characters {
      ...charactersFields
    }
  }
`;

export { episodesFields };
