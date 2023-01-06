import { $apollo } from "../../../apollo";
import {
  characterByIdQuery,
  characterQuery,
} from "../../../graphQl/Queries/Characters";

interface CharacterFilterInterface {
  name?: string;
  status?: string;
  type?: string;
  species?: string;
  gender?: string;
}

const getCharacterById = async (id) => {
  try {
    const {
      data: { character },
    } = await $apollo.query({
      query: characterByIdQuery,
      variables: {
        id,
      },
    });

    if (character) return character;
  } catch (e) {
    console.log(e);
  }
};

const filterCharacter = async (page = 1, filter: CharacterFilterInterface) => {
  try {
    const {
      data: { characters },
    } = await $apollo.query({
      query: characterQuery,
      variables: {
        filter: {
          ...(filter?.name && { name: filter.name }),
          ...(filter?.status && { status: filter.status }),
          ...(filter?.species && { species: filter.species }),
          ...(filter?.type && { type: filter.type }),
          ...(filter?.gender && { gender: filter.gender }),
        },
        page,
      },
    });

    return characters;
  } catch (e) {
    console.log(e);
  }
};

export { getCharacterById, filterCharacter };
