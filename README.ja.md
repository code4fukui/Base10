# Base10

Base10は10進数を使用したエンコーディングです。

## デモ
https://code4fukui.github.io/Base10/

## 特徴
- バイナリデータと10進数文字列間のエンコードおよびデコード
- 大きな数値（最大256ビット）のエンコードおよびデコードをサポート
- エンコードおよびデコード関数のユニットテストを同梱

## 使い方
```js
import { Base10 } from "https://code4fukui.github.io/Base10/Base10.js";

console.log(Base10.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base10.decode("16973567"));
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
