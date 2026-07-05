# getFoldStatus

## Modules to Import

```TypeScript
import { display } from '@ohos.display';
```

## getFoldStatus

```TypeScript
function getFoldStatus(): FoldStatus
```

Obtains the fold status of this foldable device.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| FoldStatus | Fold status of the device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |

**Example**

```TypeScript
let data: display.FoldStatus = display.getFoldStatus();
console.info(`Succeeded in obtaining fold status. Data: ${data}`);

```

