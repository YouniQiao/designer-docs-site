# getStatusMonitor (System API)

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@ohos.userIAM.companionDeviceAuth';
```

## getStatusMonitor

```TypeScript
function getStatusMonitor(localUserId: number): StatusMonitor
```

Obtains the status listener, which is used to query and subscribe to companion template information.

**Since:** 23

**Required permissions:** ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localUserId | number | Yes | Local user ID. |

**Return value:**

| Type | Description |
| --- | --- |
| StatusMonitor | Promise used to return the status listener. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [32600001](../errorcode-useriam.md#32600001-system-service-not-working-properly) | The system service is not working properly. Please try again later. |
| [32600002](../errorcode-useriam.md#32600002-template-not-found) | The local user is not found. |

