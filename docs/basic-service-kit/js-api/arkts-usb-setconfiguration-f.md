# setConfiguration

## setConfiguration

```TypeScript
function setConfiguration(pipe: USBDevicePipe, config: USBConfig): number
```

设置设备配置。 需要调用[usb.getDevices]usb.getDevices获取设备信息以及config；调用[usb.requestRight]usb.requestRight获取设备请求权限；调用 [usb.connectDevice]usb.connectDevice得到devicepipe作为参数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.setConfiguration

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址。 |
| config | USBConfig | Yes | 用于确定需要设置的配置。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 设置设备配置成功返回0；设置设备配置失败返回其他错误码。 |

**Example**

```TypeScript
let ret = usb.setConfiguration(devicepipe, config);
console.info(`setConfiguration = ${ret}`);

```

