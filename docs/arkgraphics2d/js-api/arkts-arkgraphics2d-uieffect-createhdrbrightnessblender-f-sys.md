# createHdrBrightnessBlender (System API)

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

<a id="createhdrbrightnessblender"></a>
## createHdrBrightnessBlender

```TypeScript
function createHdrBrightnessBlender(param: BrightnessBlenderParam): HdrBrightnessBlender
```

Create an HdrBrightnessBlender, which is used to adjust the HDR brightness of UI components.

**Since:** 20

<!--Device-uiEffect-function createHdrBrightnessBlender(param: BrightnessBlenderParam): HdrBrightnessBlender--><!--Device-uiEffect-function createHdrBrightnessBlender(param: BrightnessBlenderParam): HdrBrightnessBlender-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [BrightnessBlenderParam](arkts-arkgraphics2d-graphics-uieffect-brightnessblenderparam-i-sys.md) | Yes | The brightness blender parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| [HdrBrightnessBlender](arkts-arkgraphics2d-uieffect-hdrbrightnessblender-i.md) | Returns the blender. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

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

