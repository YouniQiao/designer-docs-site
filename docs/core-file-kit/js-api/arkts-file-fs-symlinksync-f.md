# symlinkSync

## symlinkSync

```TypeScript
declare function symlinkSync(target: string, srcPath: string): void
```

以同步的方法基于文件路径创建符号链接。 > **说明：** > > 从API version 11开始，不支持三方应用使用。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | string | Yes | 要链接的目标文件的应用沙箱路径。 |
| srcPath | string | Yes | 符号链接文件的应用沙箱路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900015 | File exists |
| 13900018 | Not a directory |
| 13900025 | No space left on device |
| 13900027 | Read-only file system |
| 13900030 | File name too long |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

