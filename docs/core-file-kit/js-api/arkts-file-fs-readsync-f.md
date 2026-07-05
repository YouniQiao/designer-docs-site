# readSync

## readSync

```TypeScript
declare function readSync(
  fd: number,
  buffer: ArrayBuffer,
  options?: ReadOptions
): number
```

以同步方法从文件读取数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 已打开的文件描述符。 |
| buffer | ArrayBuffer | Yes | 用于保存读取到的文件数据的缓冲区。 |
| options | ReadOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回实际读取的数据长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |
| 13900044 | Network is unreachable [since 12] |

