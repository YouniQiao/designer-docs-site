# setInterface

## setInterface

```TypeScript
function setInterface(pipe: USBDevicePipe, iface: USBInterface): int
```

设置设备接口。 > **说明：** > > 一个USB接口可能存在多重选择模式，支持动态切换。使用的场景：数据传输时，通过该接口可重新设置端点，使端点与传输类型匹配。 > > 在调用该接口前需要通过 > [usbManager.claimInterface]usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean) > claim通信接口。

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | 是 | 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |
| iface | USBInterface | 是 | 用于确定需要设置的接口，需要调用[usbManager.getDevices]usbManager.getDevices()获取设备信息并通过id和alternateSetting确定唯一接口。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 设置设备接口成功返回0；设置设备接口失败返回其他错误码如下：   - 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。   - 88080486：服务初始化中，请稍后重试。   - 88080488：无设备访问权限，请先调用[usbManager.requestRight]usbManager.requestRight(deviceName: string)接口申请授权。   - -1：驱动异常 。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

**示例：**

```TypeScript
function setInterface() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  let interfaces: usbManager.USBInterface = device.configs?.[0]?.interfaces?.[0];
  let ret: number = usbManager.claimInterface(devicepipe, interfaces);
  ret = usbManager.setInterface(devicepipe, interfaces);
  console.info(`setInterface = ${ret}`);
  usbManager.closePipe(devicepipe);
}

```

