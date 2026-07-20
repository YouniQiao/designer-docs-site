# getDefaultVoiceSlotId

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## getDefaultVoiceSlotId

```TypeScript
function getDefaultVoiceSlotId(callback: AsyncCallback<number>): void
```

Obtains the default card slot for the voice service.

**Since:** 7

<!--Device-sim-function getDefaultVoiceSlotId(callback: AsyncCallback<int>): void--><!--Device-sim-function getDefaultVoiceSlotId(callback: AsyncCallback<int>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Indicates the callback for getting the default card slot for the voice service.Returns {@code 0} if card 1 is used as the default card slot for the voice service;returns {@code 1} if card 2 is used as the default card slot for the voice service;returns {@code -1} if no card is available for the voice service. |

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

<!--Device-sim-function getDefaultVoiceSlotId(): Promise<int>--><!--Device-sim-function getDefaultVoiceSlotId(): Promise<int>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Returns {@code 0} if card 1 is used as the default card slot for the voice service;returns {@code 1} if card 2 is used as the default card slot for the voice service;returns {@code -1} if no card is available for the voice service. |

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

