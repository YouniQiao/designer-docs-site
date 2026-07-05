# bulkTransfer

## bulkTransfer

```TypeScript
function bulkTransfer(
    pipe: USBDevicePipe,
    endpoint: USBEndpoint,
    buffer: Uint8Array,
    timeout?: int
  ): Promise<int>
```

批量传输。使用Promise异步回调。 > **说明：** > > 单次批量传输的传输数据总量（包括pipe、endpoint、buffer、timeout）请控制在200KB以下，数据总量过大会导致传输失败返回-1。 > > 在调用接口前需要通过 > [usbManager.claimInterface]usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean) > claim通信接口。

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | 是 | 用于确定设备，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |
| endpoint | USBEndpoint | 是 | 用于确定传输的端口，需要调用[usbManager.getDevices]usbManager.getDevices()获取设备信息列表以及endpoint，  address用于确定端点地址，direction用于确定端点的方向，interfaceId用于确定所属接口，当前其他属性不做处理。 |
| buffer | Uint8Array | 是 | 用于写入或读取数据的缓冲区。 |
| timeout | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：   - -1：驱动异常。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

**示例：**

```TypeScript
// usbManager.getDevices 接口返回数据集合，取其中一个设备对象，并获取权限。
// 把获取到的设备对象作为参数传入usbManager.connectDevice;当usbManager.connectDevice接口成功返回之后；
// 才可以调用第三个接口usbManager.claimInterface.当usbManager.claimInterface 调用成功以后,再调用该接口。
function bulkTransfer() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  if (!usbManager.hasRight(device.name)) {
    console.error(`request right fail`);
    return;
  }
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  for (let i = 0; i < device.configs?.[0]?.interfaces.length; i++) {
    if (device.configs?.[0]?.interfaces?.[i]?.endpoints?.[0]?.attributes == 2) {
      let endpoint: usbManager.USBEndpoint = device.configs?.[0]?.interfaces?.[i]?.endpoints?.[0];
      let interfaces: usbManager.USBInterface = device.configs?.[0]?.interfaces?.[i];
      usbManager.claimInterface(devicepipe, interfaces);
      let buffer =  new Uint8Array(128);
      usbManager.bulkTransfer(devicepipe, endpoint, buffer).then((ret: number) => {
        console.info(`bulkTransfer = ${ret}`);
      }).catch((error: BusinessError) => {
        console.error(`bulkTransfer failed : ${error}`);
      });
    }
  }
  usbManager.closePipe(devicepipe);
}

```

