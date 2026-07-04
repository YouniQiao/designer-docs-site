# Key

Defines a key.

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## Modules to Import

```TypeScript
import { KeyEvent, Action, Key } from '@ohos.multimodalInput.keyEvent';
```

## code

```TypeScript
code: KeyCode
```

Key code.

**Type:** KeyCode

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.MultimodalInput.Input.Core

## deviceId

```TypeScript
deviceId: number
```

Unique ID of the input device. If a physical device is repeatedly reinstalled or restarted, its ID may change.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.MultimodalInput.Input.Core

## pressedTime

```TypeScript
pressedTime: number
```

Time when the key is pressed, in microseconds (μs) since the system starts.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.MultimodalInput.Input.Core

