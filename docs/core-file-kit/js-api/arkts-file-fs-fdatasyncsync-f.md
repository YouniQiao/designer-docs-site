# fdatasyncSync

## fdatasyncSync

```TypeScript
declare function fdatasyncSync(fd: number): void
```

以同步方法实现文件内容的数据同步。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 已打开的文件描述符。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |
| 13900027 | Read-only file system |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

