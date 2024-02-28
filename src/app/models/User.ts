import {Login} from "./Login";

export interface User{
  id? : string;
  name? : string;
  email? : string;
  avatar? : string;
  status? : string;
  description? : string;
  login? : Login
}
