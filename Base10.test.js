import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base10 } from "./Base10.js";
import * as sec from "https://code4fukui.github.io/sec.js/sec.js";

Deno.test("encode", () => {
  t.assertEquals(Base10.encode(new Uint8Array([0])), "0");
  t.assertEquals(Base10.encode(new Uint8Array([1])), "1");
  t.assertEquals(Base10.encode(new Uint8Array([200])), "200");
  t.assertEquals(Base10.encode(new Uint8Array([1, 0])), "256");
  t.assertEquals(Base10.encode(new Uint8Array([1, 0, 0, 0])), "16777216");
});
Deno.test("decode", () => {
  t.assertEquals(Base10.decode("0"), new Uint8Array([0]));
  t.assertEquals(Base10.decode("1"), new Uint8Array([1]));
  t.assertEquals(Base10.decode("200"), new Uint8Array([200]));
  t.assertEquals(Base10.decode("256"), new Uint8Array([1, 0]));
  t.assertEquals(Base10.decode("16777216"), new Uint8Array([1, 0, 0, 0]));
});
Deno.test("pubkey", () => {
  //const prikey = sec.prikey();
  //console.log(Base10.encode(prikey));
  const prikey = Base10.decode("12068384295624854833007426865095137854637859999209778779727469035308748171137");
  const pubkey = sec.pubkey(prikey);
  //console.log(Base10.encode(pubkey));
  t.assertEquals(Base10.encode(pubkey), "41154297592945920092553182926728779082885114381995648069128900676632289396191");
  const data = new Uint8Array([0]);
  const sign = sec.sign(prikey, data);
  t.assertEquals(Base10.encode(sign), "2016929691276869041506618784786179150003450079351730406122753677546673095632686676917758240103803124293247038055143346969590391267538966811587145003250952");
  t.assert(sec.verify(sign, pubkey, data));
});
