# getStatusMonitor

## getStatusMonitor

```TypeScript
function getStatusMonitor(localUserId: int): StatusMonitor
```

获取状态监听器。用于获取指定用户的状态监听器对象，通过该对象可查询和订阅伴随设备的模板状态、持续认证状态、可添加设备状态等信息。

**Since:** 23

**Required permissions:** 

 ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localUserId | int | Yes | 本地用户ID。主设备上的用户标识，为大于等于0的正整数。用于获取该用户对应的伴随设备状态监听器。 |

**Return value:**

| Type | Description |
| --- | --- |
| StatusMonitor | 状态监听器对象。可用于查询模板状态（  [getTemplateStatus]companionDeviceAuth.StatusMonitor.getTemplateStatus）、订阅模板变化（  [onTemplateChange]companionDeviceAuth.StatusMonitor.onTemplateChange(callback: TemplateStatusCallback)  ）、订阅可添加设备变化（  [onAvailableDeviceChange]companionDeviceAuth.StatusMonitor.onAvailableDeviceChange(callback: AvailableDeviceStatusCallback)  ）、订阅持续认证状态（  [onContinuousAuthChange]companionDeviceAuth.StatusMonitor.onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback)  ）等操作。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 32600001 | The system service is not working properly. Please try again later. |
| 32600002 | The local user is not found. |

