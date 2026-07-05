# FileSync

Provides APIs for the file manager application to perform device-cloud sync of the files stored in the Drive Kit. Before using the APIs of this class, you need to create a **FileSync** instance.

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

## Modules to Import

```TypeScript
import { cloudSync } from '@ohos.file.cloudSync';
```

## constructor

```TypeScript
constructor()
```

A constructor used to create a **FileSync** instance.

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Incorrect parameter types. |

**Example**

```TypeScript
let fileSync = new cloudSync.FileSync()

```

## getLastSyncTime

```TypeScript
getLastSyncTime(): Promise<number>
```

Obtains the last sync time. This API uses a promise to return the result.

**Since:** 12

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

## getLastSyncTime

```TypeScript
getLastSyncTime(callback: AsyncCallback<number>): void
```

Obtains the last sync time. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to obtain the last sync time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |
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

## off

```TypeScript
off(event: 'progress', callback?: Callback<SyncProgress>): void
```

Removes the specified callback from the device-cloud sync progress.

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'progress' | Yes | Event type. The value is **progress**, which indicates the sync progress event. |
| callback | Callback&lt;SyncProgress&gt; | No | Callback used to return the sync progress. The default value isnull. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;2.Incorrect parameter types. |
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

## on

```TypeScript
on(event: 'progress', callback: Callback<SyncProgress>): void
```

Registers a listener for the device-cloud sync progress.

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'progress' | Yes | Event type. The value is **progress**, which indicates the sync progress event. |
| callback | Callback&lt;SyncProgress&gt; | Yes | Callback used to return the sync progress. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error |

**Example**

```TypeScript
let fileSync = new cloudSync.FileSync();
let callback = (pg: cloudSync.SyncProgress) => {
  console.info("file sync state: " + pg.state + "error type: " + pg.error);
}

fileSync.on('progress', callback);

```

## start

```TypeScript
start(): Promise<void>
```

Starts device-cloud sync of a file. This API uses a promise to return the result.

**Since:** 12

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

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts device-cloud sync of a file. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to start device-cloud sync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;2.Incorrect parameter types. |
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

## stop

```TypeScript
stop(): Promise<void>
```

Stops device-cloud sync of a file. This API uses a promise to return the result. Calling **stop** will stop the sync process. To resume the sync, call [start](arkts-corefile-filesync-c.md#start-1).

**Since:** 12

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

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops device-cloud sync of a file. This API uses an asynchronous callback to return the result. Calling **stop** will stop the sync process. To resume the sync, call [start](arkts-corefile-filesync-c.md#start-1).

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to stop device-cloud sync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |
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

