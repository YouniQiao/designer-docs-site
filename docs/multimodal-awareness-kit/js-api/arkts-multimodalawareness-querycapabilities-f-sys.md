---
last_update:
  date: 2026-07-04
---

# queryCapabilities (System API)

## Modules to Import

```TypeScript
import { userStatus } from '@ohos.multimodalAwareness.userStatus';
```

## queryCapabilities

```TypeScript
function queryCapabilities(capabilities: UserStatusAtomicCap[]): UserStatusAtomicCap[]
```

Queries device-supported atomic capabilities.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

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
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API. |
| [33900001](../../apis-multimodalawareness-kit/errorcode-userStatus.md#33900001-service-exception) | Service exception. Possible causes:<br>1. Node-API invocation exception, such as invalid Node-API status.<br>2. IPC request exception. |

