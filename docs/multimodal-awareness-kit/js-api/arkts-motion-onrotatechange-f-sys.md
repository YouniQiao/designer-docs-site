# onRotateChange

## onRotateChange

```TypeScript
function onRotateChange(callback: Callback<RotateEvent>): void
```

Subscribe to rotate sensor event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.Motion

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RotateEvent> | Yes | The callback to receive rotate orientation. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception; 2. N-API invocation exception, invalid N-API status. |

