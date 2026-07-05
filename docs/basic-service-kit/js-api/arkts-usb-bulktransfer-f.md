# bulkTransfer

## bulkTransfer

```TypeScript
function bulkTransfer(
    pipe: USBDevicePipe,
    endpoint: USBEndpoint,
    buffer: Uint8Array,
    timeout?: number
  ): Promise<number>
```

批量传输。 需要调用[usb.getDevices]usb.getDevices获取设备信息列表以及endpoint；再调用[usb.requestRight]usb.requestRight获取设备请求权限； 然后调用[usb.connectDevice]usb.connectDevice接口得到返回数据devicepipe之后，再次获取接口 [usb.claimInterface]usb.claimInterface；再调用usb.bulkTransfer接口。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.bulkTransfer

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定设备。 |
| endpoint | USBEndpoint | Yes | 用于确定传输的端口。 |
| buffer | Uint8Array | Yes | 用于写入或读取的缓冲区。 |
| timeout | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，获取传输或接收到的数据块大小。失败返回-1。 |

**Example**

```TypeScript
// Call usb.getDevices to obtain a data set. Then, obtain a USB device and its access permission.
// Pass the obtained USB device as a parameter to usb.connectDevice. Then, call usb.connectDevice to connect the USB device.
// Call usb.claimInterface to claim the USB interface. After that, call usb.bulkTransfer to start bulk transfer.
usb.bulkTransfer(devicepipe, endpoint, buffer).then((ret) => {
 console.info(`bulkTransfer = ${ret}`);
});

```

