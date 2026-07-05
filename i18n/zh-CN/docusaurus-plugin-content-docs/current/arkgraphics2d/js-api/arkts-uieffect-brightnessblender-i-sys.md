# BrightnessBlender

提亮混合器，用于将提亮效果添加到指定的组件上。 在调用BrightnessBlender前，需要先通过createBrightnessBlender创建一个BrightnessBlender实例。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## saturation

```TypeScript
saturation: double
```

提亮的基准饱和度。 取值范围[0, 20]。

**类型：** double

**起始版本：** 12

**卡片能力：** 从API version 22开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

## linearRate

```TypeScript
linearRate: double
```

灰度调整的线性系数。 取值范围[-20, 20]。

**类型：** double

**起始版本：** 12

**卡片能力：** 从API version 22开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

## cubicRate

```TypeScript
cubicRate: double
```

灰度调整的三阶系数。 取值范围[-20, 20]。

**类型：** double

**起始版本：** 12

**卡片能力：** 从API version 22开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

## negativeCoefficient

```TypeScript
negativeCoefficient: [double, double, double]
```

基于基准饱和度的RGB负向调整参数。 每个number的取值范围[-20, 20]。

**类型：** [double, double, double]

**起始版本：** 12

**卡片能力：** 从API version 22开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

## positiveCoefficient

```TypeScript
positiveCoefficient: [double, double, double]
```

基于基准饱和度的RGB正向调整参数。 每个number的取值范围[-20, 20]。

**类型：** [double, double, double]

**起始版本：** 12

**卡片能力：** 从API version 22开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

## degree

```TypeScript
degree: double
```

灰度调整的比例。 取值范围[-20, 20]。

**类型：** double

**起始版本：** 12

**卡片能力：** 从API version 22开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

## quadraticRate

```TypeScript
quadraticRate: double
```

灰度调整的二阶系数。 取值范围[-20, 20]。

**类型：** double

**起始版本：** 12

**卡片能力：** 从API version 22开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

## fraction

```TypeScript
fraction: double
```

提亮效果的混合比例。 取值范围[0, 1]，超出边界会在实现时自动截断。

**类型：** double

**起始版本：** 12

**卡片能力：** 从API version 22开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Graphics.Drawing

**系统接口：** 此接口为系统接口。

