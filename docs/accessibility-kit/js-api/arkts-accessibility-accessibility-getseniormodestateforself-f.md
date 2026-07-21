# getSeniorModeStateForSelf

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="getseniormodestateforself"></a>
## getSeniorModeStateForSelf

```TypeScript
function getSeniorModeStateForSelf(): Promise<boolean>
```

Check if this application's senior mode is enabled.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-accessibility-function getSeniorModeStateForSelf(): Promise<boolean>--><!--Device-accessibility-function getSeniorModeStateForSelf(): Promise<boolean>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if senior mode is enabled; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality. |

