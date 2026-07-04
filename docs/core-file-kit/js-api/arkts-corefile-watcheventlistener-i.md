# WatchEventListener

(event: WatchEvent): void Provides APIs for observing events.

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@ohos.file.fs';
```

## constructor

```TypeScript
(event: WatchEvent): void
```

Specifies the callback function to be invoked.

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | WatchEvent | Yes | Event for the callback to invoke. |

