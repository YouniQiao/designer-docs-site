# WatchEventListener

(event: WatchEvent): void

Provides APIs for observing events.

**Since:** 10

<!--Device-unnamed-export interface WatchEventListener--><!--Device-unnamed-export interface WatchEventListener-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@kit.CoreFileKit';
```

## constructor

```TypeScript
(event: WatchEvent): void
```

Specifies the callback function to be invoked.

**Since:** 10

<!--Device-WatchEventListener-(event: WatchEvent): void--><!--Device-WatchEventListener-(event: WatchEvent): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [WatchEvent](arkts-corefile-file-fs-watchevent-i.md) | Yes | Event for the callback to invoke. |

