# CopyOptions

拷贝进度回调监听

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.File.FileIO

## 导入模块

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## progressListener

```TypeScript
progressListener?: ProgressListener
```

拷贝进度监听。

**类型：** ProgressListener

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.File.FileIO

## copySignal

```TypeScript
copySignal?: TaskSignal
```

取消拷贝信号。

**类型：** TaskSignal

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.File.FileIO

