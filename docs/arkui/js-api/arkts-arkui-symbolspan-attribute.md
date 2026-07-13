# SymbolSpan properties/events

The [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) are not supported. Only the following attributes are supported.

The [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) are not supported.

**Inheritance/Implementation:** SymbolSpanAttribute extends [CommonMethod<SymbolSpanAttribute>](CommonMethod<SymbolSpanAttribute>)

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## attributeModifier

```TypeScript
attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute>)
```

Creates an attribute modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | AttributeModifier&lt;SymbolSpanAttribute&gt; | Yes | Modifier for dynamically setting attributes on thecurrent component. |

## effectStrategy

```TypeScript
effectStrategy(value: SymbolEffectStrategy)
```

Sets the symbol effect of the symbol span.

> **NOTE**
>
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SymbolEffectStrategy | Yes | Symbol effect of the symbol span.<br>Default value:**SymbolEffectStrategy.NONE** |

## fontColor

```TypeScript
fontColor(value: Array<ResourceColor>)
```

Sets the color of the symbol span.

> **NOTE**
>
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;ResourceColor&gt; | Yes | Color of the symbol span.<br> Default value: depending on the renderingstrategy |

## fontSize

```TypeScript
fontSize(value: number | string | Resource)
```

Sets the size of the symbol span. When using the string type, numeric string values with optional units, for
example, **"10"** or **"10fp"**, are supported.

> **NOTE**
>
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Size of the symbol span.<br>Default value: **16fp**<br>Unit:[fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string)
```

Sets the weight of the symbol span. For the number type, the value ranges from 100 to 900, at an interval of 100. A
larger value indicates a heavier font weight. The default value is **400**. For the string type, only strings of
the number type are supported, for example, **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and
**"medium"**, which correspond to the enumerated values in **FontWeight**.

The **sys.symbol.ohos_lungs** icon does not support font weight setting.

> **NOTE**
>
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string | Yes | Weight of the symbol span.<br>Default value: **FontWeight.Normal** |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)
```

Used to set the font weight of SymbolSpan.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | the SymbolSpan font weight. |
| fontWeightConfigs | FontWeightConfigs | No | the configuration of font weight. |

## renderingStrategy

```TypeScript
renderingStrategy(value: SymbolRenderingStrategy)
```

Sets the rendering strategy of the symbol span.

> **NOTE**
>
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SymbolRenderingStrategy | Yes | Rendering strategy of the symbol span.<br>Default value:**SymbolRenderingStrategy.SINGLE** |

