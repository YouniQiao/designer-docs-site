# getRadioTech

## getRadioTech

```TypeScript
function getRadioTech(slotId: int, callback: AsyncCallback<NetworkRadioTech>): void
```

Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain.

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;NetworkRadioTech> | 是 | Returns  the RAT of PS domain and CS domain of registered network.  The values of RAT are as follows:   {@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}  {@code RadioTechnology#RADIO_TECHNOLOGY_GSM}  {@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}  {@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}  {@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}  {@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}  {@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}  {@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}  {@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}  {@code RadioTechnology#RADIO_TECHNOLOGY_LTE}  {@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}  {@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}  {@code RadioTechnology#RADIO_TECHNOLOGY_NR} |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NetworkRadioTech> | Returns the RAT of PS domain and CS domain of registered network.  The values of RAT are as follows:   {@code RadioTechnology#RADIO_TECHNOLOGY_UNKNOWN}  {@code RadioTechnology#RADIO_TECHNOLOGY_GSM}  {@code RadioTechnology#RADIO_TECHNOLOGY_1XRTT}  {@code RadioTechnology#RADIO_TECHNOLOGY_WCDMA}  {@code RadioTechnology#RADIO_TECHNOLOGY_HSPA}  {@code RadioTechnology#RADIO_TECHNOLOGY_HSPAP}  {@code RadioTechnology#RADIO_TECHNOLOGY_TD_SCDMA}  {@code RadioTechnology#RADIO_TECHNOLOGY_EVDO}  {@code RadioTechnology#RADIO_TECHNOLOGY_EHRPD}  {@code RadioTechnology#RADIO_TECHNOLOGY_LTE}  {@code RadioTechnology#RADIO_TECHNOLOGY_LTE_CA}  {@code RadioTechnology#RADIO_TECHNOLOGY_IWLAN}  {@code RadioTechnology#RADIO_TECHNOLOGY_NR} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

