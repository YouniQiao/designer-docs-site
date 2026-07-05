# ListFileOptions

可选项类型，支持ListFile接口使用。

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## filter

```TypeScript
filter?: Filter
```

文件过滤配置项。 可选，设置过滤条件。

**Type:** Filter

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## listNum

```TypeScript
listNum?: number
```

列出文件名数量。可选，当设置0时，列出所有文件，默认为0。

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## recursion

```TypeScript
recursion?: boolean
```

是否递归子目录下文件名。可选，默认为false。当recursion为false时，返回当前目录下满足过滤要求的文件名及目录名。当recursion为true时，返回此目录下所有满足过滤要求的文件的相对路径（以“/”开头）。

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

