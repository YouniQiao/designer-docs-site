# polyline

Defines Polyline Component instance.

## polyline

```TypeScript
new (options?: PolylineOptions): PolylineAttribute
```

Uses new to create Polyline. Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PolylineOptions | No |  |

```TypeScript
polyline(options?: PolylineOptions)
```

用于绘制折线的构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PolylineOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [PolylineAttribute](arkts-polylineattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [PolylineInterface](arkts-polylineinterface-i.md) | 折线绘制组件。 > **说明：** > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 |
| [PolylineOptions](arkts-polylineoptions-i.md) | 用于描述Polyline组件绘制属性。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Constants

| Name | Description |
| --- | --- |
| [Polyline](arkts-polyline-con.md#Polyline) | 折线绘制组件。 > **说明：** > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 ###### 子组件 无 |
| [PolylineInstance](arkts-polyline-con.md#PolylineInstance) | Defines Polyline Component instance. |

