# setConfiguration

## setConfiguration

```TypeScript
function setConfiguration(pipe: USBDevicePipe, config: USBConfiguration): int
```

设置设备配置。

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |
| config | USBConfiguration | Yes | 用于确定需要设置的配置，需要调用[usbManager.getDevices]usbManager.getDevices()获取设备信息并通过id用于确定唯一设置。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 设置设备配置成功返回0；设置设备配置失败返回其他错误码如下：   - 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。   - 88080486：服务初始化中，请稍后重试。   - 88080488：无设备访问权限，请先调用[usbManager.requestRight]usbManager.requestRight(deviceName: string)接口申请授权。   - -1：驱动异常。   - -17：I/O失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

**Example**

```TypeScript
function setConfiguration() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  let config: usbManager.USBConfiguration = device.configs?.[0];
  let ret: number= usbManager.setConfiguration(devicepipe, config);
  console.info(`setConfiguration = ${ret}`);
}

```

