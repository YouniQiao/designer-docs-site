# A2dpSourceProfile

Manager a2dp source profile.

**Inheritance/Implementation:** A2dpSourceProfile extends [BaseProfile](arkts-connectivity-bluetooth-baseprofile-i.md)

**Since:** 7

**Deprecated since:** 9

**Substitutes:** A2dpSourceProfile

<!--Device-bluetooth-interface A2dpSourceProfile extends BaseProfile--><!--Device-bluetooth-interface A2dpSourceProfile extends BaseProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="connect"></a>
## connect

```TypeScript
connect(device: string): boolean
```

Connect to device with a2dp.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** connect

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-A2dpSourceProfile-connect(device: string): boolean--><!--Device-A2dpSourceProfile-connect(device: string): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to connect. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the connect is in process; returns {@code false} otherwise. |

<a id="disconnect"></a>
## disconnect

```TypeScript
disconnect(device: string): boolean
```

Disconnect to device with a2dp.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** disconnect

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-A2dpSourceProfile-disconnect(device: string): boolean--><!--Device-A2dpSourceProfile-disconnect(device: string): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to disconnect. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the disconnect is in process; returns {@code false} otherwise. |

<a id="getplayingstate"></a>
## getPlayingState

```TypeScript
getPlayingState(device: string): PlayingState
```

Obtains the playing state of device.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getPlayingState

<!--Device-A2dpSourceProfile-getPlayingState(device: string): PlayingState--><!--Device-A2dpSourceProfile-getPlayingState(device: string): PlayingState-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device. |

**Return value:**

| Type | Description |
| --- | --- |
| [PlayingState](arkts-connectivity-a2dp-playingstate-e.md) | Returns {@link PlayingState} of the remote device. |

<a id="off"></a>
## off('connectionStateChange')

```TypeScript
off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void
```

Unsubscribe the event reported when the profile connection state changes .

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:connectionStateChange

<!--Device-A2dpSourceProfile-off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void--><!--Device-A2dpSourceProfile-off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | Yes | Type of the profile connection state changes event to listen for . |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;StateChangeParam&gt; | No | Callback used to listen for event. |

<a id="on"></a>
## on('connectionStateChange')

```TypeScript
on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void
```

Subscribe the event reported when the profile connection state changes .

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:connectionStateChange

<!--Device-A2dpSourceProfile-on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void--><!--Device-A2dpSourceProfile-on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | Yes | Type of the profile connection state changes event to listen for . |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;StateChangeParam&gt; | Yes | Callback used to listen for event. |

