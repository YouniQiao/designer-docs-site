# releaseInterface

## releaseInterface

```TypeScript
function releaseInterface(pipe: USBDevicePipe, iface: USBInterface): number
```

释放注册过的通信接口。 需要调用[usb.claimInterface]usb.claimInterface先获取接口，才能使用此方法释放接口。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.releaseInterface

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址。 |
| iface | USBInterface | Yes | 用于确定需要释放接口的索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 释放接口成功返回0；释放接口失败返回其他错误码。 |

**Example**

```TypeScript
let ret = usb.releaseInterface(devicepipe, interfaces);
console.info(`releaseInterface = ${ret}`);

```

