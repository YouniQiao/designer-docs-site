# connectDevice

## connectDevice

```TypeScript
function connectDevice(device: USBDevice): Readonly<USBDevicePipe>
```

根据getDevices()返回的设备信息打开USB设备。如果USB服务异常，可能返回`undefined`，注意需要对接口返回值做判空处理。 1. 需要调用[usbManager.getDevices]usbManager.getDevices()获取设备信息以及device; 2. 调用[usbManager.requestRight]usbManager.requestRight(deviceName: string)请求使用该设备的权限。

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | USBDevice | Yes | USB设备信息，用[usbManager.getDevices]usbManager.getDevices()获取的busNum和devAddress确定设备，当前其他属性不做处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| Readonly&lt;USBDevicePipe> | 指定的传输通道对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |
| 14400001 | Access right denied. Call requestRight to get the USBDevicePipe access right first. |
| 14400004 |  |
| 14400012 |  |

**Example**

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
}

```

