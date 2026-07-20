# ImmersiveOptions

Immersive material parameters.

**Since:** 26.0.0

<!--Device-uiMaterial-interface ImmersiveOptions--><!--Device-uiMaterial-interface ImmersiveOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { uiMaterial } from '@kit.ArkUI';
```

## applyShadow

```TypeScript
applyShadow?: boolean
```

Whether to add a shadow effect for a material.

If this parameter is set to **true**, the added shadow effect in the material always takes effect, which takes precedence over the general [shadow](../arkts-components/arkts-arkui-common-commonmethod-c.md#shadow-1) attribute. If this parameter is set to **false**, only the general shadow attribute takes effect.

Note: This parameter takes effect only for the display effect of devices with all levels of computing power.

Default value: **true**

**Type:** boolean

**Default:** true

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ImmersiveOptions-applyShadow?: boolean--><!--Device-ImmersiveOptions-applyShadow?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## colorInvert

```TypeScript
colorInvert?: boolean
```

Whether the subtree of the node of the material object automatically adapts the material to the complementary color of the background color.

**false** indicates the material is not automatically adapted to the complementary color of the background color.

**true** indicates that the material is automatically adapted to the complementary color of the background color only when the material layer is thin enough. The materials that can be adapted to the complementary color are defined by the system. Such materials must have at least the **THIN** or **ULTRA_THIN** style, and are related to the strength configuration of the immersive light effect of the application. The thinner the material and the stronger the immersive light effect, the more likely the material meets the requirements for adapting to the complementary color.

The capability of automatically adapting the material to the complementary color takes effect only when special resource values are set for some attribute APIs. The attribute APIs include [fontColor](TextAttribute#fontColor) of the **Text** component,[fontColor](ButtonAttribute#fontColor) of the **Button** component,[fontColor](SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)) of the **SymbolGlyph** component,[fillColor](ImageAttribute#fillColor(value: ResourceColor)) of the **Image** component, icon colors in [placeholderColor](SearchAttribute#placeholderColor), [fontColor](SearchAttribute#fontColor), and [searchIcon](SearchAttribute#searchIcon) of the **Search** component, icon colors in [cancelButton](SearchAttribute#cancelButton), caret colors in [caretStyle](SearchAttribute#caretStyle), and text and icon colors in [tabBar](TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)) of the **TabContent** component when the [BottomTabBarStyle](../arkts-components/arkts-arkui-tab-content-bottomtabbarstyle-c.md) style is used.

Note: This parameter takes effect only for the display effect of devices with high- and mid-level computing power.

Default value: **false**

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ImmersiveOptions-colorInvert?: boolean--><!--Device-ImmersiveOptions-colorInvert?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## interactive

```TypeScript
interactive?: boolean
```

Whether to set an interactive deformation effect for the component with a material set.

Note: This parameter takes effect for the display effect of devices with all levels of computing power.

Default value: **false**

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ImmersiveOptions-interactive?: boolean--><!--Device-ImmersiveOptions-interactive?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## lightEffect

```TypeScript
lightEffect?: LightEffectOptions | null
```

Whether to set a light sensing interaction feedback effect for the component with a material set. If this parameter is set to null, the light sensing interaction feedback effect is disabled.

Note: This parameter takes effect for the display effect of devices with all levels of computing power.

Default value: **undefined**, indicating that the light sensing interaction feedback effect is not set.

**Type:** LightEffectOptions | null

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ImmersiveOptions-lightEffect?: LightEffectOptions | null--><!--Device-ImmersiveOptions-lightEffect?: LightEffectOptions | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## materialColor

```TypeScript
materialColor?: ResourceColor
```

Coloring of the material layer. This parameter is used to add a pure color effect for the material filter. The pure color must have a certain transparency value and cannot be completely opaque. Otherwise, the material filter effect will be completely blocked.

Note: This parameter takes effect only for the display effect of devices with high- and mid-level computing power.

Default value: **Color.Transparent**

**Type:** ResourceColor

**Default:** Color.Transparent

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ImmersiveOptions-materialColor?: ResourceColor--><!--Device-ImmersiveOptions-materialColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: ImmersiveStyle
```

Material style. Different styles correspond to different material parameters, which affect the material thickness.

Note: This parameter takes effect only for the display effect of devices with high- and mid-level computing power.

Default value: **ImmersiveStyle.REGULAR**

**Type:** ImmersiveStyle

**Default:** uiMaterial.ImmersiveStyle.REGULAR

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ImmersiveOptions-style?: ImmersiveStyle--><!--Device-ImmersiveOptions-style?: ImmersiveStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

