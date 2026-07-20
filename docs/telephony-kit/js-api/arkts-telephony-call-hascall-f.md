# hasCall

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## hasCall

```TypeScript
function hasCall(callback: AsyncCallback<boolean>): void
```

Checks whether a call is ongoing.

**Since:** 6

<!--Device-call-function hasCall(callback: AsyncCallback<boolean>): void--><!--Device-call-function hasCall(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | The callback of hasCall. Returns {@code true} if at least one call is not in the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise. |

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

<!--Device-call-function hasCall(): Promise<boolean>--><!--Device-call-function hasCall(): Promise<boolean>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Returns {@code true} if at least one call is not in the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.hasCall().then(() => {
    console.info(`hasCall success`);
}).catch((err: BusinessError) => {
    console.error(`hasCall fail, promise: err->${JSON.stringify(err)}`);
});

```

