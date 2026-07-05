# getCallStateSync

## getCallStateSync

```TypeScript
function getCallStateSync(): CallState
```

Obtains the call state. If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}. If at least one call is in the active, hold, or dialing state, the system returns {@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.

**起始版本：** 10

**系统能力：** SystemCapability.Telephony.CallManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CallState | Returns the call state. |

**示例：**

```TypeScript
let callState: call.CallState = call.getCallStateSync();
console.info(`the call state is:` + callState);

```

