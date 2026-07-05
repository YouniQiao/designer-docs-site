# EventService

Describes the event service.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 导入模块

```TypeScript
import { calendarManager } from '@kit.CalendarKit';
```

## description

```TypeScript
description?: string
```

Description of the service, with a maximum of 5,000 characters. If this parameter is not specified, the default value is an empty string.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## type

```TypeScript
type: ServiceType
```

Service type.

**类型：** ServiceType

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## uri

```TypeScript
uri: string
```

Service URI, in the DeepLink format. The URI can then redirect the user to the corresponding third-party application page. The value is a string with a maximum of 5,000 characters.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

