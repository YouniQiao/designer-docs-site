# hash

## hash

```TypeScript
declare function hash(path: string, algorithm: string): Promise<string>
```

计算文件的哈希值，使用Promise异步回调。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.hash:hash

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待计算哈希值文件的应用沙箱路径。 |
| algorithm | string | 是 | 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise对象。返回文件的哈希值。表示为十六进制数字串，所有字母均大写。 |

## hash

```TypeScript
declare function hash(path: string, algorithm: string, callback: AsyncCallback<string>): void
```

计算文件的哈希值，使用callback异步回调。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.hash:hash

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待计算哈希值文件的应用沙箱路径。 |
| algorithm | string | 是 | 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。 |
| callback | AsyncCallback&lt;string> | 是 |  |

