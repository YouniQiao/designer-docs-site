# VisualEffect

VisualEffect效果类，用于将相应的效果添加到指定的组件上。 在调用VisualEffect的方法前，需要先通过createEffect创建一个VisualEffect实例。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## backgroundColorBlender

```TypeScript
backgroundColorBlender(blender: BrightnessBlender): VisualEffect
```

将混合器添加至组件上以改变组件背景颜色，具体的更改效果由输入决定，目前仅支持提亮混合器。

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blender | BrightnessBlender | Yes | 用于混合背景颜色的blender。 |

**Return value:**

| Type | Description |
| --- | --- |
| VisualEffect | 返回添加了背景颜色更改效果的VisualEffect。 |

**Example**

```TypeScript
let blender : uiEffect.BrightnessBlender =
  uiEffect.createBrightnessBlender({cubicRate:1.0, quadraticRate:1.0, linearRate:1.0, degree:1.0, saturation:1.0,
    positiveCoefficient:[2.3, 4.5, 2.0], negativeCoefficient:[0.5, 2.0, 0.5], fraction:0.0})
visualEffect.backgroundColorBlender(blender)

```

## borderLight

```TypeScript
borderLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      borderWidth: double): VisualEffect
```

为圆角矩形组件边框添加3D光照效果。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lightPosition | common2D.Point3d | Yes | 光源在组件空间的3D位置，[-1, -1, 0]为组件左上角，[1, 1, 0]为组件的右下角，  z轴分量越大，光源离组件平面越远，可照射区域越大。  x轴分量取值范围[-10, 10]，y轴分量取值范围[-10, 10]，z轴分量取值范围[0, 10]，超出范围会自动截断。 |
| lightColor | common2D.Color | Yes | 光源颜色，各元素取值范围为[0, 1]，超出范围会自动截断。 |
| lightIntensity | double | Yes | 光源强度，取值范围[0, 1]，数值越大光源亮度越大，超出范围会自动截断。 |
| borderWidth | double | Yes | 组件边框的受光宽度，取值范围为[0.0, 30.0]，超出范围会自动截断。  设置为0.0时，组件边框无光照效果，数值越大，光可照亮的区域越宽。 |

**Return value:**

| Type | Description |
| --- | --- |
| VisualEffect | - 返回了具有边框光照效果的VisualEffect。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

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

## colorGradient

```TypeScript
colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
      alphaMask?: Mask): VisualEffect
```

此方法为组件添加颜色渐变效果。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | Array&lt;Color> | Yes | 颜色数组，用于实现多颜色渐变。  数组长度范围0到12，每个颜色值大于等于0。数组长度为0或大于12，或colors、positions和strengths的数组长度不一致，则无颜色渐变效果。 |
| positions | Array&lt;common2D.Point> | Yes | 位置数组，颜色对应的位置。  数组长度范围为0到12。数组长度为0或大于12，或colors、positions和strengths的数组长度不一致，则无颜色渐变效果。 |
| strengths | Array&lt;double> | Yes | 强度数组，表示颜色对应的强度。  数组长度范围为0到12，每一个强度值大于等于0。数组长度为0或大于12，或colors、positions和strengths的数组长度不一致时，则无颜色渐变效果。 |
| alphaMask | Mask | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| VisualEffect | - 返回具有颜色渐变效果的VisualEffect。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

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

## distortionCollapse

```TypeScript
distortionCollapse(distortionParam: DistortionParam): VisualEffect
```

此方法为组件添加非线性形变效果。 1. 该视效支持控件范围外的绘制，但仍会受到父控件Clip的影响。 2. 因包含前景Filter，未与EffectComponent组合使用时不兼容组件自身及子组件的部分视效（如BrightnessBlender或systemMaterial）。 3. 支持对系统材质进行扭曲，但是与EffectComponent组合使用时，会导致系统材质的背景扭曲。 4. 调用distortionCollapse时，会创建与形变后区域等大的离屏画布，再将当前组件（含子组件）的内容绘制到离屏画布上，再对画布上的已有内容进行形变绘制。 5. 使用该实现方式时，如果不与EffectComponent组合使用，将导致systemMaterial、backgroundEffect、brightness、blur等需要截屏的接口无法截取到正确的画面。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| distortionParam | DistortionParam | Yes | 非线性形变效果的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| VisualEffect | - 返回添加了非线性形变效果的VisualEffect。 |

## liquidMaterial

```TypeScript
liquidMaterial(param : LiquidMaterialEffectParam, useEffectMask: Mask, distortMask?: Mask,
      brightnessParam?: BrightnessParam): VisualEffect
```

设置液态材质效果

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | LiquidMaterialEffectParam | Yes | 材质所需相关变量，用于控制材质显示，包含材质开关、折射系数、反射系数和扰动系数。 |
| useEffectMask | Mask | Yes | 声明是否使用模糊缓存。使用createUseEffectMask(true)创建的Mask实例使用模糊缓存；  使用createUseEffectMask(false)创建的Mask实例不使用模糊缓存。 |
| distortMask | Mask | No |  |
| brightnessParam | BrightnessParam | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| VisualEffect | - 返回具有材质效果的VisualEffect。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

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

