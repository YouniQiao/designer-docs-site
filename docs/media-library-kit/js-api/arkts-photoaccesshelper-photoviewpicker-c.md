# PhotoViewPicker

Provides APIs for the user to select images and videos. Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## select

```TypeScript
select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>
```

Starts a **photoPicker** page for the user to select one or more images or videos. This API uses a promise to return the result. You can pass in **PhotoSelectOptions** to specify the type and maximum number of the files to select. A **PhotoSelectResult** object is returned. > **NOTE** > > **photoUris** in the PhotoSelectResult object returned by this API has permanent authorization and can be used > only by calling > [photoAccessHelper.getAssets](arkts-photoaccesshelper-photoaccesshelper-i.md#getAssets) > . For details, see > [Using a Media File URI](docroot://file-management/user-file-uri-intro.md#using-a-media-file-uri).

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | PhotoSelectOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoSelectResult> | Promise used to return information about the images or videos selected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 13900042 | Unknown error |
| 23800151 | Scene parameters validate failed, possible causes:  1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.  Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration;  2. An illegal enumeration value was passed to PhotoSelectOptions.assetCompatibleAbility. [since 12] |

## select

```TypeScript
select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void
```

Pull up the photo picker based on the selection mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | PhotoSelectOptions | Yes | represents the options provided in select mode. |
| callback | AsyncCallback&lt;PhotoSelectResult> | Yes | Returns the PhotoSelectResult by photo picker |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900042 | Unknown error |
| 23800151 | Scene parameters validate failed, possible causes:  1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.  Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration; |

## select

```TypeScript
select(callback: AsyncCallback<PhotoSelectResult>): void
```

Pull up the photo picker based on the selection mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;PhotoSelectResult> | Yes | Returns the PhotoSelectResult by photo picker |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 13900042 | Unknown error |

