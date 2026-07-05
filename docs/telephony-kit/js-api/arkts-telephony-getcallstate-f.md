# getCallState

## Modules to Import

```TypeScript
import { call } from '@ohos.telephony.call';
```

## getCallState

```TypeScript
function getCallState(callback: AsyncCallback<CallState>): void
```

Obtains the call state. If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}. If at least one call is in the active, hold, or dialing state, the system returns {@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.

**Since:** 6

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CallState&gt; | Yes | Indicates the callback for getting the call state. |

**Example**

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

**Since:** 6

**System capability:** SystemCapability.Telephony.CallManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CallState&gt; | Returns the call state. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getCallState().then((data: call.CallState) => {
    console.info(`getCallState success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getCallState fail, promise: err->${JSON.stringify(err)}`);
});

```

