# LiquidMaterialEffectParam

材质的各项参数及其用途的详细说明。

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## distortFactor

```TypeScript
distortFactor : double
```

扰动效果系数。值大于等于0，值小于0时表示无扰动效果。

**Type:** double

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## enable

```TypeScript
enable : boolean
```

是否开启材质效果。 true表示开启材质效果，false表示关闭材质效果。

**Type:** boolean

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## tintColor

```TypeScript
tintColor : [double, double, double, double]
```

材质叠加的颜色，四个变量分别对应RGBA。取值范围[0, 1]，小于0时取值为0，大于1时取值为1。

**Type:** [double, double, double, double]

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## materialFactor

```TypeScript
materialFactor : double
```

材质系数。取值范围[0, 1]，小于0时取值为0，大于1时取值为1。值为0表示无材质效果，使用叠加颜色填充，值越大材质效果越明显。

**Type:** double

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## reflectionFactor

```TypeScript
reflectionFactor : double
```

反射系数。取值范围[0, 10]，小于0时取值为0，大于10时取值为10。值为0表示无反射效果，值越大反射强度越高。

**Type:** double

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## ripplePosition

```TypeScript
ripplePosition?: Array<[double, double]>
```

水波效果作用的位置。数组中每个位置包含x和y两个维度，最多支持10个位置坐标传入。传入超出10个位置坐标则整体无效。

**Type:** Array<[double, double]>

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## refractionFactor

```TypeScript
refractionFactor : double
```

折射效果系数。取值范围[0, 10]，小于0时取值为0，大于10时取值为10。值为0表示无折射效果，值越大折射强度越高。

**Type:** double

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## rippleProgress

```TypeScript
rippleProgress : double
```

水波效果进度。值大于等于0，值小于0时表示无水波效果。

**Type:** double

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## distortProgress

```TypeScript
distortProgress : double
```

扰动效果进度。取值范围[0, 1]，小于0时取值为0，大于1时取值为1。0表示开始扰动，1表示结束扰动。

**Type:** double

**Since:** 22

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

