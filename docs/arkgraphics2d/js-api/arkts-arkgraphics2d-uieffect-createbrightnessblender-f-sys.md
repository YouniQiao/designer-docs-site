# createBrightnessBlender (System API)

## createBrightnessBlender

```TypeScript
function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender
```

Create a BrightnessBlender, which is used to adjust the brightness of UI components.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-uiEffect-function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender--><!--Device-uiEffect-function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The brightness blender parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Returns the blender. |

**Example**

```TypeScript
let blender : uiEffect.BrightnessBlender =
  uiEffect.createBrightnessBlender({cubicRate:1.0, quadraticRate:1.0, linearRate:1.0, degree:1.0, saturation:1.0,
    positiveCoefficient:[2.3, 4.5, 2.0], negativeCoefficient:[0.5, 2.0, 0.5], fraction:0.0})
```

