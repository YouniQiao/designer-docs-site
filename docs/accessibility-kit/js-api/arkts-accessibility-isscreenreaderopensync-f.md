# isScreenReaderOpenSync

## isScreenReaderOpenSync

```TypeScript
function isScreenReaderOpenSync(): boolean
```

Checks whether screen reader mode is enabled.

**Since:** 18

**Atomic service API:** From API version 23 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Vision

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the screen reader is enabled. Returns true if the screen reader is enabled;  returns false otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let status: boolean = accessibility.isScreenReaderOpenSync();

```

