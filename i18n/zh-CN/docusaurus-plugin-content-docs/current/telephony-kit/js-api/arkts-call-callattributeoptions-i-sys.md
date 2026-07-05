# CallAttributeOptions

Indicates the options of call attribute.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## callId

```TypeScript
callId: int
```

Indicates the id of call.

**类型：** int

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## originalCallType

```TypeScript
originalCallType: int
```

Indicates the initial type of this call.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## speakerphoneOn

```TypeScript
speakerphoneOn: boolean
```

Indicates if the call is start with speaker.

**类型：** boolean

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## voipCallAttribute

```TypeScript
voipCallAttribute?: VoipCallAttribute
```

Indicates the detail information of voip call.

**类型：** VoipCallAttribute

**起始版本：** 11

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## numberLocation

```TypeScript
numberLocation?: string
```

Indicates the location of the phone number.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## conferenceState

```TypeScript
conferenceState: ConferenceState
```

Indicates the state of conference.

**类型：** ConferenceState

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## isEcc

```TypeScript
isEcc: boolean
```

Indicates if this is an emergency call.

**类型：** boolean

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## extraParams

```TypeScript
extraParams?: Record<string, Object>
```

Indicates the extra call parameters.

**类型：** Record<string, Object>

**起始版本：** 14

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## isCustomAccessibility

```TypeScript
isCustomAccessibility?: boolean
```

Indicates is custom accessibility enabled.

**类型：** boolean

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## accountNumber

```TypeScript
accountNumber: string
```

Indicates the number of account.

**类型：** string

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## rttState

```TypeScript
rttState?: RttState
```

Indicates the rtt state.

**类型：** RttState

**起始版本：** 22

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## callState

```TypeScript
callState: DetailedCallState
```

Indicates the detailed state of call.

**类型：** DetailedCallState

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## callType

```TypeScript
callType: CallType
```

Indicates the type of call.

**类型：** CallType

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## accountId

```TypeScript
accountId: int
```

Indicates the id of account.

**类型：** int

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## numberMarkInfo

```TypeScript
numberMarkInfo?: NumberMarkInfo
```

Indicates the mark information of the phone number.

**类型：** NumberMarkInfo

**起始版本：** 12

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## crsType

```TypeScript
crsType: int
```

Indicates the color tone type.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## xCallType

```TypeScript
xCallType?: XCallType
```

Indicates the xcall type.

**类型：** XCallType

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## startTime

```TypeScript
startTime: int
```

Indicates the start time.

**类型：** int

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## videoState

```TypeScript
videoState: VideoStateType
```

Indicates the type of video state.

**类型：** VideoStateType

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

