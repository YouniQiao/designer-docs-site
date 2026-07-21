# DatePickerOptions

Describes the parameters of the date picker.

> **NOTE**  
>  
> - For details about how to use **Date**, see [TimePickerOptions](arkts-arkui-timepickeroptions-i.md).  
>  
> - Property modifications made to **DatePickerOptions** during the **DatePicker** scrolling process may not take  
> effect.

> **NOTE**  
>  
> Handle exceptions for the start and end dates first, followed by exceptions for the selected date.

**Since:** 8

<!--Device-unnamed-declare interface DatePickerOptions--><!--Device-unnamed-declare interface DatePickerOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## end

```TypeScript
end?: Date
```

End date of the picker.

Default value: **Date('2100-12-31')**

Value range: [Date('1900-01-31'), Date('2100-12-31')].

**Type:** Date

**Default:** Date('2100-12-31') [since 11]

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DatePickerOptions-end?: Date--><!--Device-DatePickerOptions-end?: Date-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mode

```TypeScript
mode?: DatePickerMode
```

Date display mode.

Default value: **DatePickerMode.DATE**, which means to display three columns: year, month, and day.

In [DatePickerDialog](./date_picker), when **showTime** in [DatePickerDialogOptions](arkts-arkui-datepickerdialogoptions-i.md) is **true**, this parameter is ignored and the year,month, day columns are always shown.

**Type:** DatePickerMode

**Default:** DatePickerMode.DATE - which means to display three columns: year, month, and day.
<br>Decimal values are rounded off.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-DatePickerOptions-mode?: DatePickerMode--><!--Device-DatePickerOptions-mode?: DatePickerMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected?: Date
```

Date of the selected item.

Default value: current system date.

Value range: [Date('1900-01-31'), Date('2100-12-31')].

Since API version 10, this parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).

**Type:** Date

**Default:** current system date [since 11]

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DatePickerOptions-selected?: Date--><!--Device-DatePickerOptions-selected?: Date-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## start

```TypeScript
start?: Date
```

Start date of the picker.

Default value: **Date('1970-1-1')**

Value range: [Date('1900-01-31'), Date('2100-12-31')].

**Type:** Date

**Default:** Date('1970-1-1') [since 11]

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DatePickerOptions-start?: Date--><!--Device-DatePickerOptions-start?: Date-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

