# getOperatorNameSync

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## getOperatorNameSync

```TypeScript
function getOperatorNameSync(slotId: number): string
```

Get the operator name of the specified SIM card slot.

**Since:** 10

<!--Device-radio-function getOperatorNameSync(slotId: int): string--><!--Device-radio-function getOperatorNameSync(slotId: int): string-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the operator name. |

**Example**

```TypeScript
let slotId: number = 0;
let operatorName: string = radio.getOperatorNameSync(slotId);
console.info(`operator name is:` + operatorName);

```

