# moveDirSync

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@kit.CoreFileKit';
```

## moveDirSync

```TypeScript
declare function moveDirSync(src: string, dest: string, mode?: number): void
```

Moves the source directory to the destination directory. This API returns the result synchronously. > **NOTE** > > This API is not supported in a distributed directory.

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string | Yes | Application sandbox path of the source directory. |
| dest | string | Yes | Application sandbox path of the destination directory. |
| mode | number | No | Move mode. The default value is **0**.<br>- **0**: Throw an exception if a directoryconflict occurs.<br> An exception will be thrown if the destination directory contains a directory with the samename as the source directory.<br>- **1**: Throw an exception if a file conflict occurs.<br> An exception will bethrown if the destination directory contains a directory with the same name as the source directory, and a filewith the same name exists in the conflict directory. All the non-conflicting files in the source directory willbe moved to the destination directory, and the non-conflicting files in the destination directory will beretained. The data attribute in the error returned provides information about the conflicting files in the Array&lt;[ConflictFiles](arkts-corefile-conflictfiles-i.md)&gt; format.<br>- **2**: Forcibly overwrite the conflicting files in thedestination directory.<br> When the destination directory contains a directory with the same name as the sourcedirectory, the files with the same names in the destination directory are overwritten forcibly; the files withoutconflicts in the destination directory are retained.<br>- **3**: Forcibly overwrite the conflicting directory.<br> The source directory is moved to the destination directory, and the content of the moved directory is the sameas that of the source directory. If the destination directory contains a directory with the same name as thesource directory, all original files in the directory will be deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900014 | Device or resource busy |
| 13900015 | File exists |
| 13900016 | Cross-device link |
| 13900018 | Not a directory |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |
| 13900027 | Read-only file system |
| 13900028 | Too many links |
| 13900032 | Directory not empty |
| 13900033 | Too many symbolic links encountered |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

