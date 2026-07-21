# setxattrSync

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@kit.CoreFileKit';
```

<a id="setxattrsync"></a>
## setxattrSync

```TypeScript
declare function setxattrSync(path: string, key: string, value: string): void
```

Sets an extended attribute of a file or directory.

**Since:** 12

<!--Device-unnamed-declare function setxattrSync(path: string, key: string, value: string): void--><!--Device-unnamed-declare function setxattrSync(path: string, key: string, value: string): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file or directory. |
| key | string | Yes | Key of the extended attribute to obtain. The value is a string of less than 256 bytes and can contain only the **user.** prefix. |
| value | string | Yes | Value of the extended attribute to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| 13900002 | No such file or directory |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |
| 13900031 | Function not implemented |
| 13900038 | Value too large for defined data type |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

