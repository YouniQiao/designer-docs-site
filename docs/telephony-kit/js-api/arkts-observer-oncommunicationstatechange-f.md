# onCommunicationStateChange

## onCommunicationStateChange

```TypeScript
function onCommunicationStateChange(callback: Callback<boolean>, options?: ObserverOptions): void
```

This API uses an asynchronous callback to return the result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | Yes | Callback used to return the result.  The value true indicates 5A state, and false indicates not 5A state. |
| options | ObserverOptions | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

