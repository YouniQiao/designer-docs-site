# MovingPhotoViewOptions

Defines the moving photo view options.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { PixelMapFormat,MovingPhotoViewAttribute,MovingPhotoView,MovingPhotoViewController,DynamicRangeMode } from '@kit.MediaLibraryKit';
```

## playWithMask

```TypeScript
playWithMask?: boolean
```

the watermask of the cover photo whether to contain during movingphoto playback

**类型：** boolean

**起始版本：** 19

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## controller

```TypeScript
controller?: MovingPhotoViewController
```

controller of MovingPhotoView.

**类型：** MovingPhotoViewController

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## movingPhoto

```TypeScript
movingPhoto: photoAccessHelper.MovingPhoto
```

moving photo data.

**类型：** photoAccessHelper.MovingPhoto

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## movingPhotoFormat

```TypeScript
movingPhotoFormat?: PixelMapFormat
```

format of MovingPhotoView.

**类型：** PixelMapFormat

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## imageAIOptions

```TypeScript
imageAIOptions?: ImageAIOptions
```

image ai options of MovingPhotoView.

**类型：** ImageAIOptions

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## dynamicRangeMode

```TypeScript
dynamicRangeMode?: DynamicRangeMode
```

range mode of MovingPhotoView.

**类型：** DynamicRangeMode

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

