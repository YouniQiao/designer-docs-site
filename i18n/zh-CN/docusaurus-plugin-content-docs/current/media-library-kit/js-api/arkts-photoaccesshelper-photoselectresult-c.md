# PhotoSelectResult

Defines information about the images or videos selected.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## isOriginalPhoto

```TypeScript
isOriginalPhoto: boolean
```

Whether the selected media asset is the original image. The value true means that the selected media asset is the original image, and false means the opposite. The default value is false.

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## movingPhotoBadgeStates

```TypeScript
movingPhotoBadgeStates: Array<MovingPhotoBadgeStateType>
```

Moving photo badge states for the selected media files in the gallery. When isMovingPhotoBadgeShown is true, movingPhotoBadgeStates contains the moving photo states; otherwise, it is empty.

**类型：** Array<MovingPhotoBadgeStateType>

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## contextRecoveryInfo

```TypeScript
contextRecoveryInfo: ContextRecoveryInfo
```

Contextual information about the PhotoPicker's exit state.

**类型：** ContextRecoveryInfo

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoUris

```TypeScript
photoUris: Array<string>
```

URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization. For details about how to use the media file URI, see Using a Media File URI.

**类型：** Array<string>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

