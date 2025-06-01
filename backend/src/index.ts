import { Hono } from 'hono'
import chat from "./routes/chat/index.route"


const app = new Hono()
  .route("/chat", chat)



export type AppType = typeof app
export default app