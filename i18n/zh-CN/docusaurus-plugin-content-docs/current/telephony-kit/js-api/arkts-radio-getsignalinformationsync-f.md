# getSignalInformationSync

## getSignalInformationSync

```TypeScript
function getSignalInformationSync(slotId: int): Array<SignalInformation>
```

Obtains the list of signal strength information of the registered network corresponding to a specified SIM card.

**起始版本：** 10

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum  card slots supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;SignalInformation> | Returns the callback for getting the instance list of  the child classes derived from {@link SignalInformation}. |

**示例：**

```TypeScript
let slotId: number = 0;
let signalInfo: Array<radio.SignalInformation> = radio.getSignalInformationSync(slotId);
console.info(`signal information size is:` + signalInfo.length);

```

