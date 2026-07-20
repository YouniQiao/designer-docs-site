# getRadioTechSync

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## getRadioTechSync

```TypeScript
function getRadioTechSync(slotId: number): NetworkRadioTech
```

Obtains radio access technology (RAT) of the registered network.

**Since:** 18

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-radio-function getRadioTechSync(slotId: int): NetworkRadioTech--><!--Device-radio-function getRadioTechSync(slotId: int): NetworkRadioTech-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| [NetworkRadioTech](arkts-telephony-radio-networkradiotech-i.md) | Returns the RAT of PS domain and CS domain of registered network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

