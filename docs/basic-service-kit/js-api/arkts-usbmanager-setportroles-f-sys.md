# setPortRoles

## setPortRoles

```TypeScript
function setPortRoles(portId: number, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>
```

设置指定的端口支持的角色模式，包含充电角色、数据传输角色。使用Promise异步回调。

**Since:** 9

**Deprecated since:** 12

**Substitute:** usbManager.setPortRoleTypes(portId:

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | number | Yes | 端口号。 |
| powerRole | PowerRoleType | Yes | 充电的角色。 |
| dataRole | DataRoleType | Yes | 数据传输的角色。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |

