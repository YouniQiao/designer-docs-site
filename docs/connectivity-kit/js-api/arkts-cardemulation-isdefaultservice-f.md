# isDefaultService

## isDefaultService

```TypeScript
function isDefaultService(elementName: ElementName, type: CardType): boolean
```

Checks whether a service is default for given type.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | The element name of the service ability |
| type | CardType | Yes | The type to query, payment or other. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the service is default, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
// Applicable to devices other than lite wearables
import { cardEmulation } from '@kit.ConnectivityKit';
import { bundleManager, Want } from '@kit.AbilityKit';

// Initialize elementName, bundleName, and abilityName and set their values correctly based on the actual application information.
let elementName: bundleManager.ElementName = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  abilityName: "EntryAbility"
};

let isDefaultService: boolean = cardEmulation.isDefaultService(elementName, cardEmulation.CardType.PAYMENT);


// Applicable to lite wearables
import cardEmulation from '@ohos.nfc.cardEmulation';

let appName = "com.example.testquestionlite";
let isDefaultService = cardEmulation.isDefaultService(appName, cardEmulation.CardType.PAYMENT);

```

