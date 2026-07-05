# getSignalInformationSync

## getSignalInformationSync

```TypeScript
function getSignalInformationSync(slotId: int): Array<SignalInformation>
```

Obtains the list of signal strength information of the registered network corresponding to a specified SIM card.

**Since:** 10

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum  card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SignalInformation> | Returns the callback for getting the instance list of  the child classes derived from {@link SignalInformation}. |

**Example**

```TypeScript
let slotId: number = 0;
let signalInfo: Array<radio.SignalInformation> = radio.getSignalInformationSync(slotId);
console.info(`signal information size is:` + signalInfo.length);

```

