# DisconnectedReason

```TypeScript
export enum DisconnectedReason
```

Indicates the causes of call disconnection.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## UNASSIGNED_NUMBER

```TypeScript
UNASSIGNED_NUMBER = 1
```

Indicates the call disconnect due to unassigned number.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NO_ROUTE_TO_DESTINATION

```TypeScript
NO_ROUTE_TO_DESTINATION = 3
```

Indicates the call disconnect due to no route to destination.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## CHANNEL_UNACCEPTABLE

```TypeScript
CHANNEL_UNACCEPTABLE = 6
```

Indicates the call disconnect due to channel unacceptable.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## OPERATOR_DETERMINED_BARRING

```TypeScript
OPERATOR_DETERMINED_BARRING = 8
```

Indicates the call disconnect due to operator determined barring.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## CALL_COMPLETED_ELSEWHERE

```TypeScript
CALL_COMPLETED_ELSEWHERE = 13
```

Indicates the call disconnect due to call completed elsewhere.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NORMAL_CALL_CLEARING

```TypeScript
NORMAL_CALL_CLEARING = 16
```

Indicates the call disconnect due to normal call clearing.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## USER_BUSY

```TypeScript
USER_BUSY = 17
```

Indicates the call disconnect due to user busy.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NO_USER_RESPONDING

```TypeScript
NO_USER_RESPONDING = 18
```

Indicates the call disconnect due to no user responding.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## USER_ALERTING_NO_ANSWER

```TypeScript
USER_ALERTING_NO_ANSWER = 19
```

Indicates the call disconnect due to user alerting, no answer.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## CALL_REJECTED

```TypeScript
CALL_REJECTED = 21
```

Indicates the call disconnect due to call rejected.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NUMBER_CHANGED

```TypeScript
NUMBER_CHANGED = 22
```

Indicates the call disconnect due to number changed.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## CALL_REJECTED_DUE_TO_FEATURE_AT_THE_DESTINATION

```TypeScript
CALL_REJECTED_DUE_TO_FEATURE_AT_THE_DESTINATION = 24
```

Indicates the call rejected due to feature at the destination.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## FAILED_PRE_EMPTION

```TypeScript
FAILED_PRE_EMPTION = 25
```

Indicates the call disconnect due to pre-emption.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NON_SELECTED_USER_CLEARING

```TypeScript
NON_SELECTED_USER_CLEARING = 26
```

Indicates the call disconnect due to non selected user clearing.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## DESTINATION_OUT_OF_ORDER

```TypeScript
DESTINATION_OUT_OF_ORDER = 27
```

Indicates the call disconnect due to destination out of order.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INVALID_NUMBER_FORMAT

```TypeScript
INVALID_NUMBER_FORMAT = 28
```

Indicates the call disconnect due to invalid number format.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## FACILITY_REJECTED

```TypeScript
FACILITY_REJECTED = 29
```

Indicates the call disconnect due to facility rejected.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RESPONSE_TO_STATUS_ENQUIRY

```TypeScript
RESPONSE_TO_STATUS_ENQUIRY = 30
```

Indicates the call disconnect due to response to status enquiry.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NORMAL_UNSPECIFIED

```TypeScript
NORMAL_UNSPECIFIED = 31
```

Indicates the call disconnected normally, no specified cause.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NO_CIRCUIT_CHANNEL_AVAILABLE

```TypeScript
NO_CIRCUIT_CHANNEL_AVAILABLE = 34
```

Indicates the call disconnect due to no circuit/channel available.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NETWORK_OUT_OF_ORDER

```TypeScript
NETWORK_OUT_OF_ORDER = 38
```

Indicates the call disconnect due to network out of order.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## TEMPORARY_FAILURE

```TypeScript
TEMPORARY_FAILURE = 41
```

Indicates the call disconnect due to temporary failure.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## SWITCHING_EQUIPMENT_CONGESTION

```TypeScript
SWITCHING_EQUIPMENT_CONGESTION = 42
```

Indicates the call disconnect due to switching equipment congestion.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## ACCESS_INFORMATION_DISCARDED

```TypeScript
ACCESS_INFORMATION_DISCARDED = 43
```

Indicates the call disconnect due to access information discarded.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## REQUEST_CIRCUIT_CHANNEL_NOT_AVAILABLE

```TypeScript
REQUEST_CIRCUIT_CHANNEL_NOT_AVAILABLE = 44
```

Indicates the call disconnect due to requested circuit/channel not available.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RESOURCES_UNAVAILABLE_UNSPECIFIED

```TypeScript
RESOURCES_UNAVAILABLE_UNSPECIFIED = 47
```

Indicates the call disconnect due to resources unavailable unspecified.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## QUALITY_OF_SERVICE_UNAVAILABLE

```TypeScript
QUALITY_OF_SERVICE_UNAVAILABLE = 49
```

Indicates the call disconnect due to quality of service unavailable.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## REQUESTED_FACILITY_NOT_SUBSCRIBED

```TypeScript
REQUESTED_FACILITY_NOT_SUBSCRIBED = 50
```

Indicates the call disconnect due to requested facility not subscribed.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INCOMING_CALLS_BARRED_WITHIN_THE_CUG

```TypeScript
INCOMING_CALLS_BARRED_WITHIN_THE_CUG = 55
```

Indicates the call disconnect due to incoming calls barred within the CUG.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## BEARER_CAPABILITY_NOT_AUTHORIZED

```TypeScript
BEARER_CAPABILITY_NOT_AUTHORIZED = 57
```

Indicates the call disconnect due to bearer capability not authorized.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## BEARER_CAPABILITY_NOT_PRESENTLY_AVAILABLE

```TypeScript
BEARER_CAPABILITY_NOT_PRESENTLY_AVAILABLE = 58
```

Indicates the call disconnect due to bearer capability not presently available.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## SERVICE_OR_OPTION_NOT_AVAILABLE_UNSPECIFIED

```TypeScript
SERVICE_OR_OPTION_NOT_AVAILABLE_UNSPECIFIED = 63
```

Indicates the call disconnect due to service or option not available, unspecified.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## BEARER_SERVICE_NOT_IMPLEMENTED

```TypeScript
BEARER_SERVICE_NOT_IMPLEMENTED = 65
```

Indicates the call disconnect due to bearer service not implemented.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## ACM_EQUALTO_OR_GREATER_THAN_THE_MAXIMUM_VALUE

```TypeScript
ACM_EQUALTO_OR_GREATER_THAN_THE_MAXIMUM_VALUE = 68
```

Indicates the call disconnect due to ACM equal to or greater than the maximum value.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## REQUESTED_FACILITY_NOT_IMPLEMENTED

```TypeScript
REQUESTED_FACILITY_NOT_IMPLEMENTED = 69
```

Indicates the call disconnect due to requested facility not implemented.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## ONLY_RESTRICTED_DIGITAL_INFO_BEARER_CAPABILITY_IS_AVAILABLE

```TypeScript
ONLY_RESTRICTED_DIGITAL_INFO_BEARER_CAPABILITY_IS_AVAILABLE = 70
```

Indicates the call disconnect due to only restricted digital info BC available.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## SERVICE_OR_OPTION_NOT_IMPLEMENTED_UNSPECIFIED

```TypeScript
SERVICE_OR_OPTION_NOT_IMPLEMENTED_UNSPECIFIED = 79
```

Indicates the call disconnect due to service or option not implemented, unspecified.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INVALID_TRANSACTION_IDENTIFIER_VALUE

```TypeScript
INVALID_TRANSACTION_IDENTIFIER_VALUE = 81
```

Indicates the call disconnect due to invalid transaction identifier value.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## USER_NOT_MEMBER_OF_CUG

```TypeScript
USER_NOT_MEMBER_OF_CUG = 87
```

Indicates the call disconnect due to user not member of CUG.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INCOMPATIBLE_DESTINATION

```TypeScript
INCOMPATIBLE_DESTINATION = 88
```

Indicates the call disconnect due to incompatible destination.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INVALID_TRANSIT_NETWORK_SELECTION

```TypeScript
INVALID_TRANSIT_NETWORK_SELECTION = 91
```

Indicates the call disconnect due to invalid transit network selection.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## SEMANTICALLY_INCORRECT_MESSAGE

```TypeScript
SEMANTICALLY_INCORRECT_MESSAGE = 95
```

Indicates the call disconnect due to semantically incorrect message.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INVALID_MANDATORY_INFORMATION

```TypeScript
INVALID_MANDATORY_INFORMATION = 96
```

Indicates the call disconnect due to invalid mandatory information.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED

```TypeScript
MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED = 97
```

Indicates the call disconnect due to msg type non-existent or not implemented.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE

```TypeScript
MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 98
```

Indicates the call disconnect due to msg type not compatible with protocol state.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED

```TypeScript
INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED = 99
```

Indicates the call disconnect due to IE non-existent or not implemented.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## CONDITIONAL_IE_ERROR

```TypeScript
CONDITIONAL_IE_ERROR = 100
```

Indicates the call disconnect due to conditional IE error.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE

```TypeScript
MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 101
```

Indicates the call disconnect due to message not compatible with protocol state.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RECOVERY_ON_TIMER_EXPIRED

```TypeScript
RECOVERY_ON_TIMER_EXPIRED = 102
```

Indicates the call disconnect due to recovery on timer expiry timer number.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## PROTOCOL_ERROR_UNSPECIFIED

```TypeScript
PROTOCOL_ERROR_UNSPECIFIED = 111
```

Indicates the call disconnect due to protocol error, unspecified.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INTERWORKING_UNSPECIFIED

```TypeScript
INTERWORKING_UNSPECIFIED = 127
```

Indicates the call disconnect due to interworking, unspecified.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## CALL_BARRED

```TypeScript
CALL_BARRED = 240
```

Indicates the call disconnect due to call barred.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## FDN_BLOCKED

```TypeScript
FDN_BLOCKED = 241
```

Indicates the call disconnect due to FDN blocked.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## IMSI_UNKNOWN_IN_VLR

```TypeScript
IMSI_UNKNOWN_IN_VLR = 242
```

Indicates the call disconnect due to IMSI in VLR is unknown.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## IMEI_NOT_ACCEPTED

```TypeScript
IMEI_NOT_ACCEPTED = 243
```

Indicates the call disconnect due to IMEI not accepted.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## DIAL_MODIFIED_TO_USSD

```TypeScript
DIAL_MODIFIED_TO_USSD = 244
```

Indicates the call disconnect due to dial modified to USSD.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## DIAL_MODIFIED_TO_SS

```TypeScript
DIAL_MODIFIED_TO_SS = 245
```

Indicates the call disconnect due to dial modified to SS.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## DIAL_MODIFIED_TO_DIAL

```TypeScript
DIAL_MODIFIED_TO_DIAL = 246
```

Indicates the call disconnect due to dial modified to dial.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_OFF

```TypeScript
RADIO_OFF = 247
```

Indicates the call disconnect due to Radio off.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## OUT_OF_SERVICE

```TypeScript
OUT_OF_SERVICE = 248
```

Indicates the call disconnect due to out of service.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NO_VALID_SIM

```TypeScript
NO_VALID_SIM = 249
```

Indicates the call disconnect due to invalid SIM.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_INTERNAL_ERROR

```TypeScript
RADIO_INTERNAL_ERROR = 250
```

Indicates the call disconnect due to radio internal error.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NETWORK_RESP_TIMEOUT

```TypeScript
NETWORK_RESP_TIMEOUT = 251
```

Indicates the call disconnect due to network response timeout.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NETWORK_REJECT

```TypeScript
NETWORK_REJECT = 252
```

Indicates the call disconnect due to network reject.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_ACCESS_FAILURE

```TypeScript
RADIO_ACCESS_FAILURE = 253
```

Indicates the call disconnect due to radio access failure.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_LINK_FAILURE

```TypeScript
RADIO_LINK_FAILURE = 254
```

Indicates the call disconnect due to radio link failure.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_LINK_LOST

```TypeScript
RADIO_LINK_LOST = 255
```

Indicates the call disconnect due to radio link lost.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_UPLINK_FAILURE

```TypeScript
RADIO_UPLINK_FAILURE = 256
```

Indicates the call disconnect due to radio uplink failure.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_SETUP_FAILURE

```TypeScript
RADIO_SETUP_FAILURE = 257
```

Indicates the call disconnect due to radio setup failure.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_RELEASE_NORMAL

```TypeScript
RADIO_RELEASE_NORMAL = 258
```

Indicates the call disconnect due to radio release normal.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## RADIO_RELEASE_ABNORMAL

```TypeScript
RADIO_RELEASE_ABNORMAL = 259
```

Indicates the call disconnect due to radio release abnormal.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## ACCESS_CLASS_BLOCKED

```TypeScript
ACCESS_CLASS_BLOCKED = 260
```

Indicates the call disconnect due to access class blocked.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## NETWORK_DETACH

```TypeScript
NETWORK_DETACH = 261
```

Indicates the call disconnect due to network detach.

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## INVALID_PARAMETER

```TypeScript
INVALID_PARAMETER = 1025
```

Indicates the call disconnect due to invalid parameter.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## SIM_NOT_EXIT

```TypeScript
SIM_NOT_EXIT = 1026
```

Indicates the call disconnect due to sim not exit.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## SIM_PIN_NEED

```TypeScript
SIM_PIN_NEED = 1027
```

Indicates the call disconnect due to sim pin need.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## CALL_NOT_ALLOW

```TypeScript
CALL_NOT_ALLOW = 1029
```

Indicates the call disconnect due to call not allow.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## SIM_INVALID

```TypeScript
SIM_INVALID = 1045
```

Indicates the call disconnect due to sim invalid.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## UNKNOWN

```TypeScript
UNKNOWN = 1279
```

Indicates the call disconnect due to unknown error.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

