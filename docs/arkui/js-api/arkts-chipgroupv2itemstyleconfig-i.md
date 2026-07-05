# ChipGroupV2ItemStyleConfig

ChipGroupV2ItemStyle定义了ChipV2的共通属性类。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipGroupV2ItemConfig,ChipGroupV2ItemStyleConfig,ChipGroupV2SpaceConfig,ChipGroupV2IconGroupSuffix,ChipGroupV2Items,ChipGroupV2Padding,ChipGroupV2Item,ChipGroupV2ItemStyle,ChipGroupV2,ChipGroupV2PaddingConfig,ChipGroupV2IconItemConfig,ChipGroupV2SymbolItemConfig,ChipGroupV2Space } from '@kit.ArkUI';
```

## backgroundColor

```TypeScript
backgroundColor?: ColorMetrics
```

ChipV2背景颜色。 默认值：$r('sys.color.ohos_id_color_button_normal') 值为undefined时，按默认值处理。

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size?: ChipV2Size | SizeT<LengthMetrics>
```

ChipV2尺寸。 默认值：ChipV2Size.NORMAL 值为undefined时，按默认值处理。

**Type:** ChipV2Size | SizeT<LengthMetrics>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundSystemMaterial

```TypeScript
selectedBackgroundSystemMaterial?: uiMaterial.Material
```

设置组件选中状态下的系统材质样式。不同材质具有不同的效果，能够影响组件的背景色 [backgroundColor]CommonMethod#backgroundColor(value: ResourceColor)、边框颜色 [borderColor]CommonMethod#borderColor、边框宽度[borderWidth]CommonMethod#borderWidth、阴影 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)效果、材质层滤镜效果 [materialFilter]CommonMethod#materialFilter。 默认值：undefined，不应用材质样式。

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedFontColor

```TypeScript
selectedFontColor?: ColorMetrics
```

ChipV2激活时的文字颜色。 默认值：$r('sys.color.ohos_id_color_text_primary_contrary') 值为undefined时，按默认值处理。

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundSystemMaterial

```TypeScript
backgroundSystemMaterial?: uiMaterial.Material
```

设置组件系统材质样式。不同材质具有不同的效果，能够影响组件的背景色[backgroundColor]CommonMethod#backgroundColor(value: ResourceColor)、边框颜色 [borderColor]CommonMethod#borderColor、边框宽度[borderWidth]CommonMethod#borderWidth、阴影 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)效果、材质层滤镜效果 [materialFilter]CommonMethod#materialFilter。 默认值：undefined，不应用材质样式。

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor?: ColorMetrics
```

ChipV2激活时的背景颜色。 默认值：$r('sys.color.ohos_id_color_emphasize') 值为undefined时，按默认值处理。

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ColorMetrics
```

ChipV2文字颜色。 默认值：$r('sys.color.ohos_id_color_text_primary') 值为undefined时，按默认值处理。

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

