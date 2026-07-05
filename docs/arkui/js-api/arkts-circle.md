# circle

Defines Circle Component instance.

## circle

```TypeScript
new (value?: CircleOptions): CircleAttribute
```

use new function to set the value.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CircleOptions | No |  |

```TypeScript
circle(value?: CircleOptions)
```

用于绘制圆形的构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CircleOptions | No | 设置圆形尺寸 异常值undefined和null按照无效值处理，本次设置不生效。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [CircleAttribute](arkts-circleattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [CircleInterface](arkts-circleinterface-i.md) | 用于绘制圆形的组件。 > **说明： |
| [CircleOptions](arkts-circleoptions-i.md) | 用于描述Circle组件绘制属性。 |

### Constants

| Name | Description |
| --- | --- |
| [Circle](arkts-circle-con.md#Circle) | 用于绘制圆形的组件。 > **说明：** ###### 子组件 无 |
| [CircleInstance](arkts-circle-con.md#CircleInstance) | Defines Circle Component instance. |

