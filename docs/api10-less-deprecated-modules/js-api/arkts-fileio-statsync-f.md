# statSync

## statSync

```TypeScript
declare function statSync(path: string): Stat
```

以同步方法获取文件的信息。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:statSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待获取文件的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Stat | 表示文件的具体信息。 |

