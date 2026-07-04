# getSignalInformationSync

## Modules to Import

```TypeScript
import { radio } from '@ohos.telephony.radio';
```

## getSignalInformationSync

```TypeScript
function getSignalInformationSync(slotId: number): Array<SignalInformation>
```

Obtains the list of signal strength information of the registered network corresponding to a specified SIM card.

**Since:** 10

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximumcard slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SignalInformation&gt; | Returns the callback for getting the instance list ofthe child classes derived from {@link SignalInformation}. |

**Example**

```TypeScript
let slotId: number = 0;
let signalInfo: Array<radio.SignalInformation> = radio.getSignalInformationSync(slotId);
console.info(`signal information size is:` + signalInfo.length);

```

