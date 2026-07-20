# getCallStateSync

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## getCallStateSync

```TypeScript
function getCallStateSync(): CallState
```

Obtains the call state.

If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.

**Since:** 10

<!--Device-call-function getCallStateSync(): CallState--><!--Device-call-function getCallStateSync(): CallState-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Return value:**

| Type | Description |
| --- | --- |
| [CallState](arkts-telephony-call-callstate-e.md) | Returns the call state. |

**Example**

```TypeScript
let callState: call.CallState = call.getCallStateSync();
console.info(`the call state is:` + callState);

```

