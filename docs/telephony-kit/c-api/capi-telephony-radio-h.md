# telephony_radio.h

## Overview

Provides C interface for the telephony radio.

**Include**: <telephony/core_service/telephony_radio_type.h>

**Library**: libtelephony_radio.so

**System capability**: SystemCapability.Telephony.CoreService

**Since**: 13

**Related module**: [Telephony](capi-telephony.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [Telephony_RadioResult OH_Telephony_GetNetworkState(Telephony_NetworkState *state)](#oh_telephony_getnetworkstate) | Obtains the radio network state. |
| [Telephony_RadioResult OH_Telephony_GetNetworkStateForSlot(int32_t slotId, Telephony_NetworkState *state)](#oh_telephony_getnetworkstateforslot) | Obtains the radio network state for given slot id. |

## Function description

### OH_Telephony_GetNetworkState()

```c
Telephony_RadioResult OH_Telephony_GetNetworkState(Telephony_NetworkState *state)
```

**Description**

Obtains the radio network state.

**System capability**: SystemCapability.Telephony.CoreService

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [Telephony_NetworkState](capi-telephony-telephony-networkstate.md) *state | Pointer to the network state. |

**Returns**:

| Type | Description |
| -- | -- |
| [Telephony_RadioResult](capi-telephony-radio-type-h.md#telephony_radioresult) | the result defines in [Telephony_RadioResult](capi-telephony-radio-type-h.md#telephony_radioresult).<br>         [TEL_RADIO_SUCCESS](capi-telephony-radio-type-h.md#telephony_radioresult) Success.<br>         [TEL_RADIO_PERMISSION_DENIED](capi-telephony-radio-type-h.md#telephony_radioresult) Permission denied.<br>         [TEL_RADIO_ERR_MARSHALLING_FAILED](capi-telephony-radio-type-h.md#telephony_radioresult) Low probability Marshalling failed, try again later.<br>         [TEL_RADIO_ERR_SERVICE_CONNECTION_FAILED](capi-telephony-radio-type-h.md#telephony_radioresult) Unable to connect to telephony service, try again later.<br>         [TEL_RADIO_ERR_OPERATION_FAILED](capi-telephony-radio-type-h.md#telephony_radioresult) Operation failed in telephony service, try again later.<br>         [TEL_RADIO_ERR_INVALID_PARAM](capi-telephony-radio-type-h.md#telephony_radioresult) Invalid parameter. |

### OH_Telephony_GetNetworkStateForSlot()

```c
Telephony_RadioResult OH_Telephony_GetNetworkStateForSlot(int32_t slotId, Telephony_NetworkState *state)
```

**Description**

Obtains the radio network state for given slot id.

**System capability**: SystemCapability.Telephony.CoreService

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t slotId | the number of slot, 0 for card slot 1, 1 for card slot 2. |
| [Telephony_NetworkState](capi-telephony-telephony-networkstate.md) *state | Pointer to the network state. |

**Returns**:

| Type | Description |
| -- | -- |
| [Telephony_RadioResult](capi-telephony-radio-type-h.md#telephony_radioresult) | the result defines in [Telephony_RadioResult](capi-telephony-radio-type-h.md#telephony_radioresult).<br>         [TEL_RADIO_SUCCESS](capi-telephony-radio-type-h.md#telephony_radioresult) Success.<br>         [TEL_RADIO_PERMISSION_DENIED](capi-telephony-radio-type-h.md#telephony_radioresult) Permission denied.<br>         [TEL_RADIO_ERR_MARSHALLING_FAILED](capi-telephony-radio-type-h.md#telephony_radioresult) Low probability Marshalling failed, try again later.<br>         [TEL_RADIO_ERR_SERVICE_CONNECTION_FAILED](capi-telephony-radio-type-h.md#telephony_radioresult) Unable to connect to telephony service, try again later.<br>         [TEL_RADIO_ERR_OPERATION_FAILED](capi-telephony-radio-type-h.md#telephony_radioresult) Operation failed in telephony service, try again later.<br>         [TEL_RADIO_ERR_INVALID_PARAM](capi-telephony-radio-type-h.md#telephony_radioresult) Invalid parameter. |


