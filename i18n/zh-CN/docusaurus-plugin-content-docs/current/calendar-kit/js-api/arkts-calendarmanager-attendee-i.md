# Attendee

Describes the attendees in a meeting.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 导入模块

```TypeScript
import { calendarManager } from '@kit.CalendarKit';
```

## role

```TypeScript
role?: AttendeeRole
```

Role of the Attendee.

**类型：** AttendeeRole

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## name

```TypeScript
name: string
```

Name of the attendee, with a maximum of 5,000 characters.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## type

```TypeScript
type?: AttendeeType
```

Type of the attendee. If this parameter is not set, the default value is empty.

**类型：** AttendeeType

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## email

```TypeScript
email: string
```

Email address of the attendee, with a maximum of 5,000 characters.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## status

```TypeScript
status?: AttendeeStatus
```

Status of the attendee. If this parameter is not set, the default value is empty.

**类型：** AttendeeStatus

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

