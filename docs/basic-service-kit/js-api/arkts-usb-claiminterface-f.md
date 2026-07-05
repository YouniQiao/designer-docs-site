# claimInterface

## claimInterface

```TypeScript
function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): number
```

注册通信接口。 需要调用[usb.getDevices]usb.getDevices获取设备信息以及interfaces；调用[usb.requestRight]usb.requestRight获取设备请求权限；调 用[usb.connectDevice]usb.connectDevice接口得到devicepipe作为参数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.claimInterface

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址。 |
| iface | USBInterface | Yes | 用于确定需要获取接口的索引。 |
| force | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 注册通信接口成功返回0；注册通信接口失败返回其他错误码。 |

**Example**

```TypeScript
let ret = usb.claimInterface(devicepipe, interfaces);
console.info(`claimInterface = ${ret}`);

```

