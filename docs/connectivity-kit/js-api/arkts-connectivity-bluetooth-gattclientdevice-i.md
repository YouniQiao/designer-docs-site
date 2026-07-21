# GattClientDevice

Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** GattClientDevice

<!--Device-bluetooth-interface GattClientDevice--><!--Device-bluetooth-interface GattClientDevice-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="close"></a>
## close

```TypeScript
close(): boolean
```

Disables a BLE peripheral device.

This method unregisters the device and clears the registered callbacks and handles.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** close

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-close(): boolean--><!--Device-GattClientDevice-close(): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the the device is disabled; returns {@code false} otherwise. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let ret : boolean = device.close();

```

<a id="connect"></a>
## connect

```TypeScript
connect(): boolean
```

Connects to a BLE peripheral device.

The 'BLEConnectionStateChange' event is subscribed to return the connection state.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** connect

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-connect(): boolean--><!--Device-GattClientDevice-connect(): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the connection process starts; returns {@code false} otherwise. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let ret : boolean = device.connect();

```

<a id="disconnect"></a>
## disconnect

```TypeScript
disconnect(): boolean
```

Disconnects from or stops an ongoing connection to a BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** disconnect

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-disconnect(): boolean--><!--Device-GattClientDevice-disconnect(): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the disconnection process starts; returns {@code false} otherwise. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let ret : boolean = device.disconnect();

```

<a id="getdevicename"></a>
## getDeviceName

```TypeScript
getDeviceName(callback: AsyncCallback<string>): void
```

Obtains the name of BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getDeviceName

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-getDeviceName(callback: AsyncCallback<string>): void--><!--Device-GattClientDevice-getDeviceName(callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to obtain the device name. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
// callback
let gattClient : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice("XX:XX:XX:XX:XX:XX");
let deviceName : void = gattClient.getDeviceName((err : BusinessError, data : string)=> {
    console.info('device name err ' + JSON.stringify(err));
    console.info('device name' + JSON.stringify(data));
})

```

<a id="getdevicename-1"></a>
## getDeviceName

```TypeScript
getDeviceName(): Promise<string>
```

Obtains the name of BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getDeviceName

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-getDeviceName(): Promise<string>--><!--Device-GattClientDevice-getDeviceName(): Promise<string>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns a string representation of the name if obtained;returns {@code null} if the name fails to be obtained or the name does not exist. |

**Example**

```TypeScript
// promise
let gattClient : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice("XX:XX:XX:XX:XX:XX");
gattClient.getDeviceName().then((data) => {
    console.info('device name' + JSON.stringify(data));
})

```

<a id="getrssivalue"></a>
## getRssiValue

```TypeScript
getRssiValue(callback: AsyncCallback<number>): void
```

Get the RSSI value of this BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getRssiValue

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-getRssiValue(callback: AsyncCallback<number>): void--><!--Device-GattClientDevice-getRssiValue(callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback invoked to return the RSSI, in dBm. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
// callback
let gattClient : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice("XX:XX:XX:XX:XX:XX");
let ret : boolean = gattClient.connect();
gattClient.getRssiValue((err : BusinessError, data : number)=> {
    console.info('rssi err ' + JSON.stringify(err));
    console.info('rssi value' + JSON.stringify(data));
})

```

<a id="getrssivalue-1"></a>
## getRssiValue

```TypeScript
getRssiValue(): Promise<number>
```

Get the RSSI value of this BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getRssiValue

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-getRssiValue(): Promise<number>--><!--Device-GattClientDevice-getRssiValue(): Promise<number>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the RSSI value. |

**Example**

```TypeScript
// promise
let gattClient : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice("XX:XX:XX:XX:XX:XX");
gattClient.getRssiValue().then((data : number) => {
    console.info('rssi' + JSON.stringify(data));
})

```

<a id="getservices"></a>
## getServices

```TypeScript
getServices(callback: AsyncCallback<Array<GattService>>): void
```

Starts discovering services.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getServices

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-getServices(callback: AsyncCallback<Array<GattService>>): void--><!--Device-GattClientDevice-getServices(callback: AsyncCallback<Array<GattService>>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;GattService&gt;&gt; | Yes | Callback used to catch the services. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// Callback mode.
function getServices(code : BusinessError, gattServices : Array<bluetooth.GattService>) {
  if (code.code == 0) {
      console.info(`bluetooth code is ${code.code}`);
      console.info(`bluetooth services size is ${gattServices.length}`);

      for (let i = 0; i < gattServices.length; i++) {
        console.info(`bluetooth serviceUuid is ${gattServices[i].serviceUuid}`);
      }
  }
}

let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
device.connect();
device.getServices(getServices);

```

<a id="getservices-1"></a>
## getServices

```TypeScript
getServices(): Promise<Array<GattService>>
```

Starts discovering services.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getServices

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-getServices(): Promise<Array<GattService>>--><!--Device-GattClientDevice-getServices(): Promise<Array<GattService>>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GattService&gt;&gt; | Returns the list of services {@link GattService} of the BLE peripheral device. |

**Example**

```TypeScript
// Promise
let device : bluetooth.GattClientDevice= bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
device.connect();
device.getServices().then((result : Array<bluetooth.GattService>) => {
    console.info("getServices successfully:" + JSON.stringify(result));
});

```

<a id="off"></a>
## off('BLECharacteristicChange')

```TypeScript
off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void
```

Unsubscribe characteristic value changed event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:BLECharacteristicChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void--><!--Device-GattClientDevice-off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLECharacteristicChange' | Yes | Type of the characteristic value changed event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BLECharacteristic&gt; | No | Callback used to listen for the characteristic value changed event. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
device.off('BLECharacteristicChange');

```

<a id="off-1"></a>
## off('BLEConnectionStateChange')

```TypeScript
off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectChangedState>): void
```

Unsubscribe client connection state changed event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:BLEConnectionStateChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectChangedState>): void--><!--Device-GattClientDevice-off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectChangedState>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLEConnectionStateChange' | Yes | Type of the connection state changed event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BLEConnectChangedState&gt; | No | Callback used to listen for the connection state changed event. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
device.off('BLEConnectionStateChange');

```

<a id="on"></a>
## on('BLECharacteristicChange')

```TypeScript
on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void
```

Subscribe characteristic value changed event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:BLECharacteristicChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void--><!--Device-GattClientDevice-on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLECharacteristicChange' | Yes | Type of the characteristic value changed event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BLECharacteristic&gt; | Yes | Callback used to listen for the characteristic value changed event. |

**Example**

```TypeScript
function CharacteristicChange(CharacteristicChangeReq : bluetooth.BLECharacteristic) {
  let serviceUuid : string = CharacteristicChangeReq.serviceUuid;
  let characteristicUuid : string = CharacteristicChangeReq.characteristicUuid;
  let value = new Uint8Array(CharacteristicChangeReq.characteristicValue);
}
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
device.on('BLECharacteristicChange', CharacteristicChange);

```

<a id="on-1"></a>
## on('BLEConnectionStateChange')

```TypeScript
on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectChangedState>): void
```

Subscribe client connection state changed event.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:BLEConnectionStateChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectChangedState>): void--><!--Device-GattClientDevice-on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectChangedState>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLEConnectionStateChange' | Yes | Type of the connection state changed event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BLEConnectChangedState&gt; | Yes | Callback used to listen for the connection state changed event. |

**Example**

```TypeScript
function ConnectStateChanged(state : bluetooth.BLEConnectChangedState) {
  console.info('bluetooth connect state changed');
  let connectState : bluetooth.ProfileConnectionState = state.state;
}
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
device.on('BLEConnectionStateChange', ConnectStateChanged);

```

<a id="readcharacteristicvalue"></a>
## readCharacteristicValue

```TypeScript
readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void
```

Reads the characteristic of a BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** readCharacteristicValue

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void--><!--Device-GattClientDevice-readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characteristic | [BLECharacteristic](arkts-connectivity-bluetooth-blecharacteristic-i.md) | Yes | Indicates the characteristic to read. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;BLECharacteristic&gt; | Yes | Callback invoked to return the characteristic value read. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function readCcc(code : BusinessError, BLECharacteristic : bluetooth.BLECharacteristic) {
  if (code.code != 0) {
      return;
  }
  console.info(`bluetooth characteristic uuid: ${BLECharacteristic.characteristicUuid}`);
  let value = new Uint8Array(BLECharacteristic.characteristicValue);
}

let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let descriptors : Array<bluetooth.BLEDescriptor> = [];
let bufferDesc : ArrayBuffer = new ArrayBuffer(8);
let descV : Uint8Array = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
descriptors[0] = descriptor;

let bufferCCC = new ArrayBuffer(8);
let cccV = new Uint8Array(bufferCCC);
cccV[0] = 1;
let characteristic : bluetooth.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
characteristicValue: bufferCCC, descriptors:descriptors};

device.readCharacteristicValue(characteristic, readCcc);

```

<a id="readcharacteristicvalue-1"></a>
## readCharacteristicValue

```TypeScript
readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>
```

Reads the characteristic of a BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** readCharacteristicValue

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>--><!--Device-GattClientDevice-readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characteristic | [BLECharacteristic](arkts-connectivity-bluetooth-blecharacteristic-i.md) | Yes | Indicates the characteristic to read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BLECharacteristic&gt; | - Promise used to return the characteristic value read. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let descriptors : Array<bluetooth.BLEDescriptor> = [];
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
descriptors[0] = descriptor;

let bufferCCC = new ArrayBuffer(8);
let cccV = new Uint8Array(bufferCCC);
cccV[0] = 1;
let characteristic : bluetooth.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
characteristicValue: bufferCCC, descriptors:descriptors};

device.readCharacteristicValue(characteristic);

```

<a id="readdescriptorvalue"></a>
## readDescriptorValue

```TypeScript
readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void
```

Reads the descriptor of a BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** readDescriptorValue

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void--><!--Device-GattClientDevice-readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [BLEDescriptor](arkts-connectivity-bluetooth-bledescriptor-i.md) | Yes | Indicates the descriptor to read. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;BLEDescriptor&gt; | Yes | Callback invoked to return the descriptor read. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function readDesc(code : BusinessError, BLEDescriptor : bluetooth.BLEDescriptor) {
  if (code.code != 0) {
      return;
  }
  console.info(`bluetooth descriptor uuid: ${BLEDescriptor.descriptorUuid}`);
  let value = new Uint8Array(BLEDescriptor.descriptorValue);
}

let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
device.readDescriptorValue(descriptor, readDesc);

```

<a id="readdescriptorvalue-1"></a>
## readDescriptorValue

```TypeScript
readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>
```

Reads the descriptor of a BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** readDescriptorValue

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>--><!--Device-GattClientDevice-readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [BLEDescriptor](arkts-connectivity-bluetooth-bledescriptor-i.md) | Yes | Indicates the descriptor to read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BLEDescriptor&gt; | - Promise used to return the descriptor read. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
device.readDescriptorValue(descriptor);

```

<a id="setblemtusize"></a>
## setBLEMtuSize

```TypeScript
setBLEMtuSize(mtu: number): boolean
```

Set the mtu size of a BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setBLEMtuSize

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-setBLEMtuSize(mtu: number): boolean--><!--Device-GattClientDevice-setBLEMtuSize(mtu: number): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mtu | number | Yes | The maximum transmission unit. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the set mtu is successfully; returns {@code false} otherwise. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
device.setBLEMtuSize(128);

```

<a id="setnotifycharacteristicchanged"></a>
## setNotifyCharacteristicChanged

```TypeScript
setNotifyCharacteristicChanged(characteristic: BLECharacteristic, enable: boolean): boolean
```

Enables or disables notification of a characteristic when value changed.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setNotifyCharacteristicChanged

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-setNotifyCharacteristicChanged(characteristic: BLECharacteristic, enable: boolean): boolean--><!--Device-GattClientDevice-setNotifyCharacteristicChanged(characteristic: BLECharacteristic, enable: boolean): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characteristic | [BLECharacteristic](arkts-connectivity-bluetooth-blecharacteristic-i.md) | Yes | BLE characteristic to listen for. |
| enable | boolean | Yes | Specifies whether to enable notification of the characteristic. The value{@code true} indicates that notification is enabled, and the value {@code false} indicates that notification is disabled. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if notification of the characteristic is enabled or disabled;returns {@code false} otherwise. |

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
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
device.setNotifyCharacteristicChanged(characteristic, false);

```

<a id="writecharacteristicvalue"></a>
## writeCharacteristicValue

```TypeScript
writeCharacteristicValue(characteristic: BLECharacteristic): boolean
```

Writes the characteristic of a BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** writeCharacteristicValue

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-writeCharacteristicValue(characteristic: BLECharacteristic): boolean--><!--Device-GattClientDevice-writeCharacteristicValue(characteristic: BLECharacteristic): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characteristic | [BLECharacteristic](arkts-connectivity-bluetooth-blecharacteristic-i.md) | Yes | Indicates the characteristic to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the characteristic is written successfully; returns {@code false}otherwise. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let descriptors : Array<bluetooth.BLEDescriptor> = [];
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
descriptors[0] = descriptor;

let bufferCCC = new ArrayBuffer(8);
let cccV = new Uint8Array(bufferCCC);
cccV[0] = 1;
let characteristic : bluetooth.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  characteristicValue: bufferCCC, descriptors:descriptors};
let retWriteCcc : boolean = device.writeCharacteristicValue(characteristic);
if (retWriteCcc) {
  console.info('write characteristic successfully');
} else {
  console.error('write characteristic failed');
}

```

<a id="writedescriptorvalue"></a>
## writeDescriptorValue

```TypeScript
writeDescriptorValue(descriptor: BLEDescriptor): boolean
```

Writes the descriptor of a BLE peripheral device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** writeDescriptorValue

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-GattClientDevice-writeDescriptorValue(descriptor: BLEDescriptor): boolean--><!--Device-GattClientDevice-writeDescriptorValue(descriptor: BLEDescriptor): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [BLEDescriptor](arkts-connectivity-bluetooth-bledescriptor-i.md) | Yes | Indicates the descriptor to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the descriptor is written successfully; returns {@code false}otherwise. |

**Example**

```TypeScript
let device : bluetooth.GattClientDevice = bluetooth.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 22;
let descriptor : bluetooth.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
  descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
let retWriteDesc : boolean = device.writeDescriptorValue(descriptor);
if (retWriteDesc) {
  console.info('bluetooth write descriptor successfully');
} else {
  console.error('bluetooth write descriptor failed');
}

```

