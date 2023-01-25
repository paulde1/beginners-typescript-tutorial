import { expect, it } from "vitest";

type args = {
  first: string,
  last?: string,
}

export const getName = (params:args) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt"
    // could ahave also included an empty string here instead of ? in args ( last: '')
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
