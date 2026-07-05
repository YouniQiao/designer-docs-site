# Progress

拷贝进度回调数据

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## totalSize

```TypeScript
readonly totalSize: number
```

待拷贝的数据总大小，单位为Byte。

**Type:** number

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## processedSize

```TypeScript
readonly processedSize: number
```

已拷贝的数据大小，单位为Byte。

**Type:** number

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

