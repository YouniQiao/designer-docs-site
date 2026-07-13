# PanProfile

Manager pan profile.

**Inheritance/Implementation:** PanProfile extends [BaseProfile](arkts-connectivity-baseprofile-i.md)

**Since:** 9

**Deprecated since:** 10

**Substitutes:** PanProfile

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## disconnect

```TypeScript
disconnect(device: string): void
```

Disconnect to device with pan.
On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** disconnect

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9: ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to disconnect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

## isTetheringOn

```TypeScript
isTetheringOn(): boolean
```

Obtains the tethering enable or disable.
On API 10 and above, the permission required by this interface is changed to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** isTetheringOn

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns the value {@code true} is tethering is on, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

## setTethering

```TypeScript
setTethering(enable: boolean): void
```

Enable bluetooth tethering.
On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to
ACCESS_BLUETOOTH and MANAGE_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** setTethering

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
- API version 9: ohos.permission.DISCOVER_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Specifies whether to enable tethering. The value {@code true} indicatesthat tethering is enabled, and the value {@code false} indicates that tethering is disabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

