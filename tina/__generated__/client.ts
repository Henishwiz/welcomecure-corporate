import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'fbcbb5a48c41ff08dd6199f4633e24a88de2ef8e', queries,  });
export default client;
  