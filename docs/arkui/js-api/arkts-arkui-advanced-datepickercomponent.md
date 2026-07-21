# @ohos.arkui.advanced.DatePickerComponent

## Modules to Import

```TypeScript
import { DisplayMode, TimeFormat, DatePickerComponent, DateMode, DatePickerComponentOptions, DatePickerComponentResult } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [CommonOptions](arkts-arkui-arkui-advanced-datepickercomponent-commonoptions-c.md) | CommonOptions defines common options for the date time picker.  > **Description:**  >  > - For Date usage, refer to  > [TimePickerOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-timepicker.md#timepickeroptions)。  >  > - The text size of DatePickerComponent changes based on the total number of columns displayed. When the number of  > columns is 6 or more, the text size is 14vp; in other cases, it is 16vp. When the component width is too narrow,  > text may be truncated.  >  > - When parameters are omitted or set to undefined, default values are used.  >  > - In [DateOptions](arkts-arkui-arkui-advanced-datepickercomponent-dateoptions-c.md), setting start, end, and selected only takes effect for the date part (year,  > month, day). In [TimeOptions](arkts-arkui-arkui-advanced-datepickercomponent-timeoptions-c.md), setting start, end, and selected only takes effect for the time  > part (hour, minute, second). |
| [DateOptions](arkts-arkui-arkui-advanced-datepickercomponent-dateoptions-c.md) | DateOptions defines options for the date picker.  Inherits from [CommonOptions](arkts-arkui-arkui-advanced-datepickercomponent-commonoptions-c.md). |
| [DatePickerComponentOptions](arkts-arkui-arkui-advanced-datepickercomponent-datepickercomponentoptions-c.md) | DatePickerComponentOptions defines options for the date time picker component. |
| [DatePickerComponentResult](arkts-arkui-arkui-advanced-datepickercomponent-datepickercomponentresult-c.md) | DatePickerComponentResult defines the selection result of the date time picker. |
| [TimeOptions](arkts-arkui-arkui-advanced-datepickercomponent-timeoptions-c.md) | TimeOptions defines options for the time picker.  Inherits from [CommonOptions](arkts-arkui-arkui-advanced-datepickercomponent-commonoptions-c.md). |

### Structs

| Name | Description |
| --- | --- |
| [DatePickerComponent](arkts-arkui-arkui-advanced-datepickercomponent-datepickercomponent-s.md) | DatePickerComponent component is used to select date (year, month, day) and time (hour, minute, second). |

### Enums

| Name | Description |
| --- | --- |
| [DateMode](arkts-arkui-arkui-advanced-datepickercomponent-datemode-e.md) | DateMode enum defines the mode of the date picker. |
| [DisplayMode](arkts-arkui-arkui-advanced-datepickercomponent-displaymode-e.md) | DisplayMode enum defines the display mode of the picker. |
| [TimeFormat](arkts-arkui-arkui-advanced-datepickercomponent-timeformat-e.md) | TimeFormat enum defines the format of the time picker. |

