# ChineseCalendar

Provide a ChineseCalendar interface which could handle unique characteristics of the chinese calendar,
such as leap month.

**Inheritance/Implementation:** ChineseCalendar extends [Calendar](arkts-localization-calendar-c.md)

**Since:** 26.0.0

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## checkLeapMonth

```TypeScript
public static checkLeapMonth(gregorianYear: number, cyclicalYear: number, month: number): boolean
```

Checks whether a given month exist leap month in gregorianYear and cyclicalYear.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| gregorianYear | number | Yes | Gregorian year to check, supported range is from 1900 to 2100.<br>The value range is all integers.<br>Year. |
| cyclicalYear | number | Yes | Cyclical year to check, supported range is from 1 to 60.<br>The value range is all integers.<br>Year. |
| month | number | Yes | Month to check. Note: The month starts from 0. For example, 0 indicates January.<br>The value range is all integers.<br>Month. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check whether the input month is a leap month. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8900001](../errorcode-i18n.md#8900001-parameter-verification-error) | Invalid parameter. Possible causes: Parameter verification failed. |

## setChineseCalendarTime

```TypeScript
public setChineseCalendarTime(chineseCalendarTime: ChineseCalendarTime): void
```

Sets the year, month, day, hour, minute, second, isLeapMonth for this ChineseCalendar object.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chineseCalendarTime | ChineseCalendarTime | Yes | Indicates the time element used to set for ChineseCalendar. |

