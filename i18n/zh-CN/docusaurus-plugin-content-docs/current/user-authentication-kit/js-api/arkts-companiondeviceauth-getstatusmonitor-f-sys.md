# getStatusMonitor

## getStatusMonitor

```TypeScript
function getStatusMonitor(localUserId: int): StatusMonitor
```

获取状态监听器。用于获取指定用户的状态监听器对象，通过该对象可查询和订阅伴随设备的模板状态、持续认证状态、可添加设备状态等信息。

**起始版本：** 23

**需要权限：** 

 ohos.permission.USE_USER_IDM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localUserId | int | 是 | 本地用户ID。主设备上的用户标识，为大于等于0的正整数。用于获取该用户对应的伴随设备状态监听器。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| StatusMonitor | 状态监听器对象。可用于查询模板状态（  [getTemplateStatus]companionDeviceAuth.StatusMonitor.getTemplateStatus）、订阅模板变化（  [onTemplateChange]companionDeviceAuth.StatusMonitor.onTemplateChange(callback: TemplateStatusCallback)  ）、订阅可添加设备变化（  [onAvailableDeviceChange]companionDeviceAuth.StatusMonitor.onAvailableDeviceChange(callback: AvailableDeviceStatusCallback)  ）、订阅持续认证状态（  [onContinuousAuthChange]companionDeviceAuth.StatusMonitor.onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback)  ）等操作。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 32600001 | The system service is not working properly. Please try again later. |
| 32600002 | The local user is not found. |

