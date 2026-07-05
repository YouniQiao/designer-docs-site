# FileFilter

文件名过滤器，支持listFileExt接口使用。

**Since:** 26.0.0

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## filter

```TypeScript
filter(name: string): boolean
```

过滤函数，判断指定的文件名是否应该包含在文件列表中。 注意：此函数被频繁调用。尽量避免文件I/O、网络请求等耗时操作。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 需要过滤的文件名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果应该包含文件，则返回true，否则返回false。 |

