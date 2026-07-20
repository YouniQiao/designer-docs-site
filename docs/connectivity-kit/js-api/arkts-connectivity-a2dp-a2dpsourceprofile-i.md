# A2dpSourceProfile

Manager a2dp source profile.

**Inheritance/Implementation:** A2dpSourceProfile extends [BaseProfile](arkts-connectivity-a2dp-baseprofile-t.md)

**Since:** 10

<!--Device-a2dp-interface A2dpSourceProfile extends BaseProfile--><!--Device-a2dp-interface A2dpSourceProfile extends BaseProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { a2dp } from '@kit.ConnectivityKit';
```

## getPlayingState

```TypeScript
getPlayingState(deviceId: string): PlayingState
```

Obtains the playing state of device.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

<!--Device-A2dpSourceProfile-getPlayingState(deviceId: string): PlayingState--><!--Device-A2dpSourceProfile-getPlayingState(deviceId: string): PlayingState-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Return value:**

| Type | Description |
| --- | --- |
| [PlayingState](arkts-connectivity-a2dp-playingstate-e.md) | Returns the playing state. |

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

