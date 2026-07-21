# getRadioTech

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

<a id="getradiotech"></a>
## getRadioTech

```TypeScript
function getRadioTech(slotId: number, callback: AsyncCallback<NetworkRadioTech>): void
```

Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain.

**Since:** 11

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-radio-function getRadioTech(slotId: int, callback: AsyncCallback<NetworkRadioTech>): void--><!--Device-radio-function getRadioTech(slotId: int, callback: AsyncCallback<NetworkRadioTech>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;NetworkRadioTech&gt; | Yes | Returns the RAT of PS domain and CS domain of registered network.The values of RAT are as follows:<ul><li>{@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_GSM}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_LTE}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_NR}</ul> |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |


<a id="getradiotech-1"></a>
## getRadioTech

```TypeScript
function getRadioTech(slotId: number): Promise<NetworkRadioTech>
```

Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain.

**Since:** 11

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-radio-function getRadioTech(slotId: int): Promise<NetworkRadioTech>--><!--Device-radio-function getRadioTech(slotId: int): Promise<NetworkRadioTech>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetworkRadioTech&gt; | Returns the RAT of PS domain and CS domain of registered network.The values of RAT are as follows:<ul><li>{@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_GSM}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_LTE}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}<li>{@code RadioTechnology#RADIO_TECHNOLOGY_NR}</ul> |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

