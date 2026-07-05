# claimInterface

## claimInterface

```TypeScript
function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): int
```

声明对USB设备某个接口的控制权。 > **说明：** > > 在USB编程中，claim interface是一个常见操作，指的是应用程序请求操作系统将某个USB接口从内核驱动中释放并交由用户空间程序控制。<br> > > 下面用到的claim通信接口都表示claim interface操作。

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | 是 | 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |
| iface | USBInterface | 是 | 用于确定需要获取接口的索引，需要调用[usbManager.getDevices]usbManager.getDevices()获取设备信息并通过id确定唯一接口。 |
| force | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | claim通信接口成功返回0；claim通信接口失败返回其他错误码如下：   - 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。   - 88080486：服务初始化中，请稍后重试。   - 88080488：无设备访问权限，请先调用[usbManager.requestRight]usbManager.requestRight(deviceName: string)接口申请授权。   - -1：驱动异常。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

**示例：**

```TypeScript
function claimInterface() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  let interfaces: usbManager.USBInterface = device.configs?.[0]?.interfaces?.[0];
  let ret: number= usbManager.claimInterface(devicepipe, interfaces);
  console.info(`claimInterface = ${ret}`);
  ret = usbManager.releaseInterface(devicepipe, interfaces);
  console.info(`releaseInterface = ${ret}`);
  usbManager.closePipe(devicepipe);
}

```

