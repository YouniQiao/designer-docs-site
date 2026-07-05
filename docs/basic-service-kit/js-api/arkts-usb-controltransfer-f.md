# controlTransfer

## controlTransfer

```TypeScript
function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>
```

控制传输。 需要调用[usb.getDevices]usb.getDevices获取设备列表；调用[usb.requestRight]usb.requestRight获取设备请求权限；调用 [usb.connectDevice]usb.connectDevice接口得到devicepipe作为参数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.controlTransfer

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定设备。 |
| controlparam | USBControlParams | Yes | 控制传输参数。 |
| timeout | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，获取传输或接收到的数据块大小。失败返回-1。 |

**Example**

```TypeScript
let param = {
  request: 0,
  reqType: 0,
  target:0,
  value: 0,
  index: 0,
  data: null
};
usb.controlTransfer(devicepipe, param).then((ret) => {
 console.info(`controlTransfer = ${ret}`);
})

```

