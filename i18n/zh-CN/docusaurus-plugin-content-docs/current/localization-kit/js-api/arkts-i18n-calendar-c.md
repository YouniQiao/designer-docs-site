# Calendar

Provides calendar management capabilities, such as calendar name retrieval and date calculation.

**起始版本：** 7

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## add

```TypeScript
add(field: string, amount: int): void
```

Performs addition or subtraction on the calendar attributes of this **Calendar** object.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Calendar attribute. The value can be any of the following: year, month,  week_of_year, week_of_month, date, day_of_year, day_of_week, day_of_week_in_month,  hour, hour_of_day, minute, second, millisecond.  For details about the values, see [get]i18n.Calendar#get. |
| amount | int | 是 | Addition or subtraction amount. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
  calendar.set(2021, 11, 11, 8, 0, 0); // 设置时间日期为2021.12.11 08:00:00
  calendar.add('year', 8); // 2021 + 8
  let year: number = calendar.get('year'); // year = 2029
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call Calendar.add failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## compareDays

```TypeScript
compareDays(date: Date): int
```

Compares the current date of this **Calendar** object with the specified date for the difference in the number of days.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date | 是 | Date and time. Note: The month starts from 0. For example, 0 indicates January. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Difference in the number of days. A positive number indicates that the calendar date is earlier,  and a negative number indicates the opposite.  The value is accurate to milliseconds. If the value is less than one day, it is considered as one day. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
  calendar.setTime(5000);
  let date: Date = new Date(6000);
  let diff: number = calendar.compareDays(date); // diff = 1
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call Calendar.compareDays failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## get

```TypeScript
get(field: string): int
```

Obtains the values of the calendar attributes in this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Calendar attributes. The following table lists the supported attribute values.  The value can be  "era": Era, for example, AD or BC.  "year": Year.  "month": Month. Note: The month starts from 0. For example, 0 indicates January.  "date": Date.  "hour": Wall-clock hour.  "hour_of_day": Hour of day.  "minute": Minute.  "second": Second.  "millisecond": Millisecond.  "week_of_year": Week of year. Note that the algorithm for calculating the first week of a year varies  according to regions. For example, the first seven days in a year are the first week.  "year_woy": Year used with the week of year field.  "week_of_month": Week of month.  "day_of_week_in_month": Day of week in month.  "day_of_year": Day of year.  "day_of_week": Day of week.  "milliseconds_in_day": Milliseconds in day.  "zone_offset": Fixed time zone offset in milliseconds (excluding DST).  "dst_offset": DST offset in milliseconds.  "dow_local": Localized day of week.  "extended_year": Extended year, which can be a negative number.  "julian_day": Julian day.  "is_leap_month": Whether a month is a leap month. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Value of the calendar attribute. For example, if the year of the internal date of the current  Calendar object is 1990, get('year') returns 1990. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
calendar.set(2021, 10, 1, 8, 0, 0); // 设置时间日期为2021.11.1 08:00:00
let hourOfDay: number = calendar.get('hour_of_day'); // hourOfDay = 8

```

## getDisplayName

```TypeScript
getDisplayName(locale: string): string
```

Obtains calendar display name in the specified language.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Calendar display name in the specified language. For example, buddhist is displayed as  Buddhist Calendar if the locale is en-US. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('en-US', 'buddhist');
let calendarName: string = calendar.getDisplayName('zh'); // calendarName = '佛历'

```

## getFirstDayOfWeek

```TypeScript
getFirstDayOfWeek(): int
```

Obtains the first day of a week for this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | First day of a week. The value 1 indicates Sunday, and the value 7 indicates Saturday. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('en-US', 'gregory');
let firstDayOfWeek: number = calendar.getFirstDayOfWeek(); // firstDayOfWeek = 1

```

## getMinimalDaysInFirstWeek

```TypeScript
getMinimalDaysInFirstWeek(): int
```

Obtains the minimum number of days in the first week for this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Minimum number of days in the first week of a year. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
let minimalDaysInFirstWeek: number = calendar.getMinimalDaysInFirstWeek(); // minimalDaysInFirstWeek = 1

```

## getTimeInMillis

```TypeScript
getTimeInMillis(): long
```

Obtains the timestamp of this **Calendar** object.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Unix timestamp, which indicates the number of milliseconds that have elapsed since the Unix  epoch. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
calendar.setTime(5000);
let millisecond: number = calendar.getTimeInMillis(); // millisecond = 5000

```

## getTimeZone

```TypeScript
getTimeZone(): string
```

Obtains the time zone ID of this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Time zone ID. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
calendar.setTimeZone('Asia/Shanghai');
let timezone: string = calendar.getTimeZone(); // timezone = 'Asia/Shanghai'

```

## isWeekend

```TypeScript
isWeekend(date?: Date): boolean
```

Checks whether a given date is a weekend in this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | The value true indicates that the specified date is a weekend, and the value false  indicates the opposite. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
calendar.set(2021, 11, 11, 8, 0, 0); // 设置时间为2021.12.11 08:00:00
let isWeekend: boolean = calendar.isWeekend(); // isWeekend = true
let date: Date = new Date(2011, 11, 6, 9, 0, 0); // 时间日期为2011.12.06 09:00:00
isWeekend = calendar.isWeekend(date); // isWeekend = false

```

## set

```TypeScript
set(year: int, month: int, date:int, hour?: int, minute?: int, second?: int): void
```

Sets the year, month, day, hour, minute, and second for this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| year | int | 是 | Year to set. |
| month | int | 是 | Month to set. Note: The month starts from 0. For example, 0 indicates January. |
| date | int | 是 | Day to set. |
| hour | int | 否 | Hour to set. The default value is the current system time. |
| minute | int | 否 | Minute to set. The default value is the current system time. |
| second | int | 否 | Second to set. The default value is the current system time. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
calendar.set(2021, 10, 1, 8, 0, 0); // 设置时间日期为2021.11.1 08:00:00

```

## setFirstDayOfWeek

```TypeScript
setFirstDayOfWeek(value: int): void
```

Sets the first day of a week for this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | int | 是 | Start day of a week. The value 1 indicates Sunday, and the value 7 indicates  Saturday. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
calendar.setFirstDayOfWeek(3);
let firstDayOfWeek: number = calendar.getFirstDayOfWeek(); // firstDayOfWeek = 3

```

## setMinimalDaysInFirstWeek

```TypeScript
setMinimalDaysInFirstWeek(value: int): void
```

Sets the minimum number of days in the first week for this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | int | 是 | Minimum number of days in the first week of a year. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
calendar.setMinimalDaysInFirstWeek(3);
let minimalDaysInFirstWeek: number = calendar.getMinimalDaysInFirstWeek(); // minimalDaysInFirstWeek = 3

```

## setTime

```TypeScript
setTime(date: Date): void
```

Sets the date and time for a **Calendar** object based on the input **Date** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date | 是 | Date and time. Note: The month starts from 0. For example, 0 indicates January. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('en-US', 'gregory');
let date: Date = new Date(2021, 10, 7, 8, 0, 0); // 时间日期为2021.11.07 08:00:00
calendar.setTime(date);

```

## setTime

```TypeScript
setTime(time: double): void
```

Sets the date and time for a **Calendar** object based on the input timestamp.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| time | double | 是 | Unix timestamp, which indicates the number of milliseconds  that have elapsed since the Unix epoch. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('en-US', 'gregory');
calendar.setTime(10540800000);

```

## setTimeZone

```TypeScript
setTimeZone(timezone: string): void
```

Sets the time zone of this **Calendar** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timezone | string | 是 | Valid time zone ID, for example, Asia/Shanghai. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');
calendar.setTimeZone('Asia/Shanghai');

```

