# rect

## rect

```TypeScript
new (
      options?: RectOptions | RoundedRectOptions,
    ): RectAttribute
```

Use new function to create Rect. Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RectOptions \| RoundedRectOptions | No |  |

```TypeScript
rect(
      options?: RectOptions | RoundedRectOptions,
    )
```

用于绘制矩形的构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RectOptions \| RoundedRectOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [RectAttribute](arkts-rectattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [RectInterface](arkts-rectinterface-i.md) | 矩形绘制组件。 > **说明：** > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 |
| [RectOptions](arkts-rectoptions-i.md) | 用于描述Rect组件绘制属性。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [RoundedRectOptions](arkts-roundedrectoptions-i.md) | 用于描述Rect绘制属性。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Constants

| Name | Description |
| --- | --- |
| [Rect](arkts-rect-con.md#Rect) | 矩形绘制组件。 > **说明：** > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 ###### 子组件 无 |
| [RectInStance](arkts-rect-con.md#RectInStance) | Rect attribute. |
| [RectInstance](arkts-rect-con.md#RectInstance) |  |

