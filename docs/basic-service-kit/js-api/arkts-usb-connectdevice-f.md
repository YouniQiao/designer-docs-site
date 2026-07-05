# connectDevice

## connectDevice

```TypeScript
function connectDevice(device: USBDevice): Readonly<USBDevicePipe>
```

打开USB设备。 需要调用[usb.getDevices]usb.getDevices获取设备信息以及device，再调用[usb.requestRight]usb.requestRight获取设备请求权限。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.connectDevice

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | USBDevice | Yes | USB设备信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Readonly&lt;USBDevicePipe> | 指定的传输通道对象。 |

**Example**

```TypeScript
let devicepipe= usb.connectDevice(device);
console.info(`devicepipe = ${devicepipe}`);

```

