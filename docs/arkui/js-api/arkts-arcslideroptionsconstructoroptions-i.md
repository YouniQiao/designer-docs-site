# ArcSliderOptionsConstructorOptions

ArcSliderOptions的构造信息。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSliderLayoutOptions,ArcSliderValueOptionsConstructorOptions,ArcSliderValueOptions,ArcSliderStyleOptionsConstructorOptions,ArcSlider,ArcSliderLayoutOptionsConstructorOptions,ArcSliderOptions,ArcSliderStyleOptions,ArcSliderPosition,ArcSliderOptionsConstructorOptions } from '@kit.ArkUI';
```

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity?: CrownSensitivity
```

设置旋转表冠的灵敏度。 默认值：CrownSensitivity.MEDIUM

**Type:** CrownSensitivity

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## layoutOptions

```TypeScript
layoutOptions?: ArcSliderLayoutOptions
```

配置弧形Slider的样式信息。 默认值：[ArcSliderStyleOptions](arkts-arcsliderstyleoptions-c.md#ArcSliderStyleOptions)的各项子属性均取其默认值。

**Type:** ArcSliderLayoutOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onEnlarge

```TypeScript
onEnlarge?: ArcSliderEnlargeHandler
```

弧形Slider放大或缩小时，告知应用。 默认值：不传入的情况，无回调。

**Type:** ArcSliderEnlargeHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onChange

```TypeScript
onChange?: ArcSliderChangeHandler
```

弧形Slider的进度值发生变化时，告知应用。 默认值：不传入的情况，无回调。

**Type:** ArcSliderChangeHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## styleOptions

```TypeScript
styleOptions?: ArcSliderStyleOptions
```

配置弧形Slider的样式信息。 默认值：[ArcSliderStyleOptions](arkts-arcsliderstyleoptions-c.md#ArcSliderStyleOptions)的各项子属性均取其默认值。

**Type:** ArcSliderStyleOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onTouch

```TypeScript
onTouch?: ArcSliderTouchHandler
```

弧形Slider被触摸时，告知应用。 默认值：不传入的情况，无回调。

**Type:** ArcSliderTouchHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## valueOptions

```TypeScript
valueOptions?: ArcSliderValueOptions
```

配置弧形Slider的样式信息。 默认值：[ArcSliderStyleOptions](arkts-arcsliderstyleoptions-c.md#ArcSliderStyleOptions)的各项子属性均取其默认值。

**Type:** ArcSliderValueOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

