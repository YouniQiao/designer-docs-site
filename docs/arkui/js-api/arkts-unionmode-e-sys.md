# UnionMode

```TypeScript
declare enum UnionMode
```

融合效果枚举。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## SMOOTH_UNION

```TypeScript
SMOOTH_UNION = 0
```

平滑的融合形变效果。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## GRAVITY_UNION

```TypeScript
GRAVITY_UNION = 1
```

引力作用下的融合形变效果。 **说明：** 设置该类型时，需要结合 [useUnionEffect]CommonMethod#useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions)并设置 [GravityCenterOptions]GravityCenterOptions的gravityCenter为true才能生效。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

