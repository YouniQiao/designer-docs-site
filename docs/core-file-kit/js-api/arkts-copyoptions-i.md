# CopyOptions

拷贝进度回调监听

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## progressListener

```TypeScript
progressListener?: ProgressListener
```

拷贝进度监听。

**Type:** ProgressListener

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## copySignal

```TypeScript
copySignal?: TaskSignal
```

取消拷贝信号。

**Type:** TaskSignal

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

