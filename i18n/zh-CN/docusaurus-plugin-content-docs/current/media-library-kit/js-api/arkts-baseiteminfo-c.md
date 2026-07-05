# BaseItemInfo

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { MaxCountType,PreselectedInfo,BaseItemInfo,ItemInfo,AnimatorParams,SelectMode,PhotoBrowserUIElement,ItemType,PinchGridSwitchedCallback,SingleLineConfig,ClickResult,ClickType,UpdatablePickerConfigs,DataType,VideoPlayerState,ItemDisplayRatio,ScrollStopAtStartCallback,ScrollStopAtEndCallback,PickerOrientation,videoPlayStateChangedCallback,PhotoBrowserChangeStartCallback,MovingPhotoBadgeStateChangedCallback,ErrorCallback,PickerOptions,ItemsDeletedCallback,PhotoBrowserRange,SaveMode,MaxSelected,PickerController,PickerError,PhotoPickerComponent,ExceedMaxSelectedCallback,ReminderMode,ItemClickedNotifyCallback,PickerColorMode,BadgeConfig,BadgeType,PhotoBrowserInfo,CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## movingPhotoBadgeState

```TypeScript
movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType
```

MovingPhotoBadgeState. Badge state of moving photo.

**类型：** photoAccessHelper.MovingPhotoBadgeStateType

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## duration

```TypeScript
duration?: number
```

Duration. if the itemType is CAMERA, it will be null; if photos, return -1

**类型：** number

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## orientation

```TypeScript
orientation?: number
```

Orientation. Image/Video orientation information.

**类型：** number

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## size

```TypeScript
size?: number
```

Size. if the itemType is CAMERA, it will be null

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## dynamicRangeType

```TypeScript
dynamicRangeType?: photoAccessHelper.DynamicRangeType
```

DynamicRangeType. Dynamic range type of media files. For movingPhoto, this specifically refers to the dynamic range type of the cover image.

**类型：** photoAccessHelper.DynamicRangeType

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## width

```TypeScript
width?: number
```

Width. if the itemType is CAMERA, it will be null

**类型：** number

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## mimeType

```TypeScript
mimeType?: string
```

MimeType. if the itemType is CAMERA, it will be null

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uri

```TypeScript
uri?: string
```

Uri. if the itemType is CAMERA, it will be null

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## videoMode

```TypeScript
videoMode?: photoAccessHelper.VideoMode
```

VideoMode. Mode of video.

**类型：** photoAccessHelper.VideoMode

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoSubType

```TypeScript
photoSubType?: photoAccessHelper.PhotoSubtype
```

PhotoSubtype. Asset subtype, non-special type images default to DEFAULT(0).

**类型：** photoAccessHelper.PhotoSubtype

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## height

```TypeScript
height?: number
```

Height. if the itemType is CAMERA, it will be null

**类型：** number

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

