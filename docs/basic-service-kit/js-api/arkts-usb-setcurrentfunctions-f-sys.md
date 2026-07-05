# setCurrentFunctions

## setCurrentFunctions

```TypeScript
function setCurrentFunctions(funcs: FunctionType): Promise<boolean>
```

在设备模式下，设置当前的USB功能列表。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.setCurrentFunctions

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | FunctionType | Yes | 功能列表对应的数字掩码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回设置成功与否的结果。true表示设置成功，false表示设置失败。 |

**Example**

```TypeScript
let funcs : number = usb.FunctionType.HDC;
usb.setCurrentFunctions(funcs).then(() => {
    console.info('usb setCurrentFunctions successfully.');
}).catch((err : BusinessError) => {
    console.error('usb setCurrentFunctions failed: ' + err.code + ' message: ' + err.message);
});

```

