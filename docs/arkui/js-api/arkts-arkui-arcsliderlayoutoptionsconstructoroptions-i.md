# ArcSliderLayoutOptionsConstructorOptions

Defines the construction information for **ArcSliderLayoutValueOptions**.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSliderLayoutOptions, ArcSliderValueOptionsConstructorOptions, ArcSliderValueOptions, ArcSliderStyleOptionsConstructorOptions, ArcSlider, ArcSliderLayoutOptionsConstructorOptions, ArcSliderOptions, ArcSliderStyleOptions, ArcSliderPosition, ArcSliderOptionsConstructorOptions } from '@kit.ArkUI';
```

## position

```TypeScript
position?: ArcSliderPosition
```

Position of the arc slider on the screen.

Default value: **ArcSliderPosition.RIGHT**

**Type:** ArcSliderPosition

**Default:** ArcSliderPosition.RIGHT

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## reverse

```TypeScript
reverse?: boolean
```

Whether the value range of the arc slider is reversed. **false**: top-to-bottom sliding.

**true** (default): bottom-to-top sliding.

**Type:** boolean

**Default:** true

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

