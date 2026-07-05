# MenuAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** MenuAttributeextends: CommonMethod<MenuAttribute>.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## font

```TypeScript
font(value: Font)
```

统一设置Menu中所有文本的尺寸。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | Menu中所有文本的尺寸。 默认值： { size: 16, family: 'HarmonyOS Sans',  weight: FontWeight.Medium, style: FontStyle.Normal } |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

统一设置Menu中所有文本的颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Menu中所有文本的颜色。 |

## fontSize

```TypeScript
fontSize(value: Length)
```

统一设置Menu中所有文本的尺寸。 > **说明：** > > 从API version 9开始支持，从API version 10开始废弃，建议使用[font](arkts-menuattribute-c.md#font)代替。

**Since:** 9

**Deprecated since:** 10

**Substitute:** font

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | Menu中所有文本的尺寸，Length为number类型时，使用fp单位。不支持设置百分比。 |

## menuItemDivider

```TypeScript
menuItemDivider(options: DividerStyleOptions | undefined)
```

设置menuItem分割线样式，不设置该属性则不展示分割线。 startMargin + endMargin 超过组件宽度后startMargin和endMargin会被置0。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DividerStyleOptions \| undefined | Yes | 设置menuItem分割线样式。 -strokeWidth：分割线的线宽。 -color：分割线的颜  色。 -startMargin：分割线与menuItem侧边起始端的距离。 -endMargin：分割线与menuItem侧边结束端的距离。 -mode：分割线的模式，默认值为  FLOATING_ABOVE_MENU。 |

## menuItemGroupDivider

```TypeScript
menuItemGroupDivider(options: DividerStyleOptions | undefined)
```

设置menuItemGroup上下分割线的样式，不设置该属性则默认展示分割线。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DividerStyleOptions \| undefined | Yes | 设置menuItemGroup顶部和底部分割线样式。 -strokeWidth：分割线的线宽，默认值是1px。  -color：分割线的颜色，默认值是 #33000000。 -startMargin：分割线与menuItemGroup侧边起始端的距离，默认为16vp，单位为vp。 -  endMargin：分割线与menuItemGroup侧边结束端的距离，默认为16vp，单位为vp。 -mode：分割线的模式，默认值为FLOATING_ABOVE_MENU。 |

## radius

```TypeScript
radius(value: Dimension | BorderRadiuses)
```

设置Menu边框圆角半径。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension \| BorderRadiuses | Yes | Menu边框圆角半径。 默认值：2in1设备上默认值为8vp，其他设备上默认值为20vp。 从API version  12开始，当水平方向两个圆角半径之和的最大值大于菜单宽度，或垂直方向两个圆角半径之和的最大值大于菜单高度时，菜单四个圆角均采用菜单默认圆角半径值。 当设置Dimension类型且传参为异常值时，菜单圆角取默认  值。 当设置BorderRadiuses类型且传参为异常值时，菜单默认没有圆角。 |

## subMenuExpandingMode

```TypeScript
subMenuExpandingMode(mode: SubMenuExpandingMode)
```

设置Menu子菜单展开样式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SubMenuExpandingMode | Yes | Menu子菜单展开样式。 默认值：SubMenuExpandingMode.SIDE_EXPAND |

## subMenuExpandSymbol

```TypeScript
subMenuExpandSymbol(symbol: SymbolGlyphModifier)
```

设置Menu子菜单展开符号。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | SymbolGlyphModifier | Yes | Menu子菜单展开符号。 1、子菜单的展开样式为SubMenuExpandingMode.SIDE_EXPAND时，不显示展开符号。2、子菜单的展开样式为SubMenuExpandingMode.EMBEDDED_EXPAND时，展开时展开符号会顺时针旋转180°。 默认值：  `$r('sys.symbol.chevron_down').fontSize('24vp')` 3、子菜单的展开样式为SubMenuExpandingMode.STACK_EXPAND时，展开时展开符号会顺  时针旋转90°。 默认值：`$r('sys.symbol.chevron_forward').fontSize('20vp').padding('2vp')` |

