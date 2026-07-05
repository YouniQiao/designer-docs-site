# hasCall

## Modules to Import

```TypeScript
import { call } from '@ohos.telephony.call';
```

## hasCall

```TypeScript
function hasCall(callback: AsyncCallback<boolean>): void
```

Checks whether a call is ongoing.

**Since:** 6

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | The callback of hasCall. Returns {@code true} if at least one call isnot in the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.hasCall((err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`hasCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`hasCall success, data->${JSON.stringify(data)}`);
    }
});

```


## hasCall

```TypeScript
function hasCall(): Promise<boolean>
```

Checks whether a call is ongoing.

**Since:** 6

**System capability:** SystemCapability.Telephony.CallManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if at least one call is notin the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.hasCall().then(() => {
    console.info(`hasCall success`);
}).catch((err: BusinessError) => {
    console.error(`hasCall fail, promise: err->${JSON.stringify(err)}`);
});

```

