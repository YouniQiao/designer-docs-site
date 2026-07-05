# getOperatorNameSync

## getOperatorNameSync

```TypeScript
function getOperatorNameSync(slotId: int): string
```

Get the operator name of the specified SIM card slot.

**起始版本：** 10

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the operator name. |

**示例：**

```TypeScript
let slotId: number = 0;
let operatorName: string = radio.getOperatorNameSync(slotId);
console.info(`operator name is:` + operatorName);

```

