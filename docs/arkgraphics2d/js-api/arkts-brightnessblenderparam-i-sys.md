# BrightnessBlenderParam

BrightnessBlender参数列表。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## saturation

```TypeScript
saturation: double
```

提亮的基准饱和度。 取值范围[0, 20]。

**Type:** double

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## linearRate

```TypeScript
linearRate: double
```

灰度调整的线性系数。 取值范围[-20, 20]。

**Type:** double

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## cubicRate

```TypeScript
cubicRate: double
```

灰度调整的三阶系数。 取值范围[-20, 20]。

**Type:** double

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## negativeCoefficient

```TypeScript
negativeCoefficient: [double, double, double]
```

基于基准饱和度的RGB负向调整参数。 每个number的取值范围[-20, 20]。

**Type:** [double, double, double]

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## positiveCoefficient

```TypeScript
positiveCoefficient: [double, double, double]
```

基于基准饱和度的RGB正向调整参数。 每个number的取值范围[-20, 20]。

**Type:** [double, double, double]

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## degree

```TypeScript
degree: double
```

灰度调整的比例。 取值范围[-20, 20]。

**Type:** double

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## quadraticRate

```TypeScript
quadraticRate: double
```

灰度调整的二阶系数。 取值范围[-20, 20]。

**Type:** double

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## fraction

```TypeScript
fraction: double
```

提亮效果的混合比例。 取值范围[0, 1]，超出边界会在实现时自动截断。

**Type:** double

**Since:** 12

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

