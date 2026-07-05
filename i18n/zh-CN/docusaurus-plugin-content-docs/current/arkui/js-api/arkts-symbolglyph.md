# symbolglyph

定义SymbolGlyph组件实例。

## symbolglyph

```TypeScript
symbolglyph(value?: Resource)
```

定义SymbolGlyph组件构造函数。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Resource | 否 | SymbolGlyph组件的资源名，如 $r('sys.symbol.ohos_wifi')。 |

## 汇总

### 类

| 名称 | 描述 |
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

### 接口

| 名称 | 描述 |
| --- | --- |
| [SymbolGlyphInterface](arkts-symbolglyphinterface-i.md) | 显示图标小符号的组件。<!--RP1--><!--RP1End--> > **说明：** > - 本模块接口仅可在Stage模型下使用。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [EffectDirection](arkts-effectdirection-e.md) | 符号动效方向的枚举值。 |
| [EffectFillStyle](arkts-effectfillstyle-e.md) | EffectFillStyle的枚举值。 |
| [EffectScope](arkts-effectscope-e.md) | EffectScope的枚举值。 |
| [ReplaceEffectType](arkts-replaceeffecttype-e.md) | 替换动效类型的枚举值。 |
| [SymbolEffectStrategy](arkts-symboleffectstrategy-e.md) | 动效类型的枚举值。设置动效后，动效启动即生效，无需触发。 |
| [SymbolRenderingStrategy](arkts-symbolrenderingstrategy-e.md) | 渲染模式的枚举值。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [SymbolGlyph](arkts-symbolglyph-con.md#SymbolGlyph) | 显示图标小符号的组件。<!--RP1--><!--RP1End--> > **说明：** > - 本模块接口仅可在Stage模型下使用。 ###### 子组件 不支持子组件。 |
| [SymbolGlyphInstance](arkts-symbolglyph-con.md#SymbolGlyphInstance) | 定义SymbolGlyph组件实例。 |

