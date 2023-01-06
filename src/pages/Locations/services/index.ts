import { $apollo } from "../../../apollo";
import {
  locationsByIdQuery,
  locationsQuery,
} from "../../../graphQl/Queries/Locations";

const locationById = async (id) => {
  try {
    const {
      data: { location },
    } = await $apollo.query({
      query: locationsByIdQuery,
      variables: {
        id,
      },
    });

    if (location) return location;
  } catch (e) {
    console.log(e);
  }
};

const filterLocations = async (filter) => {
  try {
    const {
      data: { locations },
    } = await $apollo.query({
      query: locationsQuery,
      variables: {
        filter,
      },
    });

    if (locations) return locations;
  } catch (e) {
    console.log(e);
  }
};

export { locationById, filterLocations };
