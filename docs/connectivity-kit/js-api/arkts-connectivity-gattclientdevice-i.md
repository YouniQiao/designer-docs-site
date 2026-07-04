# GattClientDevice

Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** GattClientDevice

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@ohos.bluetoothManager';
```

## close

```TypeScript
close(): void
```

Disables a BLE peripheral device. This method unregisters the device and clears the registered callbacks and handles. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** close

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.close();
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## connect

```TypeScript
connect(): void
```

Connects to a BLE peripheral device. The 'BLEConnectionStateChange' event is subscribed to return the connection state. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** connect

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.connect();
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## disconnect

```TypeScript
disconnect(): void
```

Disconnects from or stops an ongoing connection to a BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** disconnect

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.disconnect();
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## getDeviceName

```TypeScript
getDeviceName(callback: AsyncCallback<string>): void
```

Obtains the name of BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getDeviceName

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to obtain the device name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
// callback
try {
    let gattClient = bluetoothManager.BLE.createGattClientDevice("XX:XX:XX:XX:XX:XX");
    gattClient.connect();
    let deviceName = gattClient.getDeviceName((err, data)=> {
        console.info('device name err ' + JSON.stringify(err));
        console.info('device name' + JSON.stringify(data));
    })
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## getDeviceName

```TypeScript
getDeviceName(): Promise<string>
```

Obtains the name of BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getDeviceName

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns a string representation of the name if obtained;returns {@code null} if the name fails to be obtained or the name does not exist. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
// promise
try {
    let gattClient = bluetoothManager.BLE.createGattClientDevice("XX:XX:XX:XX:XX:XX");
    gattClient.connect();
    let deviceName = gattClient.getDeviceName().then((data) => {
        console.info('device name' + JSON.stringify(data));
    })
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## getRssiValue

```TypeScript
getRssiValue(callback: AsyncCallback<number>): void
```

Get the RSSI value of this BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getRssiValue

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback invoked to return the RSSI, in dBm. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
// callback
try {
    let gattClient = bluetoothManager.BLE.createGattClientDevice("XX:XX:XX:XX:XX:XX");
    gattClient.connect();
    let rssi = gattClient.getRssiValue((err: BusinessError, data: number)=> {
        console.info('rssi err ' + JSON.stringify(err));
        console.info('rssi value' + JSON.stringify(data));
    })
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## getRssiValue

```TypeScript
getRssiValue(): Promise<number>
```

Get the RSSI value of this BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getRssiValue

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the RSSI value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
// promise
try {
    let gattClient = bluetoothManager.BLE.createGattClientDevice("XX:XX:XX:XX:XX:XX");
    let rssi = gattClient.getRssiValue().then((data: number) => {
        console.info('rssi' + JSON.stringify(data));
    })
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## getServices

```TypeScript
getServices(callback: AsyncCallback<Array<GattService>>): void
```

Starts discovering services. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getServices

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;GattService&gt;&gt; | Yes | Callback used to catch the services. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// Callback mode.
function getServices(code: BusinessError, gattServices: Array<bluetoothManager.GattService>) {
  if (code.code == 0) {
      let services: Array<bluetoothManager.GattService> = gattServices;
      console.info(`bluetooth code is ${code.code}`);
      console.info(`bluetooth services size is ${services.length}`);

      for (let i = 0; i < services.length; i++) {
        console.info(`bluetooth serviceUuid is ${services[i].serviceUuid}`);
      }
  }
}

try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.connect();
    device.getServices(getServices);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## getServices

```TypeScript
getServices(): Promise<Array<GattService>>
```

Starts discovering services. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getServices

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GattService&gt;&gt; | Returns the list of services {@link GattService} of the BLE peripheraldevice. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
// Promise
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.connect();
    device.getServices().then(result => {
        console.info("getServices successfully:" + JSON.stringify(result));
    });
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## off('BLECharacteristicChange')

```TypeScript
off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void
```

Unsubscribe characteristic value changed event. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** event:BLECharacteristicChange

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLECharacteristicChange' | Yes | Type of the characteristic value changed event to listen for. |
| callback | Callback&lt;BLECharacteristic&gt; | No | Callback used to listen for the characteristic value changedevent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.off('BLECharacteristicChange');
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## off('BLEConnectionStateChange')

```TypeScript
off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectChangedState>): void
```

Unsubscribe client connection state changed event. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** event:BLEConnectionStateChange

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLEConnectionStateChange' | Yes | Type of the connection state changed event to listen for. |
| callback | Callback&lt;BLEConnectChangedState&gt; | No | Callback used to listen for the connection state changedevent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.off('BLEConnectionStateChange');
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## on('BLECharacteristicChange')

```TypeScript
on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void
```

Subscribe characteristic value changed event. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** event:BLECharacteristicChange

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLECharacteristicChange' | Yes | Type of the characteristic value changed event to listen for. |
| callback | Callback&lt;BLECharacteristic&gt; | Yes | Callback used to listen for the characteristic value changedevent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
function CharacteristicChange(characteristicChangeReq: ble.BLECharacteristic) {
    let serviceUuid: string = characteristicChangeReq.serviceUuid;
    let characteristicUuid: string = characteristicChangeReq.characteristicUuid;
    let value: Uint8Array = new Uint8Array(characteristicChangeReq.characteristicValue);
}
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.on('BLECharacteristicChange', CharacteristicChange);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## on('BLEConnectionStateChange')

```TypeScript
on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectChangedState>): void
```

Subscribe client connection state changed event. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** event:BLEConnectionStateChange

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BLEConnectionStateChange' | Yes | Type of the connection state changed event to listen for. |
| callback | Callback&lt;BLEConnectChangedState&gt; | Yes | Callback used to listen for the connection state changedevent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function ConnectStateChanged(state: bluetoothManager.BLEConnectChangedState) {
    console.info('bluetooth connect state changed');
    let connectState: bluetoothManager.ProfileConnectionState = state.state;
}
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.on('BLEConnectionStateChange', ConnectStateChanged);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## readCharacteristicValue

```TypeScript
readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void
```

Reads the characteristic of a BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** readCharacteristicValue

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characteristic | BLECharacteristic | Yes | Indicates the characteristic to read. |
| callback | AsyncCallback&lt;BLECharacteristic&gt; | Yes | Callback invoked to return the characteristic value read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2901000 | Read forbidden. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function readCcc(code: BusinessError, BLECharacteristic: bluetoothManager.BLECharacteristic) {
    if (code.code != 0) {
        return;
    }
    console.info(`bluetooth characteristic uuid: ${BLECharacteristic.characteristicUuid}`);
    let value = new Uint8Array(BLECharacteristic.characteristicValue);
    console.info(`value length: ${value.length}`);
}

let descriptors: Array<bluetoothManager.BLEDescriptor> = [];
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor: bluetoothManager.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
descriptors[0] = descriptor;

let bufferCCC = new ArrayBuffer(8);
let cccV = new Uint8Array(bufferCCC);
cccV[0] = 1;
let characteristic: bluetoothManager.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    characteristicValue: bufferCCC, descriptors:descriptors};

try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.readCharacteristicValue(characteristic, readCcc);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## readCharacteristicValue

```TypeScript
readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>
```

Reads the characteristic of a BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** readCharacteristicValue

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characteristic | BLECharacteristic | Yes | Indicates the characteristic to read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BLECharacteristic&gt; | - Promise used to return the characteristic value read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2901000 | Read forbidden. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let descriptors: Array<bluetoothManager.BLEDescriptor> = [];
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor: bluetoothManager.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
descriptors[0] = descriptor;

let bufferCCC = new ArrayBuffer(8);
let cccV = new Uint8Array(bufferCCC);
cccV[0] = 1;
let characteristic: bluetoothManager.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    characteristicValue: bufferCCC, descriptors:descriptors};

try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.readCharacteristicValue(characteristic);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## readDescriptorValue

```TypeScript
readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void
```

Reads the descriptor of a BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** readDescriptorValue

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | BLEDescriptor | Yes | Indicates the descriptor to read. |
| callback | AsyncCallback&lt;BLEDescriptor&gt; | Yes | Callback invoked to return the descriptor read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2901000 | Read forbidden. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function readDesc(code: BusinessError, BLEDescriptor: bluetoothManager.BLEDescriptor) {
    if (code.code != 0) {
        return;
    }
    console.info(`bluetooth descriptor uuid: ${BLEDescriptor.descriptorUuid}`);
    let value = new Uint8Array(BLEDescriptor.descriptorValue);
}

let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor: bluetoothManager.BLEDescriptor = {
    serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB',
    descriptorValue: bufferDesc
};
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.readDescriptorValue(descriptor, readDesc);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## readDescriptorValue

```TypeScript
readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>
```

Reads the descriptor of a BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** readDescriptorValue

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | BLEDescriptor | Yes | Indicates the descriptor to read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BLEDescriptor&gt; | - Promise used to return the descriptor read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2901000 | Read forbidden. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor: bluetoothManager.BLEDescriptor = {
    serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB',
    descriptorValue: bufferDesc
};
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.readDescriptorValue(descriptor);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## setBLEMtuSize

```TypeScript
setBLEMtuSize(mtu: number): void
```

Set the mtu size of a BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** setBLEMtuSize

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mtu | number | Yes | The maximum transmission unit. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.setBLEMtuSize(128);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## setNotifyCharacteristicChanged

```TypeScript
setNotifyCharacteristicChanged(characteristic: BLECharacteristic, enable: boolean): void
```

Enables or disables notification of a characteristic when value changed. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** setCharacteristicChangeNotification

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characteristic | BLECharacteristic | Yes | BLE characteristic to listen for. |
| enable | boolean | Yes | Specifies whether to enable notification of the characteristic. The value{@code true} indicates that notification is enabled, and the value {@code false} indicates thatnotification is disabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
// Create descriptors.
let descriptors: Array<bluetoothManager.BLEDescriptor> = [];
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor: bluetoothManager.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
descriptors[0] = descriptor;

let bufferCCC = new ArrayBuffer(8);
let cccV = new Uint8Array(bufferCCC);
cccV[0] = 1;
let characteristic: bluetoothManager.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    characteristicValue: bufferCCC, descriptors:descriptors};
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.setNotifyCharacteristicChanged(characteristic, false);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}


```

## writeCharacteristicValue

```TypeScript
writeCharacteristicValue(characteristic: BLECharacteristic): void
```

Writes the characteristic of a BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** writeCharacteristicValue

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characteristic | BLECharacteristic | Yes | Indicates the characteristic to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2901001 | Write forbidden. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let descriptors: Array<bluetoothManager.BLEDescriptor> = [];
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 11;
let descriptor: bluetoothManager.BLEDescriptor = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB', descriptorValue: bufferDesc};
descriptors[0] = descriptor;

let bufferCCC = new ArrayBuffer(8);
let cccV = new Uint8Array(bufferCCC);
cccV[0] = 1;
let characteristic: bluetoothManager.BLECharacteristic = {serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    characteristicValue: bufferCCC, descriptors:descriptors};
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.writeCharacteristicValue(characteristic);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## writeDescriptorValue

```TypeScript
writeDescriptorValue(descriptor: BLEDescriptor): void
```

Writes the descriptor of a BLE peripheral device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** writeDescriptorValue

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9 - 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | BLEDescriptor | Yes | Indicates the descriptor to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2901001 | Write forbidden. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let bufferDesc = new ArrayBuffer(8);
let descV = new Uint8Array(bufferDesc);
descV[0] = 22;
let descriptor: bluetoothManager.BLEDescriptor = {
    serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
    characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
    descriptorUuid: '00002903-0000-1000-8000-00805F9B34FB',
    descriptorValue: bufferDesc
};
try {
    let device = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
    device.writeDescriptorValue(descriptor);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

