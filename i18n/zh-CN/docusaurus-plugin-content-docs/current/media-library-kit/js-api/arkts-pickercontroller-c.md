# PickerController

The class for PickerController

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { MaxCountType,PreselectedInfo,BaseItemInfo,ItemInfo,AnimatorParams,SelectMode,PhotoBrowserUIElement,ItemType,PinchGridSwitchedCallback,SingleLineConfig,ClickResult,ClickType,UpdatablePickerConfigs,DataType,VideoPlayerState,ItemDisplayRatio,ScrollStopAtStartCallback,ScrollStopAtEndCallback,PickerOrientation,videoPlayStateChangedCallback,PhotoBrowserChangeStartCallback,MovingPhotoBadgeStateChangedCallback,ErrorCallback,PickerOptions,ItemsDeletedCallback,PhotoBrowserRange,SaveMode,MaxSelected,PickerController,PickerError,PhotoPickerComponent,ExceedMaxSelectedCallback,ReminderMode,ItemClickedNotifyCallback,PickerColorMode,BadgeConfig,BadgeType,PhotoBrowserInfo,CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## addData

```TypeScript
addData(dataType: DataType, data: Object): void
```

Add data to picker component

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType | DataType | 是 | data type |
| data | Object | 是 | data |

## completed

```TypeScript
completed(): Promise<CompletedResult>
```

Call this method to obtain the complete data after a selection operation has finished.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CompletedResult> | Promise |

## deleteData

```TypeScript
deleteData(dataType: DataType, data: Object): void
```

Delete data to picker component

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType | DataType | 是 | data type |
| data | Object | 是 | data |

## exitPhotoBrowser

```TypeScript
exitPhotoBrowser(): void
```

Exit photo browser.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## replacePhotoPickerPreview

```TypeScript
replacePhotoPickerPreview(originalUri: string, newUri: string, callback: AsyncCallback<void>): void
```

Display the photo after edit.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| originalUri | string | 是 | Original uri |
| newUri | string | 是 | New uri after replacement |
| callback | AsyncCallback&lt;void> | 是 | Returns void |

## saveTrustedPhotoAssets

```TypeScript
saveTrustedPhotoAssets(trustedUris: Array<string>, callback: AsyncCallback<Array<string>>,
    configs?: Array<photoAccessHelper.PhotoCreationConfig>, saveMode?: SaveMode): void
```

Save the photo assets of uris.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| trustedUris | Array&lt;string> | 是 | Uris need to be saved |
| callback | AsyncCallback&lt;Array&lt;string>> | 是 | Returns the uri list |
| configs | Array&lt;photoAccessHelper.PhotoCreationConfig> | 否 |  |
| saveMode | SaveMode | 否 |  |

## saveTrustedPhotoAssetsEx

```TypeScript
saveTrustedPhotoAssetsEx(trustedUris: Array<string>,settings?: Array<photoAccessHelper.CreationSetting>,
    saveMode?: SaveMode): Promise<Array<string>>
```

Save the photo assets of uris.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| trustedUris | Array&lt;string> | 是 | Uris need to be saved |
| settings | Array&lt;photoAccessHelper.CreationSetting> | 否 |  |
| saveMode | SaveMode | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | - Returns the media library file uri list to application  which has been authorized |

## setData

```TypeScript
setData(dataType: DataType, data: Object): void
```

Set data to picker component

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataType | DataType | 是 | data type |
| data | Object | 是 | data |

## setMaxSelected

```TypeScript
setMaxSelected(maxSelected: MaxSelected): void
```

Set max select count to picker component, include max_total_count, max_photo_count and max_video_count.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxSelected | MaxSelected | 是 | max select count data |

## setMovingPhotoState

```TypeScript
setMovingPhotoState(movingPhotoState: photoAccessHelper.MovingPhotoBadgeStateType): Promise<void>
```

Sets the moving photo effect in the photo browser view. This configuration only takes effect for moving photo when viewed in the photo browser. Note: Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported as values.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| movingPhotoState | photoAccessHelper.MovingPhotoBadgeStateType | 是 | State of moving photo. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 23800151 | Scene parameters validate failed, possible causes:  1. An invalid enumeration value was passed. Only MOVING_PHOTO_ENABLE and  MOVING_PHOTO_DISABLE are supported for configuration; |
| 23800202 | Invalid call context. Possible causes:  1. The API is called outside the photo browsing scenario.  2. The API is called when isMovingPhotoBadgeShown is already set to true. |

## setPhotoBrowserItem

```TypeScript
setPhotoBrowserItem(uri: string, photoBrowserRange?: PhotoBrowserRange): void
```

Set photo browser item to picker component.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | specify image uri for photo browsing |
| photoBrowserRange | PhotoBrowserRange | 否 | photo browser slide range |

## setPhotoBrowserUIElementVisibility

```TypeScript
setPhotoBrowserUIElementVisibility(elements: Array<PhotoBrowserUIElement>, isVisible: boolean): void
```

Sets whether other elements on the photo browser page are visible.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| elements | Array&lt;PhotoBrowserUIElement> | 是 | other elements on the photo browser page |
| isVisible | boolean | 是 | visible or not |

## updatePickerOptions

```TypeScript
updatePickerOptions(updateConfig: UpdatablePickerConfigs): Promise<void>
```

Update options of the PhotoPicker component.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| updateConfig | UpdatablePickerConfigs | 是 | Subset of PickerOptions |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise |

