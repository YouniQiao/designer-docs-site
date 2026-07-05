# subscribe

## subscribe

```TypeScript
function subscribe(featureId: UserStatusFeature, callback: Callback<UserStatusData>,
    deviceInfo?: DeviceInfo[]): int
```

Subscribes to user status monitoring.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| featureId | UserStatusFeature | Yes | Indicates the feature to be unsubscribed to. |
| callback | Callback&lt;UserStatusData> | Yes | Callback used to return user status data. |
| deviceInfo | DeviceInfo[] | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the registered callback ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system application. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 33900001 | Service exception. Possible causes:  1. System error, such as null pointer and container-related exception.  2. Node-API invocation exception, such as invalid Node-API status. |
| 33900002 | Subscription failed. Possible causes:  1. Callback registration failed.  2. Failed to bind native object to JS wrapper.  3. Node-API invocation exception, such as invalid Node-API status.  4. IPC request exception. |

