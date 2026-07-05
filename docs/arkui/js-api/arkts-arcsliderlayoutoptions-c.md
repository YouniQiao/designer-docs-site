# ArcSliderLayoutOptions

配置弧形Slider的布局信息。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSliderLayoutOptions,ArcSliderValueOptionsConstructorOptions,ArcSliderValueOptions,ArcSliderStyleOptionsConstructorOptions,ArcSlider,ArcSliderLayoutOptionsConstructorOptions,ArcSliderOptions,ArcSliderStyleOptions,ArcSliderPosition,ArcSliderOptionsConstructorOptions } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: ArcSliderLayoutOptionsConstructorOptions)
```

ArcSliderLayoutOptions的构造函数。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ArcSliderLayoutOptionsConstructorOptions | No | ArcSliderLayoutOptions的构造信息。 |

## position

```TypeScript
position?: ArcSliderPosition
```

弧形Slider的屏幕显示位置。 默认值：ArcSliderPosition.RIGHT

**Type:** ArcSliderPosition

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## reverse

```TypeScript
reverse?: boolean
```

设置弧形Slider取值范围是否反向。值为false时表示从上往下滑。 默认值：true，表示从下往上滑动。

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

