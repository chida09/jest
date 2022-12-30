# 参考

[なぜJestのmockライブラリに混乱してしまうのか？](https://qiita.com/s_karuta/items/ee211251d944e72b2517)
[Sinon.JS でテストダブルを理解する](https://qiita.com/ringtail003/items/7c16b85e7031bd1979ef#spy%E3%82%B9%E3%83%91%E3%82%A4)


# 実行

```
$ npx ts-node src/doubleSquare.ts
```

# テスト

```
$ npm test ./test/exportConst/doubleSquare.test.ts
```

# メモ

`export default` と `export const` で挙動が変わる
