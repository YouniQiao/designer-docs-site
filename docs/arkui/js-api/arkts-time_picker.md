# time_picker

定义时间选择器组件实例。

## time_picker

```TypeScript
time_picker(options?: TimePickerOptions)
```

创建滑动选择器，默认使用24小时的时间区间。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TimePickerOptions | No | 配置时间选择组件的参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [TimePickerAttribute](arkts-timepickerattribute-c.md) | 除支持[通用属性]{@link ./common}外，还支持以下属性： 除支持[通用事件]{@link ./common}外，还支持以下事件： |
| [TimePickerDialog](arkts-timepickerdialog-c.md) | 以24小时的时间区间创建时间滑动选择器，展示在弹窗上。 |

### Interfaces

| Name | Description |
| --- | --- |
| [TimePickerDialogOptions](arkts-timepickerdialogoptions-i.md) | 时间选择器弹窗选项。 继承自[TimePickerOptions]{@link TimePickerOptions}。 |
| [TimePickerInterface](arkts-timepickerinterface-i.md) | 滑动选择时间的组件。 > **说明：** > - 该组件不建议开发者在动效过程中修改属性数据。 > > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置值 $r('sys.float.ohos_id_picker_show_count_landscape')。 |
| [TimePickerOptions](arkts-timepickeroptions-i.md) | 时间选择器组件的参数说明。 在TimePicker组件滑动过程中修改TimePickerOptions中的属性，会导致这些属性无法生效。 Date对象用于处理日期和时间，使用方式如下。 **方式1：** new Date() 获取系统当前日期和时间。 **方式2：** new Date(value: number | string) **方式3：** new Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number) |
| [TimePickerResult](arkts-timepickerresult-i.md) | 返回24小时制时间。 |

### Enums

| Name | Description |
| --- | --- |
| [TimePickerFormat](arkts-timepickerformat-e.md) | 时间选择器的数据格式。 |

### Types

| Name | Description |
| --- | --- |
| [DateTimeOptions](arkts-datetimeoptions-t.md) | 时间、日期格式化时可设置的配置项。 |
| [OnTimePickerChangeCallback](arkts-ontimepickerchangecallback-t.md) | 选择时间时触发该事件。 |

### Constants

| Name | Description |
| --- | --- |
| [TimePicker](arkts-time-picker-con.md#TimePicker) | 滑动选择时间的组件。 **说明：** - 该组件不建议开发者在动效过程中修改属性数据。 - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置值 $r('sys.float.ohos_id_picker_show_count_landscape')。 子组件 该组件为基础组件，不建议包含子组件。 |
| [TimePickerInstance](arkts-time-picker-con.md#TimePickerInstance) | 定义时间选择器组件实例。 |

