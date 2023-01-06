import { Character } from "../../Characters/types";

export interface Location {
  id: string;
  name: string;
  residents: Character[];
}
