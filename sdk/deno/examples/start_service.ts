import { connect } from "../client.ts";

if (import.meta.main) {
  const project = await connect().project("near-suit");
  await project.start("deno-fresh");
}
