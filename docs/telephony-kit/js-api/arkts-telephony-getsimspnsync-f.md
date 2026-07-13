# getSimSpnSync

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## getSimSpnSync

```TypeScript
function getSimSpnSync(slotId: number): string
```

Obtains the service provider name (SPN) of the SIM card in a specified slot.

<p>The value is recorded in the EFSPN file of the SIM card and is irrelevant to the network
with which the SIM card is currently registered.

**Since:** 10

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the SPN; returns an empty string if no EFSPN file is configured for the SIM card.in the SIM card. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let spn: string = sim.getSimSpnSync(0);
console.info(`the sim card spn is:` + spn);

```

