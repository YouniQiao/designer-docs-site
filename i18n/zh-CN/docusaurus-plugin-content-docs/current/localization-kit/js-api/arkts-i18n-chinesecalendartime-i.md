# ChineseCalendarTime

Represents chinese calendar time element for the ChineseCalendar object.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## date

```TypeScript
date: int
```

Date of the chinese calendar time.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## isLeapMonth

```TypeScript
isLeapMonth?: boolean
```

Determines whether the input month is a leap month.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## hour

```TypeScript
hour?: int
```

Hour of the chinese calendar time.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## month

```TypeScript
month: int
```

Month of the chinese calendar time. Note: The month starts from 0. For example, 0 indicates January.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## cyclicalYear

```TypeScript
cyclicalYear: int
```

The cyclical year of date. If you need to convert between the chinese calendar and the Gregorian calendar, the year range must be set from 1 to 60. The value range is all integers.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## gregorianYear

```TypeScript
gregorianYear: int
```

The gregorian year of date. If you need to convert between the chinese calendar and the Gregorian calendar, the year range must be set from 1900 to 2100.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## second

```TypeScript
second?: int
```

Second of the chinese calendar time.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## minute

```TypeScript
minute?: int
```

Minute of the chinese calendar time.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

