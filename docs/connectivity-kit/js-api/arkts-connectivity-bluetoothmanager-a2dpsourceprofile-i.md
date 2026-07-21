# A2dpSourceProfile

Manager a2dp source profile.

**Inheritance/Implementation:** A2dpSourceProfile extends [BaseProfile](arkts-connectivity-bluetoothmanager-baseprofile-i.md)

**Since:** 9

**Deprecated since:** 10

**Substitutes:** A2dpSourceProfile

<!--Device-bluetoothManager-interface A2dpSourceProfile extends BaseProfile--><!--Device-bluetoothManager-interface A2dpSourceProfile extends BaseProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

<a id="connect"></a>
## connect

```TypeScript
connect(device: string): void
```

Connect to device with a2dp.On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** connect

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9: ohos.permission.DISCOVER_BLUETOOTH

<!--Device-A2dpSourceProfile-connect(device: string): void--><!--Device-A2dpSourceProfile-connect(device: string): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to connect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

<a id="disconnect"></a>
## disconnect

```TypeScript
disconnect(device: string): void
```

Disconnect to device with a2dp.On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** disconnect

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9: ohos.permission.DISCOVER_BLUETOOTH

<!--Device-A2dpSourceProfile-disconnect(device: string): void--><!--Device-A2dpSourceProfile-disconnect(device: string): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to disconnect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

<a id="getplayingstate"></a>
## getPlayingState

```TypeScript
getPlayingState(device: string): PlayingState
```

Obtains the playing state of device.On API 10 and above, the permission required by this interface is changed to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getPlayingState

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH

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

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

<a id="off"></a>
## off('connectionStateChange')

```TypeScript
off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void
```

Unsubscribe the event reported when the profile connection state changes.On API 10 and above, the permission required by this interface is changed to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** event:connectionStateChange

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH

<!--Device-A2dpSourceProfile-off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void--><!--Device-A2dpSourceProfile-off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | Yes | Type of the profile connection state changes event to listen for . |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;StateChangeParam&gt; | No | Callback used to listen for event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

<a id="on"></a>
## on('connectionStateChange')

```TypeScript
on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void
```

Subscribe the event reported when the profile connection state changes.On API 10 and above, the permission required by this interface is changed to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** event:connectionStateChange

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH

<!--Device-A2dpSourceProfile-on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void--><!--Device-A2dpSourceProfile-on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | Yes | Type of the profile connection state changes event to listen for . |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;StateChangeParam&gt; | Yes | Callback used to listen for event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

