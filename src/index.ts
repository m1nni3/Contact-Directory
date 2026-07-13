import { DurableObject } from "cloudflare:workers";
import { Hono } from "hono";

export class App extends DurableObject {
  private app = new Hono()
    .get("/api/health", (c) => c.json({ status: "ok" }));

  async fetch(request: Request) {
    return this.app.fetch(request);
  }
}
