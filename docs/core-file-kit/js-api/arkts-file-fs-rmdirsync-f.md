# rmdirSync

## rmdirSync

```TypeScript
declare function rmdirSync(path: string): void
```

以同步方法删除目录及其所有子目录和文件。 > **说明：** > > 该接口支持删除单个文件，但不推荐使用此方法删除单个文件，推荐使用unlinkSync接口删除单个文件。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 目录的应用沙箱路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900014 | Device or resource busy |
| 13900018 | Not a directory |
| 13900020 | Invalid argument |
| 13900027 | Read-only file system |
| 13900030 | File name too long |
| 13900032 | Directory not empty |
| 13900042 | Unknown error |

