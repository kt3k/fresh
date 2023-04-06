// -- std --
export {
  extname,
  fromFileUrl,
  toFileUrl,
} from "https://deno.land/std@0.178.0/path/mod.ts";
export { walk } from "https://deno.land/std@0.178.0/fs/walk.ts";
export { serve } from "https://deno.land/std@0.178.0/http/server.ts";
export type {
  ConnInfo,
  Handler as RequestHandler,
  ServeInit,
} from "https://deno.land/std@0.178.0/http/server.ts";
export { Status } from "https://deno.land/std@0.178.0/http/http_status.ts";
export {
  typeByExtension,
} from "https://deno.land/std@0.178.0/media_types/mod.ts";

// -- rutt --
export * as rutt from "https://deno.land/x/rutt@0.1.0/mod.ts";

// -- esbuild --
// @deno-types="https://deno.land/x/esbuild@v0.17.11/mod.d.ts"
import * as esbuildWasm from "https://deno.land/x/esbuild@v0.17.11/wasm.js";
import * as esbuildNative from "https://deno.land/x/esbuild@v0.17.11/mod.js";
// @ts-ignore trust me
const esbuild: typeof esbuildWasm = Deno.run === undefined
  ? esbuildWasm
  : esbuildNative;
export { esbuild, esbuildWasm as esbuildTypes };

// TODO(lino-levan): Replace with versioned import
export { denoPlugins } from "https://raw.githubusercontent.com/nayeemrmn/esbuild_deno_loader/468230bb82e300959c95e250969edfb5e665c07b/mod.ts";
