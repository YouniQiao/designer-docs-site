# utimes

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@kit.CoreFileKit';
```

<a id="utimes"></a>
## utimes

```TypeScript
declare function utimes(path: string, mtime: number): void
```

Changes the time when the file was last modified.

**Since:** 11

<!--Device-unnamed-declare function utimes(path: string, mtime: number): void--><!--Device-unnamed-declare function utimes(path: string, mtime: number): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| mtime | number | Yes | New timestamp. The value is the number of milliseconds elapsed since the Epoch time (00:00:00 UTC on January 1, 1970). Only the time when the file was last modified can be changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 13900027 | Read-only file system |
| 13900042 | Unknown error |

