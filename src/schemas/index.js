import { schema } from "normalizr";

export const pokemon = new schema.Entity(
  "pokemons",
  {},
  { idAttribute: (item) => item.name }
);

export const repository = new schema.Entity("repositories");
