# calendar_picker

定义日历选择器组件实例。

## calendar_picker

```TypeScript
calendar_picker(options?: CalendarOptions)
```

日历选择器。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CalendarOptions | No | 配置日历选择器组件的参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [CalendarPickerAttribute](arkts-calendarpickerattribute-c.md) | 除支持[通用属性]{@link ./common}外，还支持以下属性： 除支持[通用事件]{@link ./common}，还支持以下事件： |
| [CalendarPickerDialog](arkts-calendarpickerdialog-c.md) | 点击日期弹出日历选择器弹窗，可在弹窗内选择日期。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CalendarDialogOptions](arkts-calendardialogoptions-i.md) | 日历选择器弹窗选项。 继承自[CalendarOptions]{@link CalendarOptions}。 > **说明：** > > 在应用窗口缩小过程中，弹窗的宽度会被不断压缩，当缩小到一定程度时会导致其内容无法完整显示， 保证CalendarPickerDialog内容能够完整显示的最小窗口宽度为386vp。 |
| [CalendarOptions](arkts-calendaroptions-i.md) | 日历选择器组件的参数说明。 |
| [CalendarPickerInterface](arkts-calendarpickerinterface-i.md) | 日历选择器组件，提供下拉日历弹窗，可以让用户选择日期。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。 |

### Enums

| Name | Description |
| --- | --- |
| [CalendarAlign](arkts-calendaralign-e.md) | 对齐方式类型。 |

### Constants

| Name | Description |
| --- | --- |
| [CalendarPicker](arkts-calendar-picker-con.md#CalendarPicker) | 日历选择器组件，提供下拉日历弹窗，可以让用户选择日期。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。 子组件 无 |
| [CalendarPickerInstance](arkts-calendar-picker-con.md#CalendarPickerInstance) | 定义日历选择器组件实例。 |

