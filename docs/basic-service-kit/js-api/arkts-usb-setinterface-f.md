# setInterface

## setInterface

```TypeScript
function setInterface(pipe: USBDevicePipe, iface: USBInterface): number
```

设置设备接口。 需要调用[usb.getDevices]usb.getDevices获取设备列表以及interfaces；调用[usb.requestRight]usb.requestRight获取设备请求权限；调 用[usb.connectDevice]usb.connectDevice得到devicepipe作为参数；调用[usb.claimInterface]usb.claimInterface注册通信接 口。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.setInterface

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址。 |
| iface | USBInterface | Yes | 用于确定需要设置的接口。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 设置设备接口成功返回0；设置设备接口失败返回其他错误码。 |

**Example**

```TypeScript
let ret = usb.setInterface(devicepipe, interfaces);
console.info(`setInterface = ${ret}`);

```

