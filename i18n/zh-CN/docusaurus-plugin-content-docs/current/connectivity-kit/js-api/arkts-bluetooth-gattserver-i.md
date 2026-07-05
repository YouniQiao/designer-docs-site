# GattServer

Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## addService

```TypeScript
addService(service: GattService): boolean
```

Adds a specified service to be hosted. The added service and its characteristics are provided by the local device.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer#addService

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| service | GattService | 是 | Indicates the service to add. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the service is added; returns {@code false} otherwise. |

**示例：**

```TypeScript
// 创建descriptors
let descriptors : Array<bluetooth.BLEDescriptor> = [];
let arrayBuffer = new ArrayBuffer(8);
let descV = new Uint8Array(arrayBuffer);
descV[0] = 11;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB', descriptorValue: arrayBuffer};
descriptors[0] = descriptor;

// 创建characteristics
let characteristics : Array<bluetooth.BLECharacteristic> = [];
let arrayBufferC = new ArrayBuffer(8);
let cccV = new Uint8Array(arrayBufferC);
cccV[0] = 1;
let characteristic : bluetooth.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB', characteristicValue: arrayBufferC, descriptors:descriptors};
let characteristicN : bluetooth.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001821-0000-1000-8000-00805F9B34FB', characteristicValue: arrayBufferC, descriptors:descriptors};
characteristics[0] = characteristic;

// 创建gattService
let gattService : bluetooth.GattService = {serviceUuid:'00001810-0000-1000-8000-00805F9B34FB', isPrimary: true, characteristics:characteristics, includeServices:[]};

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
let ret : boolean = gattServer.addService(gattService);
if (ret) {
   console.info("add service successfully");
} else {
   console.error("add service failed");
}

```

## close

```TypeScript
close(): void
```

Closes this {@code GattServer} object and unregisters its callbacks.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer#close

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**示例：**

```TypeScript
let server : bluetooth.GattServer = bluetooth.BLE.createGattServer();
server.close();

```

## notifyCharacteristicChanged

```TypeScript
notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): boolean
```

Sends a notification of a change in a specified local characteristic. This method should be called for every BLE peripheral device that has requested notifications.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer#notifyCharacteristicChanged

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates the address of the BLE peripheral device to receive the notification. |
| notifyCharacteristic | NotifyCharacteristic | 是 | Indicates the local characteristic that has changed. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the notification is sent successfully; returns {@code false}  otherwise. |

**示例：**

```TypeScript
// 创建descriptors
let descriptors : Array<bluetooth.BLEDescriptor> = [];
let arrayBuffer = new ArrayBuffer(8);
let descV = new Uint8Array(arrayBuffer);
descV[0] = 11;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB', descriptorValue: arrayBuffer};
descriptors[0] = descriptor;
let arrayBufferC = new ArrayBuffer(8);
let characteristic : bluetooth.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB', characteristicValue: arrayBufferC, descriptors:descriptors};
let notifyCharacteristic : bluetooth.NotifyCharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001821-0000-1000-8000-00805F9B34FB', characteristicValue: characteristic.characteristicValue, confirm: false};
let server : bluetooth.GattServer = bluetooth.BLE.createGattServer();
server.notifyCharacteristicChanged('XX:XX:XX:XX:XX:XX', notifyCharacteristic);

```

## off('characteristicRead')

```TypeScript
off(type: 'characteristicRead', callback?: Callback<CharacteristicReadReq>): void
```

Unsubscribe characteristic read event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.off#event:characteristicRead

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'characteristicRead' | 是 | Type of the characteristic read event to listen for. |
| callback | Callback&lt;CharacteristicReadReq> | 否 | Callback used to listen for the characteristic read event. |

**示例：**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("characteristicRead");

```

## off('characteristicWrite')

```TypeScript
off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteReq>): void
```

Unsubscribe characteristic write event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.off#event:characteristicWrite

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'characteristicWrite' | 是 | Type of the characteristic write event to listen for. |
| callback | Callback&lt;CharacteristicWriteReq> | 否 | Callback used to listen for the characteristic write  event. |

**示例：**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("characteristicWrite");

```

## off('descriptorRead')

```TypeScript
off(type: 'descriptorRead', callback?: Callback<DescriptorReadReq>): void
```

Unsubscribe descriptor read event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.off#event:descriptorRead

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'descriptorRead' | 是 | Type of the descriptor read event to listen for. |
| callback | Callback&lt;DescriptorReadReq> | 否 | Callback used to listen for the descriptor read event. |

**示例：**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("descriptorRead");

```

## off('descriptorWrite')

```TypeScript
off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteReq>): void
```

Unsubscribe descriptor write event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.off#event:descriptorWrite

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'descriptorWrite' | 是 | Type of the descriptor write event to listen for. |
| callback | Callback&lt;DescriptorWriteReq> | 否 | Callback used to listen for the descriptor write event. |

**示例：**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("descriptorWrite");

```

## off('connectStateChange')

```TypeScript
off(type: 'connectStateChange', callback?: Callback<BLEConnectChangedState>): void
```

Unsubscribe server connection state changed event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.off#event:connectStateChange

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connectStateChange' | 是 | Type of the connection state changed event to listen for. |
| callback | Callback&lt;BLEConnectChangedState> | 否 | Callback used to listen for the connection state changed  event. |

**示例：**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("connectStateChange");

```

## on('characteristicRead')

```TypeScript
on(type: 'characteristicRead', callback: Callback<CharacteristicReadReq>): void
```

Subscribe characteristic read event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.on#event:characteristicRead

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'characteristicRead' | 是 | Type of the characteristic read event to listen for. |
| callback | Callback&lt;CharacteristicReadReq> | 是 | Callback used to listen for the characteristic read event. |

**示例：**

```TypeScript
let arrayBufferCCC = new ArrayBuffer(8);
let cccValue = new Uint8Array(arrayBufferCCC);
cccValue[0] = 1;
function ReadCharacteristicReq(CharacteristicReadReq : bluetooth.CharacteristicReadReq) {
  let deviceId : string = CharacteristicReadReq.deviceId;
  let transId : number = CharacteristicReadReq.transId;
  let offset : number = CharacteristicReadReq.offset;
  let characteristicUuid : string = CharacteristicReadReq.characteristicUuid;

  let serverResponse : bluetooth.ServerResponse = {deviceId: deviceId, transId: transId, status: 0, 
  offset: offset, value:arrayBufferCCC};

  let ret : boolean = gattServer.sendResponse(serverResponse);
  if (ret) {
    console.info('bluetooth sendResponse successfully');
  } else {
    console.error('bluetooth sendResponse failed');
  }
}

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.on("characteristicRead", ReadCharacteristicReq);

```

## on('characteristicWrite')

```TypeScript
on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteReq>): void
```

Subscribe characteristic write event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.on#event:characteristicWrite

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'characteristicWrite' | 是 | Type of the characteristic write event to listen for. |
| callback | Callback&lt;CharacteristicWriteReq> | 是 | Callback used to listen for the characteristic write  event. |

**示例：**

```TypeScript
let arrayBufferCCC = new ArrayBuffer(8);
let cccValue = new Uint8Array(arrayBufferCCC);
function WriteCharacteristicReq(CharacteristicWriteReq : bluetooth.CharacteristicWriteReq) {
  let deviceId : string = CharacteristicWriteReq.deviceId;
  let transId : number = CharacteristicWriteReq.transId;
  let offset : number = CharacteristicWriteReq.offset;
  let isPrep : boolean = CharacteristicWriteReq.isPrep;
  let needRsp : boolean = CharacteristicWriteReq.needRsp;
  let value =  new Uint8Array(arrayBufferCCC);
  let characteristicUuid : string = CharacteristicWriteReq.characteristicUuid;

  cccValue.set(new Uint8Array(value));
  let serverResponse : bluetooth.ServerResponse = {deviceId: deviceId, transId: transId, status: 0, 
  offset: offset, value:arrayBufferCCC};

  let ret : boolean = gattServer.sendResponse(serverResponse);
  if (ret) {
    console.info('bluetooth sendResponse successfully');
  } else {
    console.error('bluetooth sendResponse failed');
  }
}

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.on("characteristicWrite", WriteCharacteristicReq);

```

## on('descriptorRead')

```TypeScript
on(type: 'descriptorRead', callback: Callback<DescriptorReadReq>): void
```

Subscribe descriptor read event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.on#event:descriptorRead

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'descriptorRead' | 是 | Type of the descriptor read event to listen for. |
| callback | Callback&lt;DescriptorReadReq> | 是 | Callback used to listen for the descriptor read event. |

**示例：**

```TypeScript
let arrayBufferDesc = new ArrayBuffer(8);
let descValue = new Uint8Array(arrayBufferDesc);
descValue[0] = 1;
function ReadDescriptorReq(DescriptorReadReq : bluetooth.DescriptorReadReq) {
  let deviceId : string = DescriptorReadReq.deviceId;
  let transId : number = DescriptorReadReq.transId;
  let offset : number = DescriptorReadReq.offset;
  let descriptorUuid : string = DescriptorReadReq.descriptorUuid;

  let serverResponse : bluetooth.ServerResponse = {deviceId: deviceId, transId: transId, status: 0, 
  offset: offset, value:arrayBufferDesc};

  let ret : boolean = gattServer.sendResponse(serverResponse);
  if (ret) {
    console.info('bluetooth sendResponse successfully');
  } else {
    console.error('bluetooth sendResponse failed');
  }
}

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.on("descriptorRead", ReadDescriptorReq);

```

## on('descriptorWrite')

```TypeScript
on(type: 'descriptorWrite', callback: Callback<DescriptorWriteReq>): void
```

Subscribe descriptor write event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.on#event:descriptorWrite

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'descriptorWrite' | 是 | Type of the descriptor write event to listen for. |
| callback | Callback&lt;DescriptorWriteReq> | 是 | Callback used to listen for the descriptor write event. |

**示例：**

```TypeScript
let arrayBufferDesc = new ArrayBuffer(8);
let descValue = new Uint8Array(arrayBufferDesc);
function WriteDescriptorReq(DescriptorWriteReq : bluetooth.DescriptorWriteReq) {
  let deviceId : string = DescriptorWriteReq.deviceId;
  let transId : number = DescriptorWriteReq.transId;
  let offset : number = DescriptorWriteReq.offset;
  let isPrep : boolean = DescriptorWriteReq.isPrep;
  let needRsp : boolean = DescriptorWriteReq.needRsp;
  let value = new Uint8Array(arrayBufferDesc);
  let descriptorUuid : string = DescriptorWriteReq.descriptorUuid;

  descValue.set(new Uint8Array(value));
  let serverResponse : bluetooth.ServerResponse = {deviceId: deviceId, transId: transId, status: 0, offset: offset, value:arrayBufferDesc};

  let ret : boolean = gattServer.sendResponse(serverResponse);
  if (ret) {
    console.info('bluetooth sendResponse successfully');
  } else {
    console.error('bluetooth sendResponse failed');
  }
}

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.on("descriptorWrite", WriteDescriptorReq);

```

## on('connectStateChange')

```TypeScript
on(type: 'connectStateChange', callback: Callback<BLEConnectChangedState>): void
```

Subscribe server connection state changed event.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer.on#event:connectStateChange

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connectStateChange' | 是 | Type of the connection state changed event to listen for. |
| callback | Callback&lt;BLEConnectChangedState> | 是 | Callback used to listen for the connection state changed  event. |

**示例：**

```TypeScript
function Connected(BLEConnectChangedState : bluetooth.BLEConnectChangedState) {
  let deviceId : string = BLEConnectChangedState.deviceId;
  let status : bluetooth.ProfileConnectionState = BLEConnectChangedState.state;
}

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.on("connectStateChange", Connected);

```

## removeService

```TypeScript
removeService(serviceUuid: string): boolean
```

Removes a specified service from the list of GATT services provided by this device.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer#removeService

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| serviceUuid | string | 是 | Indicates the UUID of the service to remove. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the service is removed; returns {@code false} otherwise. |

**示例：**

```TypeScript
let server : bluetooth.GattServer = bluetooth.BLE.createGattServer();
server.removeService('00001810-0000-1000-8000-00805F9B34FB');

```

## sendResponse

```TypeScript
sendResponse(serverResponse: ServerResponse): boolean
```

Sends a response to a specified read or write request to a given BLE peripheral device.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer#sendResponse

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| serverResponse | ServerResponse | 是 | Indicates the response parameters {@link ServerResponse}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the response is sent successfully; returns {@code false} otherwise. |

**示例：**

```TypeScript
/* send response */
let arrayBufferCCC = new ArrayBuffer(8);
let cccValue = new Uint8Array(arrayBufferCCC);
cccValue[0] = 1;
let serverResponse : bluetooth.ServerResponse = {
    "deviceId": "XX:XX:XX:XX:XX:XX",
    "transId": 0,
    "status": 0,
    "offset": 0,
    "value": arrayBufferCCC,
};

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
let ret : boolean = gattServer.sendResponse(serverResponse);
if (ret) {
  console.info('bluetooth sendResponse successfully');
} else {
  console.error('bluetooth sendResponse failed');
}

```

## startAdvertising

```TypeScript
startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void
```

Starts BLE advertising.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer#startAdvertising

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| setting | AdvertiseSetting | 是 | Indicates the settings for BLE advertising.  If you need to use the default value, set this parameter to {@code null}. |
| advData | AdvertiseData | 是 | Indicates the advertising data. |
| advResponse | AdvertiseData | 否 | Indicates the scan response associated with the advertising data. |

**示例：**

```TypeScript
let manufactureValueBuffer = new Uint8Array(4);
manufactureValueBuffer[0] = 1;
manufactureValueBuffer[1] = 2;
manufactureValueBuffer[2] = 3;
manufactureValueBuffer[3] = 4;

let serviceValueBuffer = new Uint8Array(4);
serviceValueBuffer[0] = 4;
serviceValueBuffer[1] = 6;
serviceValueBuffer[2] = 7;
serviceValueBuffer[3] = 8;
console.info('manufactureValueBuffer = '+ JSON.stringify(manufactureValueBuffer));
console.info('serviceValueBuffer = '+ JSON.stringify(serviceValueBuffer));
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
let setting : bluetooth.AdvertiseSetting = {
    interval:150,
    txPower:60,
    connectable:true,
}

let manufactureData : bluetooth.ManufactureData = {
    manufactureId:4567,
    manufactureValue:manufactureValueBuffer.buffer
}

let serviceData : bluetooth.ServiceData = {
    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
    serviceValue:serviceValueBuffer.buffer
}

let advData : bluetooth.AdvertiseData = {
    serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
    manufactureData:[manufactureData],
    serviceData:[serviceData],
}

let advResponse : bluetooth.AdvertiseData = {
    serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
    manufactureData:[manufactureData],
    serviceData:[serviceData],
}
gattServer.startAdvertising(setting, advData, advResponse);

```

## stopAdvertising

```TypeScript
stopAdvertising(): void
```

Stops BLE advertising.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.GattServer#stopAdvertising

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**示例：**

```TypeScript
let server : bluetooth.GattServer = bluetooth.BLE.createGattServer();
server.stopAdvertising();

```

