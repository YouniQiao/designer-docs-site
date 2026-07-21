# Mask (System API)

Defines the mask for Filter or VisualEffect.

**Since:** 20

<!--Device-uiEffect-class Mask--><!--Device-uiEffect-class Mask-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

<a id="createpixelmapmask"></a>
## createPixelMapMask

```TypeScript
static createPixelMapMask(pixelMap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      fillColor?: Color): Mask
```

Create a Mask of pixelmap.

**Since:** 20

<!--Device-Mask-static createPixelMapMask(pixelMap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      fillColor?: Color): Mask--><!--Device-Mask-static createPixelMapMask(pixelMap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      fillColor?: Color): Mask-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelMap | image.PixelMap | Yes |  |
| srcRect | common2D.Rect | Yes |  |
| dstRect | common2D.Rect | Yes |  |
| fillColor | [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { uiEffect, common2D } from "@kit.ArkGraphics2D";
import { BusinessError } from '@kit.BasicServicesKit'

const color = new ArrayBuffer(96);
let opts : image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
}
image.createPixelMap(color, opts).then((pixelMap) => {
  let srcRect : common2D.Rect = {
    left: 0,
    top: 0,
    right: 1,
    bottom: 1
  }
  let dstRect : common2D.Rect = {
    left: 0,
    top: 0,
    right: 1,
    bottom: 1
  }
  let fillColor : uiEffect.Color = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1
  }
  let mask = uiEffect.Mask.createPixelMapMask(pixelMap, srcRect, dstRect, fillColor);
}).catch((error: BusinessError)=>{
  console.error('Failed to create pixelmap. code is ${error.code}, message is ${error.message}');
})

```

<a id="createpixelmapmask-1"></a>
## createPixelMapMask

```TypeScript
static createPixelMapMask(pixelMap: image.PixelMap): Mask
```

Create a Mask of pixelMap to use directly.

**Since:** 22

<!--Device-Mask-static createPixelMapMask(pixelMap: image.PixelMap): Mask--><!--Device-Mask-static createPixelMapMask(pixelMap: image.PixelMap): Mask-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelMap | image.PixelMap | Yes | The pixelMap of PixelMapMask. |

**Return value:**

| Type | Description |
| --- | --- |
| [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | - Returns pixelMap mask. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
import { image } from '@kit.ImageKit';
import { common } from '@kit.AbilityKit';

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
  @State pixelMapDistort: image.PixelMap | undefined = this.getPixelMap();

  private getPixelMap(): image.PixelMap | undefined {
    try {
      let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      // this path should be created in local
      const path: string = context.resourceDir + "/perlin_worley_noise_3d_64.bmp";
      const imageSource: image.ImageSource = image.createImageSource(path);
      if (!imageSource) {
        return undefined;
      }
      const pixelMap: image.PixelMap = imageSource.createPixelMapSync();
      imageSource.release();
      return pixelMap;
    } catch (err) {
      return undefined;
    }
  }

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
      uiEffect.Mask.createPixelMapMask (this.pixelMapDistort), // Example of using createImageMask.
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
    .backgroundImage($r('app.media.bg6'), ImageRepeat.NoRepeat) // the image should be created in local
    .width("100%").height("100%").align(Alignment.Center)
  }
}

```

<a id="createradialgradientmask"></a>
## createRadialGradientMask

```TypeScript
static createRadialGradientMask(center: common2D.Point, radiusX: number, radiusY: number,
      gradients: Array<[number, number]>): Mask
```

Create a Mask of radial gradient.

**Since:** 20

<!--Device-Mask-static createRadialGradientMask(center: common2D.Point, radiusX: double, radiusY: double,
      gradients: Array<[double, double]>): Mask--><!--Device-Mask-static createRadialGradientMask(center: common2D.Point, radiusX: double, radiusY: double,
      gradients: Array<[double, double]>): Mask-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| center | common2D.Point | Yes |  |
| radiusX | number | Yes |  |
| radiusY | number | Yes |  |
| gradients | Array&lt;[number, number]&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

<a id="createripplemask"></a>
## createRippleMask

```TypeScript
static createRippleMask(center: common2D.Point, radius: number, width: number, offset?: number): Mask
```

Create a Mask of ripple.

**Since:** 20

<!--Device-Mask-static createRippleMask(center: common2D.Point, radius: double, width: double, offset?: double): Mask--><!--Device-Mask-static createRippleMask(center: common2D.Point, radius: double, width: double, offset?: double): Mask-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| center | common2D.Point | Yes |  |
| radius | number | Yes |  |
| width | number | Yes |  |
| offset | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
  let mask = uiEffect.Mask.createRippleMask({x:0.5, y:1.0}, 0.5, 0.3, 0.0);

```

<a id="createuseeffectmask"></a>
## createUseEffectMask

```TypeScript
static createUseEffectMask(useEffect: boolean): Mask
```

Create a Mask of use effect.

**Since:** 22

<!--Device-Mask-static createUseEffectMask(useEffect: boolean): Mask--><!--Device-Mask-static createUseEffectMask(useEffect: boolean): Mask-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| useEffect | boolean | Yes | The use effect flag of UseEffectMask. |

**Return value:**

| Type | Description |
| --- | --- |
| [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | - Returns use effect mask. |

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
      uiEffect.Mask.createUseEffectMask(true), // Example of using useEffectMask.
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

<a id="createwavegradientmask"></a>
## createWaveGradientMask

```TypeScript
static createWaveGradientMask(center: common2D.Point, width: number, propagationRadius: number,
      blurRadius: number, turbulenceStrength?: number): Mask
```

Create a Mask of single wave gradient.

**Since:** 20

<!--Device-Mask-static createWaveGradientMask(center: common2D.Point, width: double, propagationRadius: double,
      blurRadius: double, turbulenceStrength?: double): Mask--><!--Device-Mask-static createWaveGradientMask(center: common2D.Point, width: double, propagationRadius: double,
      blurRadius: double, turbulenceStrength?: double): Mask-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| center | common2D.Point | Yes | The wave source center of the single-wave mask. |
| width | number | Yes | The circular ring width of the single-wave mask. |
| propagationRadius | number | Yes | The outer diffusion radius of the single-wave mask. |
| blurRadius | number | Yes | The blur radius of the single-wave mask. |
| turbulenceStrength | number | No | The turbulent displacement intensity of the single-wave mask. |

**Return value:**

| Type | Description |
| --- | --- |
| [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | - Returns wave gradient mask. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { uiEffect } from "@kit.ArkGraphics2D";
// center: [0.5, 0.5]; width: 0.01; propagationRadius: 0.5; blurRadius: 0.1; turbulenceStrength: 0.1
let mask = uiEffect.Mask.createWaveGradientMask({x: 0.5, y: 0.5}, 0.01, 0.5, 0.1, 0.1);
@Entry
@Component
struct WaveGradientMaskExample {
  build() {
    Stack() {
      Image($rawfile('test.jpg'))
      Column()
        .width('100%')
        .height('100%')
        // Use the mask as the filter parameter to implement the ripple effect that spreads from the center of the screen.
        .backgroundFilter(uiEffect.createFilter().edgeLight(1.0, null, mask))
    }
  }
}

```

