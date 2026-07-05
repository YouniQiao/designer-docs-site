# getCameraTrackingEnabled

## getCameraTrackingEnabled

```TypeScript
function getCameraTrackingEnabled(): boolean
```

Checks whether camera tracking is enabled for this mechanical device.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Enabled status. The value true means that camera tracking is enabled, and false means  the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**Example**

```TypeScript
console.info('Get tracking status');
let enabled = mechanicManager.getCameraTrackingEnabled();
console.info(`'current tracking status:' ${enabled}`);

```

