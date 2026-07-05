# createHdrBrightnessBlender

## createHdrBrightnessBlender

```TypeScript
function createHdrBrightnessBlender(param: BrightnessBlenderParam): HdrBrightnessBlender
```

创建HdrBrightnessBlender实例用于给组件添加支持HDR的提亮效果。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | BrightnessBlenderParam | Yes | 实现提亮效果的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| HdrBrightnessBlender | 返回具有提亮效果的混合器（支持HDR）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**Example**

```TypeScript
import { uiEffect } from "@kit.ArkGraphics2D"

let blender : uiEffect.HdrBrightnessBlender =
  uiEffect.createHdrBrightnessBlender({cubicRate:1.0, quadraticRate:1.0, linearRate:1.0, degree:1.0, saturation:1.0,
    positiveCoefficient:[2.3, 4.5, 2.0], negativeCoefficient:[0.5, 2.0, 0.5], fraction:0.0})

@Entry
@Component
struct example {
  build() {
    RelativeContainer() {
      Image($r("app.media.screenshot"))
        .width("100%")
        .height("100%")
        .advancedBlendMode(blender)
    }
  }
}

```

