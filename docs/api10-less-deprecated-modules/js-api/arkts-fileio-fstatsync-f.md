# fstatSync

## fstatSync

```TypeScript
declare function fstatSync(fd: number): Stat
```

以同步方法基于文件描述符获取文件状态信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:statSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待获取文件状态的文件描述符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Stat | 表示文件状态的具体信息。 |

