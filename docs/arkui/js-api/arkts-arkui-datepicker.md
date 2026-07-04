# DatePicker

**DatePicker** is a component for selecting a date through scrolling interaction. > **NOTE** > - Avoid changing component attributes during animation processes. > > - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default > number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system > configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode, > use **$r('sys.float.ohos_id_picker_show_count_landscape')**.

## DatePicker

```TypeScript
DatePicker(options?: DatePickerOptions)
```

Creates a date picker in the given date range.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DatePickerOptions | No | Parameters of the date picker. |

## Summary

- [DatePickerDialogOptions](arkts-arkui-datepicker-datepickerdialogoptions-i.md)
- [DatePickerOptions](arkts-arkui-datepicker-datepickeroptions-i.md)
- [DatePickerResult](arkts-arkui-datepicker-datepickerresult-i.md)
- [LunarSwitchStyle](arkts-arkui-datepicker-lunarswitchstyle-i.md)
- [DatePickerMode](arkts-arkui-datepicker-datepickermode-e.md)
