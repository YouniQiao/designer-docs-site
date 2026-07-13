# PickerController

The class for PickerController

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { MaxCountType, PreselectedInfo, BaseItemInfo, ItemInfo, AnimatorParams, SelectMode, PhotoBrowserUIElement, ItemType, PinchGridSwitchedCallback, SingleLineConfig, ClickResult, ClickType, UpdatablePickerConfigs, DataType, VideoPlayerState, ItemDisplayRatio, ScrollStopAtStartCallback, ScrollStopAtEndCallback, PickerOrientation, videoPlayStateChangedCallback, PhotoBrowserChangeStartCallback, MovingPhotoBadgeStateChangedCallback, ErrorCallback, PickerOptions, ItemsDeletedCallback, PhotoBrowserRange, SaveMode, MaxSelected, PickerController, PickerError, PhotoPickerComponent, ExceedMaxSelectedCallback, ReminderMode, ItemClickedNotifyCallback, PickerColorMode, BadgeConfig, BadgeType, PhotoBrowserInfo, CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## addData

```TypeScript
addData(dataType: DataType, data: Object): void
```

Add data to picker component

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataType | DataType | Yes | data type |
| data | Object | Yes | data |

## completed

```TypeScript
completed(): Promise<CompletedResult>
```

Call this method to obtain the complete data after a selection operation has finished.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CompletedResult&gt; | Promise&lt;CompletedResult&gt; |

## deleteData

```TypeScript
deleteData(dataType: DataType, data: Object): void
```

Delete data to picker component

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataType | DataType | Yes | data type |
| data | Object | Yes | data |

## exitPhotoBrowser

```TypeScript
exitPhotoBrowser(): void
```

Exit photo browser.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## replacePhotoPickerPreview

```TypeScript
replacePhotoPickerPreview(originalUri: string, newUri: string, callback: AsyncCallback<void>): void
```

Display the photo after edit.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| originalUri | string | Yes | Original uri |
| newUri | string | Yes | New uri after replacement |
| callback | AsyncCallback&lt;void&gt; | Yes | Returns void |

## saveTrustedPhotoAssets

```TypeScript
saveTrustedPhotoAssets(trustedUris: Array<string>, callback: AsyncCallback<Array<string>>,
    configs?: Array<photoAccessHelper.PhotoCreationConfig>, saveMode?: SaveMode): void
```

Save the photo assets of uris.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| trustedUris | Array&lt;string&gt; | Yes | Uris need to be saved |
| callback | AsyncCallback&lt;Array&lt;string&gt;&gt; | Yes | Returns the uri list |
| configs | Array&lt;photoAccessHelper.PhotoCreationConfig&gt; | No | Photo asset creation configs |
| saveMode | SaveMode | No | Mode of save |

## saveTrustedPhotoAssetsEx

```TypeScript
saveTrustedPhotoAssetsEx(trustedUris: Array<string>,settings?: Array<photoAccessHelper.CreationSetting>,
    saveMode?: SaveMode): Promise<Array<string>>
```

Save the photo assets of uris.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| trustedUris | Array&lt;string&gt; | Yes | Uris need to be saved |
| settings | Array&lt;photoAccessHelper.CreationSetting&gt; | No | Photo asset creation settings |
| saveMode | SaveMode | No | Mode of save |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | - Returns the media library file uri list to applicationwhich has been authorized |

## setData

```TypeScript
setData(dataType: DataType, data: Object): void
```

Set data to picker component

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataType | DataType | Yes | data type |
| data | Object | Yes | data |

## setMaxSelected

```TypeScript
setMaxSelected(maxSelected: MaxSelected): void
```

Set max select count to picker component, include max_total_count, max_photo_count and max_video_count.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxSelected | MaxSelected | Yes | max select count data |

## setMovingPhotoState

```TypeScript
setMovingPhotoState(movingPhotoState: photoAccessHelper.MovingPhotoBadgeStateType): Promise<void>
```

Sets the moving photo effect in the photo browser view.
This configuration only takes effect for moving photo when viewed in the photo browser.
Note: Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported as values.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| movingPhotoState | photoAccessHelper.MovingPhotoBadgeStateType | Yes | State of moving photo. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise&lt;void&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | Scene parameters validate failed, possible causes:1. An invalid enumeration value was passed. Only MOVING_PHOTO_ENABLE andMOVING_PHOTO_DISABLE are supported for configuration; |
| [23800202](../errorcode-medialibrary.md#23800202-invalid-scenario-call) | Invalid call context. Possible causes:1. The API is called outside the photo browsing scenario.2. The API is called when isMovingPhotoBadgeShown is already set to true. |

## setPhotoBrowserItem

```TypeScript
setPhotoBrowserItem(uri: string, photoBrowserRange?: PhotoBrowserRange): void
```

Set photo browser item to picker component.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | specify image uri for photo browsing |
| photoBrowserRange | PhotoBrowserRange | No | photo browser slide range |

## setPhotoBrowserUIElementVisibility

```TypeScript
setPhotoBrowserUIElementVisibility(elements: Array<PhotoBrowserUIElement>, isVisible: boolean): void
```

Sets whether other elements on the photo browser page are visible.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elements | Array&lt;PhotoBrowserUIElement&gt; | Yes | other elements on the photo browser page |
| isVisible | boolean | Yes | visible or not |

## updatePickerOptions

```TypeScript
updatePickerOptions(updateConfig: UpdatablePickerConfigs): Promise<void>
```

Update options of the PhotoPicker component.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| updateConfig | UpdatablePickerConfigs | Yes | Subset of PickerOptions |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise&lt;void&gt; |

