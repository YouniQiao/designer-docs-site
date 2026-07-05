# Event

Describes an **Event** object, including the event title, start time, and end time.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 导入模块

```TypeScript
import { calendarManager } from '@kit.CalendarKit';
```

## identifier

```TypeScript
identifier?: string
```

Unique ID of an event, with a maximum of 5,000 characters. If this parameter is not specified, the default value is null.

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## attendee

```TypeScript
attendee?: Attendee[]
```

Attendees in a meeting. If this parameter is not set, the default null value is used.

**类型：** Attendee[]

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## instanceEndTime

```TypeScript
instanceEndTime?: number
```

End time of an event. The value is a 13-digit timestamp. This parameter does not need to be set in [addEvent()]calendarManager.Calendar.addEvent(event: Event, callback: AsyncCallback<number>) or [addEvents()]calendarManager.Calendar.addEvents(events: Event[], callback: AsyncCallback<void>).

**类型：** number

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## description

```TypeScript
description?: string
```

Event description, with a maximum of 5,000 characters. If this parameter is not specified, the default value is an empty string.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## timeZone

```TypeScript
timeZone?: string
```

Time zone of the event, with a maximum of 5,000 characters. If this parameter is not specified or set to an invalid value, the current time zone is used by default. If a different time zone is required, enter the corresponding time zone. You can call [systemDateTime.getTimezone()](../../apis-basic-service-kit/arkts-apis/arkts-systemdatetime-gettimezone-f.md#getTimezone-1) to obtain the current system time zone.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## recurrenceRule

```TypeScript
recurrenceRule?: RecurrenceRule
```

Recurrence rule of an event. The event is a recurring event if this parameter is set; otherwise, the event is a non-recurring event.

**类型：** RecurrenceRule

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## instanceStartTime

```TypeScript
instanceStartTime?: number
```

Start time of an event. The value is a 13-digit timestamp. This parameter does not need to be set in [addEvent()]calendarManager.Calendar.addEvent(event: Event, callback: AsyncCallback<number>) or [addEvents()]calendarManager.Calendar.addEvents(events: Event[], callback: AsyncCallback<void>).

**类型：** number

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## title

```TypeScript
title?: string
```

Event title, with a maximum of 5,000 characters. If this parameter is not specified, the default value is an empty string.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## type

```TypeScript
type: EventType
```

Event type.

**类型：** EventType

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## isAllDay

```TypeScript
isAllDay?: boolean
```

Whether the event is an all-day event. The value **true** means that the event is an all-day event, and **false** means the opposite. The default value is **false**.

**类型：** boolean

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## service

```TypeScript
service?: EventService
```

<!--RP1-->Event service. If this parameter is not set, no one-click service is available. This function is not supported currently.<!--RP1End-->

**类型：** EventService

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## startTime

```TypeScript
startTime: number
```

Start time of an event. The value is a 13-digit timestamp. For an all-day event, this field is converted to the timestamp corresponding to 00:00 of the specified date.

**类型：** number

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## location

```TypeScript
location?: Location
```

Event location. If this parameter is not set, the default null value is used.

**类型：** Location

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## reminderTime

```TypeScript
reminderTime?: number[]
```

Reminder time of the event, in minutes. For example, if the value is 5, the reminder occurs 5 minutes before the event starts. If this parameter is not set, no reminder is set. A negative value indicates the delay time for sending a notification. For an all-day event, this parameter specifies the time offset in minutes before 9 a.m. on the event date. A negative value indicates the number of minutes after 9 a.m.

**类型：** number[]

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## endTime

```TypeScript
endTime: number
```

End time of an event. The value is a 13-digit timestamp. For an all-day event, this field is converted to the timestamp corresponding to 24:00 of the specified date.

**类型：** number

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## id

```TypeScript
id?: number
```

Event ID. When you call [addEvent()]calendarManager.Calendar.addEvent(event: Event, callback: AsyncCallback<number>) or [addEvents()]calendarManager.Calendar.addEvents(events: Event[], callback: AsyncCallback<void>) to create an event, this parameter is not required. When you call [deleteEvent()]calendarManager.Calendar.deleteEvent(id: number, callback: AsyncCallback<void>) or [deleteEvents()]calendarManager.Calendar.deleteEvents(ids: number[], callback: AsyncCallback<void>) to delete an event, this parameter is required and must be set to an array of integers. If this parameter is set to an invalid value, an error will be reported.

**类型：** number

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## isLunar

```TypeScript
isLunar?: boolean
```

Unique ID of an event, with a maximum of 5,000 characters. If this parameter is not specified, the default value is null.

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

