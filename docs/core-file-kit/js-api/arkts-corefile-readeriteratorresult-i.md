# ReaderIteratorResult

Represents the information obtained by the **ReaderIterator** object.

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@ohos.file.fs';
```

## done

```TypeScript
done: boolean
```

Whether the iteration is complete. The value **true** means the iteration is complete; the value **false** means the opposite.

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## value

```TypeScript
value: string
```

File text content read line by line.

**Type:** string

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

