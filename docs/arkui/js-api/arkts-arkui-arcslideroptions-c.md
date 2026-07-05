# ArcSliderOptions

Defines the properties of the arc slider.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSliderLayoutOptions, ArcSliderValueOptionsConstructorOptions, ArcSliderValueOptions, ArcSliderStyleOptionsConstructorOptions, ArcSlider, ArcSliderLayoutOptionsConstructorOptions, ArcSliderOptions, ArcSliderStyleOptions, ArcSliderPosition, ArcSliderOptionsConstructorOptions } from '@ohos.arkui.advanced.ArcSlider';
```

## constructor

```TypeScript
constructor(options?: ArcSliderOptionsConstructorOptions)
```

A constructor used to create an **ArcSliderOptions** instance.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ArcSliderOptionsConstructorOptions | No | Constructor information for **ArcSliderOptions**. |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity?: CrownSensitivity
```

Sensitivity to the digital crown rotation. Default value: **CrownSensitivity.MEDIUM**

**Type:** CrownSensitivity

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## layoutOptions

```TypeScript
layoutOptions?: ArcSliderLayoutOptions
```

Style of the arc slider. Default value: default values of all properties of [ArcSliderStyleOptions](arkts-arkui-arcsliderstyleoptions-c.md#arcsliderstyleoptions)

**Type:** ArcSliderLayoutOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onChange

```TypeScript
onChange?: ArcSliderChangeHandler
```

Callback invoked to notify the application when the progress value of the arc slider changes. Default value: If this parameter is not provided, no callback will be invoked.

**Type:** ArcSliderChangeHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onEnlarge

```TypeScript
onEnlarge?: ArcSliderEnlargeHandler
```

Callback invoked to notify the application when the arc slider is enlarged or reduced. Default value: If this parameter is not provided, no callback will be invoked.

**Type:** ArcSliderEnlargeHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onTouch

```TypeScript
onTouch?: ArcSliderTouchHandler
```

Callback invoked to notify the application when the arc slider is touched. Default value: If this parameter is not provided, no callback will be invoked.

**Type:** ArcSliderTouchHandler

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## styleOptions

```TypeScript
styleOptions?: ArcSliderStyleOptions
```

Style of the arc slider. Default value: default values of all properties of [ArcSliderStyleOptions](arkts-arkui-arcsliderstyleoptions-c.md#arcsliderstyleoptions)

**Type:** ArcSliderStyleOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## valueOptions

```TypeScript
valueOptions?: ArcSliderValueOptions
```

Style of the arc slider. Default value: default values of all properties of [ArcSliderStyleOptions](arkts-arkui-arcsliderstyleoptions-c.md#arcsliderstyleoptions)

**Type:** ArcSliderValueOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

