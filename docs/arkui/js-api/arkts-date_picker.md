# date_picker

定义日期滑动选择组件实例.

## date_picker

```TypeScript
date_picker(options?: DatePickerOptions)
```

根据指定日期范围创建日期选择器。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DatePickerOptions | No | 配置日期选择器组件的参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [DatePickerAttribute](arkts-datepickerattribute-c.md) | 除支持[通用属性]{@link ./common}外，还支持以下属性： 除支持[通用事件]{@link ./common}外，还支持以下事件： |
| [DatePickerDialog](arkts-datepickerdialog-c.md) | 根据指定的日期范围创建日期滑动选择器并展示在弹窗上。 |

### Interfaces

| Name | Description |
| --- | --- |
| [DatePickerDialogOptions](arkts-datepickerdialogoptions-i.md) | 日期选择器弹窗选项。 继承自[DatePickerOptions]{@link DatePickerOptions}。 |
| [DatePickerInterface](arkts-datepickerinterface-i.md) | 滑动选择日期的组件。 > **说明：** > - 该组件不建议开发者在动效过程中修改属性数据。 > > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。 可通过如下参数查看具体配置值$r('sys.float.ohos_id_picker_show_count_landscape')。 |
| [DatePickerOptions](arkts-datepickeroptions-i.md) | 日期选择器组件的参数说明。 > **说明：** > > - Date的使用请参考[TimePickerOptions]{@link TimePickerOptions}。 > > - 在DatePicker组件滑动过程中修改DatePickerOptions中的属性，会导致这些属性无法生效。 |
| [DatePickerResult](arkts-datepickerresult-i.md) | 日期选择器返回的时间格式。 |
| [LunarSwitchStyle](arkts-lunarswitchstyle-i.md) | 定义了DatePickerDialog组件中农历切换开关的样式。 |

### Enums

| Name | Description |
| --- | --- |
| [DatePickerMode](arkts-datepickermode-e.md) | 设置日期展示模式。 | 名称 | 值 | 说明 | | -------- | - |-------- | | DATE | 0 | 显示年、月、日三列。| | YEAR_AND_MONTH | 1 | 显示年、月二列。| | MONTH_AND_DAY | 2 | 显示月、日二列。 在此模式下，年份始终保持不变。| |

### Constants

| Name | Description |
| --- | --- |
| [DatePicker](arkts-date-picker-con.md#DatePicker) | 滑动选择日期的组件。 **说明：** - 该组件不建议开发者在动效过程中修改属性数据。 - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置值 $r('sys.float.ohos_id_picker_show_count_landscape')。 子组件 该组件为基础组件，不建议包含子组件。 |
| [DatePickerInstance](arkts-date-picker-con.md#DatePickerInstance) | 定义日期滑动选择组件实例. |

