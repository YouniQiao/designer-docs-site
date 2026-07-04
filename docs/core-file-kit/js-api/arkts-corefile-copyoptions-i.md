# CopyOptions

Defines the callback for listening for the copy progress.

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@ohos.file.fs';
```

## copySignal

```TypeScript
copySignal?: TaskSignal
```

Signal used to cancel a copy task.

**Type:** TaskSignal

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## progressListener

```TypeScript
progressListener?: ProgressListener
```

Listener used to observe the copy progress.

**Type:** ProgressListener

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

