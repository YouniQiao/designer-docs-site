# BaseSelectOptions

Class BaseSelectOptions, which is extracted from class PhotoSelectOptions

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## assetCompatibleCapability

```TypeScript
assetCompatibleCapability?: AssetCompatibleCapability
```

Configuration for asset compatibility capabilities.

**类型：** AssetCompatibleCapability

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## autoPlayScenes

```TypeScript
autoPlayScenes?: Array<AutoPlayScene>
```

Moving photo playback mode. Supports up to two modes.

**类型：** Array<AutoPlayScene>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## mimeTypeFilter

```TypeScript
mimeTypeFilter?: MimeTypeFilter
```

Media file filtering configuration.

**类型：** MimeTypeFilter

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## preselectedUris

```TypeScript
preselectedUris?: Array<string>
```

The uri for the preselected files. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**类型：** Array<string>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## singleSelectionMode

```TypeScript
singleSelectionMode?: SingleSelectionMode
```

The mode of single selection

**类型：** SingleSelectionMode

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## videoDurationFilter

```TypeScript
videoDurationFilter?: VideoDurationFilter
```

Media file video duration filtering configuration.

**类型：** VideoDurationFilter

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## combinedMediaTypeFilter

```TypeScript
combinedMediaTypeFilter?: Array<string>
```

Configures filter conditions as a string array, supporting multiple combined conditions to specify supported file types. When this parameter is set, the original file type configuration parameters `MIMEType` and `mimeTypeFilter` become invalid.

**类型：** Array<string>

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## fileSizeFilter

```TypeScript
fileSizeFilter?: FileSizeFilter
```

Media file size filtering configuration.

**类型：** FileSizeFilter

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoViewMimeTypeFileSizeFilters

```TypeScript
photoViewMimeTypeFileSizeFilters?: Array<PhotoViewMimeTypeFileSizeFilter>
```

Media file type and size combined filtering configuration. The array supports a maximum length of 3. Setting this parameter will cause the `fileSizeFilter` and `MIMEType` parameters to be ignored.

**类型：** Array<PhotoViewMimeTypeFileSizeFilter>

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isMovingPhotoBadgeShown

```TypeScript
isMovingPhotoBadgeShown?: boolean
```

Support showing moving photo badge.

**类型：** boolean

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## assetFilter

```TypeScript
assetFilter?: Array<OperationItem>
```

Media asset filtering configuration.

**类型：** Array<OperationItem>

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## preferredCompatibleMode

```TypeScript
preferredCompatibleMode?: PreferredCompatibleMode
```

Preferred compatibility mode.

**类型：** PreferredCompatibleMode

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isPhotoTakingSupported

```TypeScript
isPhotoTakingSupported?: boolean
```

Support taking photos. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## MIMEType

```TypeScript
MIMEType?: PhotoViewMIMETypes
```

The Type of the file in the picker window. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**类型：** PhotoViewMIMETypes

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recommendationOptions

```TypeScript
recommendationOptions?: RecommendationOptions
```

The recommendation options when use recommendation photo function. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**类型：** RecommendationOptions

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## globalMovingPhotoState

```TypeScript
globalMovingPhotoState?: MovingPhotoBadgeStateType
```

Initial state for global moving photos. Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration. Defaults to MOVING_PHOTO_ENABLE, which enables the dynamic effect.

**类型：** MovingPhotoBadgeStateType

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## showDateOnScrollbar

```TypeScript
showDateOnScrollbar?: boolean
```

Display date information when dragging the scrollbar.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isPreviewForSingleSelectionSupported

```TypeScript
isPreviewForSingleSelectionSupported?: boolean
```

Support preview in single selection mode or not

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridPinchMode

```TypeScript
gridPinchMode?: GridPinchMode
```

Grid pinch mode.

**类型：** GridPinchMode

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxSelectNumber

```TypeScript
maxSelectNumber?: int
```

Maximum number of images for a single selection. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**类型：** int

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isSearchSupported

```TypeScript
isSearchSupported?: boolean
```

Support search. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

