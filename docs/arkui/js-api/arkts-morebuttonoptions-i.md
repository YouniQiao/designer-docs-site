# MoreButtonOptions

更多图标的菜单选项。

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundEffect

```TypeScript
backgroundEffect?: BackgroundEffectOptions
```

设置标题栏背景属性包括：模糊半径，亮度，饱和度，颜色等。 **说明：** 不建议与backgroundBlurStyleOptions同时使用。

**Type:** BackgroundEffectOptions

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyleOptions

```TypeScript
backgroundBlurStyleOptions?: BackgroundBlurStyleOptions
```

标题栏背景模糊选项。 **说明：** 只在设置了backgroundBlurStyle时生效。 不建议与backgroundEffect同时使用。

**Type:** BackgroundBlurStyleOptions

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle?: BlurStyle
```

更多图标的菜单背景模糊样式，不设置时关闭背景模糊效果。

**Type:** BlurStyle

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

