# on

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="on"></a>
## on('bluetoothDeviceFind')

```TypeScript
function on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>): void
```

Subscribe the event reported when a remote Bluetooth device is discovered.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:bluetoothDeviceFind

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>): void--><!--Device-bluetooth-function on(type: 'bluetoothDeviceFind', callback: Callback<Array<string>>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bluetoothDeviceFind' | Yes | Type of the discovering event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;string&gt;&gt; | Yes | Callback used to listen for the discovering event. |

**Example**

```TypeScript
function onReceiveEvent(data : Array<string>) { // data is an array of Bluetooth device addresses.
    console.info('bluetooth device find = '+ JSON.stringify(data));
}
bluetooth.on('bluetoothDeviceFind', onReceiveEvent);

```


<a id="on-1"></a>
## on('bondStateChange')

```TypeScript
function on(type: 'bondStateChange', callback: Callback<BondStateParam>): void
```

Subscribe the event reported when a remote Bluetooth device is bonded.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:bondStateChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function on(type: 'bondStateChange', callback: Callback<BondStateParam>): void--><!--Device-bluetooth-function on(type: 'bondStateChange', callback: Callback<BondStateParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bondStateChange' | Yes | Type of the bond state event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BondStateParam&gt; | Yes | Callback used to listen for the bond state event,{@link BondStateParam}. |

**Example**

```TypeScript
function onReceiveEvent(data : bluetooth.BondStateParam) { // data, as the input parameter of the callback, indicates the pairing state.
    console.info('pair state = '+ JSON.stringify(data));
}
bluetooth.on('bondStateChange', onReceiveEvent);

```


<a id="on-2"></a>
## on('pinRequired')

```TypeScript
function on(type: 'pinRequired', callback: Callback<PinRequiredParam>): void
```

Subscribe the event of a pairing request from a remote Bluetooth device.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:pinRequired

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-bluetooth-function on(type: 'pinRequired', callback: Callback<PinRequiredParam>): void--><!--Device-bluetooth-function on(type: 'pinRequired', callback: Callback<PinRequiredParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pinRequired' | Yes | Type of the pairing request event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;PinRequiredParam&gt; | Yes | Callback used to listen for the pairing request event. |

**Example**

```TypeScript
function onReceiveEvent(data : bluetooth.PinRequiredParam) { // data is the pairing request parameter.
    console.info('pin required = '+ JSON.stringify(data));
}
bluetooth.on('pinRequired', onReceiveEvent);

```


<a id="on-3"></a>
## on('stateChange')

```TypeScript
function on(type: 'stateChange', callback: Callback<BluetoothState>): void
```

Subscribe the event reported when the Bluetooth state changes.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:stateChange

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function on(type: 'stateChange', callback: Callback<BluetoothState>): void--><!--Device-bluetooth-function on(type: 'stateChange', callback: Callback<BluetoothState>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Type of the Bluetooth state changes event to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BluetoothState&gt; | Yes | Callback used to listen for the Bluetooth state event. |

**Example**

```TypeScript
function onReceiveEvent(data : bluetooth.BluetoothState) {
    console.info('bluetooth state = '+ JSON.stringify(data));
}
bluetooth.on('stateChange', onReceiveEvent);

```


<a id="on-4"></a>
## on('sppRead')

```TypeScript
function on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void
```

Subscribe the event reported when data is read from the socket.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:sppRead

<!--Device-bluetooth-function on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void--><!--Device-bluetooth-function on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sppRead' | Yes | Type of the spp read event to listen for. |
| clientSocket | number | Yes | Client socket ID, which is obtained by sppAccept or sppConnect. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ArrayBuffer&gt; | Yes | Callback used to listen for the spp read event. |

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
function dataRead(dataBuffer : ArrayBuffer) {
  let data = new Uint8Array(dataBuffer);
}
bluetooth.on('sppRead', clientNumber, dataRead);

```

