# WhiteBalance (System API)

**WhiteBalance** inherits from [WhiteBalanceQuery](arkts-camera-camera-whitebalancequery-i-sys.md).It provides APIs to process white balance, including obtaining and setting the white balance mode and white balance value.

**Inheritance/Implementation:** WhiteBalance extends [WhiteBalanceQuery](arkts-camera-camera-whitebalancequery-i-sys.md)

**Since:** 20

<!--Device-camera-interface WhiteBalance extends WhiteBalanceQuery--><!--Device-camera-interface WhiteBalance extends WhiteBalanceQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorTint

```TypeScript
getColorTint(): number
```

Gets current color tint.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-WhiteBalance-getColorTint(): int--><!--Device-WhiteBalance-getColorTint(): int-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | The current color tint. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## setColorTint

```TypeScript
setColorTint(colorTint: number): void
```

Sets color tint.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-WhiteBalance-setColorTint(colorTint: int): void--><!--Device-WhiteBalance-setColorTint(colorTint: int): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorTint | number | Yes | Color tint, the supported range can be obtained by calling [getColorTintRange](arkts-camera-camera-whitebalancequery-i.md#getcolortintrange-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

