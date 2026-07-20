# getCallState

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## getCallState

```TypeScript
function getCallState(callback: AsyncCallback<CallState>): void
```

Obtains the call state.

If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}.In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.

**Since:** 6

<!--Device-call-function getCallState(callback: AsyncCallback<CallState>): void--><!--Device-call-function getCallState(callback: AsyncCallback<CallState>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<CallState> | Yes | Indicates the callback for getting the call state. |

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

Obtains the call state.

If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}.In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.

**Since:** 6

<!--Device-call-function getCallState(): Promise<CallState>--><!--Device-call-function getCallState(): Promise<CallState>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<CallState> | Returns the call state. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getCallState().then((data: call.CallState) => {
    console.info(`getCallState success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getCallState fail, promise: err->${JSON.stringify(err)}`);
});

```

