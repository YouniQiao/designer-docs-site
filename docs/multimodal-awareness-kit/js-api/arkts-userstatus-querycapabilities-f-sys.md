# queryCapabilities

## queryCapabilities

```TypeScript
function queryCapabilities(capabilities: UserStatusAtomicCap[]): UserStatusAtomicCap[]
```

Queries device-supported atomic capabilities.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capabilities | UserStatusAtomicCap[] | Yes | List of atomic capabilities to query. |

**Return value:**

| Type | Description |
| --- | --- |
| UserStatusAtomicCap[] | Returns the list of device-supported atomic capabilities. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 33900001 | Service exception. Possible causes:  1. Node-API invocation exception, such as invalid Node-API status.  2. IPC request exception. |

