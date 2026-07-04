# ReadTextOptions

Defines the options used in **readText()**. It inherits from [ReadOptions](arkts-corefile-readoptions-i.md#readoptions).

**Inheritance/Implementation:** ReadTextOptions extends [ReadOptions](arkts-corefile-readoptions-i.md#readoptions)

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@ohos.file.fs';
```

## encoding

```TypeScript
encoding?: string
```

Format of the data to be encoded. This parameter is valid only when the data type is string. The default value is **'utf-8'**, which is the only value supported.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.FileManagement.File.FileIO

