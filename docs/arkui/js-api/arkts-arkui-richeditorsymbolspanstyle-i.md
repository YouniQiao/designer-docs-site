# RichEditorSymbolSpanStyle

Sets the symbol span style.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## effectStrategy

```TypeScript
effectStrategy?: SymbolEffectStrategy
```

Effect strategy of the symbol span. Default value: **SymbolEffectStrategy.NONE**

**Type:** SymbolEffectStrategy

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: Array<ResourceColor>
```

Color of the symbol span. Default value: depending on the rendering strategy

**Type:** Array<ResourceColor>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize?: number | string | Resource
```

Size of the symbol span. The default unit is fp. The default value follows the theme.

**Type:** number | string | Resource

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontWeight

```TypeScript
fontWeight?: number | FontWeight | string
```

Weight of the symbol span. For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier font weight. The default value is **400**. For the string type, only strings of the number type are supported, for example, **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in **FontWeight**. Default value: **FontWeight.Normal**

**Type:** number | FontWeight | string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## renderingStrategy

```TypeScript
renderingStrategy?: SymbolRenderingStrategy
```

Rendering strategy of the symbol span. Default value: **SymbolRenderingStrategy.SINGLE**

**Type:** SymbolRenderingStrategy

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

