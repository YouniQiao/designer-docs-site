# isScreenReaderOpenSync

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## isScreenReaderOpenSync

```TypeScript
function isScreenReaderOpenSync(): boolean
```

Checks whether screen reader mode is enabled.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.BarrierFree.Accessibility.Vision

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the screen reader is enabled. Returns **true** if the screen reader is enabled;returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let status: boolean = accessibility.isScreenReaderOpenSync();

```

