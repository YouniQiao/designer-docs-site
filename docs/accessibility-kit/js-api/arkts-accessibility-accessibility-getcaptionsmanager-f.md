# getCaptionsManager

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="getcaptionsmanager"></a>
## getCaptionsManager

```TypeScript
function getCaptionsManager(): CaptionsManager
```

Obtains a **CaptionsManager** instance.

**Since:** 8

**Deprecated since:** 12

<!--Device-accessibility-function getCaptionsManager(): CaptionsManager--><!--Device-accessibility-function getCaptionsManager(): CaptionsManager-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

**Return value:**

| Type | Description |
| --- | --- |
| [CaptionsManager](arkts-accessibility-accessibility-captionsmanager-i.md) | Captions configuration. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let captionsManager = accessibility.getCaptionsManager();

```

