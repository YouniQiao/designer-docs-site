# getCameraTrackingLayout

## Modules to Import

```TypeScript
import { mechanicManager } from '@ohos.distributedHardware.mechanicManager';
```

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
| [33300001](../errorcode-mechanic.md#33300001-system-error) | Service exception. |
| [33300002](../errorcode-mechanic.md#33300002-device-not-connected) | Device not connected. |

**Example**

```TypeScript
console.info('Query layout');
let layout = mechanicManager.getCameraTrackingLayout();
console.info(`'Succeeded in querying layout, current layout:' ${layout}`);

```

