# GallerySync (System API)

Provides APIs to implement device-cloud sync of media assets in **Gallery**. Before using the APIs of **GallerySync**, you need to create a **GallerySync** instance.

**Since:** 10

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudSync } from '@ohos.file.cloudSync';
```

## constructor

```TypeScript
constructor()
```

A constructor used to create a **GallerySync** instance.

**Since:** 10

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Example**

```TypeScript
let gallerySync = new cloudSync.GallerySync()

```

## off

```TypeScript
off(evt: 'progress', callback: (pg: SyncProgress) => void): void
```

Removes the specified callback from the device-cloud sync progress.

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| evt | 'progress' | Yes | Event type. The value is **progress**, which indicates the sync progress event. |
| callback | (pg: SyncProgress) =&gt; void | Yes | Callback used to return the sync progress. The input parameter is[SyncProgress](arkts-corefile-syncprogress-i.md#syncprogress), and the return value is **void**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error |

**Example**

```TypeScript
let gallerySync = new cloudSync.GallerySync();

let callback = (pg: cloudSync.SyncProgress) => {
  console.info("gallery sync state: " + pg.state + "error type: " + pg.error);
}

gallerySync.on('progress', callback);

gallerySync.off('progress', callback);

```

## off

```TypeScript
off(evt: 'progress'): void
```

Removes all callbacks from the device-cloud sync progress.

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| evt | 'progress' | Yes | Event type. The value is **progress**, which indicates the sync progress event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error |

**Example**

```TypeScript
let gallerySync = new cloudSync.GallerySync();

gallerySync.on('progress', (pg: cloudSync.SyncProgress) => {
    console.info("syncState: " + pg.state);
});

gallerySync.off('progress');

```

## on

```TypeScript
on(evt: 'progress', callback: (pg: SyncProgress) => void): void
```

Registers a listener for the device-cloud sync progress.

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| evt | 'progress' | Yes | Event type. The value is **progress**, which indicates the sync progress event. |
| callback | (pg: SyncProgress) =&gt; void | Yes | Callback used to return the sync progress. The input parameter is[SyncProgress](arkts-corefile-syncprogress-i.md#syncprogress), and the return value is **void**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error |

**Example**

```TypeScript
let gallerySync = new cloudSync.GallerySync();

gallerySync.on('progress', (pg: cloudSync.SyncProgress) => {
  console.info("syncState: " + pg.state);
});

```

## start

```TypeScript
start(): Promise<void>
```

Starts device-cloud sync. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Incorrect parameter types. |
| 22400001 | Cloud status not ready. |
| 22400002 | Network unavailable. |
| 22400003 | Low battery level. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let gallerySync = new cloudSync.GallerySync();

gallerySync.on('progress', (pg: cloudSync.SyncProgress) => {
  console.info("syncState: " + pg.state);
});

gallerySync.start().then(() => {
  console.info("start sync successfully");
}).catch((err: BusinessError) => {
  console.error("start sync failed with error message: " + err.message + ", error code: " + err.code);
});

```

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts device-cloud sync. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to start device-cloud sync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |
| 22400001 | Cloud status not ready. |
| 22400002 | Network unavailable. |
| 22400003 | Low battery level. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let gallerySync = new cloudSync.GallerySync();

gallerySync.start((err: BusinessError) => {
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

Stops device-cloud sync. This API uses a promise to return the result. > **NOTE** > > Calling **stop** will stop the sync process. To resume the sync, call > [start](arkts-corefile-gallerysync-c-sys.md#start-1).

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let gallerySync = new cloudSync.GallerySync();

gallerySync.stop().then(() => {
  console.info("stop sync successfully");
}).catch((err: BusinessError) => {
  console.error("stop sync failed with error message: " + err.message + ", error code: " + err.code);
});

```

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops device-cloud sync. This API uses an asynchronous callback to return the result. > **NOTE** > > Calling **stop** will stop the sync process. To resume the sync, call > [start](arkts-corefile-gallerysync-c-sys.md#start-1).

**Since:** 10

**Required permissions:** ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to stop device-cloud sync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are leftunspecified;<br>2.Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let gallerySync = new cloudSync.GallerySync();

gallerySync.stop((err: BusinessError) => {
  if (err) {
    console.error("stop sync failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("stop sync successfully");
  }
});

```

