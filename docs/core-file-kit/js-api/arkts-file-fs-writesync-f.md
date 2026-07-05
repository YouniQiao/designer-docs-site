# writeSync

## writeSync

```TypeScript
declare function writeSync(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): number
```

以同步方法将数据写入文件。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 已打开的文件描述符。 |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | WriteOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回实际写入的数据长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

