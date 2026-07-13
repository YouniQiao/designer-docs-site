# connectDfs

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@kit.CoreFileKit';
```

## connectDfs

```TypeScript
declare function connectDfs(networkId: string, listeners: DfsListeners): Promise<void>
```

Triggers connection. If the peer device is abnormal, [onStatus](arkts-corefile-dfslisteners-i.md#onstatus-1) in **DfsListeners** will
be called to notify the application.

**Since:** 12

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | Network ID of the device. The device network ID can be obtained from[DeviceBasicInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicebasicinfo-i.md) using therelated [distributedDeviceManager](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager.md) API. |
| listeners | DfsListeners | Yes | Listeners for distributed file system status. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| 13900045 | Connection failed. |
| 13900046 | Software caused connection abort. |

