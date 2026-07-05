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

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定设备，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |
| endpoint | USBEndpoint | Yes | 用于确定传输的端口，需要调用[usbManager.getDevices]usbManager.getDevices()获取设备信息列表以及endpoint，  address用于确定端点地址，direction用于确定端点的方向，interfaceId用于确定所属接口，当前其他属性不做处理。 |
| buffer | Uint8Array | Yes | 用于写入或读取数据的缓冲区。 |
| timeout | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：   - -1：驱动异常。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

**Example**

```TypeScript
// Call usbManager.getDevices to obtain a data set. Then, obtain a USB device and its access permission.
// Pass the obtained USB device as a parameter to usbManager.connectDevice. Then, call usbManager.connectDevice to connect the USB device.
// Call usbManager.claimInterface to claim a USB interface. After that, call usbManager.bulkTransfer to start bulk transfer.
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
      let ret: number = usbManager.claimInterface(devicepipe, interfaces);
      let buffer =  new Uint8Array(128);
      usbManager.bulkTransfer(devicepipe, endpoint, buffer).then((ret: number) => {
        console.info(`bulkTransfer = ${ret}`);
      }).catch((error: BusinessError) => {
        console.error(`bulkTransfer failed : ${error}`);
      });
    }
  }
}

```

