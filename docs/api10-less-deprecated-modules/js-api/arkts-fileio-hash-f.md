# hash

## hash

```TypeScript
declare function hash(path: string, algorithm: string): Promise<string>
```

计算文件的哈希值，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.hash:hash

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待计算哈希值文件的应用沙箱路径。 |
| algorithm | string | Yes | 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回文件的哈希值。表示为十六进制数字串，所有字母均大写。 |

## hash

```TypeScript
declare function hash(path: string, algorithm: string, callback: AsyncCallback<string>): void
```

计算文件的哈希值，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.hash:hash

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待计算哈希值文件的应用沙箱路径。 |
| algorithm | string | Yes | 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。 |
| callback | AsyncCallback&lt;string> | Yes |  |

