# getCallState

## getCallState

```TypeScript
function getCallState(callback: AsyncCallback<CallState>): void
```

Obtains the call state. If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}. If at least one call is in the active, hold, or dialing state, the system returns {@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CallState> | 是 | Indicates the callback for getting the call state. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getCallState((err: BusinessError, data: call.CallState) => {
    if (err) {
        console.error(`getCallState fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`getCallState success, data->${JSON.stringify(data)}`);
    }
});

```

## getCallState

```TypeScript
function getCallState(): Promise<CallState>
```

Obtains the call state. If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}. If at least one call is in the active, hold, or dialing state, the system returns {@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CallState> | Returns the call state. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getCallState().then((data: call.CallState) => {
    console.info(`getCallState success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getCallState fail, promise: err->${JSON.stringify(err)}`);
});

```

