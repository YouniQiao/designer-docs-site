# DatePickerAttribute

除支持[通用属性]./common外，还支持以下属性： 除支持[通用事件]./common外，还支持以下事件：

**Inheritance:** DatePickerAttributeextends: CommonMethod<DatePickerAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## canLoop

```TypeScript
canLoop(isLoop: Optional<boolean>)
```

设置是否可循环滚动。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLoop | Optional&lt;boolean> | Yes | 是否可循环滚动。 - true：可循环滚动，年份随着月份的循环滚动进行联动加减，  月份随着日的循环滚动进行联动加减。- false：不可循环滚动，年、月、日到达本列的顶部或底部时，无法再进行滚动，年、月、日  之间也无法再联动加减。 默认值：true 当isLoop的值为undefined时，使用默认值。 |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>)
```

设置表冠灵敏度。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | Optional&lt;CrownSensitivity> | Yes | 表冠响应灵敏度。 默认值：CrownSensitivity.MEDIUM，响应速度适中。 |

## disappearTextStyle

```TypeScript
disappearTextStyle(value: PickerTextStyle)
```

设置边缘项（以选中项为基准向上或向下的第二项）的文本样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PickerTextStyle | Yes | 边缘项的文本颜色、字号、字体粗细。  默认值： { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } } |

## disappearTextStyle

```TypeScript
disappearTextStyle(style: Optional<PickerTextStyle>)
```

设置边缘项（以选中项为基准向上或向下的第二项）的文本样式。 与[disappearTextStyle(10+)](arkts-datepickerattribute-c.md#disappearTextStyle)相比， style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle> | Yes | 边缘项的文本颜色、字号、字体粗细。  默认值： { color: '#ff182431', font: {size: '14fp', weight: FontWeight.Regular } }  当style的值为undefined时，使用默认值。 |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(enable: Optional<boolean>)
```

设置是否开启触控反馈。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean> | Yes | 设置是否开启触控反馈。- true：开启触控反馈。- false：不开启触控反馈。  默认值：true 设置为true后，其生效情况取决于系统的硬件是否支持。当enable的值为undefined时，使用默认值。 |

## lunar

```TypeScript
lunar(value: boolean)
```

设置日期是否显示为农历。 > **说明：** > > 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 日期是否显示为农历。 - true：显示为农历。 - false：不显示为农历。 默认值：false |

## lunar

```TypeScript
lunar(isLunar: Optional<boolean>)
```

设置弹窗的日期是否显示为农历。与[lunar](arkts-datepickerattribute-c.md#lunar)相比， isLunar参数新增了对undefined类型的支持。 > **说明：** > > 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLunar | Optional&lt;boolean> | Yes | 日期是否显示为农历。- true：显示为农历。- false：不显示为农历。  默认值：false 当isLunar的值为undefined时，使用默认值。 |

## onChange

```TypeScript
onChange(callback: (value: DatePickerResult) => void)
```

滑动DatePicker文本内容后，选项完全归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。

**Since:** 8

**Deprecated since:** 10

**Substitute:** DatePickerAttribute#onDateChange(callback:

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: DatePickerResult) => void | Yes | 返回选中的时间。 |

## onDateChange

```TypeScript
onDateChange(callback: Callback<Date>)
```

滑动DatePicker文本内容后，选项完全归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Date> | Yes | 返回选中的时间，年、月、日为选中的日期，时、分取决于当  前系统时间的时、分，秒恒为00。 [since 18] |

## onDateChange

```TypeScript
onDateChange(callback: Optional<Callback<Date>>)
```

滑动DatePicker文本内容后，选项完全归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。与 [onDateChange<sup>10+</sup>](arkts-datepickerattribute-c.md#onDateChange)相比， callback参数新增了对undefined类型的支持。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;Callback&lt;Date>> | Yes | 返回选中的时间，年、月、日为选中的日期，时、分取决于当前系统  时间的时、分，秒恒为00。 当callback的值为undefined时，不使用回调函数。 |

## selectedTextStyle

```TypeScript
selectedTextStyle(value: PickerTextStyle)
```

设置选中项的文本样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PickerTextStyle | Yes | 选中项的文本颜色、字号、字体粗细。  默认值： { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } } |

## selectedTextStyle

```TypeScript
selectedTextStyle(style: Optional<PickerTextStyle>)
```

设置选中项的文本样式。与[selectedTextStyle<sup>10+</sup>] {@link DatePickerAttribute#selectedTextStyle(value: PickerTextStyle)}相比，style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle> | Yes | 选中项的文本颜色、字号、字体粗细。  默认值： { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }  当style的值为undefined时，使用默认值。 |

## textStyle

```TypeScript
textStyle(value: PickerTextStyle)
```

设置待选项（以选中项为基准向上或向下的第一项）的文本样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PickerTextStyle | Yes | 待选项的文本颜色、字号、字体粗细。  默认值： { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } } |

## textStyle

```TypeScript
textStyle(style: Optional<PickerTextStyle>)
```

设置待选项（以选中项为基准向上或向下的第一项）的文本样式。与 [textStyle<sup>10+</sup>](arkts-datepickerattribute-c.md#textStyle)相比， style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle> | Yes | 待选项的文本颜色、字号、字体粗细。  默认值： { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }  当style的值为undefined时，使用默认值。 |

