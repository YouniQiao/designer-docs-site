# registerDeviceSelectCallback (System API)

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@ohos.userIAM.companionDeviceAuth';
```

## registerDeviceSelectCallback

```TypeScript
function registerDeviceSelectCallback(callback: DeviceSelectCallback): void
```

Registers the callback for companion device selection.

**Since:** 23

**Required permissions:** ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DeviceSelectCallback | Yes | Callback used to return the companion device selection result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [32600001](../errorcode-useriam.md#32600001-system-service-not-working-properly) | The system service is not working properly. Please try again later. |

