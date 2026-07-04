# FlashQuery

Provides APIs to obtain the flash information of a camera device, including whether the LCD flash is supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## hasFlash

```TypeScript
hasFlash(): boolean
```

Checks whether the camera device has flash.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the camera device has flash. **true** if it has flash, **false**otherwise. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

## isFlashModeSupported

```TypeScript
isFlashModeSupported(flashMode: FlashMode): boolean
```

Checks whether a flash mode is supported.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flashMode | FlashMode | Yes | Flash mode. If the input parameter is null or undefined, it is treated as 0 andthe flash is turned off. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the flash mode. **true** if supported, **false** otherwise.If the operation fails, undefined is returned and an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

