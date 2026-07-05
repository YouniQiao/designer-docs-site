# lstatSync

## lstatSync

```TypeScript
declare function lstatSync(path: string): Stat
```

以同步方法获取链接信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:lstatSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 目标文件的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Stat | 表示文件的具体信息。 |

