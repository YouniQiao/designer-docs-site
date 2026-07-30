# MaterialType (System API)

Enumerates system material types.

**Since:** 26.0.0

<!--Device-uiMaterial-enum MaterialType--><!--Device-uiMaterial-enum MaterialType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## NONE

```TypeScript
NONE = 0
```

No system material effect. The corresponding effects are:[backgroundColor](../arkts-components/arkts-arkui-commonmethod-c.md#backgroundcolor) and [borderColor](../arkts-components/arkts-arkui-commonmethod-c.md#bordercolor) are transparent, [borderWidth](../arkts-components/arkts-arkui-commonmethod-c.md#borderwidth) is0, and there is no [shadow](../arkts-components/arkts-arkui-commonmethod-c.md#shadow).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-MaterialType-NONE = 0--><!--Device-MaterialType-NONE = 0-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## SEMI_TRANSPARENT

```TypeScript
SEMI_TRANSPARENT = 1
```

Semi-transparent system material effect. The corresponding effect is as follows:

[backgroundColor](../arkts-components/arkts-arkui-commonmethod-c.md#backgroundcolor):  
#f2f1f3f5 in light mode and #f2303131 in dark mode.

[borderColor](../arkts-components/arkts-arkui-commonmethod-c.md#bordercolor):[token](../../../ui/theme_skinning.md#system-default-token-color-values) value of **theme.colors.compForegroundPrimary** with 10% transparency.

[borderWidth](../arkts-components/arkts-arkui-commonmethod-c.md#borderwidth): 1 vp.

[shadow](../arkts-components/arkts-arkui-commonmethod-c.md#shadow): ShadowStyle.OUTER_DEFAULT_SM.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-MaterialType-SEMI_TRANSPARENT = 1--><!--Device-MaterialType-SEMI_TRANSPARENT = 1-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

