# MenuItemAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** MenuItemAttributeextends: CommonMethod<MenuItemAttribute>.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentFont

```TypeScript
contentFont(value: Font)
```

设置菜单项中内容信息的字体样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 菜单项中内容信息的字体样式。 |

## contentFontColor

```TypeScript
contentFontColor(value: ResourceColor)
```

设置菜单项中内容信息的字体颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 菜单项中内容信息的字体颜色。 默认值：'#E5000000' |

## labelFont

```TypeScript
labelFont(value: Font)
```

设置菜单项中标签信息的字体样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 菜单项中标签信息的字体样式。 |

## labelFontColor

```TypeScript
labelFontColor(value: ResourceColor)
```

设置菜单项中标签信息的字体颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 菜单项中标签信息的字体颜色。 默认值：'#99000000' |

## onChange

```TypeScript
onChange(callback: (selected: boolean) => void)
```

当选中状态发生变化时，触发该回调。只有手动触发且MenuItem状态改变时才会触发onChange回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (selected: boolean) => void | Yes | 选中状态发生变化时，触发该回调。 true：未选中切换为选中；false：选中切换为未选中。 |

## selected

```TypeScript
selected(value: boolean)
```

设置菜单项是否选中。 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 菜单项是否选中。 true：菜单项被选中；false：菜单项不被选中。 默认值：false |

## selectIcon

```TypeScript
selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier)
```

设置当菜单项被选中时，是否显示被选中的图标。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean \| ResourceStr \| SymbolGlyphModifier | Yes | 菜单项被选中时，是否显示被选中的图标。 true：显示默认的对勾图标；false：不显示图标。ResourceStr：显示指定的图标。 SymbolGlyphModifier：显示指定的HMSymbol图标。 默认值：false [since 12] |

## subMenuBuilder

```TypeScript
subMenuBuilder(builder: CustomBuilder)
```

Create the submenu for custom menu item.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder | Yes | Indicates the builder function for submenu. |

