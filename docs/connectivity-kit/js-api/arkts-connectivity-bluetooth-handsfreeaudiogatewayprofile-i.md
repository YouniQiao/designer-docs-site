# HandsFreeAudioGatewayProfile

Manager handsfree AG profile.

**Inheritance/Implementation:** HandsFreeAudioGatewayProfile extends [BaseProfile](arkts-connectivity-bluetooth-baseprofile-i.md)

**Since:** 7

**Deprecated since:** 9

**Substitutes:** HandsFreeAudioGatewayProfile

<!--Device-bluetooth-interface HandsFreeAudioGatewayProfile extends BaseProfile--><!--Device-bluetooth-interface HandsFreeAudioGatewayProfile extends BaseProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## connect

```TypeScript
connect(device: string): boolean
```

Connect to device with hfp.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** connect

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-HandsFreeAudioGatewayProfile-connect(device: string): boolean--><!--Device-HandsFreeAudioGatewayProfile-connect(device: string): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to connect. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the connect is in process; returns {@code false} otherwise. |

**Example**

```TypeScript
let hfpAg : bluetooth.HandsFreeAudioGatewayProfile= bluetooth.getProfile(bluetooth.ProfileId
    .PROFILE_HANDS_FREE_AUDIO_GATEWAY);
let ret : boolean = hfpAg.connect('XX:XX:XX:XX:XX:XX');

```

## disconnect

```TypeScript
disconnect(device: string): boolean
```

Disconnect to device with hfp.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** disconnect

**Required permissions:** ohos.permission.DISCOVER_BLUETOOTH

<!--Device-HandsFreeAudioGatewayProfile-disconnect(device: string): boolean--><!--Device-HandsFreeAudioGatewayProfile-disconnect(device: string): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to disconnect. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the disconnect is in process; returns {@code false} otherwise. |

**Example**

```TypeScript
let hfpAg : bluetooth.HandsFreeAudioGatewayProfile = bluetooth.getProfile(bluetooth.ProfileId
    .PROFILE_HANDS_FREE_AUDIO_GATEWAY);
let ret : boolean = hfpAg.disconnect('XX:XX:XX:XX:XX:XX');

```

## off('connectionStateChange')

```TypeScript
off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void
```

Unsubscribe the event reported when the profile connection state changes .

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:connectionStateChange

<!--Device-HandsFreeAudioGatewayProfile-off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void--><!--Device-HandsFreeAudioGatewayProfile-off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | Yes | Type of the profile connection state changes event to listen for . |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<StateChangeParam> | No | Callback used to listen for event. |

## on('connectionStateChange')

```TypeScript
on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void
```

Subscribe the event reported when the profile connection state changes .

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:connectionStateChange

<!--Device-HandsFreeAudioGatewayProfile-on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void--><!--Device-HandsFreeAudioGatewayProfile-on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | Yes | Type of the profile connection state changes event to listen for . |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<StateChangeParam> | Yes | Callback used to listen for event. |

