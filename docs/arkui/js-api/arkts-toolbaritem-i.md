# ToolbarItem

工具栏可配置参数。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activeIcon

```TypeScript
activeIcon?: ResourceStr
```

工具栏单个选项处于ACTIVE态时的图标资源路径。

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activeSymbolIcon

```TypeScript
activeSymbolIcon?: SymbolGlyphModifier
```

工具栏单个选项处于ACTIVE态时的symbol资源（优先级高于activeIcon）。 **说明：** 不支持通过[SymbolGlyphModifier](arkts-symbolglyphmodifier-c.md#SymbolGlyphModifier)对象的 [fontSize]SymbolGlyphAttribute#fontSize属性修改图标大小、[effectStrategy]SymbolGlyphAttribute#effectStrategy 属性修改动效、[symbolEffect]SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)属性修改动 效类型。

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolIcon

```TypeScript
symbolIcon?: SymbolGlyphModifier
```

工具栏单个选项的symbol资源（优先级高于icon）。 **说明：** 不支持通过[SymbolGlyphModifier](arkts-symbolglyphmodifier-c.md#SymbolGlyphModifier)对象的 [fontSize]SymbolGlyphAttribute#fontSize属性修改图标大小、[effectStrategy]SymbolGlyphAttribute#effectStrategy 属性修改动效、[symbolEffect]SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)属性修改动 效类型。

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: ResourceStr
```

工具栏单个选项的图标资源路径。

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action?: () => void
```

当前选项被选中的事件回调。

**Type:** () => void

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: ResourceStr
```

工具栏单个选项的显示文本。

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## status

```TypeScript
status?: ToolbarItemStatus
```

工具栏单个选项的状态。 默认值：ToolbarItemStatus.NORMAL

**Type:** ToolbarItemStatus

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

