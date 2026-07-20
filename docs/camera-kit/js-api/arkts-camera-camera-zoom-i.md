# Zoom

Zoom extend [ZoomQuery](arkts-camera-camera-zoomquery-i.md)Provides APIs to process the zoom effect of a camera device, including obtaining the current zoom ratio, setting a zoom ratio, setting a zoom ratio in a smooth manner, and preparing or unpreparing for zooming.

**Inheritance/Implementation:** Zoom extends [ZoomQuery](arkts-camera-camera-zoomquery-i.md)

**Since:** 11

<!--Device-camera-interface Zoom extends ZoomQuery--><!--Device-camera-interface Zoom extends ZoomQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getZoomRatio

```TypeScript
getZoomRatio(): number
```

Obtains the zoom ratio in use.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Zoom-getZoomRatio(): double--><!--Device-Zoom-getZoomRatio(): double-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Zoom ratio obtained. If the operation fails, an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 and later |

## setSmoothZoom

```TypeScript
setSmoothZoom(targetRatio: number, mode?: SmoothZoomMode): void
```

Sets smooth zoom.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Zoom-setSmoothZoom(targetRatio: double, mode?: SmoothZoomMode): void--><!--Device-Zoom-setSmoothZoom(targetRatio: double, mode?: SmoothZoomMode): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetRatio | number | Yes | Target zoom ratio. The supported zoom ratio range can be obtained by calling [getZoomRatioRange](arkts-camera-camera-zoomquery-i.md#getzoomratiorange-1). If the value passed in is not within the supported range, the value within the precision range is retained. |
| mode | [SmoothZoomMode](arkts-camera-camera-smoothzoommode-e.md) | No | Smooth zoom mode. The default value is **0**. |

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

<!--Device-Zoom-setZoomRatio(zoomRatio: double): void--><!--Device-Zoom-setZoomRatio(zoomRatio: double): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| zoomRatio | number | Yes | Zoom ratio. The supported zoom ratio range can be obtained by calling [getZoomRatioRange](arkts-camera-camera-zoomquery-i.md#getzoomratiorange-1). If the value passed in is not within the supported range, the value within the precision range is retained.<br>It takes some time for the zoom ratio to take effect at the bottom layer. To obtain the correct zoom ratio, you need to wait for one to two frames. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

