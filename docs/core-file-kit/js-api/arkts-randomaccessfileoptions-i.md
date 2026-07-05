# RandomAccessFileOptions

可选项类型，支持 createRandomAccessFile 接口使用。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## start

```TypeScript
start?: number
```

表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。

**Type:** number

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## end

```TypeScript
end?: number
```

表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。

**Type:** number

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

