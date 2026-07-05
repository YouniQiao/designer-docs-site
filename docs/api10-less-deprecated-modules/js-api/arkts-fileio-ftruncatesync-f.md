# ftruncateSync

## ftruncateSync

```TypeScript
declare function ftruncateSync(fd: number, len?: number): void
```

以同步方法基于文件描述符截断文件。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:truncateSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待截断文件的文件描述符。 |
| len | number | No |  |

