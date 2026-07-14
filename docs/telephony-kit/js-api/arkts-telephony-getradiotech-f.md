# getRadioTech

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## getRadioTech

```TypeScript
function getRadioTech(slotId: number, callback: AsyncCallback<NetworkRadioTech>): void
```

Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain.

**Since:** 11

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;NetworkRadioTech&gt; | Yes | Returnsthe RAT of PS domain and CS domain of registered network.The values of RAT are as follows:&lt;ul&gt;&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_GSM}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_LTE}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_NR}&lt;/ul&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |


## getRadioTech

```TypeScript
function getRadioTech(slotId: number): Promise<NetworkRadioTech>
```

Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain.

**Since:** 11

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetworkRadioTech&gt; | Returns the RAT of PS domain and CS domain of registered network.The values of RAT are as follows:&lt;ul&gt;&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_GSM}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_LTE}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}&lt;li&gt;{@code RadioTechnology#RADIO_TECHNOLOGY_NR}&lt;/ul&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

