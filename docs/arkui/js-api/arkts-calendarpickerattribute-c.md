# CalendarPickerAttribute

除支持[通用属性]./common外，还支持以下属性： 除支持[通用事件]./common，还支持以下事件：

**Inheritance:** CalendarPickerAttributeextends: CommonMethod<CalendarPickerAttribute>.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## edgeAlign

```TypeScript
edgeAlign(alignType: CalendarAlign, offset?: Offset)
```

设置选择器与入口组件的对齐方式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignType | CalendarAlign | Yes | 对齐方式的类型。 默认值：CalendarAlign.END |
| offset | Offset | No | 按照对齐方式对齐后，选择器相对入口组件的偏移量。 默认值：{dx: 0, dy: 0} |

## edgeAlign

```TypeScript
edgeAlign(alignType: Optional<CalendarAlign>, offset?: Offset)
```

设置选择器与入口组件的对齐方式。 与[edgeAlign](arkts-calendarpickerattribute-c.md#edgeAlign)相比， alignType参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignType | Optional&lt;CalendarAlign> | Yes | 对齐方式的类型。  默认值：CalendarAlign.END 当alignType的值为undefined时，使用默认值。 |
| offset | Offset | No | 按照对齐方式对齐后，选择器相对入口组件的偏移量。 默认值：{dx: 0, dy: 0} |

## markToday

```TypeScript
markToday(enabled: boolean)
```

设置日历选择器中系统当前日期是否保持高亮显示。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | 设置日历选择器中系统当前日期是否保持高亮显示。  - true：系统当前日期在日历选择器内保持高亮显示。 - false：系统当前日期在日历选择器内不保持高亮显示。 默认值：false |

## onChange

```TypeScript
onChange(callback: Callback<Date>)
```

选择日期时触发该事件。不能通过双向绑定的状态变量触发。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Date> | Yes | 选中的日期值。 [since 18] |

## onChange

```TypeScript
onChange(callback: Optional<Callback<Date>>)
```

选择日期时触发该事件。不能通过双向绑定的状态变量触发。 与[onChange](arkts-calendarpickerattribute-c.md#onChange)相比， callback参数新增了对undefined类型的支持。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;Callback&lt;Date>> | Yes | 选中的日期值。 当callback的值为undefined时，不使用回调函数。 |

## textStyle

```TypeScript
textStyle(value: PickerTextStyle)
```

入口区的文本颜色、字号、字体粗细。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PickerTextStyle | Yes | 设置入口区的文本颜色、字号、字体粗细。  默认值： { color: '#ff182431', font: { size:'16fp', weight: FontWeight.Regular } } |

## textStyle

```TypeScript
textStyle(style: Optional<PickerTextStyle>)
```

入口区的文本颜色、字号、字体粗细。与[textStyle](arkts-calendarpickerattribute-c.md#textStyle)相比， style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle> | Yes | 设置入口区的文本颜色、字号、字体粗细。  默认值： { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }  当style的值为undefined时，使用默认值。 |

