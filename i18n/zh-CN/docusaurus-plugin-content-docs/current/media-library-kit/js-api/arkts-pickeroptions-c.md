# PickerOptions

PickerOptions Object

**继承实现关系：** PickerOptions继承自：photoAccessHelper.BaseSelectOptions。

**起始版本：** 12

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

Support to set photo browser background color mode

**类型：** PickerColorMode

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## checkboxTextColor

```TypeScript
checkboxTextColor?: string
```

Support to set checkbox text color

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserMargin

```TypeScript
photoBrowserMargin?: Margin
```

Support set photoBrowserMargin

**类型：** Margin

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isSlidingSelectionSupported

```TypeScript
isSlidingSelectionSupported?: boolean
```

Support to set sliding selection

**类型：** boolean

**起始版本：** 13

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

Support to set max video select number

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridStartOffset

```TypeScript
gridStartOffset?: number
```

Support to set offset between first grid item and the top of grid

**类型：** number

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridMargin

```TypeScript
gridMargin?: Margin
```

Support set gridMargin

**类型：** Margin

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxSelectedReminderMode

```TypeScript
maxSelectedReminderMode?: ReminderMode
```

Support to set max select number remind mode.

**类型：** ReminderMode

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## checkBoxColor

```TypeScript
checkBoxColor?: string
```

Support set checkBox color

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## orientation

```TypeScript
orientation?: PickerOrientation
```

Support to set display orientation

**类型：** PickerOrientation

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## backgroundColor

```TypeScript
backgroundColor?: string
```

Support set backgroundColor

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isRepeatSelectSupported

```TypeScript
isRepeatSelectSupported?: boolean
```

Support repeat select

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxPhotoSelectNumber

```TypeScript
maxPhotoSelectNumber?: number
```

Support to set max photo select number

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridEndOffset

```TypeScript
gridEndOffset?: number
```

Support to set offset between last grid item and the bottom of grid

**类型：** number

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## badgeConfig

```TypeScript
badgeConfig?: BadgeConfig
```

Support to config special badge display. The picker component supports only one type of badge

**类型：** BadgeConfig

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserCheckboxPosition

```TypeScript
photoBrowserCheckboxPosition?: [number, number]
```

Support to set photo browser checkbox position

**类型：** [number, number]

**起始版本：** 13

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

## singleLineConfig

```TypeScript
singleLineConfig?: SingleLineConfig
```

Single-line display mode for the PhotoPickerComponent.

**类型：** SingleLineConfig

**起始版本：** 20

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

## selectMode

```TypeScript
selectMode?: SelectMode
```

Support to set select mode

**类型：** SelectMode

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## contextRecoveryInfo

```TypeScript
contextRecoveryInfo?: photoAccessHelper.ContextRecoveryInfo
```

Context recovery information for restoring the last selection session.

**类型：** photoAccessHelper.ContextRecoveryInfo

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## preselectedInfos

```TypeScript
preselectedInfos?: Array<PreselectedInfo>
```

Support automatically selecting the user-selected image/video on the PhotoPickerComponent at the specified picker index.

**类型：** Array<PreselectedInfo>

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## pickerIndex

```TypeScript
pickerIndex?: number
```

Support to set a serial number to distinguish different picker components. Default value is -1.

**类型：** number

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uiComponentColorMode

```TypeScript
uiComponentColorMode?: PickerColorMode
```

Support to set UIComponent color mode.

**类型：** PickerColorMode

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

