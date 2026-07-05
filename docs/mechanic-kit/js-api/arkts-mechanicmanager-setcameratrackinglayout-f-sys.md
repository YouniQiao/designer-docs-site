# setCameraTrackingLayout

## setCameraTrackingLayout

```TypeScript
function setCameraTrackingLayout(trackingLayout: CameraTrackingLayout): void
```

Sets the camera tracking layout for this mechanical device.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| trackingLayout | CameraTrackingLayout | Yes | Camera tracking layout. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

**Example**

```TypeScript
console.info('Set layout');
mechanicManager.setCameraTrackingLayout(mechanicManager.CameraTrackingLayout.LEFT);
console.info('Set layout successful');

```

