# ArcSliderValueOptionsConstructorOptions

ArcSliderValueOptions的构造信息。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSliderLayoutOptions,ArcSliderValueOptionsConstructorOptions,ArcSliderValueOptions,ArcSliderStyleOptionsConstructorOptions,ArcSlider,ArcSliderLayoutOptionsConstructorOptions,ArcSliderOptions,ArcSliderStyleOptions,ArcSliderPosition,ArcSliderOptionsConstructorOptions } from '@kit.ArkUI';
```

## min

```TypeScript
min?: number
```

设置最小值。 默认值：0

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## max

```TypeScript
max?: number
```

设置最大值。 默认值：100 **说明：** 当出现异常情况min >= max时，min取默认值0，max取默认值100。 progress不在[min, max]范围之内，取min或者max，靠近min取min，靠近max取max。

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## progress

```TypeScript
progress?: number
```

设置当前进度值。 默认值：与参数min的取值一致

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

