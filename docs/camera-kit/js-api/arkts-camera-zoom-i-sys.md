# Zoom

Zoom extend [ZoomQuery](arkts-camera-zoomquery-i.md)
Provides APIs to process the zoom effect of a camera device, including obtaining the current zoom ratio, setting a
zoom ratio, setting a zoom ratio in a smooth manner, and preparing or unpreparing for zooming.

**Inheritance/Implementation:** Zoom extends [ZoomQuery](arkts-camera-zoomquery-i.md)

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getZoomCenterPoint

```TypeScript
getZoomCenterPoint(): Point
```

Gets zoom center point.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Point | The current zoom center point. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## prepareZoom

```TypeScript
prepareZoom(): void
```

Instructs the bottom layer to prepare for zooming, for example, powering on the sensor.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function prepareZoom(sessionExtendsZoom: camera.Zoom): void {
  try {
    sessionExtendsZoom.prepareZoom();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The prepareZoom call failed. error code: ${err.code}`);
  }
}

```

## setZoomCenterPoint

```TypeScript
setZoomCenterPoint(point: Point): void
```

Sets zoom center point.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | Point | Yes | Target zoom center point. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## unprepareZoom

```TypeScript
unprepareZoom(): void
```

Instructs the bottom layer to unprepare for zooming.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function unprepareZoom(sessionExtendsZoom: camera.Zoom): void {
  try {
    sessionExtendsZoom.unprepareZoom();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The unprepareZoom call failed. error code: ${err.code}`);
  }
}

```

