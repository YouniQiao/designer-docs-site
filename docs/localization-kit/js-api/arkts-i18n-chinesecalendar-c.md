# ChineseCalendar

Provide a ChineseCalendar interface which could handle unique characteristics of the chinese calendar, such as leap month.

**Inheritance:** ChineseCalendarextends: Calendar.

**Since:** 26.0.0

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## checkLeapMonth

```TypeScript
public static checkLeapMonth(gregorianYear: int, cyclicalYear: int, month: int): boolean
```

Checks whether a given month exist leap month in gregorianYear and cyclicalYear.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| gregorianYear | int | Yes | Gregorian year to check, supported range is from 1900 to 2100.  The value range is all integers.  Year. |
| cyclicalYear | int | Yes | Cyclical year to check, supported range is from 1 to 60.  The value range is all integers.  Year. |
| month | int | Yes | Month to check. Note: The month starts from 0. For example, 0 indicates January.  The value range is all integers.  Month. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check whether the input month is a leap month. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## setChineseCalendarTime

```TypeScript
public setChineseCalendarTime(chineseCalendarTime: ChineseCalendarTime): void
```

Sets the year, month, day, hour, minute, second, isLeapMonth for this ChineseCalendar object.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chineseCalendarTime | ChineseCalendarTime | Yes | Indicates the time element used to set for ChineseCalendar. |

