# listFile

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@ohos.file.fs';
```

## listFile

```TypeScript
declare function listFile(
  path: string,
  options?: ListFileOptions
): Promise<string[]>
```

Lists the names of all files and directories in the current path. Filtering is supported. This API uses a promise to return the result. You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The relative path starts with a slash (/).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory. |
| options | ListFileOptions | No | Options for filtering files. The files are not filtered by default.<br>**Since:** 11 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]&gt; | Promise used to return the file name array, which is encoded in UTF-8 format bydefault. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900018 | Not a directory |
| 13900042 | Unknown error |


## listFile

```TypeScript
declare function listFile(path: string, callback: AsyncCallback<string[]>): void
```

Lists the names of all files and directories in the current path. Filtering is supported. This API uses an asynchronous callback to return the result. You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The relative path starts with a slash (/).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory. |
| callback | AsyncCallback&lt;string[]&gt; | Yes | Callback used to return the file names listed. The files are encoded inUTF-8 by default. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900018 | Not a directory |
| 13900042 | Unknown error |


## listFile

```TypeScript
declare function listFile(
  path: string,
  options: ListFileOptions,
  callback: AsyncCallback<string[]>
): void
```

Lists the names of all files and directories in the current path. Filtering is supported. This API uses an asynchronous callback to return the result. You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The relative path starts with a slash (/).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory. |
| options | ListFileOptions | Yes | Options for filtering files. The files are not filtered by default.<br>**Since:** 11 |
| callback | AsyncCallback&lt;string[]&gt; | Yes | Callback used to return the file names listed. The files are encoded inUTF-8 by default. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900018 | Not a directory |
| 13900042 | Unknown error |

