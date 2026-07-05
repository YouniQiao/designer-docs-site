# isOpenAccessibilitySync

## isOpenAccessibilitySync

```TypeScript
function isOpenAccessibilitySync(): boolean
```

Checks whether any accessibility application has been enabled in the system. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync]accessibility.getAccessibilityExtensionListSync.

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether any accessibility application has been enabled in the system. Returns true if one  or more accessibility applications are enabled; returns false otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 1. If no accessibility application is enabled, the system returns false.
// 2. If any accessibility application is enabled, the system returns true.
let status: boolean = accessibility.isOpenAccessibilitySync();

```

