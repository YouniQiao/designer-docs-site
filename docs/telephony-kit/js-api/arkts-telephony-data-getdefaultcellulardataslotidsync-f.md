# getDefaultCellularDataSlotIdSync

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

## getDefaultCellularDataSlotIdSync

```TypeScript
function getDefaultCellularDataSlotIdSync(): number
```

Get the default cellular data card.

**Since:** 9

<!--Device-data-function getDefaultCellularDataSlotIdSync(): int--><!--Device-data-function getDefaultCellularDataSlotIdSync(): int-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns default cellular data slot id. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';

console.info("Result: "+ data.getDefaultCellularDataSlotIdSync())

```

