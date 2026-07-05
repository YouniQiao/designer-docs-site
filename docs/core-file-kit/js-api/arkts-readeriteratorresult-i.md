# ReaderIteratorResult

文件读取迭代器返回结果，支持ReaderIterator接口使用。

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## value

```TypeScript
value: string
```

逐行读取的文件文本内容。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## done

```TypeScript
done: boolean
```

迭代器是否已完成迭代。true：已完成迭代；false：未完成迭代。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

