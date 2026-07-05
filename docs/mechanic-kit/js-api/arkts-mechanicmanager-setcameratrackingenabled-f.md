# setCameraTrackingEnabled

## setCameraTrackingEnabled

```TypeScript
function setCameraTrackingEnabled(isEnabled: boolean): void
```

Enables or disables camera tracking.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to enable camera tracking. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

**Example**

```TypeScript
console.info('Enable tracing');
mechanicManager.setCameraTrackingEnabled(true);
console.info('Succeeded in enabling tracking.');

```

