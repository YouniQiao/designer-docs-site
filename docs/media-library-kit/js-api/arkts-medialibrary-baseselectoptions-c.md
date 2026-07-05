# BaseSelectOptions

Class BaseSelectOptions, which is extracted from class PhotoSelectOptions

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## MIMEType

```TypeScript
MIMEType?: PhotoViewMIMETypes
```

The Type of the file in the picker window. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**Type:** PhotoViewMIMETypes

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## assetCompatibleCapability

```TypeScript
assetCompatibleCapability?: AssetCompatibleCapability
```

Configuration for asset compatibility capabilities.

**Type:** AssetCompatibleCapability

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## assetFilter

```TypeScript
assetFilter?: Array<OperationItem>
```

Media asset filtering configuration.

**Type:** Array<OperationItem>

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## autoPlayScenes

```TypeScript
autoPlayScenes?: Array<AutoPlayScene>
```

Moving photo playback mode. Supports up to two modes.

**Type:** Array<AutoPlayScene>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## combinedMediaTypeFilter

```TypeScript
combinedMediaTypeFilter?: Array<string>
```

Configures filter conditions as a string array, supporting multiple combined conditions to specify supported file types. When this parameter is set, the original file type configuration parameters `MIMEType` and `mimeTypeFilter` become invalid.

**Type:** Array<string>

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## fileSizeFilter

```TypeScript
fileSizeFilter?: FileSizeFilter
```

Media file size filtering configuration.

**Type:** FileSizeFilter

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## globalMovingPhotoState

```TypeScript
globalMovingPhotoState?: MovingPhotoBadgeStateType
```

Initial state for global moving photos. Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration. Defaults to MOVING_PHOTO_ENABLE, which enables the dynamic effect.

**Type:** MovingPhotoBadgeStateType

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridPinchMode

```TypeScript
gridPinchMode?: GridPinchMode
```

Grid pinch mode.

**Type:** GridPinchMode

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isMovingPhotoBadgeShown

```TypeScript
isMovingPhotoBadgeShown?: boolean
```

Support showing moving photo badge.

**Type:** boolean

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isPhotoTakingSupported

```TypeScript
isPhotoTakingSupported?: boolean
```

Support taking photos. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isPreviewForSingleSelectionSupported

```TypeScript
isPreviewForSingleSelectionSupported?: boolean
```

Support preview in single selection mode or not

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isSearchSupported

```TypeScript
isSearchSupported?: boolean
```

Support search. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxSelectNumber

```TypeScript
maxSelectNumber?: number
```

Maximum number of images for a single selection. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## mimeTypeFilter

```TypeScript
mimeTypeFilter?: MimeTypeFilter
```

Media file filtering configuration.

**Type:** MimeTypeFilter

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoViewMimeTypeFileSizeFilters

```TypeScript
photoViewMimeTypeFileSizeFilters?: Array<PhotoViewMimeTypeFileSizeFilter>
```

Media file type and size combined filtering configuration. The array supports a maximum length of 3. Setting this parameter will cause the `fileSizeFilter` and `MIMEType` parameters to be ignored.

**Type:** Array<PhotoViewMimeTypeFileSizeFilter>

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## preferredCompatibleMode

```TypeScript
preferredCompatibleMode?: PreferredCompatibleMode
```

Preferred compatibility mode.

**Type:** PreferredCompatibleMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## preselectedUris

```TypeScript
preselectedUris?: Array<string>
```

The uri for the preselected files. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recommendationOptions

```TypeScript
recommendationOptions?: RecommendationOptions
```

The recommendation options when use recommendation photo function. Move from class PhotoSelectOptions to it's base class BaseSelectOptions

**Type:** RecommendationOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## showDateOnScrollbar

```TypeScript
showDateOnScrollbar?: boolean
```

Display date information when dragging the scrollbar.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## singleSelectionMode

```TypeScript
singleSelectionMode?: SingleSelectionMode
```

The mode of single selection

**Type:** SingleSelectionMode

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## videoDurationFilter

```TypeScript
videoDurationFilter?: VideoDurationFilter
```

Media file video duration filtering configuration.

**Type:** VideoDurationFilter

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

