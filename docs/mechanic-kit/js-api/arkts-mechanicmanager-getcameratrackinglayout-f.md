# getCameraTrackingLayout

## getCameraTrackingLayout

```TypeScript
function getCameraTrackingLayout(): CameraTrackingLayout
```

Obtains the camera tracking layout of this mechanical device.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**Return value:**

| Type | Description |
| --- | --- |
| CameraTrackingLayout | Camera tracking layout obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**Example**

```TypeScript
console.info('Query layout');
let layout = mechanicManager.getCameraTrackingLayout();
console.info(`'Succeeded in querying layout, current layout:' ${layout}`);

```

