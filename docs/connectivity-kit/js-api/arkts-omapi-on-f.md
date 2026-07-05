# on

## on('stateChanged')

```TypeScript
function on(type: 'stateChanged', callback: Callback<ServiceState>): void
```

Register the service state changed event.

**Since:** 18

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChanged' | Yes | The type to register. |
| callback | Callback&lt;ServiceState> | Yes | The callback used to listen for the state change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |

