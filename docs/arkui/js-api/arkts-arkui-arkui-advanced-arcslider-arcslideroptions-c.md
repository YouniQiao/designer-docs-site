# ArcSliderOptions

Defines the properties of the arc slider.

**Since:** 18

**Decorator:** @ObservedV2

<!--Device-unnamed-declare class ArcSliderOptions--><!--Device-unnamed-declare class ArcSliderOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSliderLayoutOptions, ArcSliderValueOptionsConstructorOptions, ArcSliderValueOptions, ArcSliderStyleOptionsConstructorOptions, ArcSlider, ArcSliderLayoutOptionsConstructorOptions, ArcSliderOptions, ArcSliderStyleOptions, ArcSliderPosition, ArcSliderOptionsConstructorOptions } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(options?: ArcSliderOptionsConstructorOptions)
```

A constructor used to create an **ArcSliderOptions** instance.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSliderOptions-constructor(options?: ArcSliderOptionsConstructorOptions)--><!--Device-ArcSliderOptions-constructor(options?: ArcSliderOptionsConstructorOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ArcSliderOptionsConstructorOptions](arkts-arkui-arkui-advanced-arcslider-arcslideroptionsconstructoroptions-i.md) | No | Constructor information for **ArcSliderOptions**. |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity?: CrownSensitivity
```

Sensitivity to the digital crown rotation.

Default value: **CrownSensitivity.MEDIUM**

**Type:** CrownSensitivity

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSliderOptions-digitalCrownSensitivity?: CrownSensitivity--><!--Device-ArcSliderOptions-digitalCrownSensitivity?: CrownSensitivity-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## layoutOptions

```TypeScript
layoutOptions?: ArcSliderLayoutOptions
```

Style of the arc slider.

Default value: default values of all properties of [ArcSliderStyleOptions](arkts-arkui-arkui-advanced-arcslider-arcsliderstyleoptions-c.md)

**Type:** ArcSliderLayoutOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSliderOptions-layoutOptions?: ArcSliderLayoutOptions--><!--Device-ArcSliderOptions-layoutOptions?: ArcSliderLayoutOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onChange

```TypeScript
onChange?: ArcSliderChangeHandler
```

Callback invoked to notify the application when the progress value of the arc slider changes.

Default value: If this parameter is not provided, no callback will be invoked.

**Type:** ArcSliderChangeHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSliderOptions-onChange?: ArcSliderChangeHandler--><!--Device-ArcSliderOptions-onChange?: ArcSliderChangeHandler-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onEnlarge

```TypeScript
onEnlarge?: ArcSliderEnlargeHandler
```

Callback invoked to notify the application when the arc slider is enlarged or reduced.

Default value: If this parameter is not provided, no callback will be invoked.

**Type:** ArcSliderEnlargeHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSliderOptions-onEnlarge?: ArcSliderEnlargeHandler--><!--Device-ArcSliderOptions-onEnlarge?: ArcSliderEnlargeHandler-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onTouch

```TypeScript
onTouch?: ArcSliderTouchHandler
```

Callback invoked to notify the application when the arc slider is touched.

Default value: If this parameter is not provided, no callback will be invoked.

**Type:** ArcSliderTouchHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSliderOptions-onTouch?: ArcSliderTouchHandler--><!--Device-ArcSliderOptions-onTouch?: ArcSliderTouchHandler-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## styleOptions

```TypeScript
styleOptions?: ArcSliderStyleOptions
```

Style of the arc slider.

Default value: default values of all properties of [ArcSliderStyleOptions](arkts-arkui-arkui-advanced-arcslider-arcsliderstyleoptions-c.md)

**Type:** ArcSliderStyleOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSliderOptions-styleOptions?: ArcSliderStyleOptions--><!--Device-ArcSliderOptions-styleOptions?: ArcSliderStyleOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## valueOptions

```TypeScript
valueOptions?: ArcSliderValueOptions
```

Style of the arc slider.

Default value: default values of all properties of [ArcSliderStyleOptions](arkts-arkui-arkui-advanced-arcslider-arcsliderstyleoptions-c.md)

**Type:** ArcSliderValueOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSliderOptions-valueOptions?: ArcSliderValueOptions--><!--Device-ArcSliderOptions-valueOptions?: ArcSliderValueOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

