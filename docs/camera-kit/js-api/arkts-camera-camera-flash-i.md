# Flash

Flash extends [FlashQuery](arkts-camera-camera-flashquery-i.md)Provides APIs related to the flash.

**Inheritance/Implementation:** Flash extends [FlashQuery](arkts-camera-camera-flashquery-i.md)

**Since:** 11

<!--Device-camera-interface Flash extends FlashQuery--><!--Device-camera-interface Flash extends FlashQuery-End-->

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

<!--Device-Flash-getFlashMode(): FlashMode--><!--Device-Flash-getFlashMode(): FlashMode-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| [FlashMode](arkts-camera-camera-flashmode-e.md) | Flash mode obtained. If the operation fails, undefined is returned and an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is thrown. |

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

<!--Device-Flash-offFlashStateChange(callback?: Callback<FlashState>): void--><!--Device-Flash-offFlashStateChange(callback?: Callback<FlashState>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<FlashState> | No | Callback used to get the flash state change. |

## onFlashStateChange

```TypeScript
onFlashStateChange(callback: Callback<FlashState>): void
```

Subscribes flash state change event callback.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-Flash-onFlashStateChange(callback: Callback<FlashState>): void--><!--Device-Flash-onFlashStateChange(callback: Callback<FlashState>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<FlashState> | Yes | Callback used to get the flash state change. |

## setFlashMode

```TypeScript
setFlashMode(flashMode: FlashMode): void
```

Sets a flash mode.

Before the setting, do the following checks:

1. Use [hasFlash](arkts-camera-camera-flashquery-i.md#hasflash-1) to check whether the camera device has flash.2. Use [isFlashModeSupported](arkts-camera-camera-flashquery-i.md#isflashmodesupported-1) to check whether the camera device supports the flash mode.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Flash-setFlashMode(flashMode: FlashMode): void--><!--Device-Flash-setFlashMode(flashMode: FlashMode): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flashMode | [FlashMode](arkts-camera-camera-flashmode-e.md) | Yes | Flash mode. If the input parameter is null or undefined, it is treated as 0 and the flash is turned off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

