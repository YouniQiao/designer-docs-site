# PhotoAsset

Defines the photo asset

**Inheritance/Implementation:** PhotoAsset extends [lang.ISendable](../../apis-arkts/arkts-apis/arkts-arkts-isendable-i.md)

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## getAnalysisData

```TypeScript
getAnalysisData(analysisType: photoAccessHelper.AnalysisType): Promise<string>
```

Get analysis data of the asset.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| analysisType | photoAccessHelper.AnalysisType | Yes | Analysis type |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns analysis info into a json string |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## requestSource

```TypeScript
requestSource(): Promise<number>
```

Opens the source file to obtain the file descriptor (FD). This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns opened source asset fd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [@ohos.file.sendablePhotoAccessHelper (Album Management Based on a Sendable Object)](js-apis-sendablePhotoAccessHelper.md).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('requestSourcePromiseDemo')
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOptions: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOptions);
    if (fetchResult === undefined) {
      console.error('requestSourcePromise fetchResult is undefined');
      return;
    }
    let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    let fd = await photoAsset.requestSource();
    console.info('Source fd is ' + fd);
  } catch (err) {
    console.error(`requestSourcePromiseDemo failed with error: ${err.code}, ${err.message}`);
  }
}

```

