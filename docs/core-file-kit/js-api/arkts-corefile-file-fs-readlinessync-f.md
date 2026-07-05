# readLinesSync

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@ohos.file.fs';
```

## readLinesSync

```TypeScript
declare function readLinesSync(filePath: string, options?: Options): ReaderIterator
```

Reads the text content of a file line by line. This API returns the result synchronously.

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | Application sandbox path of the file. |
| options | Options | No | Options for reading the text. The options are as follows:<br>- **encoding** (string):format of the data to be encoded.<br>It is valid only when the data is of the string type.<br>The default valueis **'utf-8'**, which is the only value supported. |

**Return value:**

| Type | Description |
| --- | --- |
| ReaderIterator | **ReaderIterator** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900012 | Permission denied |
| 13900015 | File exists |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900022 | Too many open files |
| 13900025 | No space left on device |
| 13900027 | Read-only file system |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |
| 13900044 | Network is unreachable<br>**Applicable version:** 12 |

