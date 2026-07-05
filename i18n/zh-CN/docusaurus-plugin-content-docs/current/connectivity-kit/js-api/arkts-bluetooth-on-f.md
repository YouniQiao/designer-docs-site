# on

## on('bluetoothDeviceFind')

```TypeScript
function on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>): void
```

Subscribe the event reported when a remote Bluetooth device is discovered.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.on#event:bluetoothDeviceFind

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bluetoothDeviceFind' | 是 | Type of the discovering event to listen for. |
| callback | Callback&lt;Array&lt;string>> | 是 | Callback used to listen for the discovering event. |

**示例：**

```TypeScript
function onReceiveEvent(data : Array<string>) { // data为蓝牙设备地址集合
    console.info('bluetooth device find = '+ JSON.stringify(data));
}
bluetooth.on('bluetoothDeviceFind', onReceiveEvent);

```

## on('bondStateChange')

```TypeScript
function on(type: 'bondStateChange', callback: Callback<BondStateParam>): void
```

Subscribe the event reported when a remote Bluetooth device is bonded.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.on#event:bondStateChange

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bondStateChange' | 是 | Type of the bond state event to listen for. |
| callback | Callback&lt;BondStateParam> | 是 | Callback used to listen for the bond state event,  {@link BondStateParam}. |

**示例：**

```TypeScript
function onReceiveEvent(data : bluetooth.BondStateParam) { // data为回调函数入参，表示配对的状态
    console.info('pair state = '+ JSON.stringify(data));
}
bluetooth.on('bondStateChange', onReceiveEvent);

```

## on('pinRequired')

```TypeScript
function on(type: 'pinRequired', callback: Callback<PinRequiredParam>): void
```

Subscribe the event of a pairing request from a remote Bluetooth device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.on#event:pinRequired

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'pinRequired' | 是 | Type of the pairing request event to listen for. |
| callback | Callback&lt;PinRequiredParam> | 是 | Callback used to listen for the pairing request event. |

**示例：**

```TypeScript
function onReceiveEvent(data : bluetooth.PinRequiredParam) { // data为配对请求参数
    console.info('pin required = '+ JSON.stringify(data));
}
bluetooth.on('pinRequired', onReceiveEvent);

```

## on('stateChange')

```TypeScript
function on(type: 'stateChange', callback: Callback<BluetoothState>): void
```

Subscribe the event reported when the Bluetooth state changes.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.on#event:stateChange

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Type of the Bluetooth state changes event to listen for. |
| callback | Callback&lt;BluetoothState> | 是 | Callback used to listen for the Bluetooth state event. |

**示例：**

```TypeScript
function onReceiveEvent(data : bluetooth.BluetoothState) {
    console.info('bluetooth state = '+ JSON.stringify(data));
}
bluetooth.on('stateChange', onReceiveEvent);

```

## on('sppRead')

```TypeScript
function on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void
```

Subscribe the event reported when data is read from the socket.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.on#event:sppRead

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sppRead' | 是 | Type of the spp read event to listen for. |
| clientSocket | number | 是 | Client socket ID, which is obtained by sppAccept or sppConnect. |
| callback | Callback&lt;ArrayBuffer> | 是 | Callback used to listen for the spp read event. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let clientNumber = -1;
function clientSocket(code : BusinessError, number : number) {
  if (code == null || code.code != 0) {
    return;
  }
  console.info(`bluetooth serverSocket Number: ${number}`);
  // 获取的clientNumber用作客户端后续读/写操作socket的id。
  clientNumber = number;
}
function dataRead(dataBuffer : ArrayBuffer) {
  let data = new Uint8Array(dataBuffer);
}
bluetooth.on('sppRead', clientNumber, dataRead);

```

