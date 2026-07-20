# getISOCountryCodeForNetworkSync

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## getISOCountryCodeForNetworkSync

```TypeScript
function getISOCountryCodeForNetworkSync(slotId: number): string
```

Obtains the ISO-defined country code of the country where the registered network is deployed.

**Since:** 10

<!--Device-radio-function getISOCountryCodeForNetworkSync(slotId: int): string--><!--Device-radio-function getISOCountryCodeForNetworkSync(slotId: int): string-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the country code defined in ISO 3166-2.Returns an empty string if the device is not registered with any network. |

**Example**

```TypeScript
let slotId: number = 0;
let countryISO: string = radio.getISOCountryCodeForNetworkSync(slotId);
console.info(`the country ISO is:` + countryISO);

```

