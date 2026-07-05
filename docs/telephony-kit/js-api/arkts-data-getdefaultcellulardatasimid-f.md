# getDefaultCellularDataSimId

## getDefaultCellularDataSimId

```TypeScript
function getDefaultCellularDataSimId(): int
```

Obtains the default cellular data SIM ID.

**Since:** 10

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the SIM ID of the default cellular data sim and SIM ID will increase from 1. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';

console.info("Result: "+ data.getDefaultCellularDataSimId());

```

