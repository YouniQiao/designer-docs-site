# PCFConfig

PCF软阴影配置参数

**Inheritance:** PCFConfigextends: SoftShadowConfig.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUi.Graphics3D

## shadowSampleRadius

```TypeScript
get shadowSampleRadius(): double | undefined
```

获取像素级阴影边缘周围的采样半径.

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set shadowSampleRadius(value: double | undefined)
```

设置像素级阴影边缘周围的采样半径.

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

## shadowSampleCount

```TypeScript
get shadowSampleCount(): int | undefined
```

获取用于渲染阴影像素的阴影图采样数量. 值必须为正整数.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set shadowSampleCount(value: int | undefined)
```

设置用于渲染阴影像素的阴影图采样数量.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

