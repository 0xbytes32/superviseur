import {connect} from "../client.ts";

if (import.meta.main) {
  connect().project("deno-example").start("deno-fresh");
}
