# Base10

Base10 is an encoding using a decimal number.

## Demo
https://code4fukui.github.io/Base10/

## Features
- Encodes and decodes binary data to and from a decimal number string
- Supports encoding and decoding of large numbers (up to 256-bit)
- Includes unit tests for the encoding and decoding functions

## Usage
```js
import { Base10 } from "https://code4fukui.github.io/Base10/Base10.js";

console.log(Base10.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base10.decode("16973567"));
```

## License
MIT License