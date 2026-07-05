# controlTransfer

## controlTransfer

```TypeScript
function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>
```

控制传输。使用Promise异步回调。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** usbManager.usbControlTransfer(pipe:

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | 是 | 用于确定设备，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |
| controlparam | USBControlParams | 是 | 控制传输参数，按需设置参数，参数传参类型请参考USB协议。 |
| timeout | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：   - -1：驱动异常。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |

**示例：**

```TypeScript
let param: usbManager.USBControlParams = {
  request: 0x06,
  reqType: 0x80,
  target:0,
  value: 0x01 << 8 | 0,
  index: 0,
  data: new Uint8Array(18)
};

function controlTransfer() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  usbManager.requestRight(devicesList[0].name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(devicesList[0]);
  usbManager.controlTransfer(devicepipe, param).then((ret: number) => {
  console.info(`controlTransfer = ${ret}`);
  })
  usbManager.closePipe(devicepipe);
}

```

