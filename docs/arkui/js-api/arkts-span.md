# span

定义Span组件实例。

## span

```TypeScript
span(value: string | Resource)
```

定义Span组件构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | 文本内容。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [BaseSpan](arkts-basespan-c.md) | 定义BaseSpan基础类，包含Span的通用属性。 |
| [SpanAttribute](arkts-spanattribute-c.md) | 属性继承自[BaseSpan]{@link BaseSpan}。 通用事件支持[点击事件onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}、 [悬浮事件onHover]{@link CommonMethod#onHover}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [SpanInterface](arkts-spaninterface-i.md) | 作为[Text]{@link text}、[ContainerSpan]{@link container_span}组件的子组件，用于显示行内文本的组件。 > **说明：** > 该组件从API version 10开始支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的属性。支持继承的属性仅包括：fontColor、fontSize、fontStyle、 > fontWeight、decoration、letterSpacing、textCase、fontFamily、textShadow。 > > 不支持[通用属性]{@link common}。若需设置通用属性，应使用[Text]{@link text}进行设置，或改用[属性字符串]{@link styled_string}中的 > [CustomSpan]{@link CustomSpan}自行绘制。 > > [通用事件]{@link common}只支持点击事件 > [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}和悬浮事件 > [onHover]{@link CommonMethod#onHover}。 |
| [TextBackgroundStyle](arkts-textbackgroundstyle-i.md) | 定义Span的背景样式。 |

### Constants

| Name | Description |
| --- | --- |
| [Span](arkts-span-con.md#Span) | 作为[Text]{@link text}、[ContainerSpan]{@link container_span}组件的子组件，用于显示行内文本的组件。 > **说明：** > 该组件从API version 10开始支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的属性。支持继承的属性仅包括：fontColor、fontSize、fontStyle、 > fontWeight、decoration、letterSpacing、textCase、fontFamily、textShadow。 > > 不支持[通用属性]{@link common}。若需设置通用属性，应使用[Text]{@link text}进行设置，或改用[属性字符串]{@link styled_string}中的 > [CustomSpan]{@link CustomSpan}自行绘制。 > > [通用事件]{@link common}只支持点击事件 > [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}和悬浮事件 > [onHover]{@link CommonMethod#onHover}。 ###### 子组件 无 |
| [SpanInstance](arkts-span-con.md#SpanInstance) | 定义Span组件实例。 |

