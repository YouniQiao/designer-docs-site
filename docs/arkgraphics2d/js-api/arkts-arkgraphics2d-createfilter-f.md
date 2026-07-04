# createFilter

## Modules to Import

```TypeScript
import { uiEffect } from '@ohos.graphics.uiEffect';
```

## createFilter

```TypeScript
function createFilter(): Filter
```

Create a Filter to add multiple effects to the component.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Filter | Returns the head node of Filter. |

**Example**

```TypeScript
let filter : uiEffect.Filter = uiEffect.createFilter()

```

