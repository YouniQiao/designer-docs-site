# getDefaultCellularDataSlotIdSync

## Modules to Import

```TypeScript
import { data } from '@ohos.telephony.data';
```

## getDefaultCellularDataSlotIdSync

```TypeScript
function getDefaultCellularDataSlotIdSync(): number
```

Get the default cellular data card.

**Since:** 9

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

