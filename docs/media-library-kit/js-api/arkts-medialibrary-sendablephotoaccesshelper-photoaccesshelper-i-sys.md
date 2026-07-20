# PhotoAccessHelper

Helper functions to access photos and albums.

**Inheritance/Implementation:** PhotoAccessHelper extends [lang.ISendable](../../apis-arkts/arkts-apis/arkts-arkts-lang-isendable-i.md)

**Since:** 12

<!--Device-sendablePhotoAccessHelper-interface PhotoAccessHelper extends lang.ISendable--><!--Device-sendablePhotoAccessHelper-interface PhotoAccessHelper extends lang.ISendable-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## createAsset

```TypeScript
createAsset(displayName: string): Promise<PhotoAsset>
```

Creates an asset with the specified file name. This API uses a promise to return the result.

The file name must meet the following requirements:

- A valid file name must include a base name and a supported image or video extension.  
- The total length of the file name must be between 1 and 255 characters.  
- The base name must not contain any invalid characters.

Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > |

For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]

**Since:** 12

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

<!--Device-PhotoAccessHelper-createAsset(displayName: string): Promise<PhotoAsset>--><!--Device-PhotoAccessHelper-createAsset(displayName: string): Promise<PhotoAsset>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name of the asset to create. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PhotoAsset> | Promise used to return the created asset. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900020 | Invalid argument. |
| 14000001 | Invalid display name. |
| 14000011 | Internal system error. |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [@ohos.file.sendablePhotoAccessHelper (Album Management Based on a Sendable Object)](js-apis-sendablePhotoAccessHelper.md).

```TypeScript
async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetDemo');
  try {
    let testFileName: string = 'testFile' + Date.now() + '.jpg';
    let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await phAccessHelper.createAsset(testFileName);
    console.info('createAsset file displayName' + photoAsset.displayName);
    console.info('createAsset successfully');
  } catch (err) {
    console.error(`createAsset failed, error: ${err.code}, ${err.message}`);
  }
}

```

## createAsset

```TypeScript
createAsset(displayName: string, options: photoAccessHelper.PhotoCreateOptions): Promise<PhotoAsset>
```

Creates an asset with the specified file name and options. This API uses a promise to return the result.

The file name must meet the following requirements:

- A valid file name must include a base name and a supported image or video extension.  
- The total length of the file name must be between 1 and 255 characters.  
- The base name must not contain any invalid characters.

Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > |

For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]

**Since:** 12

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

<!--Device-PhotoAccessHelper-createAsset(displayName: string, options: photoAccessHelper.PhotoCreateOptions): Promise<PhotoAsset>--><!--Device-PhotoAccessHelper-createAsset(displayName: string, options: photoAccessHelper.PhotoCreateOptions): Promise<PhotoAsset>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayName | string | Yes | File name of the asset to create. |
| options | photoAccessHelper.PhotoCreateOptions | Yes | Options for creating the asset. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PhotoAsset> | Promise used to return the created asset. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900020 | Invalid argument. |
| 14000001 | Invalid display name. |
| 14000011 | Internal system error. |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [@ohos.file.sendablePhotoAccessHelper (Album Management Based on a Sendable Object)](js-apis-sendablePhotoAccessHelper.md).

```TypeScript
async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('createAssetDemo');
  try {
    let testFileName:string = 'testFile' + Date.now() + '.jpg';
    let createOption: photoAccessHelper.PhotoCreateOptions = {
      subtype: photoAccessHelper.PhotoSubtype.DEFAULT
    }
    let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await phAccessHelper.createAsset(testFileName, createOption);
    console.info('createAsset file displayName' + photoAsset.displayName);
    console.info('createAsset successfully');
  } catch (err) {
    console.error(`createAsset failed, error: ${err.code}, ${err.message}`);
  }
}

```

## getHiddenAlbums

```TypeScript
getHiddenAlbums(
      mode: photoAccessHelper.HiddenPhotosDisplayMode,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>
```

Obtains hidden albums based on the specified display mode and retrieval options. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

<!--Device-PhotoAccessHelper-getHiddenAlbums(
      mode: photoAccessHelper.HiddenPhotosDisplayMode,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>--><!--Device-PhotoAccessHelper-getHiddenAlbums(
      mode: photoAccessHelper.HiddenPhotosDisplayMode,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | photoAccessHelper.HiddenPhotosDisplayMode | Yes | Display mode of hidden albums. |
| options | photoAccessHelper.FetchOptions | No | Options for retrieving the albums. If this parameter is not specified, the albums are retrieved based on the display mode. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<FetchResult<Album>> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed, usually the result returned by VerifyAccessToken. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | Internal system error |

## getPhotoAssets

```TypeScript
getPhotoAssets(assetsData: photoAccessHelper.ValuesBucket[]): Promise<PhotoAsset[]>
```

Converts the **ValuesBucket** record to a **PhotoAsset** object.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoAccessHelper-getPhotoAssets(assetsData: photoAccessHelper.ValuesBucket[]): Promise<PhotoAsset[]>--><!--Device-PhotoAccessHelper-getPhotoAssets(assetsData: photoAccessHelper.ValuesBucket[]): Promise<PhotoAsset[]>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assetsData | photoAccessHelper.ValuesBucket[] | Yes | Array of asset records.<br>Each element in the array contains the column name and value of the asset.<br>The array can contain a maximum of 500 elements.<br>Each element in the array must contain the following asset column information: **file_id**, **data**,**display_name**, **media_type**, and **subtype**. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PhotoAsset[]> | Promise used to return the PhotoAsset object array (which may be empty). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application. |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | The scenario parameter verification fails. Possible causes:<br>1. Invalid value type in ValuesBucket;<br>2. Missing required column in ValuesBucket;<br>3. Array size exceeds 500. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.<br>Possible causes:<br>1. Database corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [@ohos.file.sendablePhotoAccessHelper (Album Management Based on a Sendable Object)](js-apis-sendablePhotoAccessHelper.md).

```TypeScript
async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper, context: Context) {
  console.info('getPhotoAssets demo');
  let valuesArr: photoAccessHelper.ValuesBucket[] = [];
  let resultSet: photoAccessHelper.ResultSet | undefined = undefined;
  let photoAssetArr: sendablePhotoAccessHelper.PhotoAsset[] = [];
  let QUERY_SQL = 'SELECT file_id,data,display_name,media_type,subtype from Photos limit 100';
  try {
    resultSet = await photoAccessHelper.getPhotoAccessHelper(context).query(QUERY_SQL);
    let index: number = 0;
    while(resultSet && index < resultSet.rowCount){
      resultSet.goToRow(index);
      valuesArr.push(resultSet.getRow());
      index++;
    }
    photoAssetArr = await phAccessHelper.getPhotoAssets(valuesArr);
    console.info('getPhotoAssets successfully');
  } catch (err) {
    console.error(`valuesArr failed: ${err.code}, ${err.message}`);
  }
}

```

## getSharedPhotoAssets

```TypeScript
getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>
```

Fetch shared photo assets.

**Since:** 14

**Required permissions:** ohos.permission.ACCESS_MEDIALIB_THUMB_DB

<!--Device-PhotoAccessHelper-getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>--><!--Device-PhotoAccessHelper-getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | photoAccessHelper.FetchOptions | Yes | Fetch options. |

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<SharedPhotoAsset> | Returns the shared photo assets |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | Internal system error |

