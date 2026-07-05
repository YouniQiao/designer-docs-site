# Filter

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

## 导入模块

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## bezierWarp

```TypeScript
bezierWarp(controlPoints: Array<common2D.Point>): Filter
```

将贝塞尔曲线变形的效果添加至组件上。该效果通过在图层边界上创建封闭的贝塞尔曲线，实现对图像的精准扭曲和形状调整。 贝塞尔曲线共有四段，首尾顺次相连，每段包含一个顶点和两个切点。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controlPoints | Array&lt;common2D.Point> | 是 | 12个贝塞尔形变控制点，更改控制点的位置可改变形成边缘的曲线的形状，  从而扭曲图像。控制点坐标为0-1坐标系，且坐标值可大于1或小于0。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了贝塞尔曲线变形效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

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

## blur

```TypeScript
blur(blurRadius: double): Filter
```

将模糊效果添加至组件上。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blurRadius | double | 是 | 模糊半径，单位为px。  取值需大于等于0，模糊半径越大，模糊效果越强。  模糊半径为0时无模糊效果。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了模糊效果的Filter。 |

**示例：**

```TypeScript
// xxx.ts
import { uiEffect } from '@kit.ArkGraphics2D';

let filter: uiEffect.Filter = uiEffect.createFilter();
filter.blur(10);

@Entry
@Component
struct UIEffectFilterExample {
    build(){
        Column({ space: 15 }) {
            Text('UIEffectFilter').fontSize(20).width('75%').fontColor('#DCDCDC')
            Image($r('app.media.foreground'))
                .width(100)
                .height(100)
                .backgroundImage($r('app.media.background'))
                .backgroundImagePosition(Alignment.Center)
                .backgroundImageSize({ width: 90, height: 90 })
                .backgroundFilter(filter)
        }
        .height('100%')
        .width('100%')
    }
}

```

## blurBubblesRise

```TypeScript
blurBubblesRise(param: BlurBubblesRiseEffectParam): Filter
```

应用模糊气泡上升效果到图像，模拟气泡在液体中上升的梦幻模糊扭曲效果。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | BlurBubblesRiseEffectParam | 是 | 模糊气泡上升效果的参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回模糊气泡上升滤镜。 |

**示例：**

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
import { image } from '@kit.ImageKit';

@Entry
@Component
struct BlurBubblesRiseExample {
  private context: Context | undefined = this.getUIContext().getHostContext();
  @State blurIntensity: number = 0.8;
  @State mixStrength: number = 0.6;
  @State progress: number = 0.5;
  @State maskImage: image.PixelMap | null = null;

  aboutToAppear() {
    if (this.context) {
      this.getImagePixelMap(this.context)
    }
  }

  getImagePixelMap(context: Context) {
    let resourceMgr = context.resourceManager;
    resourceMgr?.getMediaContent($r('app.media.drawBlurMask').id)
      .then((val: Uint8Array) => {
        let buffer: ArrayBuffer = val.buffer.slice(0, val.buffer.byteLength)
        let imageSource: image.ImageSource = image.createImageSource(buffer);
        imageSource.createPixelMap().then((pixelmap: image.PixelMap) => {
          this.maskImage = pixelmap as PixelMap;
        })
      })
  }

  build() {
    Stack() {
      Image($r('app.media.test'))
        .width('100%')
        .height('100%')
        .foregroundFilter(uiEffect.createFilter().blurBubblesRise({
          blurIntensity: this.blurIntensity,
          mixStrength: this.mixStrength,
          progress: this.progress,
          maskImage: this.maskImage
        }))
    }
    .width('100%')
    .height('100%')
  }
}

```

## colorGradient

```TypeScript
colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
        alphaMask?: Mask): Filter
```

为组件内容添加颜色渐变效果。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colors | Array&lt;Color> | 是 | 颜色数组，多个颜色的渐变。数组长度取值范围[0, 12], 每一个颜色值取值范围为大于等于0。  数组长度等于0或大于12时无效果，colors、positions和strengths的数组长度不相等时无效果。 |
| positions | Array&lt;common2D.Point> | 是 | 位置数组，颜色对应的分布位置。数组长度取值范围[0, 12]。  数组长度等于0或大于12时无效果，colors、positions和strengths的数组长度不相等时无效果。 |
| strengths | Array&lt;double> | 是 | 强度数组，颜色对应的扩散强度。数组长度取值范围[0, 12], 每一个强度值取值范围为大于等于0。  数组长度等于0或大于12时无效果，colors、positions和strengths的数组长度不相等时无效果。 |
| alphaMask | Mask | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了颜色渐变效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

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
contentLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      displacementMap?: Mask): Filter
```

为组件内容添加3D光照效果。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| lightPosition | common2D.Point3d | 是 | 光源在组件空间的位置，[-1, -1, 0]为组件左上角，[1, 1, 0]为组件的右下角，  z轴分量越大光源离组件平面越远，可照射区域越大。  x分量取值范围[-10, 10]，y分量取值范围[-10, 10]，z分量取值范围[0, 10]，超出范围会自动截断。 |
| lightColor | common2D.Color | 是 | 光源颜色，各元素取值范围为[0, 1]，超出范围会自动截断。 |
| lightIntensity | double | 是 | 光源强度，取值范围[0, 1]，数值越大光源亮度越大，超出范围会自动截断。 |
| displacementMap | Mask | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回了具有内容光照效果的filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

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
directionLight(direction: common2D.Point3d, color: Color, intensity: double, mask?: Mask, factor?: double): Filter
```

为组件内容提供基于Mask和平行光的光照效果。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| direction | common2D.Point3d | 是 | 方向光的入射方向。 |
| color | Color | 是 | 光照颜色。 |
| intensity | double | 是 | 光照强度，非负数。 |
| mask | Mask | 否 |  |
| factor | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了由置换贴图控制的光照效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

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
displacementDistort(displacementMap: Mask, factor?: [double, double]): Filter
```

为组件内容添加扭曲效果。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displacementMap | Mask | 是 | 指定扭曲程度。与factor相乘后共同决定扭曲程度。 |
| factor | [double, double] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了扭曲效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

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
distort(distortionK: double): Filter
```

将透镜畸变效果添加至组件上。

**起始版本：** 13

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| distortionK | double | 是 | 畸变系数，表示透镜畸变的程度，取值范围为[-1, 1]。  畸变系数设置小于-1的值时，按值为-1处理；设置大于1的值时，按值为1处理。  畸变系数小于0时，效果为桶形畸变；大于0时，效果为枕形畸变；  越接近0时，畸变程度越小，等于0时，没有畸变效果。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了透镜畸变效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

```TypeScript
filter.distort(-0.5)

```

## edgeLight

```TypeScript
edgeLight(alpha: double, color?: Color, mask?: Mask, bloom?: boolean): Filter
```

为组件内容检测边缘，并添加边缘高亮效果。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| alpha | double | 是 | 指定描边高光透明度，越大描边越明显。取值范围为[0, 1]。  设置为0时无描边；设置小于0的值时，按值为0处理；设置大于1的值时，按值为1处理。 |
| color | Color | 否 |  |
| mask | Mask | 否 |  |
| bloom | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了描边高光效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

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
flyInFlyOutEffect(degree: double, flyMode: FlyMode): Filter
```

将飞入飞出形变效果添加至组件上。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| degree | double | 是 | 表示控制飞入飞出形变的程度，取值范围为[0, 1]。  越靠近1，变形程度越明显。  超出取值范围形变不会出现效果。 |
| flyMode | FlyMode | 是 | 飞入飞出的场景模式。  BOTTOM表示从设备底部飞入飞出形变场景。  TOP表示从设备顶部飞入飞出形变场景。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了飞入飞出形变效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

```TypeScript
filter.flyInFlyOutEffect(0.5, uiEffect.FlyMode.TOP)

```

## hdrBrightnessRatio

```TypeScript
hdrBrightnessRatio(ratio: double): Filter
```

为组件内容添加HDR（高动态范围成像）提亮效果。不建议嵌套使用，强行嵌套使用可能造成过曝现象。

**起始版本：** 20

**需要权限：** 

- API版本24+： ohos.permission.HDR_BRIGHTNESS

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ratio | double | 是 | 提亮倍数，取值范围为[1.0, 设备当前支持最大提亮倍数]。  设置小于1.0的值时，按值为1.0处理；当值等于1.0时，不做任何处理；  当值大于1.0时，会尝试触发HDR渲染管线，设置大于设备当前支持最大提亮倍数的值时，按值为设备当前支持最大提亮倍数处理。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了HDR提亮效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。  [since 20 - 23] |
| 201 | 权限校验失败，应用无权限使用该API，需要申请权限。  [since 24] |

**示例：**

```TypeScript
filter.hdrBrightnessRatio(2.0)

```

## heatDistortion

```TypeScript
heatDistortion(param: HeatDistortionEffectParam): Filter
```

应用热浪扭曲效果到图像，模拟热空气流动产生的视觉扭曲。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | HeatDistortionEffectParam | 是 | 热浪扭曲效果的参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回添加了热浪扭曲效果的Filter。 |

**示例：**

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';

@Entry
@Component
struct HeatDistortionExample {
  @State intensity: number = 0.8;
  @State noiseScale: number = 2.0;
  @State riseWeight: number = 0.5;
  @State progress: number = 0.3;

  build() {
    Stack() {
      Image($r('app.media.test'))
        .width('100%')
        .height('100%')
        .foregroundFilter(uiEffect.createFilter().heatDistortion({
          intensity: this.intensity,
          noiseScale: this.noiseScale,
          riseWeight: this.riseWeight,
          progress: this.progress
        }))
    }
    .width('100%')
    .height('100%')
  }
}

```

## maskDispersion

```TypeScript
maskDispersion(dispersionMap: Mask, alpha: double, rFactor?: [double, double], gFactor?: [double, double],
      bFactor?: [double, double]): Filter
```

为组件内容添加由置换贴图控制的色散效果。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dispersionMap | Mask | 是 | 置换贴图，用于控制色散的强度、方向和透明度。建议使用PixelMapMask类型的置换贴图。 |
| alpha | double | 是 | 色散整体透明度，透明度越小效果越透明。取值范围为[0, 1.0]。  透明度设置为0时色散效果不生效；透明度设置小于0的值时，按值为0处理；设置大于1.0的值时，按值为1.0处理。 |
| rFactor | [double, double] | 否 |  |
| gFactor | [double, double] | 否 |  |
| bFactor | [double, double] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了由置换贴图控制的色散效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

## maskTransition

```TypeScript
maskTransition(alphaMask: Mask, factor?: double, inverse?: boolean): Filter
```

为组件内容提供基于Mask的转场效果。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| alphaMask | Mask | 是 | 通过遮罩指定转场效果的作用区域。 |
| factor | double | 否 |  |
| inverse | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了转场效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

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
      // 转场前页面
      Image($r("app.media.before")).width("100%").height("100%")
        if (this.enterNewPage){
          // 转场后页面
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
pixelStretch(stretchSizes: Array<double>, tileMode: TileMode): Filter
```

将边缘像素扩展效果添加至组件上。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| stretchSizes | Array&lt;double> | 是 | 上下左右四个方向边缘像素扩展的百分比比例，取值范围为[-1, 1]。  正值表示向外扩展，上下左右四个方向分别用指定原图比例的边缘像素填充。负值表示内缩，但是最终图像大小不变。  注意四个方向对应的参数需统一为非正值或非负值。 |
| tileMode | TileMode | 是 | 边缘像素扩展的像素填充模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了边缘像素扩展效果的Filter。 |

**示例：**

```TypeScript
filter.pixelStretch([0.2, 0.2, 0.2, 0.2], uiEffect.TileMode.CLAMP)

```

## radiusGradientBlur

```TypeScript
radiusGradientBlur(radius: double, gradientParam: LinearGradientBlurOptions): Filter
```

为组件内容添加半径线性渐变模糊效果。

**起始版本：** 19

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | double | 是 | 模糊半径，单位为px，模糊半径越大越模糊。  取值范围为[0, 128]。模糊半径设置为0时不模糊；模糊半径设置小于0的值时，按值为0处理；  设置大于128的值时，按值为128处理。 |
| gradientParam | LinearGradientBlurOptions | 是 | 线性渐变参数，包含两个部分fractionStops和direction。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了半径线性渐变模糊效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

## variableRadiusBlur

```TypeScript
variableRadiusBlur(radius: double, radiusMap: Mask): Filter
```

为组件内容提供基于Mask的渐变模糊效果。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | double | 是 | 最大模糊半径，单位为px，该值越大越模糊。取值范围为[0, 128]。  模糊半径设置为0时不模糊；模糊半径设置小于0的值时，按值为0处理；设置大于128的值时，按值为128处理。 |
| radiusMap | Mask | 是 | 代表模糊程度的Mask对象。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回当前效果的Filter对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

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
waterRipple(progress: double, waveCount: int, x: double, y: double, rippleMode: WaterRippleMode): Filter
```

将水波纹效果添加至组件上。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| progress | double | 是 | 表示水波纹的进度，取值范围为[0, 1]。  水波纹进度越趋向于1，水波纹展示越完全。  超出取值范围水波纹不会出现效果。 |
| waveCount | int | 是 | 水波纹波动时波纹的个数，取值范围为[1, 3]。  水波纹的个数只能取整数，如果为浮点数或超出取值范围，水波纹不会出现效果。 |
| x | double | 是 | 水波纹中心在屏幕中第一次出现的x轴位置。  水波纹对屏幕进行归一化处理，左上角的坐标为（0, 0），右上角坐标为（1, 0）。  当x取值为负值时，代表在屏幕左侧。 |
| y | double | 是 | 水波纹中心在屏幕中第一次出现的y轴位置。  水波纹对屏幕进行归一化处理，左上角的坐标为（0, 0），左下角坐标为（0, 1）。  当y取值为负值时，代表在屏幕上方。 |
| rippleMode | WaterRippleMode | 是 | 水波纹的场景模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Filter | - 返回挂载了水波纹效果的Filter。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

**示例：**

```TypeScript
filter.waterRipple(0.5, 2, 0.5, 0.5, uiEffect.WaterRippleMode.SMALL2SMALL)

```

