# getDefaultCellularDataSimId

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

<a id="getdefaultcellulardatasimid"></a>
## getDefaultCellularDataSimId

```TypeScript
function getDefaultCellularDataSimId(): number
```

Obtains the default cellular data SIM ID.

**Since:** 10

<!--Device-data-function getDefaultCellularDataSimId(): int--><!--Device-data-function getDefaultCellularDataSimId(): int-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the SIM ID of the default cellular data sim and SIM ID will increase from 1. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';

console.info("Result: "+ data.getDefaultCellularDataSimId());

```

