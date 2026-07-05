# getFreeSizeSync

## getFreeSizeSync

```TypeScript
function getFreeSizeSync(path: string): long
```

以同步方法获取指定文件系统空闲字节数。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 需要查询的文件系统的文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 返回空闲字节数。 |

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

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let path = context.filesDir;
let number = statfs.getFreeSizeSync(path);
console.info("getFreeSizeSync succeed, Size: " + number);

```

