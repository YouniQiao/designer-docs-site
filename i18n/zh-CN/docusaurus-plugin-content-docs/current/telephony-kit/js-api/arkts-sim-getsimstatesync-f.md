# getSimStateSync

## getSimStateSync

```TypeScript
function getSimStateSync(slotId: int): SimState
```

Obtains the state of the SIM card in a specified slot.

**起始版本：** 10

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slots supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SimState | Returns one of the following SIM card states:   {@code SimState#SIM_STATE_UNKNOWN}  {@code SimState#SIM_STATE_NOT_PRESENT}  {@code SimState#SIM_STATE_LOCKED}  {@code SimState#SIM_STATE_NOT_READY}  {@code SimState#SIM_STATE_READY}  {@code SimState#SIM_STATE_LOADED} |

**示例：**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let simState: sim.SimState = sim.getSimStateSync(0);
console.info(`The sim state is:` + simState);

```

