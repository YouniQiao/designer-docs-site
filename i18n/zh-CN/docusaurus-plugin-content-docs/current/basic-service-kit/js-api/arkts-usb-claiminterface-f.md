# claimInterface

## claimInterface

```TypeScript
function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): number
```

注册通信接口。 需要调用[usb.getDevices]usb.getDevices获取设备信息以及interfaces；调用[usb.requestRight]usb.requestRight获取设备请求权限；调 用[usb.connectDevice]usb.connectDevice接口得到devicepipe作为参数。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.claimInterface

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | 是 | 用于确定总线号和设备地址。 |
| iface | USBInterface | 是 | 用于确定需要获取接口的索引。 |
| force | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 注册通信接口成功返回0；注册通信接口失败返回其他错误码。 |

**示例：**

```TypeScript
let ret = usb.claimInterface(devicepipe, interfaces);
console.info(`claimInterface = ${ret}`);

```

