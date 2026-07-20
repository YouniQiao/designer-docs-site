# CallAttributeOptions (System API)

Indicates the options of call attribute.

**Since:** 7

<!--Device-call-export interface CallAttributeOptions--><!--Device-call-export interface CallAttributeOptions-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## accountId

```TypeScript
accountId: number
```

Indicates the id of account.

**Type:** number

**Since:** 7

<!--Device-CallAttributeOptions-accountId: int--><!--Device-CallAttributeOptions-accountId: int-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## accountNumber

```TypeScript
accountNumber: string
```

Indicates the number of account.

**Type:** string

**Since:** 7

<!--Device-CallAttributeOptions-accountNumber: string--><!--Device-CallAttributeOptions-accountNumber: string-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## callId

```TypeScript
callId: number
```

Indicates the id of call.

**Type:** number

**Since:** 7

<!--Device-CallAttributeOptions-callId: int--><!--Device-CallAttributeOptions-callId: int-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## callState

```TypeScript
callState: DetailedCallState
```

Indicates the detailed state of call.

**Type:** DetailedCallState

**Since:** 7

<!--Device-CallAttributeOptions-callState: DetailedCallState--><!--Device-CallAttributeOptions-callState: DetailedCallState-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## callType

```TypeScript
callType: CallType
```

Indicates the type of call.

**Type:** CallType

**Since:** 7

<!--Device-CallAttributeOptions-callType: CallType--><!--Device-CallAttributeOptions-callType: CallType-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## conferenceState

```TypeScript
conferenceState: ConferenceState
```

Indicates the state of conference.

**Type:** ConferenceState

**Since:** 7

<!--Device-CallAttributeOptions-conferenceState: ConferenceState--><!--Device-CallAttributeOptions-conferenceState: ConferenceState-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## crsType

```TypeScript
crsType: number
```

Indicates the color tone type.

**Type:** number

**Since:** 11

<!--Device-CallAttributeOptions-crsType: int--><!--Device-CallAttributeOptions-crsType: int-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## extraParams

```TypeScript
extraParams?: Record<string, Object>
```

Indicates the extra call parameters.

**Type:** Record<string, Object>

**Since:** 14

<!--Device-CallAttributeOptions-extraParams?: Record<string, Object>--><!--Device-CallAttributeOptions-extraParams?: Record<string, Object>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## isCustomAccessibility

```TypeScript
isCustomAccessibility?: boolean
```

Indicates is custom accessibility enabled.

**Type:** boolean

**Since:** 26.0.0

<!--Device-CallAttributeOptions-isCustomAccessibility?: boolean--><!--Device-CallAttributeOptions-isCustomAccessibility?: boolean-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## isEcc

```TypeScript
isEcc: boolean
```

Indicates if this is an emergency call.

**Type:** boolean

**Since:** 7

<!--Device-CallAttributeOptions-isEcc: boolean--><!--Device-CallAttributeOptions-isEcc: boolean-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## numberLocation

```TypeScript
numberLocation?: string
```

Indicates the location of the phone number.

**Type:** string

**Since:** 12

<!--Device-CallAttributeOptions-numberLocation?: string--><!--Device-CallAttributeOptions-numberLocation?: string-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## numberMarkInfo

```TypeScript
numberMarkInfo?: NumberMarkInfo
```

Indicates the mark information of the phone number.

**Type:** NumberMarkInfo

**Since:** 12

<!--Device-CallAttributeOptions-numberMarkInfo?: NumberMarkInfo--><!--Device-CallAttributeOptions-numberMarkInfo?: NumberMarkInfo-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## originalCallType

```TypeScript
originalCallType: number
```

Indicates the initial type of this call.

**Type:** number

**Since:** 11

<!--Device-CallAttributeOptions-originalCallType: int--><!--Device-CallAttributeOptions-originalCallType: int-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## rttState

```TypeScript
rttState?: RttState
```

Indicates the rtt state.

**Type:** RttState

**Since:** 22

<!--Device-CallAttributeOptions-rttState?: RttState--><!--Device-CallAttributeOptions-rttState?: RttState-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## speakerphoneOn

```TypeScript
speakerphoneOn: boolean
```

Indicates if the call is start with speaker.

**Type:** boolean

**Since:** 7

<!--Device-CallAttributeOptions-speakerphoneOn: boolean--><!--Device-CallAttributeOptions-speakerphoneOn: boolean-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## startTime

```TypeScript
startTime: number
```

Indicates the start time.

**Type:** number

**Since:** 7

<!--Device-CallAttributeOptions-startTime: int--><!--Device-CallAttributeOptions-startTime: int-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## videoState

```TypeScript
videoState: VideoStateType
```

Indicates the type of video state.

**Type:** VideoStateType

**Since:** 7

<!--Device-CallAttributeOptions-videoState: VideoStateType--><!--Device-CallAttributeOptions-videoState: VideoStateType-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## voipCallAttribute

```TypeScript
voipCallAttribute?: VoipCallAttribute
```

Indicates the detail information of voip call.

**Type:** VoipCallAttribute

**Since:** 11

<!--Device-CallAttributeOptions-voipCallAttribute?: VoipCallAttribute--><!--Device-CallAttributeOptions-voipCallAttribute?: VoipCallAttribute-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## xCallType

```TypeScript
xCallType?: XCallType
```

Indicates the xcall type.

**Type:** XCallType

**Since:** 26.0.0

<!--Device-CallAttributeOptions-xCallType?: XCallType--><!--Device-CallAttributeOptions-xCallType?: XCallType-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

