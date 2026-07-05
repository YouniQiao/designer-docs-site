# getCaptionsManager

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## getCaptionsManager

```TypeScript
function getCaptionsManager(): CaptionsManager
```

Obtains a **CaptionsManager** instance.

**Since:** 8

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

**Return value:**

| Type | Description |
| --- | --- |
| CaptionsManager | Captions configuration. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let captionsManager = accessibility.getCaptionsManager();

```

