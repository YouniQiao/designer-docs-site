# isNRSupported

## Modules to Import

```TypeScript
import { radio } from '@ohos.telephony.radio';
```

## isNRSupported

```TypeScript
function isNRSupported(): boolean
```

Checks whether the device supports 5G New Radio (NR).

**Since:** 9

**System capability:** SystemCapability.Telephony.CoreService

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the device supports 5G NR; returns {@code false} otherwise. |

**Example**

```TypeScript
let result: boolean = radio.isNRSupported();
console.info("Result: "+ result);

```


## isNRSupported

```TypeScript
function isNRSupported(slotId: number): boolean
```

Checks whether the device supports 5G New Radio (NR) by according card slot.

**Since:** 9

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index int, ranging from 0 to the maximum card slotindex number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the device supports 5G NR; returns {@code false} otherwise. |

**Example**

```TypeScript
let slotId: number = 0;
let result: boolean = radio.isNRSupported(slotId);
console.info("Result: "+ result);

```

