# getRawDescriptor

## getRawDescriptor

```TypeScript
function getRawDescriptor(pipe: USBDevicePipe): Uint8Array
```

获取原始的USB描述符。 需要调用[usb.getDevices]usb.getDevices获取设备列表；调用[usb.requestRight]usb.requestRight获取设备请求权限；调用 [usb.connectDevice]usb.connectDevice接口得到devicepipe作为参数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.getRawDescriptor

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 返回获取的原始数据；失败返回undefined。 |

**Example**

```TypeScript
let ret = usb.getRawDescriptor(devicepipe);

```

