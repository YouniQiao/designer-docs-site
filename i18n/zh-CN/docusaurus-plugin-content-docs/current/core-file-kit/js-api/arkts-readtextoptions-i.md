# ReadTextOptions

可选项类型，支持readText接口使用，ReadTextOptions继承至[ReadOptions](arkts-readoptions-i.md#ReadOptions)。

**继承实现关系：** ReadTextOptions继承自：ReadOptions。

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.File.FileIO

## 导入模块

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## encoding

```TypeScript
encoding?: string
```

当数据是 string 类型时有效，表示数据的编码方式，默认 'utf-8'，仅支持 'utf-8'。

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

