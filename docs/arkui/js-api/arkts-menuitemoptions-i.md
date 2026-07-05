# MenuItemOptions

Menu中具体item菜单项信息。

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## labelInfo

```TypeScript
labelInfo?: ResourceStr
```

MenuItem结束的标签信息，如快捷方式Ctrl+C等。

**Type:** ResourceStr

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolStartIcon

```TypeScript
symbolStartIcon?: SymbolGlyphModifier
```

MenuItem起始的Symbol图标。配置该项时，原先startIcon图标不显示。

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## builder

```TypeScript
builder?: CustomBuilder
```

用于构建二级菜单。

**Type:** CustomBuilder

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endIcon

```TypeScript
endIcon?: ResourceStr
```

MenuItem的末尾图标。不支持Symbol图标。使用Symbol图标时，须使用symbolEndIcon。

**Type:** ResourceStr

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## startIcon

```TypeScript
startIcon?: ResourceStr
```

MenuItem的起始图标。不支持Symbol图标。使用Symbol图标时，须使用symbolStartIcon。

**Type:** ResourceStr

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolEndIcon

```TypeScript
symbolEndIcon?: SymbolGlyphModifier
```

MenuItem末尾的Symbol图标。配置该项时，原先endIcon图标不显示。

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
content?: ResourceStr
```

MenuItem的内容。

**Type:** ResourceStr

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

