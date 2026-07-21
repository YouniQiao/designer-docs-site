# getISOCountryCodeForSimSync

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

<a id="getisocountrycodeforsimsync"></a>
## getISOCountryCodeForSimSync

```TypeScript
function getISOCountryCodeForSimSync(slotId: number): string
```

Obtains the ISO country code of the SIM card in a specified slot.

**Since:** 10

<!--Device-sim-function getISOCountryCodeForSimSync(slotId: int): string--><!--Device-sim-function getISOCountryCodeForSimSync(slotId: int): string-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the country code defined in ISO 3166-2; returns an empty string if no SIM card is inserted. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let countryCode: string = sim.getISOCountryCodeForSimSync(0);
console.info(`the country ISO is:` + countryCode);

```

