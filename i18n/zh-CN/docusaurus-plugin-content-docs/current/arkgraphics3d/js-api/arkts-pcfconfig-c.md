# PCFConfig

PCF软阴影配置参数

**继承实现关系：** PCFConfig继承自：SoftShadowConfig。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUi.Graphics3D

## shadowSampleRadius

```TypeScript
get shadowSampleRadius(): double | undefined
```

获取像素级阴影边缘周围的采样半径.

**类型：** double

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUi.Graphics3D

```TypeScript
set shadowSampleRadius(value: double | undefined)
```

设置像素级阴影边缘周围的采样半径.

**类型：** double

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUi.Graphics3D

## shadowSampleCount

```TypeScript
get shadowSampleCount(): int | undefined
```

获取用于渲染阴影像素的阴影图采样数量. 值必须为正整数.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUi.Graphics3D

```TypeScript
set shadowSampleCount(value: int | undefined)
```

设置用于渲染阴影像素的阴影图采样数量.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUi.Graphics3D

