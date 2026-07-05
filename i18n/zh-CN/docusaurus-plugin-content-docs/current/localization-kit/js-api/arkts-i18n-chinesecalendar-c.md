# ChineseCalendar

Provide a ChineseCalendar interface which could handle unique characteristics of the chinese calendar, such as leap month.

**继承实现关系：** ChineseCalendar继承自：Calendar。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## checkLeapMonth

```TypeScript
public static checkLeapMonth(gregorianYear: int, cyclicalYear: int, month: int): boolean
```

Checks whether a given month exist leap month in gregorianYear and cyclicalYear.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gregorianYear | int | 是 | Gregorian year to check, supported range is from 1900 to 2100.  The value range is all integers.  Year. |
| cyclicalYear | int | 是 | Cyclical year to check, supported range is from 1 to 60.  The value range is all integers.  Year. |
| month | int | 是 | Month to check. Note: The month starts from 0. For example, 0 indicates January.  The value range is all integers.  Month. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check whether the input month is a leap month. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## setChineseCalendarTime

```TypeScript
public setChineseCalendarTime(chineseCalendarTime: ChineseCalendarTime): void
```

Sets the year, month, day, hour, minute, second, isLeapMonth for this ChineseCalendar object.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| chineseCalendarTime | ChineseCalendarTime | 是 | Indicates the time element used to set for ChineseCalendar. |

