import { init } from "@rematch/core";
import * as models from "./models";

import persistStore from './plugins/persistiStore'
const persist = persistStore()
export const store = init({
  plugins: [persist],
  models
});
