# CloudMediaAssetManager (System API)

A class used for cloud media asset management. It is used to manage download tasks for media assets stored in the cloud and delete local data and files pertaining to these cloud-based assets.

**Since:** 14

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## cancelDownloadCloudMedia

```TypeScript
cancelDownloadCloudMedia(): Promise<void>
```

Cancels a task that downloads cloud media assets.

**Since:** 14

**Required permissions:** ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('cancelDownloadCloudMediaDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    await cloudMediaAssetManagerInstance.cancelDownloadCloudMedia();
  } catch (err) {
    console.error(`cancelDownloadCloudMediaDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## cancelDownloadSpecificCloudMedia

```TypeScript
cancelDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>
```

Cancel download cloud assets.

**Since:** 21

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assetUris | string[] \| null | Yes | Asset uris which will cancel, null or empty array means cancel all |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | The scenario parameter verification fails. Possible causes:The assetUris array size is bigger than 500. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('CancelDownloadSpecificCloudMediaDemo');
  try {
    let assetURIs: Array<string> = [
       'file://media/Photo/12/IMG_1755046662_091/IMG_20250801_175331.jpg'];
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    await cloudMediaAssetManagerInstance.cancelDownloadSpecificCloudMedia(assetURIs);
  } catch (err) {
    console.error(`failed with error: ${err.code}, ${err.message}`);
  }
}

```

## getCloudMediaAssetManagerInstance

```TypeScript
static getCloudMediaAssetManagerInstance(context: Context): CloudMediaAssetManager
```

Obtains a CloudMediaAssetManager instance.

**Since:** 14

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Obtains a CloudMediaAssetManager instance. |

**Return value:**

| Type | Description |
| --- | --- |
| CloudMediaAssetManager | Returns cloud media asset manager instance |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.@static |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('getCloudMediaAssetManagerInstanceDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    await cloudMediaAssetManagerInstance.pauseDownloadCloudMedia();
  } catch (err) {
    console.error(`getCloudMediaAssetManagerInstanceDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## getCloudMediaAssetStatus

```TypeScript
getCloudMediaAssetStatus(): Promise<CloudMediaAssetStatus>
```

Obtains the status of a task that downloads cloud media assets.

**Since:** 14

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CloudMediaAssetStatus&gt; | Returns cloud media asset status |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('getCloudMediaAssetStatusDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    const cloudMediaAssetStatus: photoAccessHelper.CloudMediaAssetStatus = await cloudMediaAssetManagerInstance.getCloudMediaAssetStatus();
    let taskStatus = cloudMediaAssetStatus.taskStatus;
    let taskInfo = cloudMediaAssetStatus.taskInfo;
    let errorCode = cloudMediaAssetStatus.errorCode;
    let message = `taskStatus: ${taskStatus}, taskInfo: ${taskInfo}, errorCode: ${errorCode}`;
    console.info(message);
  } catch (err) {
    console.error(`getCloudMediaAssetStatusDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## offDownloadProgressChange

```TypeScript
offDownloadProgressChange(callback?: Callback<CloudAssetDownloadProgressInfo>): void
```

Unregister callback of download cloud assets task.

**Since:** 21

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CloudAssetDownloadProgressInfo&gt; | No | event callback |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('OffDownloadProgressChangeDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    cloudMediaAssetManagerInstance.offDownloadProgressChange();
  } catch (err) {
    console.error(`failed with error: ${err.code}, ${err.message}`);
  }
}

```

## onDownloadProgressChange

```TypeScript
onDownloadProgressChange(callback: Callback<CloudAssetDownloadProgressInfo>): void
```

Register callback of download cloud assets task.

**Since:** 21

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CloudAssetDownloadProgressInfo&gt; | Yes | event callback |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
let onCallback = (changeData: photoAccessHelper.CloudAssetDownloadProgressInfo) => {
  console.info('batchdownload downloadProgressChange onCallback success, changData: ' + JSON.stringify(changeData));
}
async function example(context: Context) {
  console.info('OnDownloadProgressChangeDemo');
  try {
      let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
        = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
      // Register onCallback.
      cloudMediaAssetManagerInstance.onDownloadProgressChange(onCallback);
  } catch (err) {
    console.error(`failed with error: ${err.code}, ${err.message}`);
  }
}

```

## pauseDownloadCloudMedia

```TypeScript
pauseDownloadCloudMedia(): Promise<void>
```

Suspends a task that downloads cloud media assets.

**Since:** 14

**Required permissions:** ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('pauseDownloadCloudMediaDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    await cloudMediaAssetManagerInstance.pauseDownloadCloudMedia();
  } catch (err) {
    console.error(`pauseDownloadCloudMediaDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## pauseDownloadSpecificCloudMedia

```TypeScript
pauseDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>
```

Pause download cloud assets.

**Since:** 21

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assetUris | string[] \| null | Yes | Asset uris which will pause, null or empty array means pause all |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | The scenario parameter verification fails. Possible causes:The assetUris array size is bigger than 500. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('PauseDownloadSpecificCloudMediaDemo');
  try {
    let assetURIs: Array<string> = [
       'file://media/Photo/12/IMG_1755046662_091/IMG_20250801_175331.jpg'];
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    await cloudMediaAssetManagerInstance.pauseDownloadSpecificCloudMedia(assetURIs);
  } catch (err) {
    console.error(`failed with error: ${err.code}, ${err.message}`);
  }
}

```

## queryDownloadSpecificCloudMediaDetails

```TypeScript
queryDownloadSpecificCloudMediaDetails(predicates: dataSharePredicates.DataSharePredicates): Promise<CloudAssetDownloadStatus>
```

Query download cloud assets task infomation.

**Since:** 21

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | dataSharePredicates.DataSharePredicates | Yes | Filter parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CloudAssetDownloadStatus&gt; | Returns download cloud assets task infomation. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

async function example(context: Context) {
  console.info('QueryDownloadSpecificCloudMediaDetailsDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.orderByAsc("file_id");
    let taskListStatus : photoAccessHelper.CloudAssetDownloadStatus =
       await cloudMediaAssetManagerInstance.queryDownloadSpecificCloudMediaDetails(predicates);
  } catch (err) {
    console.error(`failed with error: ${err.code}, ${err.message}`);
  }
}

```

## queryDownloadSpecificCloudMediaTaskCount

```TypeScript
queryDownloadSpecificCloudMediaTaskCount(predicates: dataSharePredicates.DataSharePredicates): Promise<number>
```

Query download cloud assets task count.

**Since:** 21

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | dataSharePredicates.DataSharePredicates | Yes | Filter parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns download cloud assets task count. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData'

async function example(context: Context) {
  console.info('QueryDownloadSpecificCloudMediaTaskCountDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    predicates.orderByAsc("file_id");
    let count : number =
       await cloudMediaAssetManagerInstance.queryDownloadSpecificCloudMediaTaskCount(predicates);
  } catch (err) {
    console.error(`failed with error: ${err.code}, ${err.message}`);
  }
}

```

## resumeDownloadSpecificCloudMedia

```TypeScript
resumeDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>
```

Resume download cloud assets.

**Since:** 21

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assetUris | string[] \| null | Yes | Asset uris which will resume, null or empty array means resume all |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | The scenario parameter verification fails. Possible causes:The assetUris array size is bigger than 500. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('ResumeDownloadSpecificCloudMediaDemo');
  try {
    let assetURIs: Array<string> = [
       'file://media/Photo/12/IMG_1755046662_091/IMG_20250801_175331.jpg'];
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    await cloudMediaAssetManagerInstance.resumeDownloadSpecificCloudMedia(assetURIs);
  } catch (err) {
    console.error(`failed with error: ${err.code}, ${err.message}`);
  }
}

```

## retainCloudMediaAsset

```TypeScript
retainCloudMediaAsset(retainType: CloudMediaRetainType): Promise<void>
```

Deletes local metadata and files of cloud media assets.

**Since:** 14

**Required permissions:** ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| retainType | CloudMediaRetainType | Yes | Mode for deleting cloud media assets. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('retainCloudMediaAssetDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    await cloudMediaAssetManagerInstance.retainCloudMediaAsset(photoAccessHelper.CloudMediaRetainType.RETAIN_FORCE);
  } catch (err) {
    console.error(`retainCloudMediaAssetDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## startDownloadCloudMedia

```TypeScript
startDownloadCloudMedia(downloadType: CloudMediaDownloadType): Promise<void>
```

Starts or resumes a task to download cloud media assets.

**Since:** 14

**Required permissions:** ohos.permission.CLOUDFILE_SYNC_MANAGER

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| downloadType | CloudMediaDownloadType | Yes | Type of the download task. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('startDownloadCloudMediaDemo');
  try {
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    await cloudMediaAssetManagerInstance.startDownloadCloudMedia(photoAccessHelper.CloudMediaDownloadType.DOWNLOAD_FORCE);
  } catch (err) {
    console.error(`startDownloadCloudMediaDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

## startDownloadSpecificCloudMedia

```TypeScript
startDownloadSpecificCloudMedia(assetUris: string[]): Promise<Map<string, CloudAssetDownloadCode>>
```

Starts a batch download for the specified cloud media assets. This API uses a promise to return the result.

**Since:** 21

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assetUris | string[] | Yes | Array of URIs pointing to the original-quality images and videos to bedownloaded. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;string, CloudAssetDownloadCode&gt;&gt; | Promise used to return a map, where each key is a URIand its value indicates the status of that individual download item. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | The scenario parameter verification fails. Possible causes:<br>1. The assetUris array is empty;<br>2. The assetUris array size is bigger than 500. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes:<br>1. Database corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

**Example**

```TypeScript
async function example(context: Context) {
  console.info('StartDownloadSpecificCloudMediaDemo');
  try {
    let assetURIs: Array<string> = [
       'file://media/Photo/12/IMG_1755046662_091/IMG_20250801_175331.jpg'];
    let cloudMediaAssetManagerInstance: photoAccessHelper.CloudMediaAssetManager
      = photoAccessHelper.CloudMediaAssetManager.getCloudMediaAssetManagerInstance(context);
    let taskRespMap : Map<string, photoAccessHelper.CloudAssetDownloadCode> =
      await cloudMediaAssetManagerInstance.startDownloadSpecificCloudMedia(assetURIs);
  } catch (err) {
    console.error(`failed with error: ${err.code}, ${err.message}`);
  }
}

```

