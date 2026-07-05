# UpdatablePickerConfigs

**起始版本：** 22

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { MaxCountType,PreselectedInfo,BaseItemInfo,ItemInfo,AnimatorParams,SelectMode,PhotoBrowserUIElement,ItemType,PinchGridSwitchedCallback,SingleLineConfig,ClickResult,ClickType,UpdatablePickerConfigs,DataType,VideoPlayerState,ItemDisplayRatio,ScrollStopAtStartCallback,ScrollStopAtEndCallback,PickerOrientation,videoPlayStateChangedCallback,PhotoBrowserChangeStartCallback,MovingPhotoBadgeStateChangedCallback,ErrorCallback,PickerOptions,ItemsDeletedCallback,PhotoBrowserRange,SaveMode,MaxSelected,PickerController,PickerError,PhotoPickerComponent,ExceedMaxSelectedCallback,ReminderMode,ItemClickedNotifyCallback,PickerColorMode,BadgeConfig,BadgeType,PhotoBrowserInfo,CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## edgeEffect

```TypeScript
edgeEffect?: EdgeEffect
```

Grid edge slide effect.

**类型：** EdgeEffect

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserBackgroundColorMode

```TypeScript
photoBrowserBackgroundColorMode?: PickerColorMode
```

Support to set photo browser background color mode.

**类型：** PickerColorMode

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## backgroundColor

```TypeScript
backgroundColor?: string
```

The background color of the picker.

**类型：** string

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## checkboxTextColor

```TypeScript
checkboxTextColor?: string
```

The checkbox text color of the picker.

**类型：** string

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserMargin

```TypeScript
photoBrowserMargin?: Margin
```

Support set photoBrowserMargin

**类型：** Margin

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isRepeatSelectSupported

```TypeScript
isRepeatSelectSupported?: boolean
```

Support repeat select.

**类型：** boolean

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## autoPlayScenes

```TypeScript
autoPlayScenes?: Array<photoAccessHelper.AutoPlayScene>
```

Moving photo playback mode. Supports up to two modes.

**类型：** Array<photoAccessHelper.AutoPlayScene>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## preselectedUris

```TypeScript
preselectedUris?: Array<string>
```

The uri for the preselected files.

**类型：** Array<string>

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## mimeTypeFilter

```TypeScript
mimeTypeFilter?: photoAccessHelper.MimeTypeFilter
```

Media file filtering configuration.

**类型：** photoAccessHelper.MimeTypeFilter

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxPhotoSelectNumber

```TypeScript
maxPhotoSelectNumber?: number
```

Maximum number of photos for a single selection.

**类型：** number

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## singleSelectionMode

```TypeScript
singleSelectionMode?: photoAccessHelper.SingleSelectionMode
```

The mode of single selection.

**类型：** photoAccessHelper.SingleSelectionMode

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## backgroundOpacity

```TypeScript
backgroundOpacity?: number
```

Support setting background opacity.

**类型：** number

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxVideoSelectNumber

```TypeScript
maxVideoSelectNumber?: number
```

Maximum number of videos for a single selection.

**类型：** number

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## mimeType

```TypeScript
mimeType?: photoAccessHelper.PhotoViewMIMETypes
```

The type of the file in the recent photo window.

**类型：** photoAccessHelper.PhotoViewMIMETypes

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## appAlbumFilters

```TypeScript
appAlbumFilters?: Array<string>
```

Only display album contents corresponding to the specified applications. Use the bundle name to identify the application.

**类型：** Array<string>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isSlidingSupported

```TypeScript
isSlidingSupported?: boolean
```

Support setting grid sliding.

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridMargin

```TypeScript
gridMargin?: Margin
```

Support set gridMargin

**类型：** Margin

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## selectMode

```TypeScript
selectMode?: SelectMode
```

Select mode of the picker.

**类型：** SelectMode

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## checkBoxColor

```TypeScript
checkBoxColor?: string
```

The checkbox color of the picker.

**类型：** string

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxSelectNumber

```TypeScript
maxSelectNumber?: number
```

Maximum number of assets for a single selection.

**类型：** number

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uiComponentColorMode

```TypeScript
uiComponentColorMode?: PickerColorMode
```

Support to set UIComponent color mode.

**类型：** PickerColorMode

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

