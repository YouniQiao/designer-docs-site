# A2dpSourceProfile

Manager a2dp source profile.

**Inheritance:** A2dpSourceProfileextends: BaseProfile.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## connect

```TypeScript
connect(device: string): boolean
```

Connect to device with a2dp.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile#connect

**Required permissions:** 

 ohos.permission.DISCOVER_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to connect. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the connect is in process; returns {@code false} otherwise. |

## disconnect

```TypeScript
disconnect(device: string): boolean
```

Disconnect to device with a2dp.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile#disconnect

**Required permissions:** 

 ohos.permission.DISCOVER_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to disconnect. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the disconnect is in process; returns {@code false} otherwise. |

## getPlayingState

```TypeScript
getPlayingState(device: string): PlayingState
```

Obtains the playing state of device.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile#getPlayingState

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device. |

**Return value:**

| Type | Description |
| --- | --- |
| PlayingState | Returns {@link PlayingState} of the remote device. |

## off('connectionStateChange')

```TypeScript
off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void
```

Unsubscribe the event reported when the profile connection state changes .

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile.off#event:connectionStateChange

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | Yes | Type of the profile connection state changes event to listen for . |
| callback | Callback&lt;StateChangeParam> | No | Callback used to listen for event. |

## on('connectionStateChange')

```TypeScript
on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void
```

Subscribe the event reported when the profile connection state changes .

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.A2dpSourceProfile.on#event:connectionStateChange

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | Yes | Type of the profile connection state changes event to listen for . |
| callback | Callback&lt;StateChangeParam> | Yes | Callback used to listen for event. |

