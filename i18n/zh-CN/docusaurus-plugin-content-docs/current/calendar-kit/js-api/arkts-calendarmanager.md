# @ohos.calendarManager

The calendarManager module provides APIs for calendar and event management, including those for creating, deleting, modifying, and querying calendars and events.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 导入模块

```TypeScript
import { calendarManager } from '@kit.CalendarKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getCalendarManager](arkts-calendarmanager-getcalendarmanager-f.md#getCalendarManager-1) | Obtains a CalendarManager object based on the context. |

### 类

| 名称 | 描述 |
| --- | --- |
| [EventFilter](arkts-calendarmanager-eventfilter-c.md) | Implements an event filter. You can use [filterById()]{@link calendarManager.EventFilter.filterById}, [filterByTime()]{@link calendarManager.EventFilter.filterByTime}, [filterByTitle()]{@link calendarManager.EventFilter.filterByTitle} to obtain an event filter, and then pass the filter in getEvents() for filtering. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Attendee](arkts-calendarmanager-attendee-i.md) | Describes the attendees in a meeting. |
| [Calendar](arkts-calendarmanager-calendar-i.md) | In the following API examples, you need to use [createCalendar()]{@link calendarManager.CalendarManager.createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>)} or [getCalendar()]{@link calendarManager.CalendarManager.getCalendar (callback: AsyncCallback<Calendar>)} to obtain a **Calendar** object before calling related APIs. |
| [CalendarAccount](arkts-calendarmanager-calendaraccount-i.md) | Describes the calendar account information. |
| [CalendarConfig](arkts-calendarmanager-calendarconfig-i.md) | Describes the calendar configuration information. |
| [CalendarManager](arkts-calendarmanager-calendarmanager-i.md) | Before calling any of the following APIs to manage the calendar, you must use [getCalendarManager()]{@link calendarManager.getCalendarManager} to obtain a **CalendarManager** object first. |
| [Event](arkts-calendarmanager-event-i.md) | Describes an **Event** object, including the event title, start time, and end time. |
| [EventService](arkts-calendarmanager-eventservice-i.md) | Describes the event service. |
| [Location](arkts-calendarmanager-location-i.md) | Describes the event location. |
| [RecurrenceRule](arkts-calendarmanager-recurrencerule-i.md) | Describes the recurrence rule of a recurring event. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AttendeeRole](arkts-calendarmanager-attendeerole-e.md) | Enumerates the attendee role types in a conference event. |
| [AttendeeStatus](arkts-calendarmanager-attendeestatus-e.md) | Enumerates the status types of an attendee. |
| [AttendeeType](arkts-calendarmanager-attendeetype-e.md) | Enumerates the types of attendees invited to a conference event. |
| [CalendarType](arkts-calendarmanager-calendartype-e.md) | Enumerates the account types. |
| [EventType](arkts-calendarmanager-eventtype-e.md) | Enumerates event types. |
| [RecurrenceFrequency](arkts-calendarmanager-recurrencefrequency-e.md) | Enumerates the types of the event recurrence rule. |
| [ServiceType](arkts-calendarmanager-servicetype-e.md) | Enumerates the event service types. |

