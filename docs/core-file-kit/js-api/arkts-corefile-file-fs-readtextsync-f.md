# readTextSync

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@ohos.file.fs';
```

## readTextSync

```TypeScript
declare function readTextSync(
  filePath: string,
  options?: ReadTextOptions
): string
```

Reads the text content of a file. This API returns the result synchronously.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | Application sandbox path of the file. |
| options | ReadTextOptions | No | The options are as follows:<br>- **offset** (number): position of the data toread in the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>-**length** (number): length of the data to read, in bytes. This parameter is optional. The default value is thefile length.<br>- **encoding** (string): format of the data to be encoded.<br>It is valid only when the data isof the string type. The default value is **'utf-8'**, which is the only value supported.<br>**Since:** 11 |

**Return value:**

| Type | Description |
| --- | --- |
| string | File content read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |
| 13900044 | Network is unreachable<br>**Applicable version:** 12 |

