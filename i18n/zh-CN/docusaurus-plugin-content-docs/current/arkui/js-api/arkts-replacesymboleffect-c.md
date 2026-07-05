# ReplaceSymbolEffect

定义ReplaceSymbolEffect类，继承自父类SymbolEffect。

**继承实现关系：** ReplaceSymbolEffect继承自：SymbolEffect。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(scope?: EffectScope)
```

AppearSymbolEffect的构造函数，出现动效。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scope | EffectScope | 否 |  |

## constructor

```TypeScript
constructor(scope?: EffectScope, replaceType?: ReplaceEffectType)
```

ReplaceSymbolEffect的构造函数，替换动效。支持指定具体的替换动效类型。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scope | EffectScope | 否 |  |
| replaceType | ReplaceEffectType | 否 |  |

## scope

```TypeScript
scope?: EffectScope
```

动效范围。 默认值：EffectScope.LAYER

**类型：** EffectScope

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## replaceType

```TypeScript
replaceType?: ReplaceEffectType
```

替换动效类型。 默认值：ReplaceEffectType.SEQUENTIAL

**类型：** ReplaceEffectType

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

