# radio

Defines Radio Component instance.

## radio

```TypeScript
radio(options: RadioOptions)
```

创建单选框组件。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RadioOptions | Yes | 配置单选框的参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [RadioAttribute](arkts-radioattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |

### Interfaces

| Name | Description |
| --- | --- |
| [RadioConfiguration](arkts-radioconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [RadioInterface](arkts-radiointerface-i.md) | 单选框，提供相应的用户交互选择项。 > **说明：** > > - API version 12开始，Radio选中默认样式由RadioIndicatorType.DOT变为RadioIndicatorType.TICK。 > - 该组件默认有[margin]{@link CommonMethod#margin}间距，默认值为：{&nbsp;top: '14px',&nbsp;right: '14px',&nbsp;bottom: '14px',& > nbsp;left: '14px' }。 |
| [RadioOptions](arkts-radiooptions-i.md) | 单选框的信息。 |
| [RadioStyle](arkts-radiostyle-i.md) | 单选框的颜色。 |

### Enums

| Name | Description |
| --- | --- |
| [RadioIndicatorType](arkts-radioindicatortype-e.md) | 单选框的样式。 |

### Types

| Name | Description |
| --- | --- |
| [OnRadioChangeCallback](arkts-onradiochangecallback-t.md) | 单选框选中状态改变时触发的回调函数类型定义。 |

### Constants

| Name | Description |
| --- | --- |
| [Radio](arkts-radio-con.md#Radio) | 单选框，提供相应的用户交互选择项。 > **说明：** > > - API version 12开始，Radio选中默认样式由RadioIndicatorType.DOT变为RadioIndicatorType.TICK。 > - 该组件默认有[margin]{@link CommonMethod#margin}间距，默认值为：{&nbsp;top: '14px',&nbsp;right: '14px',&nbsp;bottom: '14px',& > nbsp;left: '14px' }。 ###### 子组件 无 |
| [RadioInstance](arkts-radio-con.md#RadioInstance) | Defines Radio Component instance. |

