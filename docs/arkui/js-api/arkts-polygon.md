# polygon

Defines Polygon Component instance.

## polygon

```TypeScript
new (options?: PolygonOptions): PolygonAttribute
```

Uses new to create Polygon. Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PolygonOptions | No |  |

```TypeScript
polygon(options?: PolygonOptions)
```

用于绘制多边形的构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PolygonOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [PolygonAttribute](arkts-polygonattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [PolygonInterface](arkts-polygoninterface-i.md) | 多边形绘制组件。 > **说明：** > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 |
| [PolygonOptions](arkts-polygonoptions-i.md) | 用于描述Polygon组件绘制属性。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Constants

| Name | Description |
| --- | --- |
| [Polygon](arkts-polygon-con.md#Polygon) | 多边形绘制组件。 > **说明：** > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 ###### 子组件 无 |
| [PolygonInstance](arkts-polygon-con.md#PolygonInstance) | Defines Polygon Component instance. |

