# createEffect

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

<a id="createeffect"></a>
## createEffect

```TypeScript
function createEffect(): VisualEffect
```

Create a VisualEffect to add multiple effects to the component.

**Since:** 12

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

<!--Device-uiEffect-function createEffect(): VisualEffect--><!--Device-uiEffect-function createEffect(): VisualEffect-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [VisualEffect](../../apis-arkui/arkts-components/arkts-arkui-visualeffect-t.md) | Returns the head node of visualEffect. |

**Example**

```TypeScript
// Create a VisualEffect instance
let visualEffect : uiEffect.VisualEffect = uiEffect.createEffect();

```

