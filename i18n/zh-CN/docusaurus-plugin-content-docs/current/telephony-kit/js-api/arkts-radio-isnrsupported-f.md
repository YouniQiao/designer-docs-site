# isNrSupported

## isNrSupported

```TypeScript
function isNrSupported(): boolean
```

Checks whether the device supports 5G New Radio (NR).

**起始版本：** 7

**废弃版本：** 9

**替代接口：** telephony.radio#isNRSupported

**系统能力：** SystemCapability.Telephony.CoreService

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the device supports 5G NR; returns {@code false} otherwise. |

**示例：**

```TypeScript
let result: boolean = radio.isNrSupported();
console.info("Result: "+ result);

```

## isNrSupported

```TypeScript
function isNrSupported(slotId: int): boolean
```

Checks whether the device supports 5G New Radio (NR) by according card slot.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** telephony.radio#isNRSupported

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the device supports 5G NR; returns {@code false} otherwise. |

**示例：**

```TypeScript
let slotId: number = 0;
let result: boolean = radio.isNrSupported(slotId);
console.info("Result: "+ result);

```

