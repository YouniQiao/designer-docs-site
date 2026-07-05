# setPortRoles

## setPortRoles

```TypeScript
function setPortRoles(portId: number, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<boolean>
```

设置指定的端口支持的角色模式，包含充电角色、数据传输角色。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.setPortRoles

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
| Promise&lt;boolean> | Promise对象，返回设置成功与否的结果。true表示设置成功，false表示设置失败。 |

**Example**

```TypeScript
let portId = 1;
usb.setPortRoles(portId, usb.PowerRoleType.SOURCE, usb.DataRoleType.HOST).then(() => {
    console.info('usb setPortRoles successfully.');
}).catch((err : BusinessError) => {
    console.error('usb setPortRoles failed: ' + err.code + ' message: ' + err.message);
});

```

