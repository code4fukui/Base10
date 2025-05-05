# Base10

Base10 is an encoding using a decimal number

## sample app

https://code4fukui.github.io/Base10/

## usage

```js
import { Base10 } from "https://code4fukui.github.io/Base10/Base10.js";

console.log(Base10.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base10.decode("16973567"));
```
