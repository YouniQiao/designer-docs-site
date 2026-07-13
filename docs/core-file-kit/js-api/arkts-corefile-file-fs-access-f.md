# access

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@kit.CoreFileKit';
```

## access

```TypeScript
declare function access(path: string, mode?: AccessModeType): Promise<boolean>
```

Checks whether the file or directory exists or has the operation permission. This API uses a promise to return the
result.

If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied) will
be thrown.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file or directory. |
| mode | AccessModeType | No | Permission on the file or directory to check. If this parameter is left blank, thesystem checks whether the file exists.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return a Boolean value. The value **true** means the file exists; thevalue **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900020 | Invalid argument |
| 13900023 | Text file busy |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |
| 13900042 | Unknown error |


## access

```TypeScript
declare function access(path: string, callback: AsyncCallback<boolean>): void
```

Checks whether a file or directory exists. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file or directory. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** means the fileexists; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900020 | Invalid argument |
| 13900023 | Text file busy |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |
| 13900042 | Unknown error |


## access

```TypeScript
declare function access(path: string, mode: AccessModeType, flag: AccessFlagType): Promise<boolean>
```

Checks whether the file or directory is stored locally or has the operation permission. This API uses a promise to
return the result.

If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied) will
be thrown.

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file or directory. |
| mode | AccessModeType | Yes | Permission on the file or directory to check. |
| flag | AccessFlagType | Yes | Position of the file or directory to check. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return a Boolean value. The value **true** means the file or directoryis a local one and has the related permission. The value **false** means the file or directory does not exist oris on the cloud or a distributed device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| 13900005 | I/O error |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900018 | Not a directory |
| 13900020 | Invalid argument |
| 13900023 | Text file busy |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |

