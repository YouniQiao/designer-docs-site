# symlink

## symlink

```TypeScript
declare function symlink(target: string, srcPath: string): Promise<void>
```

基于文件路径创建符号链接，使用promise异步回调。 > **说明：** > > 从API version 11开始，不支持三方应用使用。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | string | Yes | 要链接的目标文件的应用沙箱路径。 |
| srcPath | string | Yes | 符号链接文件的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

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

## symlink

```TypeScript
declare function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void
```

基于文件路径创建符号链接，使用callback异步回调。 > **说明：** > > 从API version 11开始，不支持三方应用使用。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | string | Yes | 要链接的目标文件的应用沙箱路径。 |
| srcPath | string | Yes | 符号链接文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | Yes | 异步创建符号链接信息之后的回调。 |

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

