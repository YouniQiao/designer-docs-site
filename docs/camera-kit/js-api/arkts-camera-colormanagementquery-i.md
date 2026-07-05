# ColorManagementQuery

ColorManagementQuery provides the APIs for color space query.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getSupportedColorSpaces

```TypeScript
getSupportedColorSpaces(): Array<colorSpaceManager.ColorSpace>
```

Obtains the supported color spaces.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;colorSpaceManager.ColorSpace> | Array of color spaces supported. If the API call fails,  undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. [since 12 - 17] |

