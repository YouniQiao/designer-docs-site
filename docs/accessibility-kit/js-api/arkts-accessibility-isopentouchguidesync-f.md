# isOpenTouchGuideSync

## isOpenTouchGuideSync

```TypeScript
function isOpenTouchGuideSync(): boolean
```

Checks whether touch guide mode is enabled.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Vision

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether touch guide mode is enabled. Returns true if touch guide mode is enabled; returns  false otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let status: boolean = accessibility.isOpenTouchGuideSync();

```

