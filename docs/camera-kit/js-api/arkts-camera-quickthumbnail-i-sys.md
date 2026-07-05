# QuickThumbnail

Quick thumbnail object

**Since:** 19

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## release

```TypeScript
release(): Promise<void>
```

Release quick thumbnail object.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## captureId

```TypeScript
readonly captureId: int
```

capture id.

**Type:** int

**Since:** 19

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## thumbnailImage

```TypeScript
thumbnailImage: image.PixelMap
```

Thumbnail image.

**Type:** image.PixelMap

**Since:** 19

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

