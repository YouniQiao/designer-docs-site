# PhotoViewPicker

Provides APIs for the user to select images and videos. Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## select

```TypeScript
select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>
```

Starts a **photoPicker** page for the user to select one or more images or videos. This API uses a promise to return the result. You can pass in **PhotoSelectOptions** to specify the type and maximum number of the files to select. A **PhotoSelectResult** object is returned. > **NOTE** > > **photoUris** in the PhotoSelectResult object returned by this API has permanent authorization and can be used > only by calling > [photoAccessHelper.getAssets](arkts-medialibrary-photoaccesshelper-i.md#getassets-1) > . For details, see > [Using a Media File URI](../../../../file-management/user-file-uri-intro.md#using-a-media-file-uri).

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | PhotoSelectOptions | No | Options for selecting files. If this parameter is not specified, up to 50 images and videos are selected by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoSelectResult&gt; | Promise used to return information about the images or videos selected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900042 | Unknown error |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | Scene parameters validate failed, possible causes:<br>1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration;<br>2. An illegal enumeration value was passed to PhotoSelectOptions.assetCompatibleAbility.<br>**Applicable version:** 12 |

## select

```TypeScript
select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void
```

Pull up the photo picker based on the selection mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | PhotoSelectOptions | Yes | represents the options provided in select mode. |
| callback | AsyncCallback&lt;PhotoSelectResult&gt; | Yes | Returns the PhotoSelectResult by photo picker |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900042 | Unknown error |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | Scene parameters validate failed, possible causes:1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration; |

## select

```TypeScript
select(callback: AsyncCallback<PhotoSelectResult>): void
```

Pull up the photo picker based on the selection mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;PhotoSelectResult&gt; | Yes | Returns the PhotoSelectResult by photo picker |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| 13900042 | Unknown error |

