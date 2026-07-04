# Zoom

Zoom extend [ZoomQuery](arkts-camera-zoomquery-i.md#zoomquery) Provides APIs to process the zoom effect of a camera device, including obtaining the current zoom ratio, setting a zoom ratio, setting a zoom ratio in a smooth manner, and preparing or unpreparing for zooming.

**Inheritance/Implementation:** Zoom extends [ZoomQuery](arkts-camera-zoomquery-i.md#zoomquery)

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## getZoomRatio

```TypeScript
getZoomRatio(): number
```

Obtains the zoom ratio in use.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Zoom ratio obtained. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 |

## setSmoothZoom

```TypeScript
setSmoothZoom(targetRatio: number, mode?: SmoothZoomMode): void
```

Sets smooth zoom.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetRatio | number | Yes | Target zoom ratio. The supported zoom ratio range can be obtained by calling[getZoomRatioRange](arkts-camera-zoomquery-i.md#getzoomratiorange-1). If the value passed inis not within the supported range, the value within the precision range is retained. |
| mode | SmoothZoomMode | No | Smooth zoom mode. The default value is **0**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config.<br>**Applicable version:** 11 - 17 |

## setZoomRatio

```TypeScript
setZoomRatio(zoomRatio: number): void
```

Sets a zoom ratio, with a maximum precision of two decimal places.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| zoomRatio | number | Yes | Zoom ratio. The supported zoom ratio range can be obtained by calling[getZoomRatioRange](arkts-camera-zoomquery-i.md#getzoomratiorange-1). If the value passed inis not within the supported range, the value within the precision range is retained.<br>It takes some timefor the zoom ratio to take effect at the bottom layer. To obtain the correct zoom ratio, you need to wait forone to two frames. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

