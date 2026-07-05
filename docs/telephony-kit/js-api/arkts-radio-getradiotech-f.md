# getRadioTech

## getRadioTech

```TypeScript
function getRadioTech(slotId: int, callback: AsyncCallback<NetworkRadioTech>): void
```

Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;NetworkRadioTech> | Yes | Returns  the RAT of PS domain and CS domain of registered network.  The values of RAT are as follows:   {@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}  {@code RadioTechnology#RADIO_TECHNOLOGY_GSM}  {@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}  {@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}  {@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}  {@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}  {@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}  {@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}  {@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}  {@code RadioTechnology#RADIO_TECHNOLOGY_LTE}  {@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}  {@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}  {@code RadioTechnology#RADIO_TECHNOLOGY_NR} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

## getRadioTech

```TypeScript
function getRadioTech(slotId: int): Promise<NetworkRadioTech>
```

Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetworkRadioTech> | Returns the RAT of PS domain and CS domain of registered network.  The values of RAT are as follows:   {@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}  {@code RadioTechnology#RADIO_TECHNOLOGY_GSM}  {@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}  {@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}  {@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}  {@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}  {@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}  {@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}  {@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}  {@code RadioTechnology#RADIO_TECHNOLOGY_LTE}  {@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}  {@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}  {@code RadioTechnology#RADIO_TECHNOLOGY_NR} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

