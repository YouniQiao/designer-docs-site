# getSignalInformationSync

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

<a id="getsignalinformationsync"></a>
## getSignalInformationSync

```TypeScript
function getSignalInformationSync(slotId: number): Array<SignalInformation>
```

Obtains the list of signal strength information of the registered network corresponding to a specified SIM card.

**Since:** 10

<!--Device-radio-function getSignalInformationSync(slotId: int): Array<SignalInformation>--><!--Device-radio-function getSignalInformationSync(slotId: int): Array<SignalInformation>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SignalInformation&gt; | Returns the callback for getting the instance list of the child classes derived from {@link SignalInformation}. |

**Example**

```TypeScript
let slotId: number = 0;
let signalInfo: Array<radio.SignalInformation> = radio.getSignalInformationSync(slotId);
console.info(`signal information size is:` + signalInfo.length);

```

