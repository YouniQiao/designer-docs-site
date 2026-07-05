# mkdtemp

## mkdtemp

```TypeScript
declare function mkdtemp(prefix: string): Promise<string>
```

创建临时目录，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:mkdtemp

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | 用随机产生的字符串替换以“XXXXXX”结尾目录路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回生成的唯一目录路径。 |

## mkdtemp

```TypeScript
declare function mkdtemp(prefix: string, callback: AsyncCallback<string>): void
```

创建临时目录，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:mkdtemp

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | 用随机产生的字符串替换以“XXXXXX”结尾目录路径。 |
| callback | AsyncCallback&lt;string> | Yes |  |

