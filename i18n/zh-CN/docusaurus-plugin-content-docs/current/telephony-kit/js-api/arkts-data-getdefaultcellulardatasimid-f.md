# getDefaultCellularDataSimId

## getDefaultCellularDataSimId

```TypeScript
function getDefaultCellularDataSimId(): int
```

Obtains the default cellular data SIM ID.

**起始版本：** 10

**系统能力：** SystemCapability.Telephony.CellularData

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the SIM ID of the default cellular data sim and SIM ID will increase from 1. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';

console.info("Result: "+ data.getDefaultCellularDataSimId());

```

