# off

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## off('bluetoothDeviceFind')

```TypeScript
function off(type: 'bluetoothDeviceFind', callback?: Callback<Array<string>>): void
```

Unsubscribe the event reported when a remote Bluetooth device is discovered.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:bluetoothDeviceFind

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function off(type: 'bluetoothDeviceFind', callback?: Callback<Array<string>>): void--><!--Device-bluetooth-function off(type: 'bluetoothDeviceFind', callback?: Callback<Array<string>>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bluetoothDeviceFind' | Yes | Type of the discovering event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Array<string>> | No | Callback used to listen for the discovering event. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:bondStateChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function off(type: 'bondStateChange', callback?: Callback<BondStateParam>): void--><!--Device-bluetooth-function off(type: 'bondStateChange', callback?: Callback<BondStateParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bondStateChange' | Yes | Type of the bond state event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<BondStateParam> | No | Callback used to listen for the bond state event. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:pinRequired

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-bluetooth-function off(type: 'pinRequired', callback?: Callback<PinRequiredParam>): void--><!--Device-bluetooth-function off(type: 'pinRequired', callback?: Callback<PinRequiredParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pinRequired' | Yes | Type of the pairing request event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<PinRequiredParam> | No | Callback used to listen for the pairing request event. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:stateChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function off(type: 'stateChange', callback?: Callback<BluetoothState>): void--><!--Device-bluetooth-function off(type: 'stateChange', callback?: Callback<BluetoothState>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Type of the Bluetooth state changes event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<BluetoothState> | No | Callback used to listen for the Bluetooth state event. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:sppRead

<!--Device-bluetooth-function off(type: 'sppRead', clientSocket: number, callback?: Callback<ArrayBuffer>): void--><!--Device-bluetooth-function off(type: 'sppRead', clientSocket: number, callback?: Callback<ArrayBuffer>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sppRead' | Yes | Type of the spp read event to listen for. |
| clientSocket | number | Yes | Client socket ID, which is obtained by sppAccept or sppConnect. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ArrayBuffer> | No | Callback used to listen for the spp read event. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let clientNumber = -1;
function clientSocket(code : BusinessError, number : number) {
  if (code == null || code.code != 0) {
    return;
  }
  console.info(`bluetooth serverSocket Number: ${number}`);
  // The obtained clientNumber is used as the socket ID for subsequent read/write operations on the client.
  clientNumber = number;
}
bluetooth.off('sppRead', clientNumber);

```

