# on

## on('bluetoothDeviceFind')

```TypeScript
function on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>): void
```

Subscribe the event reported when a remote Bluetooth device is discovered. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.connection/connection.on#event:bluetoothDeviceFind

**需要权限：** 

- API版本9 - 9： ohos.permission.USE_BLUETOOTH

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bluetoothDeviceFind' | 是 | Type of the discovering event to listen for. |
| callback | Callback&lt;Array&lt;string>> | 是 | Callback used to listen for the discovering event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
function onReceiveEvent(data: Array<string>) { // data为蓝牙设备地址集合
    console.info('bluetooth device find = '+ JSON.stringify(data));
}
try {
    bluetoothManager.on('bluetoothDeviceFind', onReceiveEvent);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## on('bondStateChange')

```TypeScript
function on(type: 'bondStateChange', callback: Callback<BondStateParam>): void
```

Subscribe the event reported when a remote Bluetooth device is bonded. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.connection/connection.on#event:bondStateChange

**需要权限：** 

- API版本9 - 9： ohos.permission.USE_BLUETOOTH

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bondStateChange' | 是 | Type of the bond state event to listen for. |
| callback | Callback&lt;BondStateParam> | 是 | Callback used to listen for the bond state event,  {@link BondStateParam}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
function onReceiveEvent(data: bluetoothManager.BondStateParam) { // data为回调函数入参，表示配对的状态
    console.info('pair state = '+ JSON.stringify(data));
}
try {
    bluetoothManager.on('bondStateChange', onReceiveEvent);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## on('pinRequired')

```TypeScript
function on(type: 'pinRequired', callback: Callback<PinRequiredParam>): void
```

Subscribe the event of a pairing request from a remote Bluetooth device. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.connection/connection.on#event:pinRequired

**需要权限：** 

- API版本9 - 9： ohos.permission.DISCOVER_BLUETOOTH

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'pinRequired' | 是 | Type of the pairing request event to listen for. |
| callback | Callback&lt;PinRequiredParam> | 是 | Callback used to listen for the pairing request event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
function onReceiveEvent(data: bluetoothManager.PinRequiredParam) { // data为配对请求参数
    console.info('pin required = '+ JSON.stringify(data));
}
try {
    bluetoothManager.on('pinRequired', onReceiveEvent);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## on('stateChange')

```TypeScript
function on(type: 'stateChange', callback: Callback<BluetoothState>): void
```

Subscribe the event reported when the Bluetooth state changes. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.access/access.on#event:stateChange

**需要权限：** 

- API版本9 - 9： ohos.permission.USE_BLUETOOTH

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Type of the Bluetooth state changes event to listen for. |
| callback | Callback&lt;BluetoothState> | 是 | Callback used to listen for the Bluetooth state event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
function onReceiveEvent(data: bluetoothManager.BluetoothState) {
    console.info('bluetooth state = '+ JSON.stringify(data));
}
try {
    bluetoothManager.on('stateChange', onReceiveEvent);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## on('sppRead')

```TypeScript
function on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void
```

Subscribe the event reported when data is read from the socket.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.socket/socket.on#event:sppRead

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sppRead' | 是 | Type of the spp read event to listen for. |
| clientSocket | number | 是 | Client socket ID, which is obtained by sppAccept or sppConnect. |
| callback | Callback&lt;ArrayBuffer> | 是 | Callback used to listen for the spp read event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2901054 | IO error. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let clientNumber = -1;
function clientSocket(code: BusinessError, number: number) {
  if (code == null || code.code != 0) {
    return;
  }
  console.info(`bluetooth serverSocket Number: ${number}`);
  // 获取的clientNumber用作客户端后续读/写操作socket的id。
  clientNumber = number;
}
function dataRead(dataBuffer: ArrayBuffer) {
  let data = new Uint8Array(dataBuffer);
  console.info(`bluetooth data is: ${data[0]}`);
}
try {
    bluetoothManager.on('sppRead', clientNumber, dataRead);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

