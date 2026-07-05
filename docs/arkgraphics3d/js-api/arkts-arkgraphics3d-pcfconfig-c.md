# PCFConfig

param config for pcf soft shadow

**Inheritance/Implementation:** PCFConfig extends [SoftShadowConfig](arkts-arkgraphics3d-softshadowconfig-c.md#softshadowconfig)

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUi.Graphics3D

## shadowSampleCount

```TypeScript
set shadowSampleCount(value: number | undefined)
```

Set the sample count number from shadow map used to render a shadow pixel. Values outside the range are ignored and the previous value is retained.

**Type:** number

**Default:** 16

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

## shadowSampleRadius

```TypeScript
set shadowSampleRadius(value: number | undefined)
```

Set sample radius around the shadow edge at pixel-level.

**Type:** number

**Default:** 5.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

