# stat

## stat

```TypeScript
declare function stat(file: string | number): Promise<Stat>
```

获取文件或目录详细属性信息，使用promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| file | string \| number | Yes | 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。 说明：从API version 22开始，支持传入URI。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Stat> | Promise对象。返回文件或目录的具体信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900030 | File name too long |
| 13900031 | Function not implemented |
| 13900033 | Too many symbolic links encountered |
| 13900038 | Value too large for defined data type |
| 13900042 | Unknown error |

## stat

```TypeScript
declare function stat(file: string | number, callback: AsyncCallback<Stat>): void
```

获取文件或目录的详细属性信息，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| file | string \| number | Yes | 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。 说明：从API version 22开始，支持传入URI。 |
| callback | AsyncCallback&lt;Stat> | Yes | 异步获取文件或目录的信息之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900030 | File name too long |
| 13900031 | Function not implemented |
| 13900033 | Too many symbolic links encountered |
| 13900038 | Value too large for defined data type |
| 13900042 | Unknown error |

