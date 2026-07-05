# shape

Defines Shape Component instance.

## shape

```TypeScript
new (value?: PixelMap): ShapeAttribute
```

Use the new function to create Shape.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PixelMap | No |  |

```TypeScript
shape(value: PixelMap)
```

用于绘制Shape组件的构造函数。 从API version 9开始，该接口支持在ArkTS卡片中使用，卡片中不支持使用PixelMap对象。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PixelMap | Yes | 绘制目标，可将图形绘制在指定的PixelMap对象中，若未设置，则默认在当前绘制目标中进行绘制。 异常值undefined和null按照无效值处理，本次设置不生效。 |

```TypeScript
shape()
```

Called when a component is drawn.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ShapeAttribute](arkts-shapeattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [ShapeInterface](arkts-shapeinterface-i.md) | 绘制组件的父组件，父组件中会描述所有绘制组件均支持的通用属性。 1、绘制组件使用Shape作为父组件，实现类似SVG的效果。 2、绘制组件单独使用，用于在页面上绘制指定的图形。 > **说明：** > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 |
| [ViewportRect](arkts-viewportrect-i.md) | 用于描述Viewport的绘制属性。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Constants

| Name | Description |
| --- | --- |
| [Shape](arkts-shape-con.md#Shape) | 绘制组件的父组件，父组件中会描述所有绘制组件均支持的通用属性。 1、绘制组件使用Shape作为父组件，实现类似SVG的效果。 2、绘制组件单独使用，用于在页面上绘制指定的图形。 > **说明：** > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 ###### 子组件 包含[Rect]{@link rect}、[Path]{@link path}、[Circle]{@link circle}、[Ellipse]{@link ellipse}、[Polyline]{@link polyline}、 [Polygon]{@link polygon}、[Image]{@link image}、[Text]{@link text}、[Column]{@link column}、[Row]{@link row}和Shape子组件。 |
| [ShapeInstance](arkts-shape-con.md#ShapeInstance) | Defines Shape Component instance. |

