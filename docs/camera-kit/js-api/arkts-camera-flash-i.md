# Flash

Flash extends [FlashQuery](arkts-camera-flashquery-i.md)
Provides APIs related to the flash.

**Inheritance/Implementation:** Flash extends [FlashQuery](arkts-camera-flashquery-i.md)

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getFlashMode

```TypeScript
getFlashMode(): FlashMode
```

Obtains the flash mode in use.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| FlashMode | Flash mode obtained. If the operation fails, undefined is returned and an error codedefined in [CameraErrorCode](arkts-camera-cameraerrorcode-e.md) is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## offFlashStateChange

```TypeScript
offFlashStateChange(callback?: Callback<FlashState>): void
```

Unsubscribes flash state change event callback.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FlashState&gt; | No | Callback used to get the flash state change. |

## onFlashStateChange

```TypeScript
onFlashStateChange(callback: Callback<FlashState>): void
```

Subscribes flash state change event callback.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FlashState&gt; | Yes | Callback used to get the flash state change. |

## setFlashMode

```TypeScript
setFlashMode(flashMode: FlashMode): void
```

Sets a flash mode.

Before the setting, do the following checks:

1. Use [hasFlash](arkts-camera-flashquery-i.md#hasflash-1) to check whether the camera device has flash.
2. Use [isFlashModeSupported](arkts-camera-flashquery-i.md#isflashmodesupported-1) to check whether the camera device supports the flash mode.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flashMode | FlashMode | Yes | Flash mode. If the input parameter is null or undefined, it is treated as 0 andthe flash is turned off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

