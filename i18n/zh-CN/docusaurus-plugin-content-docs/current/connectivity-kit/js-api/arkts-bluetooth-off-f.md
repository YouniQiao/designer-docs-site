# off

## off('bluetoothDeviceFind')

```TypeScript
function off(type: 'bluetoothDeviceFind', callback?: Callback<Array<string>>): void
```

Unsubscribe the event reported when a remote Bluetooth device is discovered.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.off#event:bluetoothDeviceFind

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bluetoothDeviceFind' | 是 | Type of the discovering event to listen for. |
| callback | Callback&lt;Array&lt;string>> | 否 | Callback used to listen for the discovering event. |

**示例：**

```TypeScript
function onReceiveEvent(data : Array<string>) {
    console.info('bluetooth device find = '+ JSON.stringify(data));
}
bluetooth.on('bluetoothDeviceFind', onReceiveEvent);
bluetooth.off('bluetoothDeviceFind', onReceiveEvent);

```

## off('bondStateChange')

```TypeScript
function off(type: 'bondStateChange', callback?: Callback<BondStateParam>): void
```

Unsubscribe the event reported when a remote Bluetooth device is bonded.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.off#event:bondStateChange

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bondStateChange' | 是 | Type of the bond state event to listen for. |
| callback | Callback&lt;BondStateParam> | 否 | Callback used to listen for the bond state event. |

**示例：**

```TypeScript
function onReceiveEvent(data : bluetooth.BondStateParam) {
    console.info('bond state = '+ JSON.stringify(data));
}
bluetooth.on('bondStateChange', onReceiveEvent);
bluetooth.off('bondStateChange', onReceiveEvent);

```

## off('pinRequired')

```TypeScript
function off(type: 'pinRequired', callback?: Callback<PinRequiredParam>): void
```

Unsubscribe the event of a pairing request from a remote Bluetooth device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.off#event:pinRequired

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'pinRequired' | 是 | Type of the pairing request event to listen for. |
| callback | Callback&lt;PinRequiredParam> | 否 | Callback used to listen for the pairing request event. |

**示例：**

```TypeScript
function onReceiveEvent(data : bluetooth.PinRequiredParam) {
    console.info('pin required = '+ JSON.stringify(data));
}
bluetooth.on('pinRequired', onReceiveEvent);
bluetooth.off('pinRequired', onReceiveEvent);

```

## off('stateChange')

```TypeScript
function off(type: 'stateChange', callback?: Callback<BluetoothState>): void
```

Unsubscribe the event reported when the Bluetooth state changes.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.off#event:stateChange

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Type of the Bluetooth state changes event to listen for. |
| callback | Callback&lt;BluetoothState> | 否 | Callback used to listen for the Bluetooth state event. |

**示例：**

```TypeScript
function onReceiveEvent(data : bluetooth.BluetoothState) {
    console.info('bluetooth state = '+ JSON.stringify(data));
}
bluetooth.on('stateChange', onReceiveEvent);
bluetooth.off('stateChange', onReceiveEvent);

```

## off('sppRead')

```TypeScript
function off(type: 'sppRead', clientSocket: number, callback?: Callback<ArrayBuffer>): void
```

Unsubscribe the event reported when data is read from the socket.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.off#event:sppRead

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sppRead' | 是 | Type of the spp read event to listen for. |
| clientSocket | number | 是 | Client socket ID, which is obtained by sppAccept or sppConnect. |
| callback | Callback&lt;ArrayBuffer> | 否 | Callback used to listen for the spp read event. |

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
bluetooth.off('sppRead', clientNumber);

```

