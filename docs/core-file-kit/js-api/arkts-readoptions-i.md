# ReadOptions

可选项类型，支持read接口使用。

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## offset

```TypeScript
offset?: number
```

期望读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始读。

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## length

```TypeScript
length?: number
```

期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

