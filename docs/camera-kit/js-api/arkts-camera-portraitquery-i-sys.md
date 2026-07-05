# PortraitQuery

Queries portrait parameters.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getSupportedPortraitEffects

```TypeScript
getSupportedPortraitEffects(): Array<PortraitEffect>
```

Obtains the supported portrait effects.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;PortraitEffect> | Array of portrait effects supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |
| 202 | Not System Application. [since 11] |

**Example**

```TypeScript
function getSupportedPortraitEffects(portraitPhotoSession: camera.PortraitPhotoSession): Array<camera.PortraitEffect> {
  let portraitEffects: Array<camera.PortraitEffect> = portraitPhotoSession.getSupportedPortraitEffects();
  return portraitEffects;
}

```

