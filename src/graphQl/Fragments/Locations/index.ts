import gql from "graphql-tag";

const locationsFields = gql`
  fragment locationsFields on Location {
    id
    name
    type
    created
  }
`;

export { locationsFields };
