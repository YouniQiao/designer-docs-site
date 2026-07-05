# getDefaultVoiceSlotId

## Modules to Import

```TypeScript
import { sim } from '@ohos.telephony.sim';
```

## getDefaultVoiceSlotId

```TypeScript
function getDefaultVoiceSlotId(callback: AsyncCallback<number>): void
```

Obtains the default card slot for the voice service.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Indicates the callback for gettingthe default card slot for the voice service.Returns {@code 0} if card 1 is used as the default card slot for the voice service;returns {@code 1} if card 2 is used as the default card slot for the voice service;returns {@code -1} if no card is available for the voice service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getDefaultVoiceSlotId((err: BusinessError, data: number) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


## getDefaultVoiceSlotId

```TypeScript
function getDefaultVoiceSlotId(): Promise<number>
```

Obtains the default card slot for the voice service.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns {@code 0} if card 1 is used as the default card slot for the voice service;returns {@code 1} if card 2 is used as the default card slot for the voice service;returns {@code -1} if no card is available for the voice service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getDefaultVoiceSlotId().then((data: number) => {
    console.info(`getDefaultVoiceSlotId success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getDefaultVoiceSlotId failed, promise: err->${JSON.stringify(err)}`);
});

```

