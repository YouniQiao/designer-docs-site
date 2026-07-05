# getFileDescriptor

## getFileDescriptor

```TypeScript
function getFileDescriptor(pipe: USBDevicePipe): int
```

获取文件描述符。

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回设备对应的文件描述符，失败返回其它错误码如下：   - 88080486：服务初始化中，请稍后重试。   - 88080488：无设备访问权限，请先调用[usbManager.requestRight]usbManager.requestRight(deviceName: string)接口申请授权。   - -1：驱动异常 。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

**Example**

```TypeScript
function getFileDescriptor() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  usbManager.requestRight(devicesList?.[0]?.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(devicesList?.[0]);
  let ret: number = usbManager.getFileDescriptor(devicepipe);
  console.info(`getFileDescriptor = ${ret}`);
  let closeRet: number = usbManager.closePipe(devicepipe);
  console.info(`closePipe = ${closeRet}`);
}

```

