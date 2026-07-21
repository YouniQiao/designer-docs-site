# DfsListeners

Provides APIs for observing events. listening for the distributed file system status.

**Since:** 12

<!--Device-unnamed-export interface DfsListeners--><!--Device-unnamed-export interface DfsListeners-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@kit.CoreFileKit';
```

<a id="onstatus"></a>
## onStatus

```TypeScript
onStatus(networkId: string, status: number): void
```

Called to return the specified status. Its parameters are passed in by [connectDfs](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioconnectdfs12).

**Since:** 12

<!--Device-DfsListeners-onStatus(networkId: string, status: number): void--><!--Device-DfsListeners-onStatus(networkId: string, status: number): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | Network ID of the device. |
| status | number | Yes | Status code of the distributed file system. The status code is the error code returned by **onStatus** invoked by **connectDfs**. If the device is abnormal when **connectDfs()** is called,**onStatus** will be called to return the error code:<br>-[13900046](docroot://reference/apis-core-file-kit/errorcode-filemanagement.md#13900046-connection-interrupted-by-software): The connection is interrupted by software. |

