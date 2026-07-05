# createBrightnessBlender

## createBrightnessBlender

```TypeScript
function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender
```

创建BrightnessBlender实例用于给组件添加提亮效果。

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | BrightnessBlenderParam | Yes | 实现提亮效果的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| BrightnessBlender | 返回设置了提亮效果参数的BrightnessBlender。 |

**Example**

```TypeScript
let blender : uiEffect.BrightnessBlender =
  uiEffect.createBrightnessBlender({cubicRate:1.0, quadraticRate:1.0, linearRate:1.0, degree:1.0, saturation:1.0,
    positiveCoefficient:[2.3, 4.5, 2.0], negativeCoefficient:[0.5, 2.0, 0.5], fraction:0.0})

```

