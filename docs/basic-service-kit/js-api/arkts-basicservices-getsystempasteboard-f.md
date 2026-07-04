# getSystemPasteboard

## Modules to Import

```TypeScript
import { pasteboard } from '@ohos.pasteboard';
```

## getSystemPasteboard

```TypeScript
function getSystemPasteboard(): SystemPasteboard
```

Obtains **SystemPasteboard** object.

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.MiscServices.Pasteboard

**Return value:**

| Type | Description |
| --- | --- |
| SystemPasteboard | **SystemPasteboard** object. |

**Example**

```TypeScript
// Obtain the SystemPasteboard object.
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();

```

