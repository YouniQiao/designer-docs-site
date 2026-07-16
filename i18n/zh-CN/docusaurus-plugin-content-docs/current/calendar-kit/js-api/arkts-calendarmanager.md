# @ohos.calendarManager

本模块提供日历与日程管理能力，包括日历和日程的创建、删除、修改、查询等。

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 汇总

### 函数

| 名称 | 说明 |
| --- | --- |
| [getCalendarManager](arkts-calendar-getcalendarmanager-f.md#getcalendarmanager-1) | 根据上下文获取CalendarManager对象，用于管理日历。 |

### 类

| 名称 | 说明 |
| --- | --- |
| [EventFilter](arkts-calendar-eventfilter-c.md) | 日程过滤器，查询日程时进行筛选过滤，获取符合条件的日程。 |

### 接口

| 名称 | 说明 |
| --- | --- |
| [Attendee](arkts-calendar-attendee-i.md) | 会议日程参与者。 |
| [Calendar](arkts-calendar-calendar-i.md) | 下列API示例中需先通过[createCalendar()](arkts-calendar-calendarmanager-i.md#createcalendar-2)、[getCalendar()](arkts-calendar-calendarmanager-i.md#getcalendar-3)中任一方法获取Calendar对象，再通过此对象调用对应方法，对该Calendar下的日程进行创建、删除、修改、查询等操作。 |
| [CalendarAccount](arkts-calendar-calendaraccount-i.md) | 日历账户信息。 |
| [CalendarConfig](arkts-calendar-calendarconfig-i.md) | 日历配置信息。 |
| [CalendarManager](arkts-calendar-calendarmanager-i.md) | 下列API示例中需先通过[getCalendarManager()](arkts-calendar-getcalendarmanager-f.md#getcalendarmanager-1)方法获取CalendarManager对象，再通过此对象调用对应方法，进行Calendar的创建、删除、修改、查询等操作。 |
| [Event](arkts-calendar-event-i.md) | 日程对象，包含日程标题、开始时间、结束时间等信息。 |
| [EventService](arkts-calendar-eventservice-i.md) | 日程服务。 |
| [Location](arkts-calendar-location-i.md) | 日程地点。 |
| [RecurrenceRule](arkts-calendar-recurrencerule-i.md) | 重复日程重复规则。 |

### 枚举

| 名称 | 说明 |
| --- | --- |
| [AttendeeRole](arkts-calendar-attendeerole-e.md) | 会议日程参与者角色类型枚举。 |
| [AttendeeStatus](arkts-calendar-attendeestatus-e.md) | 会议日程参与者状态类型枚举。 |
| [AttendeeType](arkts-calendar-attendeetype-e.md) | 会议日程参与者受邀类型枚举。 |
| [CalendarType](arkts-calendar-calendartype-e.md) | 账户类型枚举。 |
| [EventType](arkts-calendar-eventtype-e.md) | 日程类型枚举。 |
| [RecurrenceFrequency](arkts-calendar-recurrencefrequency-e.md) | 日程重复规则类型枚举。 |
| [ServiceType](arkts-calendar-servicetype-e.md) | 日程服务类型枚举。 |

