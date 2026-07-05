# Filter

文件过滤配置项，支持listFile接口使用。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## excludeMedia

```TypeScript
excludeMedia?: boolean
```

是否排除Media中已有的文件。true：排除Media中已有的文件；false：不排除Media中已有的文件。

**Type:** boolean

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## fileSizeOver

```TypeScript
fileSizeOver?: number
```

文件大小匹配，大于指定大小的文件，单位为Byte。

**Type:** number

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## displayName

```TypeScript
displayName?: Array<string>
```

文件名模糊匹配，各个关键词OR关系。当前仅支持通配符*。

**Type:** Array<string>

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## mimeType

```TypeScript
mimeType?: Array<string>
```

mime类型完全匹配，各个关键词OR关系。预留字段，暂不支持使用。

**Type:** Array<string>

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## lastModifiedAfter

```TypeScript
lastModifiedAfter?: number
```

文件最近修改时间匹配，在指定时间点及之后的文件。

**Type:** number

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## suffix

```TypeScript
suffix?: Array<string>
```

文件后缀名完全匹配，各个关键词OR关系。

**Type:** Array<string>

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

