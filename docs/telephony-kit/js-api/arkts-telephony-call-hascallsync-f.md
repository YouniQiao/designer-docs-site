# hasCallSync

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="hascallsync"></a>
## hasCallSync

```TypeScript
function hasCallSync(): boolean
```

Checks whether a call is ongoing.

**Since:** 10

<!--Device-call-function hasCallSync(): boolean--><!--Device-call-function hasCallSync(): boolean-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if at least one call is not in the {@link CallState#CALL_STATE_IDLE}state; returns {@code false} otherwise. |

**Example**

```TypeScript
let hasCall: boolean = call.hasCallSync();
console.info(`hasCallSync success, has call is ` + hasCall);

```

