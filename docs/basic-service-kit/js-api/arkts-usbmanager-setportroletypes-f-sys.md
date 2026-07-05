# setPortRoleTypes

## setPortRoleTypes

```TypeScript
function setPortRoleTypes(portId: int, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>
```

设置指定的端口支持的角色模式，包含充电角色、数据传输角色。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_USB_CONFIG

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | int | Yes | 端口号。 |
| powerRole | PowerRoleType | Yes | 充电的角色。 |
| dataRole | DataRoleType | Yes | 数据传输的角色。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to  call the API. [since 18] |
| 202 | Permission denied. Normal application do not have permission to use system api. |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |
| 14400003 | Unsupported operation. The current device does not support port role switching. |

