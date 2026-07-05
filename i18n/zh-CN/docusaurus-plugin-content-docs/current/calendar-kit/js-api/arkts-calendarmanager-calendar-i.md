# Calendar

In the following API examples, you need to use [createCalendar()]calendarManager.CalendarManager.createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>) or [getCalendar()]calendarManager.CalendarManager.getCalendar (callback: AsyncCallback<Calendar>) to obtain a **Calendar** object before calling related APIs.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 导入模块

```TypeScript
import { calendarManager } from '@kit.CalendarKit';
```

## addEvent

```TypeScript
addEvent(event: Event): Promise<number>
```

Adds an event, with no event ID, instanceStartTime, and instanceEndTime specified in Event. This API uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

- API版本23+： ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Event | 是 | Event object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the event ID. The ID is greater than 0. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const date = new Date();
const event: calendarManager.Event = {
  type: calendarManager.EventType.NORMAL,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    calendar.addEvent(event).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to addEvent. Code: ${err.code}, message: ${err.message}`);
    });
  }
});

```

## addEvent

```TypeScript
addEvent(event: Event, callback: AsyncCallback<number>): void
```

Adds an event, with no event ID, instanceStartTime, and instanceEndTime specified in Event. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

- API版本23+： ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Event | 是 | Event object. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the event ID. The event ID is the unique  identifier of an event and is the auto-increment primary key of the database. If the value is less than 0,  the event creation fails; if the value is greater than 0, the event creation succeeds. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const date = new Date();
const event: calendarManager.Event = {
  type: calendarManager.EventType.NORMAL,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar().then((data: calendarManager.Calendar) => {
  console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
  calendar = data;
  calendar.addEvent(event, (err: BusinessError, data: number): void => {
    if (err) {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to addEvent. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info(`Succeeded in adding event, id -> ${data}`);
    }
  });
}).catch((err: BusinessError) => {
  // 检查权限是否已成功申请。
  console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
});

```

## addEvents

```TypeScript
addEvents(events: Event[]): Promise<void>
```

Adds events in batches, with no event ID, instanceStartTime, and instanceEndTime specified in Event. This API uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

- API版本23+： ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| events | Event[] | 是 | Array of Event objects. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const date = new Date();
const events: calendarManager.Event[] = [
  {
    type: calendarManager.EventType.NORMAL,
    startTime: date.getTime(),
    endTime: date.getTime() + 60 * 60 * 1000
  },
  {
    type: calendarManager.EventType.NORMAL,
    startTime: date.getTime(),
    endTime: date.getTime() + 60 * 60 * 1000
  }
];
calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    calendar.addEvents(events).then(() => {
      console.info('Succeeded in adding events');
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
  }
});

```

## addEvents

```TypeScript
addEvents(events: Event[], callback: AsyncCallback<void>): void
```

Adds events in batches, with no event ID, instanceStartTime, and instanceEndTime specified in Event. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

- API版本23+： ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| events | Event[] | 是 | Array of Event objects. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const date = new Date();
const events: calendarManager.Event[] = [
  {
    type: calendarManager.EventType.NORMAL,
    startTime: date.getTime(),
    endTime: date.getTime() + 60 * 60 * 1000
  },
  {
    type: calendarManager.EventType.NORMAL,
    startTime: date.getTime(),
    endTime: date.getTime() + 60 * 60 * 1000
  }
];
calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    calendar.addEvents(events, (err: BusinessError) => {
      if (err) {
        // 检查权限是否已成功申请或者参数是否正确。
        console.error(`Failed to add events. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.info('Succeeded in adding events');
      }
    });
  }
});

```

## deleteEvent

```TypeScript
deleteEvent(id: number): Promise<void>
```

Deletes an event with the specified ID. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | Event ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
let id: number = 0;
const date = new Date();
const event: calendarManager.Event = {
  type: calendarManager.EventType.NORMAL,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar data->${JSON.stringify(data)}`);
    calendar = data;
    await calendar.addEvent(event).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
      id = data;
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    calendar.deleteEvent(id).then(() => {
      console.info('Succeeded in deleting event');
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to delete event. Code: ${err.code}, message: ${err.message}`);
    });
  }
});

```

## deleteEvent

```TypeScript
deleteEvent(id: number, callback: AsyncCallback<void>): void
```

Deletes an event with the specified ID. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 21开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | Event ID, which is the unique identifier of an event. If the input event ID is an integer,  the event is created. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
let id: number = 0;
const date = new Date();
const event: calendarManager.Event = {
  type: calendarManager.EventType.NORMAL,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    calendar.addEvent(event).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
      id = data;
      calendar?.deleteEvent(id, (err: BusinessError) => {
        if (err) {
          // 检查参数是否正确。
          console.error(`Failed to delete event. Code: ${err.code}, message: ${err.message}`);
        } else {
          console.info('Succeeded in deleting event');
        }
      });
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
  }
});

```

## deleteEvents

```TypeScript
deleteEvents(ids: number[]): Promise<void>
```

Deletes a batch of events with the specified IDs. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ids | number[] | 是 | Array of event IDs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
let id1: number = 0;
let id2: number = 0;
const date = new Date();
const event1: calendarManager.Event = {
  type: calendarManager.EventType.NORMAL,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
const event2: calendarManager.Event = {
  type: calendarManager.EventType.IMPORTANT,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    await calendar.addEvent(event1).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
      id1 = data;
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    await calendar.addEvent(event2).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
      id2 = data;
    }).catch((err: BusinessError) => {
      // 检查参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    calendar.deleteEvents([id1, id2]).then(() => {
      console.info('Succeeded in deleting events');
    }).catch((err: BusinessError) => {
      // 检查参数是否正确。
      console.error(`Failed to delete events. Code: ${err.code}, message: ${err.message}`);
    });
  }
});

```

## deleteEvents

```TypeScript
deleteEvents(ids: number[], callback: AsyncCallback<void>): void
```

Deletes a batch of events with the specified IDs. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 21开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ids | number[] | 是 | Array of event IDs. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
let id1: number = 0;
let id2: number = 0;
const date = new Date();
const event1: calendarManager.Event = {
  type: calendarManager.EventType.NORMAL,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
const event2: calendarManager.Event = {
  type: calendarManager.EventType.IMPORTANT,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    await calendar.addEvent(event1).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
      id1 = data;
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    await calendar.addEvent(event2).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
      id2 = data;
    }).catch((err: BusinessError) => {
      // 检查参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    calendar.deleteEvents([id1, id2], (err: BusinessError) => {
      if (err) {
        // 检查参数是否正确。
        console.error(`Failed to delete events. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.info('Succeeded in deleting events');
      }
    });
  }
});

```

## getAccount

```TypeScript
getAccount(): CalendarAccount
```

Obtains the calendar account information.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CalendarAccount | Calendar account information. |

**示例：**

```TypeScript
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { BusinessError } from '@kit.BasicServicesKit';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    const account = calendar.getAccount();
    console.info(`succeeded in getting account, account -> ${JSON.stringify(account)}`);
  }
});

```

## getConfig

```TypeScript
getConfig(): CalendarConfig
```

Obtains the calendar configuration information.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CalendarConfig | Calendar configuration information. |

**示例：**

```TypeScript
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { BusinessError } from '@kit.BasicServicesKit';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    const config = calendar.getConfig();
    console.info(`Succeeded in getting config, config -> ${JSON.stringify(config)}`);
  }
});

```

## getEvents

```TypeScript
getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>
```

Obtains all events in a calendar that match the filter criteria. This API uses a promise to return the result. If there is only one input parameter, the filter criteria, corresponding to the type EventFilter, must be set as the parameter. If no input parameter is specified, all events under the specified calendar account can be queried.

**起始版本：** 10

**需要权限：** 

- API版本23+： ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventFilter | EventFilter | 否 |  |
| eventKey | (keyof Event)[] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Event[]> | Promise used to return the result, which is an array of Event objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const date = new Date();
const event: calendarManager.Event = {
  title: 'MyEvent',
  type: calendarManager.EventType.IMPORTANT,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    await calendar.addEvent(event).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    // 根据MyEvent进行模糊查询，如果存在类似标题为MyEvent1类型的日程，也可查询出来
    const filter = calendarManager.EventFilter.filterByTitle('MyEvent');
    calendar.getEvents(filter).then((data: calendarManager.Event[]) => {
      console.info(`Succeeded in getting events, data -> ${JSON.stringify(data)}`);
    }).catch((err: BusinessError) => {
      // 检查参数是否正确。
      console.error(`Failed to get events. Code: ${err.code}, message: ${err.message}`);
    });
  }
});

```

## getEvents

```TypeScript
getEvents(eventFilter: EventFilter, eventKey: (keyof Event)[], callback: AsyncCallback<Event[]>):void
```

Obtains all events in a calendar that match the filter criteria. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

- API版本23+： ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventFilter | EventFilter | 是 | Filter criteria. |
| eventKey | (keyof Event)[] | 是 | Filter field. |
| callback | AsyncCallback&lt;Event[]> | 是 | Callback used to return an array of events. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
let id1: number = 0;
let id2: number = 0;
const date = new Date();
const event1: calendarManager.Event = {
  type: calendarManager.EventType.NORMAL,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
const event2: calendarManager.Event = {
  type: calendarManager.EventType.IMPORTANT,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    await calendar.addEvent(event1).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    await calendar.addEvent(event2).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
    }).catch((err: BusinessError) => {
      // 检查参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    const filter = calendarManager.EventFilter.filterById([id1, id2]);
    calendar.getEvents(filter, ['title', 'type', 'startTime', 'endTime'], (err: BusinessError, data: calendarManager.Event[]) => {
      if (err) {
        // 检查参数是否正确。
        console.error(`Failed to get events. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.info(`Succeeded in getting events, data -> ${JSON.stringify(data)}`);
      }
    });
  }
});

```

## getEvents

```TypeScript
getEvents(callback: AsyncCallback<Event[]>):void
```

Obtains all events in the current calendar. This API uses an asynchronous callback to return the result. For versions earlier than API version 20, the default fields to be obtained include id, type, title, startTime, endTime, isAllDay, description, timeZone, location, service, attendee, and reminderTime. Since API version 20, the default fields to be obtained include id, type, title, startTime, endTime, isAllDay, description, timeZone, location, service, attendee, reminderTime, and identifier. The field is not returned if it is empty.

**起始版本：** 10

**需要权限：** 

- API版本23+： ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Event[]> | 是 | Callback used to return an array of events. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar data -> ${JSON.stringify(data)}`);
    calendar = data;
    calendar.getEvents((err: BusinessError, data: calendarManager.Event[]) => {
      if (err) {
        console.error(`Failed to get events. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.info(`Succeeded in getting events, data -> ${JSON.stringify(data)}`);
      }
    });
  }
});

```

## openEventEditPage

```TypeScript
openEventEditPage(id: number): Promise<void>
```

Opens the event edit page.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | The ID of the event to be edited. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 23900001 | Parameter value error. |
| 23900005 | This event cannot be edited. |

**示例：**

```TypeScript
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { BusinessError } from '@kit.BasicServicesKit';
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar: calendarManager.Calendar | undefined = undefined;
const date = new Date();
const event: calendarManager.Event = {
    title: 'MyEvent',
    type: calendarManager.EventType.NORMAL,
    startTime: date.getTime(),
    endTime: date.getTime() + 60 * 60 * 1000
  };
calendarMgr?.getCalendar(async (err: BusinessError, data: calendarManager.Calendar) => {
    if (err) {
      // 检查权限是否已成功申请。
      console.error(`Failed to get calendar, Code is ${err.code}, message is ${err.message}`);
    } else {
      console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
      calendar = data;
      let eventId: number = 0;
      await calendar?.addEvent(event).then((dataId: number) => {
        console.info(`Succeeded in adding event id-> ${dataId}`);
        eventId = dataId;
      }).catch((err: BusinessError) => {
        // 检查权限是否已成功申请或者参数是否正确。
        console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
        return;
      });
      // 根据id进行查询
      const filterId = calendarManager.EventFilter.filterById([eventId]);
      calendar?.getEvents(filterId).then((data: calendarManager.Event[]) => {
        console.info(`Succeeded in getting event: ${JSON.stringify(data)}`);
      }).catch((err: BusinessError) => {
        // 检查参数是否正确或者传入的id是否存在或者权限是否有限制
        console.error(`Failed to get event, Code is ${err.code}, message is ${err.message}`);
        return;
      });
      calendar?.openEventEditPage(eventId).then(() => {
        console.info(`Succeeded in opening EventEditPage`);
      }).catch((err: BusinessError) => {
        // 检查传入的id是否存在或者权限是否有限制或者日程是否支持编辑
        console.error(`Failed to open eventeditpage, Code is ${err.code}, message is ${err.message}`);
      });
    }
 });

```

## queryEventInstances

```TypeScript
queryEventInstances(start: number, end: number, ids?: number[], eventKey?: (keyof Event)[]): Promise<Event[]>
```

Queries the event instance with a specified event key in a calendar. This API uses a promise to return the result.

**起始版本：** 18

**需要权限：** 

- API版本23+： ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| start | number | 是 | Start time of an event. The value is a 13-digit timestamp. |
| end | number | 是 | End time of an event. The value is a 13-digit timestamp. |
| ids | number[] | 否 |  |
| eventKey | (keyof Event)[] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Event[]> | Promise used to return the result, which is an array of Event objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { BusinessError } from '@kit.BasicServicesKit';
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const date = new Date();
const event: calendarManager.Event = {
  title: 'MyEvent',
  type: calendarManager.EventType.IMPORTANT,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    await calendar.addEvent(event).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    calendar?.queryEventInstances(date.getTime(), date.getTime() + 60 * 60 * 1000, undefined,
      ['title', 'startTime', 'endTime', 'instanceStartTime', 'instanceEndTime']).then((data: calendarManager.Event[]) => {
      console.info(`Succeeded in getting event instances, data -> ${JSON.stringify(data)}`);
    }).catch((err: BusinessError) => {
      // 检查参数是否正确。
      console.error(`Failed to get event instances. Code: ${err.code}, message: ${err.message}`);
    });
  }
});


```

## setConfig

```TypeScript
setConfig(config: CalendarConfig): Promise<void>
```

Sets the calendar configuration information. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | CalendarConfig | 是 | Calendar configuration information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 23900001 |  |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const config: calendarManager.CalendarConfig = {
  enableReminder: true,
  color: '#aabbcc'
};
calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    calendar.setConfig(config).then(() => {
      console.info(`Succeeded in setting config, data->${JSON.stringify(config)}`);
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to set config. Code: ${err.code}, message: ${err.message}`);
    });
  }
});

```

## setConfig

```TypeScript
setConfig(config: CalendarConfig, callback: AsyncCallback<void>): void
```

Sets the calendar configuration information. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | CalendarConfig | 是 | Calendar configuration information. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 23900001 |  |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const config: calendarManager.CalendarConfig = {
  enableReminder: true,
  color: '#aabbcc'
};
calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    calendar.setConfig(config, (err: BusinessError) => {
      if (err) {
        // 检查权限是否已成功申请或者参数是否正确。
        console.error(`Failed to set config. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.info(`Succeeded in setting config, config -> ${JSON.stringify(config)}`);
      }
    });
  }
});

```

## updateEvent

```TypeScript
updateEvent(event: Event): Promise<void>
```

Updates an event. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Event | 是 | Event object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const date = new Date();
const oriEvent: calendarManager.Event = {
  title: 'update',
  type: calendarManager.EventType.NORMAL,
  description: 'updateEventTest',
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    await calendar.addEvent(oriEvent).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
      oriEvent.id = data;
      oriEvent.title = 'newUpdate';
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    calendar.updateEvent(oriEvent).then(() => {
      console.info(`Succeeded in updating event`);
    }).catch((err: BusinessError) => {
      // 参数是否正确。
      console.error(`Failed to update event. Code: ${err.code}, message: ${err.message}`);
    });
  }
});

```

## updateEvent

```TypeScript
updateEvent(event: Event, callback: AsyncCallback<void>): void
```

Updates an event. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Event | 是 | Event object. |
| callback | AsyncCallback&lt;void> | 是 | The callback of updateEvent. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

let calendar : calendarManager.Calendar | undefined = undefined;
const date = new Date();
const oriEvent: calendarManager.Event = {
  title: 'update',
  type: calendarManager.EventType.NORMAL,
  description: 'updateEventTest',
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.getCalendar(async (err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendar = data;
    await calendar.addEvent(oriEvent).then((data: number) => {
      console.info(`Succeeded in adding event, id -> ${data}`);
      oriEvent.id = data;
      oriEvent.title = 'newUpdate';
    }).catch((err: BusinessError) => {
      // 检查权限是否已成功申请或者参数是否正确。
      console.error(`Failed to add event. Code: ${err.code}, message: ${err.message}`);
    });
    calendar.updateEvent(oriEvent, (err: BusinessError) => {
      if (err) {
        // 检查参数是否正确。
        console.error(`Failed to update event. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.info('Succeeded in updating event');
      }
    });
  }
});

```

## id

```TypeScript
readonly id: number
```

Calendar account ID, which is the unique identifier of a calendar account and is the auto-increment primary key of the database. If the value is less than 0, the account creation fails; if the value is greater than 0, the account creation succeeds.

**类型：** number

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

