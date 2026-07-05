# TextShadowStyle

文本阴影对象说明。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value: ShadowOptions | Array<ShadowOptions>)
```

文本阴影对象的构造函数。 ShadowOptions对象中不支持fill字段。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ShadowOptions \| Array&lt;ShadowOptions> | Yes | 文本阴影设置项。 |

## textShadow

```TypeScript
readonly textShadow: Array<ShadowOptions>
```

获取属性字符串的文本阴影。

**Type:** Array<ShadowOptions>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

