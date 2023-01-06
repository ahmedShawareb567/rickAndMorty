import gql from "graphql-tag";
import { locationsFields } from "../Locations";

const charactersFields = gql`
  ${locationsFields}
  fragment charactersFields on Character {
    id
    name
    status
    type
    gender
    image
    location {
      ...locationsFields
    }
  }
`;

export { charactersFields };
