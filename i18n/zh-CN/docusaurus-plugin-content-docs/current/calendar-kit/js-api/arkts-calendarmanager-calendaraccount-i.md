# CalendarAccount

Describes the calendar account information.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 导入模块

```TypeScript
import { calendarManager } from '@kit.CalendarKit';
```

## displayName

```TypeScript
displayName?: string
```

Account name displayed on the calendar application (defined by users). If this parameter is not specified, the default value is an empty string with a maximum of 64 characters.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## name

```TypeScript
readonly name: string
```

Account name (defined by developers), with a maximum of 5,000 characters.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## type

```TypeScript
type: CalendarType
```

Account type.

**类型：** CalendarType

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

