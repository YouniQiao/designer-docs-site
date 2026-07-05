# MovingPhotoViewOptions

Defines the moving photo view options.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { PixelMapFormat,MovingPhotoViewAttribute,MovingPhotoView,MovingPhotoViewController,DynamicRangeMode } from '@kit.MediaLibraryKit';
```

## playWithMask

```TypeScript
playWithMask?: boolean
```

the watermask of the cover photo whether to contain during movingphoto playback

**Type:** boolean

**Since:** 19

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## controller

```TypeScript
controller?: MovingPhotoViewController
```

controller of MovingPhotoView.

**Type:** MovingPhotoViewController

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## movingPhoto

```TypeScript
movingPhoto: photoAccessHelper.MovingPhoto
```

moving photo data.

**Type:** photoAccessHelper.MovingPhoto

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## movingPhotoFormat

```TypeScript
movingPhotoFormat?: PixelMapFormat
```

format of MovingPhotoView.

**Type:** PixelMapFormat

**Since:** 14

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## imageAIOptions

```TypeScript
imageAIOptions?: ImageAIOptions
```

image ai options of MovingPhotoView.

**Type:** ImageAIOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## dynamicRangeMode

```TypeScript
dynamicRangeMode?: DynamicRangeMode
```

range mode of MovingPhotoView.

**Type:** DynamicRangeMode

**Since:** 14

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

