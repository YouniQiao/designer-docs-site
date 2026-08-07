# getStatusMonitor (System API)

## getStatusMonitor

```TypeScript
function getStatusMonitor(localUserId: int): StatusMonitor
```

Obtains the status monitor. This API is used to obtain the status monitor object of a specified user. The object can be used to query and subscribe to the template status, continuous authentication status, and available device status of the companion device.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Required permissions:** ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the stage model.

<!--Device-companionDeviceAuth-function getStatusMonitor(localUserId: int): StatusMonitor--><!--Device-companionDeviceAuth-function getStatusMonitor(localUserId: int): StatusMonitor-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localUserId | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Local user ID. User ID on the primary device, which is a positive integer greater than or equal to 0. It is used to obtain the status monitor of the companion device corresponding to the user. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Status monitor object. It can be used to query the template status ( [getTemplateStatus]{ |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [32600001](../errorcode-useriam.md#32600001-system-service-not-working-properly) | The system service is not working properly. Please try again later. |
| [32600002](../errorcode-useriam.md#32600002-template-not-found) | The local user is not found. |

