# getFileDescriptor

## getFileDescriptor

```TypeScript
function getFileDescriptor(pipe: USBDevicePipe): number
```

获取文件描述符。 需要调用[usb.getDevices]usb.getDevices获取设备列表；调用[usb.requestRight]usb.requestRight获取设备请求权限；调用 [usb.connectDevice]usb.connectDevice接口得到devicepipe作为参数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.getFileDescriptor

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回设备对应的文件描述符；失败返回-1。 |

**Example**

```TypeScript
let ret = usb.getFileDescriptor(devicepipe);

```

