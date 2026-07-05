# isOperatorSimCard

## isOperatorSimCard

```TypeScript
function isOperatorSimCard(slotId: int, operator: OperatorSimCard): boolean
```

Indicates whether the SIM card in a specified slot is a specified operator.

**起始版本：** 11

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| operator | OperatorSimCard | 是 | Indicates the operator of sim. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the SIM card is specified operator; return {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let slotId : number = 0;
let operator : sim.OperatorSimCard = sim.OperatorSimCard.CHINA_TELECOM_CARD;
try {
    let isOperatorSimCard: boolean = sim.isOperatorSimCard(slotId, operator);
    console.info(`is operator sim card: ` + isOperatorSimCard);
} catch (err) {
    console.error("isOperatorSimCard err: " + JSON.stringify(err));
}

```

