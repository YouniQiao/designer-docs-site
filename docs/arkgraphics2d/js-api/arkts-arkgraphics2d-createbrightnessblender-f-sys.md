# createBrightnessBlender (System API)

## Modules to Import

```TypeScript
import { uiEffect } from '@ohos.graphics.uiEffect';
```

## createBrightnessBlender

```TypeScript
function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender
```

Create a BrightnessBlender, which is used to adjust the brightness of UI components.

**Since:** 12

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | BrightnessBlenderParam | Yes | The brightness blender parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| BrightnessBlender | Returns the blender. |

**Example**

```TypeScript
let blender : uiEffect.BrightnessBlender =
  uiEffect.createBrightnessBlender({cubicRate:1.0, quadraticRate:1.0, linearRate:1.0, degree:1.0, saturation:1.0,
    positiveCoefficient:[2.3, 4.5, 2.0], negativeCoefficient:[0.5, 2.0, 0.5], fraction:0.0})

```

