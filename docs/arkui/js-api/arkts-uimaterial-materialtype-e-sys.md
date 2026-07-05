# MaterialType

```TypeScript
enum MaterialType
```

系统材质类型枚举。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## NONE

```TypeScript
NONE = 0
```

无系统材质效果。对应的效果为背景色 [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)为 透明色，边框颜色[borderColor]CommonMethod#borderColor为透明色，边框宽度[borderWidth]CommonMethod#borderWidth为0，无阴影 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)。 **系统接口：** 此接口为系统接口。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## SEMI_TRANSPARENT

```TypeScript
SEMI_TRANSPARENT = 1
```

半透明系统材质效果。对应的效果为： 背景色 [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)： 浅色模式为"#f2f1f3f5"，深色模式为"#f2303131"。 边框颜色[borderColor]CommonMethod#borderColor为混合10%的透明度的theme.colors.compForegroundPrimary的 [token](docroot://ui/theme_skinning.md#系统缺省token色值)值。 边框宽度[borderWidth]CommonMethod#borderWidth为1vp。 阴影[shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)为ShadowStyle.OUTER_DEFAULT_SM。 **系统接口：** 此接口为系统接口。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## IMMERSIVE

```TypeScript
IMMERSIVE = 2
```

沉浸式材质类型。仅用于[MaterialInfo]uiMaterial.MaterialInfo接口的type属性标识当前配置的材质类型，不映射到底层功能。实际材质效果通过 [ImmersiveMaterial]uiMaterial.ImmersiveMaterial类实现。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

