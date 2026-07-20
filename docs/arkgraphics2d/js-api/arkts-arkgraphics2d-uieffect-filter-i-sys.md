# Filter

The Filter for Component.

**Since:** 12

<!--Device-uiEffect-interface Filter--><!--Device-uiEffect-interface Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## bezierWarp

```TypeScript
bezierWarp(controlPoints: Array<common2D.Point>): Filter
```

Sets the deformation effect controlled by bezier curves of the component.

**Since:** 20

<!--Device-Filter-bezierWarp(controlPoints: Array<common2D.Point>): Filter--><!--Device-Filter-bezierWarp(controlPoints: Array<common2D.Point>): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controlPoints | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<common2D.Point> | Yes | The bezier control points, 12 points needed. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { common2D, uiEffect } from '@kit.ArkGraphics2D'

@Entry
@Component
struct BezierWarpExample {
  @State valueBezier: Array<common2D.Point> = [
    { x: 0, y: 0 }, { x: 1 / 3, y: 0 }, { x: 2 / 3, y: 0 }, // top edge
    { x: 0.5, y: 0 }, { x: 0.5, y: 1 / 3 }, { x: 1, y: 2 / 3 }, // right edge
    { x: 1, y: 1 }, { x: 2 / 3, y: 1 }, { x: 1 / 3, y: 1 }, // bottom edge
    { x: 0, y: 1 }, { x: 0, y: 2 / 3 }, { x: 0, y: 1 / 3 }] // left edge

  build() {
    Column() {
      Image($rawfile('test.jpg'))
        .foregroundFilter(uiEffect.createFilter().bezierWarp(this.valueBezier))
    }
  }
}

```

## blurBubblesRise

```TypeScript
blurBubblesRise(param: BlurBubblesRiseEffectParam): Filter
```

Applies blur bubbles rise effect to simulate rising bubbles with blur.This effect creates a dreamy, bubbly distortion similar to rising bubbles in liquid.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Filter-blurBubblesRise(param: BlurBubblesRiseEffectParam): Filter--><!--Device-Filter-blurBubblesRise(param: BlurBubblesRiseEffectParam): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [BlurBubblesRiseEffectParam](arkts-arkgraphics2d-uieffect-blurbubblesriseeffectparam-i-sys.md) | Yes | the blur bubbles rise effect parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the blur bubbles rise Filter. |

## colorGradient

```TypeScript
colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<number>,
        alphaMask?: Mask): Filter
```

Sets the color gradient filter, may blend with alpha mask.

**Since:** 20

<!--Device-Filter-colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
        alphaMask?: Mask): Filter--><!--Device-Filter-colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
        alphaMask?: Mask): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Color> | Yes |  |
| positions | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<common2D.Point> | Yes |  |
| strengths | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes |  |
| alphaMask | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

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
  @State colorsExample: Array<uiEffect.Color> = [
    {red: 1.0, green: 0.8, blue: 0.5, alpha: 0.8},
    {red: 1.0, green: 1.5, blue: 0.5, alpha: 1.0}
  ]

  @State positionsExample: Array<common2D.Point> = [
    {x: 0.2, y: 0.2},
    {x: 0.8, y: 0.6}]

  @State strengthsExample: Array<number> = [0.3, 0.3]

  build() {
    Column() {
      Row()
        .width("100%")
        .height("100%")
        .backgroundFilter(uiEffect.createFilter().colorGradient(this.colorsExample, this.positionsExample, this.strengthsExample))
    }
  }
}

```

## contentLight

```TypeScript
contentLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: number,
      displacementMap?: Mask): Filter
```

Sets the content light filter.

**Since:** 20

<!--Device-Filter-contentLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      displacementMap?: Mask): Filter--><!--Device-Filter-contentLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      displacementMap?: Mask): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lightPosition | common2D.Point3d | Yes |  |
| lightColor | common2D.Color | Yes |  |
| lightIntensity | number | Yes |  |
| displacementMap | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

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
  @State point2: common2D.Point3d = {
    x: 0, y: 0, z: 2
  }
  @State color2: common2D.Color = {
    red: 1,
    green: 1,
    blue: 1,
    alpha: 1
  }
  @State lightIntensity2: number = 1

  build() {
    Column() {
      Stack() {
        Image($r('app.media.man'))
          .width('646px')
          .height('900px')
          .borderRadius(10)
          .foregroundFilter(uiEffect.createFilter().contentLight(this.point2, this.color2, this.lightIntensity2))
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

## directionLight

```TypeScript
directionLight(direction: common2D.Point3d, color: Color, intensity: number, mask?: Mask, factor?: number): Filter
```

Generates lighting effects from mask and directional light.

**Since:** 20

<!--Device-Filter-directionLight(direction: common2D.Point3d, color: Color, intensity: double, mask?: Mask, factor?: double): Filter--><!--Device-Filter-directionLight(direction: common2D.Point3d, color: Color, intensity: double, mask?: Mask, factor?: double): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | common2D.Point3d | Yes | Direction of light |
| color | [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) | Yes | Color of light |
| intensity | number | Yes | Intensity of light |
| mask | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | No | Mask, as a displacement map that affects lighting effects |
| factor | number | No | Mask scale factor, used to scale the mask channel values |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { uiEffect, common2D } from "@kit.ArkGraphics2D";

@Entry
@Component
struct Index {
  @State rippleMaskCenter: common2D.Point = {x:0.5, y:0.5}
  @State rippleMaskRadius: number = 0.0
  @State rippleMaskWidth: number = 0.0
  @State color: Color = Color.Transparent

  build() {
    Column() {
      RelativeContainer() {
        Image($r("app.media.back")).width("100%").height("100%")
        Stack()
          .width("100%")
          .height("100%")
          .backgroundColor(this.color)
          .backgroundFilter(uiEffect.createFilter()
            .directionLight(
              {x:0, y:0, z:-1}, {red:2.0, green:2.0, blue:2.0, alpha:1.0}, 0.5,
              uiEffect.Mask.createRippleMask(this.rippleMaskCenter, this.rippleMaskRadius, this.rippleMaskWidth, 0.0)
              ))
          .onClick(() => {
            this.getUIContext().animateTo({duration: 1000}, () => {
              this.rippleMaskWidth = 1.0;
            })
          })
      }
    }.alignItems(HorizontalAlign.Center).borderWidth(2)
  }
}

```

## displacementDistort

```TypeScript
displacementDistort(displacementMap: Mask, factor?: [number, number]): Filter
```

Sets distort effect with displacement map.

**Since:** 20

<!--Device-Filter-displacementDistort(displacementMap: Mask, factor?: [double, double]): Filter--><!--Device-Filter-displacementDistort(displacementMap: Mask, factor?: [double, double]): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displacementMap | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | Yes |  |
| factor | [number, number] | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { uiEffect } from "@kit.ArkGraphics2D"

@Entry
@Component
struct DisplacementDistortExample {
  @State maskExample: uiEffect.Mask = uiEffect.Mask.createRippleMask({x: 0.5, y: 0.5}, 0.2, 0.3, 0.0)
  
  build() {
    Stack() {
      Image($rawfile('test.png'))
      Row()  
        .width("100%")
        .height("100%")
        .backgroundFilter(uiEffect.createFilter().displacementDistort(this.maskExample, [5.0, 5.0]))
    }
  }
}

```

## distort

```TypeScript
distort(distortionK: number): Filter
```

Set distort effect of the component.

**Since:** 13

<!--Device-Filter-distort(distortionK: double): Filter--><!--Device-Filter-distort(distortionK: double): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| distortionK | number | Yes | set the degree of distort effect, value range [-1, 1].If the value is 0, the component keep same,if the value is less than 0, the component is barrel distortion,if the value is more than 0, the component is pincushion distortion. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns distort Filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
filter.distort(-0.5)

```

## edgeLight

```TypeScript
edgeLight(alpha: number, color?: Color, mask?: Mask, bloom?: boolean): Filter
```

Detects and glows edges of contents.

**Since:** 20

<!--Device-Filter-edgeLight(alpha: double, color?: Color, mask?: Mask, bloom?: boolean): Filter--><!--Device-Filter-edgeLight(alpha: double, color?: Color, mask?: Mask, bloom?: boolean): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alpha | number | Yes |  |
| color | [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) | No |  |
| mask | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | No |  |
| bloom | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { uiEffect } from "@kit.ArkGraphics2D"

@Entry
@Component
struct EdgeLightExample {
  @State colorExample: uiEffect.Color = {red: 0.0, green: 1.0, blue: 0.0, alpha: 1.0}
  
  @State maskExample: uiEffect.Mask = uiEffect.Mask.createRippleMask({x: 0.5, y: 0.5}, 0.2, 0.5, 0.5)
  
  build() {
    Stack() {
      Image($rawfile('test.png'))
      Row()  
        .width("100%")
        .height("100%")
        .backgroundFilter(uiEffect.createFilter().edgeLight(1.0, this.colorExample, this.maskExample, false))
    }
  }
}

```

## flyInFlyOutEffect

```TypeScript
flyInFlyOutEffect(degree: number, flyMode: FlyMode): Filter
```

Set the fly in or fly out effect of the component.

**Since:** 12

<!--Device-Filter-flyInFlyOutEffect(degree: double, flyMode: FlyMode): Filter--><!--Device-Filter-flyInFlyOutEffect(degree: double, flyMode: FlyMode): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| degree | number | Yes | set the degree of fly in or fly out effect, value range [0, 1]. |
| flyMode | [FlyMode](arkts-arkgraphics2d-uieffect-flymode-e-sys.md) | Yes | set the location of stretching when fly in or out If the value is 0, the component keep same, else the value is 1, component are fully fly out or fly in. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns fly in fly out Filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
filter.flyInFlyOutEffect(0.5, uiEffect.FlyMode.TOP)

```

## hdrBrightnessRatio

```TypeScript
hdrBrightnessRatio(ratio: number): Filter
```

Applies a high dynamic range (HDR) brightness enhancement filter to the component.

**Since:** 24

**Required permissions:** 
- API version 24+: ohos.permission.HDR_BRIGHTNESS

<!--Device-Filter-hdrBrightnessRatio(ratio: double): Filter--><!--Device-Filter-hdrBrightnessRatio(ratio: double): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ratio | number | Yes | The brightness multiplier ratio (1.0 = original, &gt;1.0 = brighter). |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns hdr brightness Filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 20 - 23 |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API.<br>**Applicable version:** 24 and later |

**Example**

```TypeScript
filter.hdrBrightnessRatio(2.0)

```

```TypeScript
// Create a Filter instance
let filter: uiEffect.Filter = uiEffect.createFilter();
// Set the HDR brightness ratio to 2.0
filter.hdrBrightnessRatio(2.0);

```

## heatDistortion

```TypeScript
heatDistortion(param: HeatDistortionEffectParam): Filter
```

Applies heat distortion effect to simulate hot air distortion.This effect creates a wavy distortion similar to heat shimmer or hot air rising.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Filter-heatDistortion(param: HeatDistortionEffectParam): Filter--><!--Device-Filter-heatDistortion(param: HeatDistortionEffectParam): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [HeatDistortionEffectParam](arkts-arkgraphics2d-uieffect-heatdistortioneffectparam-i-sys.md) | Yes | the heat distortion effect parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the heat distortion Filter. |

## maskDispersion

```TypeScript
maskDispersion(dispersionMap: Mask, alpha: number, rFactor?: [number, number], gFactor?: [number, number],
      bFactor?: [number, number]): Filter
```

Sets dispersion effect with mask map.

**Since:** 20

<!--Device-Filter-maskDispersion(dispersionMap: Mask, alpha: double, rFactor?: [double, double], gFactor?: [double, double],
      bFactor?: [double, double]): Filter--><!--Device-Filter-maskDispersion(dispersionMap: Mask, alpha: double, rFactor?: [double, double], gFactor?: [double, double],
      bFactor?: [double, double]): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dispersionMap | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | Yes |  |
| alpha | number | Yes |  |
| rFactor | [number, number] | No |  |
| gFactor | [number, number] | No |  |
| bFactor | [number, number] | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

## maskTransition

```TypeScript
maskTransition(alphaMask: Mask, factor?: number, inverse?: boolean): Filter
```

Applies Transition with alpha mask

**Since:** 20

<!--Device-Filter-maskTransition(alphaMask: Mask, factor?: double, inverse?: boolean): Filter--><!--Device-Filter-maskTransition(alphaMask: Mask, factor?: double, inverse?: boolean): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alphaMask | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | Yes | Animatable mask object |
| factor | number | No | The coefficient of the mask, defaulting to 1.0f [0~1] |
| inverse | boolean | No | Transition mode, default is fasle (true, false) |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { uiEffect, common2D } from "@kit.ArkGraphics2D";

@Entry
@Component
struct Index {
  context = this.getUIContext()
  @State alpha: number = 0
  @State enterNewPage:boolean = false
  @State rippleMaskCenter: common2D.Point = {x:0.5, y:0.5}
  @State rippleMaskRadius: number = 0.1
  build() {
    Stack() {
      // Page before transition
      Image($r("app.media.before")).width("100%").height("100%")
        if (this.enterNewPage){
          // Page after transition
          Column().width("100%").height("100%").backgroundImage($r("app.media.after"))
            .backgroundFilter(uiEffect.createFilter()
              .maskTransition(
                uiEffect.Mask.createRadialGradientMask(this.rippleMaskCenter, this.rippleMaskRadius,this.rippleMaskRadius, [[1, 0], [1, 1]]),
                this.alpha))
            .onAppear(() => {
              this.context.animateTo({ duration: 1000 }, () => {
                this.rippleMaskRadius = 1.3
              })
              this.context.animateTo({ duration: 800 }, () => {
                this.alpha = 1
              })
            })
        }
    }.borderWidth(2)
    .onClick(()=>{
      this.enterNewPage=!this.enterNewPage;
      if (this.enterNewPage) {
        this.alpha=0;
        this.rippleMaskRadius=0.1;
      }
    })
  }
}

```

## pixelStretch

```TypeScript
pixelStretch(stretchSizes: Array<number>, tileMode: TileMode): Filter
```

Set the edge pixel stretch effect of the Component.

**Since:** 12

<!--Device-Filter-pixelStretch(stretchSizes: Array<double>, tileMode: TileMode): Filter--><!--Device-Filter-pixelStretch(stretchSizes: Array<double>, tileMode: TileMode): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stretchSizes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes |  |
| tileMode | [TileMode](arkts-arkgraphics2d-effectkit-tilemode-e.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | @syscap SystemCapability.Graphics.Drawing@systemapi |

**Example**

```TypeScript
filter.pixelStretch([0.2, 0.2, 0.2, 0.2], uiEffect.TileMode.CLAMP)

```

## radiusGradientBlur

```TypeScript
radiusGradientBlur(radius: number, gradientParam: LinearGradientBlurOptions): Filter
```

Adds the content radius gradient blurring effect for the current component.The input parameter is the blurring radius.

**Since:** 19

<!--Device-Filter-radiusGradientBlur(radius: double, gradientParam: LinearGradientBlurOptions): Filter--><!--Device-Filter-radiusGradientBlur(radius: double, gradientParam: LinearGradientBlurOptions): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | number | Yes | the blurring radius.The larger the blurring radius, the more blurring the content, and if the value is 0,the content blurring effect is not blurring. |
| gradientParam | [LinearGradientBlurOptions](../../apis-arkui/arkts-components/arkts-arkui-common-lineargradientbluroptions-i.md) | Yes | the radius gradient blur options. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns radius gradient blur Filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

## variableRadiusBlur

```TypeScript
variableRadiusBlur(radius: number, radiusMap: Mask): Filter
```

Sets variable radius blur effect with radius map.

**Since:** 20

<!--Device-Filter-variableRadiusBlur(radius: double, radiusMap: Mask): Filter--><!--Device-Filter-variableRadiusBlur(radius: double, radiusMap: Mask): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | number | Yes | the blurring radius. The larger the blurring radius, the more blurring the content,and if the value is 0, the content blurring effect is not blurring. |
| radiusMap | [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | Yes | the alpha of the mask determines the degree of blurring. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns the Filter that the current effect have been added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { uiEffect } from "@kit.ArkGraphics2D";

@Entry
@Component
struct VariableRadiusBlurExample {
  @State maskExample: uiEffect.Mask = uiEffect.Mask.createRippleMask({x: 0.5, y: 0.5}, 0.2, 0.1)

  build() {
    Stack() {
      Image($rawfile('test.png'))
      Row()
        .width("100%")
        .height("100%")
        .backgroundFilter(uiEffect.createFilter().variableRadiusBlur(64, this.maskExample))
    }
  }
}

```

## waterRipple

```TypeScript
waterRipple(progress: number, waveCount: number, x: number, y: number, rippleMode: WaterRippleMode): Filter
```

Set waterRipple effect of the Component.

**Since:** 12

<!--Device-Filter-waterRipple(progress: double, waveCount: int, x: double, y: double, rippleMode: WaterRippleMode): Filter--><!--Device-Filter-waterRipple(progress: double, waveCount: int, x: double, y: double, rippleMode: WaterRippleMode): Filter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| progress | number | Yes | Indicates the ripple progress. The value 1 indicates that ripples are displayed on all screens. |
| waveCount | number | Yes | The number of waves when the water ripples. The maximum count of waves is 3, the minimum value is 1, default is 2. |
| x | number | Yes | Represents the X-axis position of center point where the water ripple first appears on the screen. |
| y | number | Yes | Represents the Y-axis position of center point where the water ripple first appears on the screen. |
| rippleMode | [WaterRippleMode](arkts-arkgraphics2d-uieffect-waterripplemode-e-sys.md) | Yes | Set the mode of water ripple,0 for mobile to desktop(Receive), 1 for mobile to desktop(Send), 2 for mobile to mobile, 3 for cross platform. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i-sys.md) | - Returns water ripple Filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
filter.waterRipple(0.5, 2, 0.5, 0.5, uiEffect.WaterRippleMode.SMALL2SMALL)

```

