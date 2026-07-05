# connectDevice

## connectDevice

```TypeScript
function connectDevice(device: USBDevice): Readonly<USBDevicePipe>
```

根据getDevices()返回的设备信息打开USB设备。如果USB服务异常，可能返回`undefined`，注意需要对接口返回值做判空处理。 1. 需要调用[usbManager.getDevices]usbManager.getDevices()获取设备信息以及device; 2. 调用[usbManager.requestRight]usbManager.requestRight(deviceName: string)请求使用该设备的权限。

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | USBDevice | 是 | USB设备信息，用[usbManager.getDevices]usbManager.getDevices()获取的busNum和devAddress确定设备，当前其他属性不做处理。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Readonly&lt;USBDevicePipe> | 指定的传输通道对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |
| 14400001 | Access right denied. Call requestRight to get the USBDevicePipe access right first. |
| 14400004 |  |
| 14400012 |  |

**示例：**

```TypeScript
function connectDevice() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  console.info(`devicepipe = ${devicepipe}`);
  usbManager.closePipe(devicepipe);
}

```

