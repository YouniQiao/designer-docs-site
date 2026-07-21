# FileSync

Provides APIs for the file manager application to perform device-cloud sync of the files stored in the Drive Kit.Before using the APIs of this class, you need to create a **FileSync** instance.

**Since:** 12

<!--Device-cloudSync-class FileSync--><!--Device-cloudSync-class FileSync-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a **FileSync** instance.

**Since:** 12

<!--Device-FileSync-constructor()--><!--Device-FileSync-constructor()-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Incorrect parameter types. |

**Example**

```TypeScript
let fileSync = new cloudSync.FileSync()

```

<a id="getlastsynctime"></a>
## getLastSyncTime

```TypeScript
getLastSyncTime(): Promise<number>
```

Obtains the last sync time. This API uses a promise to return the result.

**Since:** 12

<!--Device-FileSync-getLastSyncTime(): Promise<long>--><!--Device-FileSync-getLastSyncTime(): Promise<long>-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the last sync time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.getLastSyncTime().then((timeStamp: number) => {
  let date = new Date(timeStamp);
  console.info("get last sync time successfully: "+ date);
}).catch((err: BusinessError) => {
  console.error("get last sync time failed with error message: " + err.message + ", error code: " + err.code);
});


```

<a id="getlastsynctime-1"></a>
## getLastSyncTime

```TypeScript
getLastSyncTime(callback: AsyncCallback<number>): void
```

Obtains the last sync time. This API uses an asynchronous callback to return the result.

**Since:** 12

<!--Device-FileSync-getLastSyncTime(callback: AsyncCallback<long>): void--><!--Device-FileSync-getLastSyncTime(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to obtain the last sync time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.getLastSyncTime((err: BusinessError, timeStamp: number) => {
  if (err) {
    console.error("get last sync time with error message: " + err.message + ", error code: " + err.code);
  } else {
    let date = new Date(timeStamp);
    console.info("get last sync time successfully: "+ date);
  }
});

```

<a id="off"></a>
## off

```TypeScript
off(event: 'progress', callback?: Callback<SyncProgress>): void
```

Removes the specified callback from the device-cloud sync progress.

**Since:** 12

<!--Device-FileSync-off(event: 'progress', callback?: Callback<SyncProgress>): void--><!--Device-FileSync-off(event: 'progress', callback?: Callback<SyncProgress>): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'progress' | Yes | Event type. The value is **progress**, which indicates the sync progress event. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SyncProgress&gt; | No | Callback used to return the sync progress. The default value is null. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| 13600001 | IPC error |

**Example**

```TypeScript
let fileSync = new cloudSync.FileSync();

let callback = (pg: cloudSync.SyncProgress) => {
  console.info("file sync state: " + pg.state + "error type: " + pg.error);
}

fileSync.on('progress', callback);

fileSync.off('progress', callback);

```

<a id="on"></a>
## on

```TypeScript
on(event: 'progress', callback: Callback<SyncProgress>): void
```

Registers a listener for the device-cloud sync progress.

**Since:** 12

<!--Device-FileSync-on(event: 'progress', callback: Callback<SyncProgress>): void--><!--Device-FileSync-on(event: 'progress', callback: Callback<SyncProgress>): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'progress' | Yes | Event type. The value is **progress**, which indicates the sync progress event. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SyncProgress&gt; | Yes | Callback used to return the sync progress. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error |

**Example**

```TypeScript
let fileSync = new cloudSync.FileSync();
let callback = (pg: cloudSync.SyncProgress) => {
  console.info("file sync state: " + pg.state + "error type: " + pg.error);
}

fileSync.on('progress', callback);

```

<a id="start"></a>
## start

```TypeScript
start(): Promise<void>
```

Starts device-cloud sync of a file. This API uses a promise to return the result.

**Since:** 12

<!--Device-FileSync-start(): Promise<void>--><!--Device-FileSync-start(): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error. |
| 22400001 | Cloud status not ready. |
| 22400002 | Network unavailable. |
| 22400003 | Low battery level. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

let callback = (pg: cloudSync.SyncProgress) => {
  console.info("file sync state: " + pg.state + "error type: " + pg.error);
}

fileSync.on('progress', callback);

fileSync.start().then(() => {
  console.info("start sync successfully");
}).catch((err: BusinessError) => {
  console.error("start sync failed with error message: " + err.message + ", error code: " + err.code);
});

```

<a id="start-1"></a>
## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts device-cloud sync of a file. This API uses an asynchronous callback to return the result.

**Since:** 12

<!--Device-FileSync-start(callback: AsyncCallback<void>): void--><!--Device-FileSync-start(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to start device-cloud sync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 22400001 | Cloud status not ready. |
| 22400002 | Network unavailable. |
| 22400003 | Low battery level. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.start((err: BusinessError) => {
  if (err) {
    console.error("start sync failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("start sync successfully");
  }
});

```

<a id="stop"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops device-cloud sync of a file. This API uses a promise to return the result.

Calling **stop** will stop the sync process. To resume the sync, call [start](arkts-corefile-cloudsync-filesync-c.md#start-1).

**Since:** 12

<!--Device-FileSync-stop(): Promise<void>--><!--Device-FileSync-stop(): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 13600001 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.stop().then(() => {
  console.info("stop sync successfully");
}).catch((err: BusinessError) => {
  console.error("stop sync failed with error message: " + err.message + ", error code: " + err.code);
});

```

<a id="stop-1"></a>
## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops device-cloud sync of a file. This API uses an asynchronous callback to return the result.

Calling **stop** will stop the sync process. To resume the sync, call [start](arkts-corefile-cloudsync-filesync-c.md#start-1).

**Since:** 12

<!--Device-FileSync-stop(callback: AsyncCallback<void>): void--><!--Device-FileSync-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to stop device-cloud sync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let fileSync = new cloudSync.FileSync();

fileSync.stop((err: BusinessError) => {
  if (err) {
    console.error("stop sync failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("stop sync successfully");
  }
});

```

