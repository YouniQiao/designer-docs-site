# CallState

```TypeScript
export enum CallState
```

Indicates the states of call.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

## CALL_STATE_UNKNOWN

```TypeScript
CALL_STATE_UNKNOWN = -1
```

Indicates an invalid state, which is used when the call state fails to be obtained.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

## CALL_STATE_IDLE

```TypeScript
CALL_STATE_IDLE = 0
```

Indicates that there is no ongoing call.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

## CALL_STATE_RINGING

```TypeScript
CALL_STATE_RINGING = 1
```

Indicates that an incoming call is ringing or waiting.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

## CALL_STATE_OFFHOOK

```TypeScript
CALL_STATE_OFFHOOK = 2
```

Indicates that a least one call is in the dialing, active, or hold state, and there is no new incoming call ringing or waiting.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

## CALL_STATE_ANSWERED

```TypeScript
CALL_STATE_ANSWERED = 3
```

Indicates that call is answered

**起始版本：** 11

**系统能力：** SystemCapability.Telephony.CallManager

