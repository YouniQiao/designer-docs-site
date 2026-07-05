# ISO8601DateTimeFormatOptions

Represents optional configuration items for the ISO8601DateTimeFormat object. These options determine which elements need to be displayed after formatting and the corresponding format.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## timePrecision

```TypeScript
timePrecision?: 'dateOnly' | 'hours' | 'minutes' | 'seconds' | 'milliSeconds'
```

The ISO 8601 time precision to format. The value can be: "dateOnly", "hours", "minutes", "seconds", "milliSeconds". Default value is "seconds".

**类型：** 'dateOnly' | 'hours' | 'minutes' | 'seconds' | 'milliSeconds'

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## dateFormat

```TypeScript
dateFormat?: 'calendar' | 'ordinal' | 'week'
```

The ISO 8601 date format to format. The value can be: "calendar", the format is yyyy-MM-dd; "ordinal", the format is yyyy-DDD; "week", the format is YYYY-Www-e. Default value is "calendar".

**类型：** 'calendar' | 'ordinal' | 'week'

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## timeZone

```TypeScript
timeZone?: TimeZone
```

TimeZone object used to format date, default value UTC.

**类型：** TimeZone

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## separatorStyle

```TypeScript
separatorStyle?: 'extended' | 'basic'
```

The date time separator style. The value can be: "extended": with -/:, "basic": compact mode. Default separator style is "extended".

**类型：** 'extended' | 'basic'

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## displayTimeZone

```TypeScript
displayTimeZone?: boolean
```

Check if need to show time zone part. Default value is true that show time zone.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

