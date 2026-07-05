# onPickupChange

## onPickupChange

```TypeScript
function onPickupChange(callback: Callback<PickupEvent>): void
```

Subscribe to pick up sensor event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.Motion

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PickupEvent> | Yes | The callback to receive pickup status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception; 2. N-API invocation exception, invalid N-API status. |

