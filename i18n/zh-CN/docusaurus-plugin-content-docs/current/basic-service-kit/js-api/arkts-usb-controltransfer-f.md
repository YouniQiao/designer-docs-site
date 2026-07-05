# controlTransfer

## controlTransfer

```TypeScript
function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>
```

控制传输。 需要调用[usb.getDevices]usb.getDevices获取设备列表；调用[usb.requestRight]usb.requestRight获取设备请求权限；调用 [usb.connectDevice]usb.connectDevice接口得到devicepipe作为参数。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.controlTransfer

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | 是 | 用于确定设备。 |
| controlparam | USBControlParams | 是 | 控制传输参数。 |
| timeout | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise对象，获取传输或接收到的数据块大小。失败返回-1。 |

**示例：**

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

