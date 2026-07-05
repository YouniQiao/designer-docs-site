# NavigationMenuItem

导航菜单项，包括菜单图标和菜单信息。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolIcon

```TypeScript
symbolIcon?: SymbolGlyphModifier
```

菜单栏单个选项的symbol资源（优先级高于icon）。 **说明：** 不支持通过[SymbolGlyphModifier](arkts-symbolglyphmodifier-c.md#SymbolGlyphModifier)对象的 [fontSize]SymbolGlyphAttribute#fontSize属性修改图标大小、[effectStrategy]SymbolGlyphAttribute#effectStrategy 属性修改动效、[symbolEffect]SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)属性修改动 效类型。

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isEnabled

```TypeScript
isEnabled?: boolean
```

使能状态，默认使能（false未使能，true使能）。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: string | Resource
```

菜单栏单个选项的图标资源路径。

**Type:** string | Resource

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action?: () => void
```

当前选项被选中的事件回调。

**Type:** () => void

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: string | Resource
```

API version 9：显示菜单栏单个选项的文本。 从API version 10开始，不显示菜单栏单个选项的文本。

**Type:** string | Resource

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

