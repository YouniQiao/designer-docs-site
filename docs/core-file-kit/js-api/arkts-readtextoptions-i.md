# ReadTextOptions

可选项类型，支持readText接口使用，ReadTextOptions继承至[ReadOptions](arkts-readoptions-i.md#ReadOptions)。

**Inheritance:** ReadTextOptionsextends: ReadOptions.

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## encoding

```TypeScript
encoding?: string
```

当数据是 string 类型时有效，表示数据的编码方式，默认 'utf-8'，仅支持 'utf-8'。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

