# createFilter

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## createFilter

```TypeScript
function createFilter(): Filter
```

Create a Filter to add multiple effects to the component.

**Since:** 12

<!--Device-uiEffect-function createFilter(): Filter--><!--Device-uiEffect-function createFilter(): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Returns the head node of Filter. |

**Example**

```TypeScript
// Create a Filter instance
let filter : uiEffect.Filter = uiEffect.createFilter();

```

