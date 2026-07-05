# isNrSupported

## isNrSupported

```TypeScript
function isNrSupported(): boolean
```

Checks whether the device supports 5G New Radio (NR).

**Since:** 7

**Deprecated since:** 9

**Substitute:** telephony.radio#isNRSupported

**System capability:** SystemCapability.Telephony.CoreService

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the device supports 5G NR; returns {@code false} otherwise. |

**Example**

```TypeScript
let result: boolean = radio.isNrSupported();
console.info("Result: "+ result);

```

## isNrSupported

```TypeScript
function isNrSupported(slotId: int): boolean
```

Checks whether the device supports 5G New Radio (NR) by according card slot.

**Since:** 8

**Deprecated since:** 9

**Substitute:** telephony.radio#isNRSupported

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the device supports 5G NR; returns {@code false} otherwise. |

**Example**

```TypeScript
let slotId: number = 0;
let result: boolean = radio.isNrSupported(slotId);
console.info("Result: "+ result);

```

