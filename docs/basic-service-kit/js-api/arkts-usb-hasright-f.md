# hasRight

## hasRight

```TypeScript
function hasRight(deviceName: string): boolean
```

判断是否有权访问该设备。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.hasRight

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceName | string | Yes | 设备名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true表示有访问设备的权限，false表示没有访问设备的权限。 |

**Example**

```TypeScript
let devicesName= "1-1";
let bool = usb.hasRight(devicesName);
console.info(`hasRight = ${bool}`);

```

