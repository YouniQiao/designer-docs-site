# MovingPhotoViewInterface

Defines the moving photo view interface.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { PixelMapFormat, MovingPhotoViewAttribute, MovingPhotoView, MovingPhotoViewController, DynamicRangeMode } from '@ohos.multimedia.movingphotoview';
```

## constructor

```TypeScript
(options: MovingPhotoViewOptions): MovingPhotoViewAttribute
```

Set the options.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | MovingPhotoViewOptions | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

