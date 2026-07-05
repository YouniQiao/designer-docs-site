# closePipe

## closePipe

```TypeScript
function closePipe(pipe: USBDevicePipe): int
```

关闭设备消息控制通道。 1. 需要调用[usbManager.getDevices]usbManager.getDevices()获取设备列表； 2. 调用[usbManager.requestRight]usbManager.requestRight(deviceName: string)获取设备请求权限； 3. 调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)得到devicepipe作为参数。

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | 是 | 用于确定USB设备消息控制通道，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 关闭设备消息控制通道成功返回0；关闭设备消息控制通道失败返回其他错误码如下：   - 22：服务异常。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

**示例：**

```TypeScript
function closePipe() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  usbManager.requestRight(devicesList?.[0]?.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(devicesList?.[0]);
  let ret: number = usbManager.closePipe(devicepipe);
  console.info(`closePipe = ${ret}`);
}

```

