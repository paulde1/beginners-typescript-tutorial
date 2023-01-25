import { expect, it } from "vitest";

interface info {
  first: number;
}

interface info {
  second: number;
}
// interface can be extended but type cannot be extended 
export const addTwoNumbers = (params: info) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
