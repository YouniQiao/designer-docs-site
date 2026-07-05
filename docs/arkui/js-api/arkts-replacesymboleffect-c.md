# ReplaceSymbolEffect

定义ReplaceSymbolEffect类，继承自父类SymbolEffect。

**Inheritance:** ReplaceSymbolEffectextends: SymbolEffect.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(scope?: EffectScope)
```

AppearSymbolEffect的构造函数，出现动效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scope | EffectScope | No |  |

## constructor

```TypeScript
constructor(scope?: EffectScope, replaceType?: ReplaceEffectType)
```

ReplaceSymbolEffect的构造函数，替换动效。支持指定具体的替换动效类型。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scope | EffectScope | No |  |
| replaceType | ReplaceEffectType | No |  |

## scope

```TypeScript
scope?: EffectScope
```

动效范围。 默认值：EffectScope.LAYER

**Type:** EffectScope

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## replaceType

```TypeScript
replaceType?: ReplaceEffectType
```

替换动效类型。 默认值：ReplaceEffectType.SEQUENTIAL

**Type:** ReplaceEffectType

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

