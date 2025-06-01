import { createFactory } from "hono/factory";


const app = createFactory().createApp()
    .get("/",)
    .post("/",)
    .put("/",)
    .delete("/",)

export default app