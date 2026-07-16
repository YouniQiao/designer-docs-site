# TimePicker

**TimePicker** is a component that allows users to select a time from the given range through scrolling.

> **NOTE**

> - Avoid changing component attributes during animation processes.
>
> - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default
> number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system
> configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode,
> use **$r('sys.float.ohos_id_picker_show_count_landscape')**.


## TimePicker

```TypeScript
TimePicker(options?: TimePickerOptions)
```

Creates a time picker, which uses the 24-hour time format by default.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TimePickerOptions | No | Parameters of the time picker. |

## Summary

- [TimePickerDialogOptions](arkts-arkui-timepicker-timepickerdialogoptions-i.md)
- [TimePickerOptions](arkts-arkui-timepicker-timepickeroptions-i.md)
- [TimePickerResult](arkts-arkui-timepicker-timepickerresult-i.md)
- [DateTimeOptions](arkts-arkui-timepicker-datetimeoptions-t.md)
- [OnTimePickerChangeCallback](arkts-arkui-timepicker-ontimepickerchangecallback-t.md)
- [TimePickerFormat](arkts-arkui-timepicker-timepickerformat-e.md)
