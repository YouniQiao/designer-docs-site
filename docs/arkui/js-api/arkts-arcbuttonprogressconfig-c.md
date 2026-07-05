# ArcButtonProgressConfig

ArcButton内进度条的参数配置。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcButtonPosition,ArcButton,ArcButtonStatus,ArcButtonStyleMode,ArcButtonOptions,ArcButtonProgressConfig } from '@kit.ArkUI';
```

## total

```TypeScript
total?: number
```

进度的最大值。 默认值：100 取值范围：[0, 2147483647]，设置0或超出取值范围取默认值为100。

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## color

```TypeScript
color?: ResourceColor
```

进度条前景色。如果组件设置了背景色（[backgroundColor](arkts-arcbuttonoptions-c.md#ArcButtonOptions)），进度条前景色默认值取组件背景色。进度条前景色不受按钮样式（ [ArcButtonStyleMode](arkts-arcbuttonstylemode-e.md#ArcButtonStyleMode)）设置影响。进度条背景色仅依赖进度条前景色设置，取进度条前景色的25%透明度。 默认值："#1F71FF"，显示为蓝色。

**Type:** ResourceColor

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## value

```TypeScript
value: number
```

进度条当前值。设置小于0的数值时置为0，设置大于total的数值时置为total。 默认值：0 取值范围：[0, total]

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

