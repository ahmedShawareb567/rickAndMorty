import gql from "graphql-tag";

const paginationFields = gql`
  fragment paginationFields on Info {
    count
    next
    prev
    pages
  }
`;

export { paginationFields };
