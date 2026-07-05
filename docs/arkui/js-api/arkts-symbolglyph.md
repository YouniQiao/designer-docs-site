# symbolglyph

定义SymbolGlyph组件实例。

## symbolglyph

```TypeScript
symbolglyph(value?: Resource)
```

定义SymbolGlyph组件构造函数。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Resource | No | SymbolGlyph组件的资源名，如 $r('sys.symbol.ohos_wifi')。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AppearSymbolEffect](arkts-appearsymboleffect-c.md) | 定义AppearSymbolEffect类，继承自父类SymbolEffect。 |
| [BounceSymbolEffect](arkts-bouncesymboleffect-c.md) | 定义BounceSymbolEffect类，继承自父类SymbolEffect。 |
| [DisappearSymbolEffect](arkts-disappearsymboleffect-c.md) | 定义DisappearSymbolEffect类，继承自父类SymbolEffect。 |
| [HierarchicalSymbolEffect](arkts-hierarchicalsymboleffect-c.md) | 定义HierarchicalSymbolEffect类，继承自父类SymbolEffect。 |
| [PulseSymbolEffect](arkts-pulsesymboleffect-c.md) | 定义PulseSymbolEffect类，继承自父类SymbolEffect，脉冲动效。 |
| [ReplaceSymbolEffect](arkts-replacesymboleffect-c.md) | 定义ReplaceSymbolEffect类，继承自父类SymbolEffect。 |
| [ScaleSymbolEffect](arkts-scalesymboleffect-c.md) | 定义ScaleSymbolEffect类，继承自父类SymbolEffect。 |
| [SymbolEffect](arkts-symboleffect-c.md) | 定义SymbolEffect类。 |
| [SymbolGlyphAttribute](arkts-symbolglyphattribute-c.md) | 支持[通用属性]{@link common}，不支持文本通用属性，仅支持以下特有属性： 支持[通用事件]{@link common}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [SymbolGlyphInterface](arkts-symbolglyphinterface-i.md) | 显示图标小符号的组件。<!--RP1--><!--RP1End--> > **说明：** > - 本模块接口仅可在Stage模型下使用。 |

### Enums

| Name | Description |
| --- | --- |
| [EffectDirection](arkts-effectdirection-e.md) | 符号动效方向的枚举值。 |
| [EffectFillStyle](arkts-effectfillstyle-e.md) | EffectFillStyle的枚举值。 |
| [EffectScope](arkts-effectscope-e.md) | EffectScope的枚举值。 |
| [ReplaceEffectType](arkts-replaceeffecttype-e.md) | 替换动效类型的枚举值。 |
| [SymbolEffectStrategy](arkts-symboleffectstrategy-e.md) | 动效类型的枚举值。设置动效后，动效启动即生效，无需触发。 |
| [SymbolRenderingStrategy](arkts-symbolrenderingstrategy-e.md) | 渲染模式的枚举值。 |

### Constants

| Name | Description |
| --- | --- |
| [SymbolGlyph](arkts-symbolglyph-con.md#SymbolGlyph) | 显示图标小符号的组件。<!--RP1--><!--RP1End--> > **说明：** > - 本模块接口仅可在Stage模型下使用。 ###### 子组件 不支持子组件。 |
| [SymbolGlyphInstance](arkts-symbolglyph-con.md#SymbolGlyphInstance) | 定义SymbolGlyph组件实例。 |

