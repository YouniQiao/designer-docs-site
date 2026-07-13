# PhotoSelectResult

Defines information about the images or videos selected.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## contextRecoveryInfo

```TypeScript
contextRecoveryInfo: ContextRecoveryInfo
```

Contextual information about the PhotoPicker's exit state.

**Type:** ContextRecoveryInfo

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isOriginalPhoto

```TypeScript
isOriginalPhoto: boolean
```

Whether the selected media asset is the original image.
The value true means that the selected media asset is the original image, and false means the opposite.
The default value is false.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## movingPhotoBadgeStates

```TypeScript
movingPhotoBadgeStates: Array<MovingPhotoBadgeStateType>
```

Moving photo badge states for the selected media files in the gallery.
When isMovingPhotoBadgeShown is true, movingPhotoBadgeStates contains the moving photo states;
otherwise, it is empty.

**Type:** Array<MovingPhotoBadgeStateType>

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoUris

```TypeScript
photoUris: Array<string>
```

URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
For details about how to use the media file URI, see Using a Media File URI.

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

