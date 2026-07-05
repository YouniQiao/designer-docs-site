# closePipe

## closePipe

```TypeScript
function closePipe(pipe: USBDevicePipe): number
```

关闭设备消息控制通道。 需要调用[usb.getDevices]usb.getDevices获取设备列表；调用[usb.requestRight]usb.requestRight获取设备请求权限；调用 [usb.connectDevice]usb.connectDevice得到devicepipe作为参数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.closePipe

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定USB设备消息控制通道。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 关闭设备消息控制通道成功返回0；关闭设备消息控制通道失败返回其他错误码。 |

**Example**

```TypeScript
let ret = usb.closePipe(devicepipe);
console.info(`closePipe = ${ret}`);

```

