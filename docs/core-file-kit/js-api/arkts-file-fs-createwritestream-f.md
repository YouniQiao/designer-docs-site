# createWriteStream

## createWriteStream

```TypeScript
declare function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream
```

以同步方法打开文件可写流。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件路径。 |
| options | WriteStreamOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| WriteStream | 文件可写流。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory |
| 13900004 | Interrupted system call |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900015 | File exists |
| 13900017 | No such device |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900022 | Too many open files |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900027 | Read-only file system |
| 13900030 | File name too long |
| 13900038 | Value too large for defined data type |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

