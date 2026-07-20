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

No system material effect. The corresponding effects are:[backgroundColor](../arkts-components/arkts-arkui-common-commonmethod-c.md#backgroundcolor-1) and [borderColor](../arkts-components/arkts-arkui-common-commonmethod-c.md#bordercolor-1) are transparent, [borderWidth](../arkts-components/arkts-arkui-common-commonmethod-c.md#borderwidth-1) is0, and there is no [shadow](../arkts-components/arkts-arkui-common-commonmethod-c.md#shadow-1).

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

[backgroundColor](../arkts-components/arkts-arkui-common-commonmethod-c.md#backgroundcolor-1):  
#f2f1f3f5 in light mode and #f2303131 in dark mode.

[borderColor](../arkts-components/arkts-arkui-common-commonmethod-c.md#bordercolor-1):[token](../../../../ui/theme_skinning.md#system-default-token-color-values) value of **theme.colors.compForegroundPrimary** with 10% transparency.

[borderWidth](../arkts-components/arkts-arkui-common-commonmethod-c.md#borderwidth-1): 1 vp.

[shadow](../arkts-components/arkts-arkui-common-commonmethod-c.md#shadow-1): ShadowStyle.OUTER_DEFAULT_SM.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-MaterialType-SEMI_TRANSPARENT = 1--><!--Device-MaterialType-SEMI_TRANSPARENT = 1-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

