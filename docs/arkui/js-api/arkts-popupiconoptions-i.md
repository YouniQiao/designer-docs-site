# PopupIconOptions

PopupIconOptions定义图标的属性。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Popup,PopupOptions,PopupButtonOptions,PopupIconOptions,PopupTextOptions } from '@kit.ArkUI';
```

## fillColor

```TypeScript
fillColor?: ResourceColor
```

设置图标填充颜色。仅针对svg图源生效。 默认不改变图标颜色。

**Type:** ResourceColor

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## image

```TypeScript
image: ResourceStr
```

设置图标内容。

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderRadius

```TypeScript
borderRadius?: Length | BorderRadiuses
```

设置图标圆角。 默认值：`$r('sys.float.ohos_id_corner_radius_default_s')`

**Type:** Length | BorderRadiuses

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
width?: Dimension
```

设置图标宽度。 默认值：32VP

**Type:** Dimension

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: Dimension
```

设置图标高度。 默认值：32VP

**Type:** Dimension

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

