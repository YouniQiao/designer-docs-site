# GattServer

Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** GattServer

<!--Device-bluetooth-interface GattServer--><!--Device-bluetooth-interface GattServer-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="addservice"></a>
## addService

```TypeScript
addService(service: GattService): boolean
```

Adds a specified service to be hosted.The added service and its characteristics are provided by the local device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** addService

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-addService(service: GattService): boolean--><!--Device-GattServer-addService(service: GattService): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| service | [GattService](arkts-connectivity-bluetoothmanager-gattservice-i.md) | Yes | Indicates the service to add. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the service is added; returns {@code false} otherwise. |

**Example**

```TypeScript
// Create descriptors.
let descriptors : Array<bluetooth.BLEDescriptor> = [];
let arrayBuffer = new ArrayBuffer(8);
let descV = new Uint8Array(arrayBuffer);
descV[0] = 11;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB', descriptorValue: arrayBuffer};
descriptors[0] = descriptor;

// Create characteristics.
let characteristics : Array<bluetooth.BLECharacteristic> = [];
let arrayBufferC = new ArrayBuffer(8);
let cccV = new Uint8Array(arrayBufferC);
cccV[0] = 1;
let characteristic : bluetooth.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB', characteristicValue: arrayBufferC, descriptors:descriptors};
let characteristicN : bluetooth.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001821-0000-1000-8000-00805F9B34FB', characteristicValue: arrayBufferC, descriptors:descriptors};
characteristics[0] = characteristic;

// Create a gattService instance.
let gattService : bluetooth.GattService = {serviceUuid:'00001810-0000-1000-8000-00805F9B34FB', isPrimary: true, characteristics:characteristics, includeServices:[]};

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
let ret : boolean = gattServer.addService(gattService);
if (ret) {
   console.info("add service successfully");
} else {
   console.error("add service failed");
}

```

<a id="close"></a>
## close

```TypeScript
close(): void
```

Closes this {@code GattServer} object and unregisters its callbacks.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** close

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-close(): void--><!--Device-GattServer-close(): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Example**

```TypeScript
let server : bluetooth.GattServer = bluetooth.BLE.createGattServer();
server.close();

```

<a id="notifycharacteristicchanged"></a>
## notifyCharacteristicChanged

```TypeScript
notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): boolean
```

Sends a notification of a change in a specified local characteristic.

This method should be called for every BLE peripheral device that has requested notifications.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** notifyCharacteristicChanged

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): boolean--><!--Device-GattServer-notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates the address of the BLE peripheral device to receive the notification. |
| notifyCharacteristic | [NotifyCharacteristic](arkts-connectivity-ble-notifycharacteristic-i.md) | Yes | Indicates the local characteristic that has changed. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the notification is sent successfully; returns {@code false}otherwise. |

**Example**

```TypeScript
// Create descriptors.
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

<a id="off"></a>
## off('characteristicRead')

```TypeScript
off(type: 'characteristicRead', callback?: Callback<CharacteristicReadReq>): void
```

Unsubscribe characteristic read event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:characteristicRead

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-off(type: 'characteristicRead', callback?: Callback<CharacteristicReadReq>): void--><!--Device-GattServer-off(type: 'characteristicRead', callback?: Callback<CharacteristicReadReq>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'characteristicRead' | Yes | Type of the characteristic read event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CharacteristicReadReq&gt; | No | Callback used to listen for the characteristic read event. |

**Example**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("characteristicRead");

```

<a id="off-1"></a>
## off('characteristicWrite')

```TypeScript
off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteReq>): void
```

Unsubscribe characteristic write event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:characteristicWrite

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteReq>): void--><!--Device-GattServer-off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteReq>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'characteristicWrite' | Yes | Type of the characteristic write event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CharacteristicWriteReq&gt; | No | Callback used to listen for the characteristic write event. |

**Example**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("characteristicWrite");

```

<a id="off-2"></a>
## off('descriptorRead')

```TypeScript
off(type: 'descriptorRead', callback?: Callback<DescriptorReadReq>): void
```

Unsubscribe descriptor read event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:descriptorRead

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-off(type: 'descriptorRead', callback?: Callback<DescriptorReadReq>): void--><!--Device-GattServer-off(type: 'descriptorRead', callback?: Callback<DescriptorReadReq>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'descriptorRead' | Yes | Type of the descriptor read event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DescriptorReadReq&gt; | No | Callback used to listen for the descriptor read event. |

**Example**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("descriptorRead");

```

<a id="off-3"></a>
## off('descriptorWrite')

```TypeScript
off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteReq>): void
```

Unsubscribe descriptor write event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:descriptorWrite

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteReq>): void--><!--Device-GattServer-off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteReq>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'descriptorWrite' | Yes | Type of the descriptor write event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DescriptorWriteReq&gt; | No | Callback used to listen for the descriptor write event. |

**Example**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("descriptorWrite");

```

<a id="off-4"></a>
## off('connectStateChange')

```TypeScript
off(type: 'connectStateChange', callback?: Callback<BLEConnectChangedState>): void
```

Unsubscribe server connection state changed event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:connectStateChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-off(type: 'connectStateChange', callback?: Callback<BLEConnectChangedState>): void--><!--Device-GattServer-off(type: 'connectStateChange', callback?: Callback<BLEConnectChangedState>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectStateChange' | Yes | Type of the connection state changed event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BLEConnectChangedState&gt; | No | Callback used to listen for the connection state changed event. |

**Example**

```TypeScript
let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.off("connectStateChange");

```

<a id="on"></a>
## on('characteristicRead')

```TypeScript
on(type: 'characteristicRead', callback: Callback<CharacteristicReadReq>): void
```

Subscribe characteristic read event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:characteristicRead

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-on(type: 'characteristicRead', callback: Callback<CharacteristicReadReq>): void--><!--Device-GattServer-on(type: 'characteristicRead', callback: Callback<CharacteristicReadReq>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'characteristicRead' | Yes | Type of the characteristic read event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CharacteristicReadReq&gt; | Yes | Callback used to listen for the characteristic read event. |

**Example**

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

<a id="on-1"></a>
## on('characteristicWrite')

```TypeScript
on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteReq>): void
```

Subscribe characteristic write event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:characteristicWrite

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteReq>): void--><!--Device-GattServer-on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteReq>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'characteristicWrite' | Yes | Type of the characteristic write event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CharacteristicWriteReq&gt; | Yes | Callback used to listen for the characteristic write event. |

**Example**

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

<a id="on-2"></a>
## on('descriptorRead')

```TypeScript
on(type: 'descriptorRead', callback: Callback<DescriptorReadReq>): void
```

Subscribe descriptor read event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:descriptorRead

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-on(type: 'descriptorRead', callback: Callback<DescriptorReadReq>): void--><!--Device-GattServer-on(type: 'descriptorRead', callback: Callback<DescriptorReadReq>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'descriptorRead' | Yes | Type of the descriptor read event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DescriptorReadReq&gt; | Yes | Callback used to listen for the descriptor read event. |

**Example**

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

<a id="on-3"></a>
## on('descriptorWrite')

```TypeScript
on(type: 'descriptorWrite', callback: Callback<DescriptorWriteReq>): void
```

Subscribe descriptor write event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:descriptorWrite

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-on(type: 'descriptorWrite', callback: Callback<DescriptorWriteReq>): void--><!--Device-GattServer-on(type: 'descriptorWrite', callback: Callback<DescriptorWriteReq>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'descriptorWrite' | Yes | Type of the descriptor write event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DescriptorWriteReq&gt; | Yes | Callback used to listen for the descriptor write event. |

**Example**

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

<a id="on-4"></a>
## on('connectStateChange')

```TypeScript
on(type: 'connectStateChange', callback: Callback<BLEConnectChangedState>): void
```

Subscribe server connection state changed event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:connectStateChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-on(type: 'connectStateChange', callback: Callback<BLEConnectChangedState>): void--><!--Device-GattServer-on(type: 'connectStateChange', callback: Callback<BLEConnectChangedState>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectStateChange' | Yes | Type of the connection state changed event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BLEConnectChangedState&gt; | Yes | Callback used to listen for the connection state changed event. |

**Example**

```TypeScript
function Connected(BLEConnectChangedState : bluetooth.BLEConnectChangedState) {
  let deviceId : string = BLEConnectChangedState.deviceId;
  let status : bluetooth.ProfileConnectionState = BLEConnectChangedState.state;
}

let gattServer : bluetooth.GattServer = bluetooth.BLE.createGattServer();
gattServer.on("connectStateChange", Connected);

```

<a id="removeservice"></a>
## removeService

```TypeScript
removeService(serviceUuid: string): boolean
```

Removes a specified service from the list of GATT services provided by this device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** removeService

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-removeService(serviceUuid: string): boolean--><!--Device-GattServer-removeService(serviceUuid: string): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serviceUuid | string | Yes | Indicates the UUID of the service to remove. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the service is removed; returns {@code false} otherwise. |

**Example**

```TypeScript
let server : bluetooth.GattServer = bluetooth.BLE.createGattServer();
server.removeService('00001810-0000-1000-8000-00805F9B34FB');

```

<a id="sendresponse"></a>
## sendResponse

```TypeScript
sendResponse(serverResponse: ServerResponse): boolean
```

Sends a response to a specified read or write request to a given BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** sendResponse

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattServer-sendResponse(serverResponse: ServerResponse): boolean--><!--Device-GattServer-sendResponse(serverResponse: ServerResponse): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serverResponse | [ServerResponse](arkts-connectivity-ssap-serverresponse-i.md) | Yes | Indicates the response parameters {@link ServerResponse}. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the response is sent successfully; returns {@code false} otherwise. |

**Example**

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

<a id="startadvertising"></a>
## startAdvertising

```TypeScript
startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void
```

Starts BLE advertising.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** startAdvertising

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-GattServer-startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void--><!--Device-GattServer-startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | [AdvertiseSetting](arkts-connectivity-ble-advertisesetting-i.md) | Yes | Indicates the settings for BLE advertising.If you need to use the default value, set this parameter to {@code null}. |
| advData | [AdvertiseData](arkts-connectivity-ble-advertisedata-i.md) | Yes | Indicates the advertising data. |
| advResponse | [AdvertiseData](arkts-connectivity-ble-advertisedata-i.md) | No | Indicates the scan response associated with the advertising data. |

**Example**

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

<a id="stopadvertising"></a>
## stopAdvertising

```TypeScript
stopAdvertising(): void
```

Stops BLE advertising.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** stopAdvertising

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-GattServer-stopAdvertising(): void--><!--Device-GattServer-stopAdvertising(): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Example**

```TypeScript
let server : bluetooth.GattServer = bluetooth.BLE.createGattServer();
server.stopAdvertising();

```

