# createEffect

## Modules to Import

```TypeScript
import { uiEffect } from '@ohos.graphics.uiEffect';
```

## createEffect

```TypeScript
function createEffect(): VisualEffect
```

Create a VisualEffect to add multiple effects to the component.

**Since:** 12

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| VisualEffect | Returns the head node of visualEffect. |

**Example**

```TypeScript
let visualEffect : uiEffect.VisualEffect = uiEffect.createEffect()

```

