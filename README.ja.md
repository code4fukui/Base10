# Base10

Base10は10進数を使った符号化エンコーディングです。バイナリデータを10進数の文字列に符号化・復号化することができます。大容量のデータ（最大256ビット）にも対応しており、符号化・復号化の関数にはユニットテストが付属しています。

## デモ
https://code4fukui.github.io/Base10/

## 機能
- バイナリデータを10進数の文字列に符号化・復号化できます
- 大容量のデータ（最大256ビット）にも対応
- 符号化・復号化の関数にはユニットテストが付属しています

## 使い方
```js
import { Base10 } from "https://code4fukui.github.io/Base10/Base10.js";

console.log(Base10.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base10.decode("16973567"));
```

## ライセンス
MIT License