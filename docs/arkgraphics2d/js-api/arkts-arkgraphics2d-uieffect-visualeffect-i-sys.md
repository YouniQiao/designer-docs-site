# VisualEffect

The VisualEffect of Component.

**Since:** 12

<!--Device-uiEffect-interface VisualEffect--><!--Device-uiEffect-interface VisualEffect-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

<a id="backgroundcolorblender"></a>
## backgroundColorBlender

```TypeScript
backgroundColorBlender(blender: BrightnessBlender): VisualEffect
```

A backgroundColorEffect effect is added to the Component.

**Since:** 12

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-VisualEffect-backgroundColorBlender(blender: BrightnessBlender): VisualEffect--><!--Device-VisualEffect-backgroundColorBlender(blender: BrightnessBlender): VisualEffect-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blender | [BrightnessBlender](arkts-arkgraphics2d-uieffect-brightnessblender-i-sys.md) | Yes | The blender to blend backgroundColor. |

**Return value:**

| Type | Description |
| --- | --- |
| [VisualEffect](../../apis-arkui/arkts-components/arkts-arkui-visualeffect-t.md) | VisualEffects for the current effect have been added. |

**Example**

```TypeScript
let blender : uiEffect.BrightnessBlender =
  uiEffect.createBrightnessBlender({cubicRate:1.0, quadraticRate:1.0, linearRate:1.0, degree:1.0, saturation:1.0,
    positiveCoefficient:[2.3, 4.5, 2.0], negativeCoefficient:[0.5, 2.0, 0.5], fraction:0.0})
visualEffect.backgroundColorBlender(blender)

```

<a id="borderlight"></a>
## borderLight

```TypeScript
borderLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: number,
      borderWidth: number): VisualEffect
```

Sets the border light effect.

**Since:** 20

<!--Device-VisualEffect-borderLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      borderWidth: double): VisualEffect--><!--Device-VisualEffect-borderLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      borderWidth: double): VisualEffect-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lightPosition | common2D.Point3d | Yes |  |
| lightColor | common2D.Color | Yes |  |
| lightIntensity | number | Yes |  |
| borderWidth | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [VisualEffect](../../apis-arkui/arkts-components/arkts-arkui-visualeffect-t.md) | - Returns the VisualEffect that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { common2D, uiEffect } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  @State point1:common2D.Point3d = {
    x:0,y:0,z:2
  }
  @State color1:common2D.Color = {
    red:1,green:1,blue:1,alpha:1
  }
  @State lightIntensity1:number = 1
  @State borderWidth:number = 20

  build() {
    Column() {
      Stack() {
        Image($r('app.media.man'))
          .width('646px')
          .height('900px')
          .borderRadius(10)
        Column()
          .width('646px')
          .height('900px')
          .borderRadius(10)
          .visualEffect(uiEffect.createEffect().borderLight(this.point1, this.color1, this.lightIntensity1,
            this.borderWidth))
      }
      .width('100%')
      .height('55%')
    }
    .height('100%')
    .width('100%')
    .justifyContent(FlexAlign.Center)
    .backgroundColor('#555')
  }
}

```

<a id="colorgradient"></a>
## colorGradient

```TypeScript
colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<number>,
      alphaMask?: Mask): VisualEffect
```

Sets the color gradient effect, may blend with alpha mask.

**Since:** 20

<!--Device-VisualEffect-colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
      alphaMask?: Mask): VisualEffect--><!--Device-VisualEffect-colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
      alphaMask?: Mask): VisualEffect-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | Array&lt;Color&gt; | Yes | array of colors. |
| positions | Array&lt;common2D.Point&gt; | Yes | the centers of colors. |
| strengths | Array&lt;number&gt; | Yes | the weights of color Mixing. |
| alphaMask | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | No | the mask determines the alpha of the effect. |

**Return value:**

| Type | Description |
| --- | --- |
| [VisualEffect](../../apis-arkui/arkts-components/arkts-arkui-visualeffect-t.md) | - Returns the VisualEffect that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { common2D, uiEffect } from "@kit.ArkGraphics2D"

@Entry
@Component
struct ColorGradientExample {
  build() {
    Stack() {
      Stack() {}
      .visualEffect(uiEffect.createEffect()
        .colorGradient(
          [
            {red: 1.0, green: 0.0, blue: 0.0, alpha: 1.0},
            {red: 0.0, green: 1.0, blue: 0.0, alpha: 1.0},
            {red: 0.0, green: 0.0, blue: 1.0, alpha: 1.0},
            {red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0},
          ],
          [
            {x: 0.1, y: 0.1},
            {x: 0.1, y: 0.9},
            {x: 0.9, y: 0.1},
            {x: 0.9, y: 0.9},
          ],
          [12.4, 7.8, 7.8, 10.0],
          uiEffect.Mask.createRippleMask({x: 0.5, y: 0.5}, 0.2, 0.1)
        )
      )
      .width("1024px")
      .height("1024px")
    }
    .width("100%")
    .height("100%")
  }
}

```

<a id="distortioncollapse"></a>
## distortionCollapse

```TypeScript
distortionCollapse(distortionParam: DistortionParam): VisualEffect
```

Sets distortion collapse effect.

NOTE1. This visual effect supports drawing outside the bounds of the control,but it is still subject to the clipping (Clip) of the parent control.2. Because it contains a foreground Filter, some visual effects of the component itself and its child components(e.g., BrightnessBlender or systemMaterial) are incompatible when not used in combination with the EffectComponent.3. It supports distorting the system material, but when used in combination with the EffectComponent,it will cause the background of the system material to be distorted.4. When calling distortionCollapse, an offscreen canvas equal in size to the deformed area will be created.The content of the current component (including child components) is then drawn onto this offscreen canvas,and the existing content on the canvas is drawn with deformation. When using this implementation without combining with the EffectComponent, interfaces that require screen capture, such as systemMaterial,backgroundEffect, brightness, and blur, will not be able to capture the correct screen.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-VisualEffect-distortionCollapse(distortionParam: DistortionParam): VisualEffect--><!--Device-VisualEffect-distortionCollapse(distortionParam: DistortionParam): VisualEffect-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| distortionParam | [DistortionParam](../../apis-arkui/arkts-components/arkts-arkui-distortionparam-i-sys.md) | Yes | the distortion params of distortion effect. |

**Return value:**

| Type | Description |
| --- | --- |
| [VisualEffect](../../apis-arkui/arkts-components/arkts-arkui-visualeffect-t.md) | - Returns the VisualEffect that the current effect have been added. |

<a id="liquidmaterial"></a>
## liquidMaterial

```TypeScript
liquidMaterial(param : LiquidMaterialEffectParam, useEffectMask: Mask, distortMask?: Mask,
      brightnessParam?: BrightnessParam): VisualEffect
```

Sets the liquid material effect.

**Since:** 22

<!--Device-VisualEffect-liquidMaterial(param : LiquidMaterialEffectParam, useEffectMask: Mask, distortMask?: Mask,
      brightnessParam?: BrightnessParam): VisualEffect--><!--Device-VisualEffect-liquidMaterial(param : LiquidMaterialEffectParam, useEffectMask: Mask, distortMask?: Mask,
      brightnessParam?: BrightnessParam): VisualEffect-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [LiquidMaterialEffectParam](arkts-arkgraphics2d-uieffect-liquidmaterialeffectparam-i-sys.md) | Yes | the liquid material effect parameters. |
| useEffectMask | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | Yes | the mask determines the use effect flag. |
| distortMask | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | No | the mask determines the distort of the effect. |
| brightnessParam | [BrightnessParam](arkts-arkgraphics2d-uieffect-brightnessparam-i-sys.md) | No | the background brightness params of material effect. |

**Return value:**

| Type | Description |
| --- | --- |
| [VisualEffect](../../apis-arkui/arkts-components/arkts-arkui-visualeffect-t.md) | - Returns the VisualEffect that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';

@Entry
@Component
struct Index {
  @State distortProgress: number = 0.;
  @State rippleProgress: number = 0.;
  @State distortFactor: number = 0.;
  @State materialFactor: number = 1.;
  @State refractionFactor: number = 1.;
  @State reflectionFactor: number = 1.;
  @State tintColorR: number = 1.;
  @State tintColorG: number = 1.;
  @State tintColorB: number = 1.;
  @State tintColorA: number = 1.;

  private GetMaterialVisualEffect(): uiEffect.VisualEffect {
    let effect: uiEffect.VisualEffect = uiEffect.createEffect();
    effect.liquidMaterial({
      enable: true,
      distortProgress : this.distortProgress,
      rippleProgress: this.rippleProgress,
      distortFactor: this.distortFactor,
      materialFactor : this.materialFactor,
      refractionFactor : this.refractionFactor,
      reflectionFactor: this.reflectionFactor,
      tintColor : [this.tintColorR, this.tintColorG, this.tintColorB, this.tintColorA],
      ripplePosition: undefined,
    },
      uiEffect.Mask.createUseEffectMask(true),
      );
    return effect;
  }

  build() {
    Stack() {
      EffectComponent() {
        Column()
          .position({ x: 200 + 'px', y: 200 + 'px' })
          .height(553 + 'px')
          .width(553 + 'px')
          .borderRadius(12)
          .visualEffect(this.GetMaterialVisualEffect())
      }
      .backgroundEffect({
        radius: 15,
      }, { disableSystemAdaptation: true })
      .width("100%").height("100%").align(Alignment.Center)
    }
    .backgroundImage($r('app.media.bg6'), ImageRepeat.NoRepeat)
    .width("100%").height("100%").align(Alignment.Center)
  }
}

```

