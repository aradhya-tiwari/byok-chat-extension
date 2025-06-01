```js 
// route handler
import { createFactory } from "hono/factory";

const handler = createFactory<Bindings>().createHandlers(async (c) => {

})

// index.route.ts
import { createFactory } from "hono/factory";

const app = createFactory<Bindings>().createApp()
    .get("/",)
    .post("/",)
    .put("/",)
    .delete("/",)

export default app
```