# NumericTextTransition

数字翻牌动效。仅限正整数，不支持小数和负数。不支持渐变色和Text跑马灯模式。不支持选中，[copyOption]TextAttribute#copyOption属性无效。当文本存在子组件时或通过属性字符串设置时，数字 翻牌失效。 NumericTextTransition继承自[ContentTransition](arkts-contenttransition-c.md#ContentTransition)。

**Inheritance:** NumericTextTransitionextends: ContentTransition.

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: NumericTextTransitionOptions)
```

用于创建NumericTextTransition对象的构造函数。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | NumericTextTransitionOptions | No |  |

## flipDirection

```TypeScript
flipDirection?: FlipDirection
```

翻牌方向。 默认值：FlipDirection.DOWN

**Type:** FlipDirection

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableBlur

```TypeScript
enableBlur?: boolean
```

是否开启翻牌模糊效果。 默认值：false true：开启翻牌模糊效果。 false：不开启翻牌模糊效果。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

