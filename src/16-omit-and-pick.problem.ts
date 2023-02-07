import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type NewUser = Omit<User,'id'>;
//can also use Pick in place of omit and pick firstName and lastName
type tests = [Expect<Equal<NewUser, { firstName: string; lastName: string }>>];
