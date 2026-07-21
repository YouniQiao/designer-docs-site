# getTouchModeSync

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="gettouchmodesync"></a>
## getTouchModeSync

```TypeScript
function getTouchModeSync(): string
```

Queries single- or double-touch mode.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-accessibility-function getTouchModeSync(): string--><!--Device-accessibility-function getTouchModeSync(): string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Touch mode.<br>- **singleTouchMode**: Single-touch mode.<br>- **doubleTouchMode**: Double-touch mode.<br>- **none**: Touch guide mode is disabled. |

