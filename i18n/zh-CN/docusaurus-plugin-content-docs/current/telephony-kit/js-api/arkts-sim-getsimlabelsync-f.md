# getSimLabelSync

## getSimLabelSync

```TypeScript
function getSimLabelSync(slotId: int): SimLabel
```

Obtains the SIM card label synchronously.

**起始版本：** 20

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | SIM card slot ID, which ranges from 0 to the maximum number of slots supported  by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SimLabel | SIM card label. |

**示例：**

```TypeScript
import { sim } from '@kit.TelephonyKit';


let simLabel: sim.SimLabel = sim.getSimLabelSync(0);
console.info(`The sim state is:` + simLabel);

```

