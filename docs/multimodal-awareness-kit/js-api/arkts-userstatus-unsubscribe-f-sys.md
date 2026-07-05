# unsubscribe

## unsubscribe

```TypeScript
function unsubscribe(featureId: UserStatusFeature, callback?: Callback<UserStatusData>): int
```

Unsubscribes from user status monitoring.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| featureId | UserStatusFeature | Yes | Indicates the feature to be unsubscribed from. |
| callback | Callback&lt;UserStatusData> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns 0 if the operation succeeds; otherwise, returns a non-zero value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 33900001 | Service exception. Possible causes:  1. System error, such as null pointer and container-related exception.  2. Node-API invocation exception, such as invalid Node-API status. |
| 33900003 | Unsubscription failed. Possible causes:  1. Callback failure.  2. Node-API invocation exception, such as invalid Node-API status.  3. IPC request exception. |

