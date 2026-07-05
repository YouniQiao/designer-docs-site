# CalendarManager

Before calling any of the following APIs to manage the calendar, you must use [getCalendarManager()]calendarManager.getCalendarManager to obtain a **CalendarManager** object first.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 导入模块

```TypeScript
import { calendarManager } from '@kit.CalendarKit';
```

## createCalendar

```TypeScript
createCalendar(calendarAccount: CalendarAccount): Promise<Calendar>
```

Creates a Calendar object based on the calendar account information. This API uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| calendarAccount | CalendarAccount | 是 | Calendar account information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Calendar> | Promise used to return the created Calendar object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

const calendarAccount: calendarManager.CalendarAccount = {
  name: 'CreateMyCalendarByPromise',
  type: calendarManager.CalendarType.LOCAL,
  displayName : 'MyApplication'
};
calendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {
  console.info(`Succeeded in creating calendar data->${JSON.stringify(data)}`);
}).catch((error : BusinessError) => {
  // 检查权限是否已成功申请或者参数是否正确。
  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);
});

```

## createCalendar

```TypeScript
createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void
```

Creates a Calendar object based on the calendar account information. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| calendarAccount | CalendarAccount | 是 | Calendar account information. |
| callback | AsyncCallback&lt;Calendar> | 是 | Callback used to return the created Calendar object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

const calendarAccount: calendarManager.CalendarAccount = {
  name: 'CreateMyCalendarByCallBack',
  type: calendarManager.CalendarType.LOCAL
};
try {
  calendarMgr?.createCalendar(calendarAccount, (err: BusinessError, data: calendarManager.Calendar) => {
    if (err) {
      console.error(`Failed to create calendar. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info(`Succeeded in creating calendar, data -> ${JSON.stringify(data)}`);
    }
  });
} catch (error) {
  // 检查权限是否已成功申请或者参数是否正确。
  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);
}

```

## deleteCalendar

```TypeScript
deleteCalendar(calendar: Calendar): Promise<void>
```

Deletes a specified Calendar object. This API uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| calendar | Calendar | 是 | Calendar object to delete. The default account cannot be deleted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

const calendarAccount: calendarManager.CalendarAccount = {
  name: 'DeleteMyCalendarByPromise',
  type: calendarManager.CalendarType.LOCAL
};
calendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {
  console.info(`Succeeded in creating calendar, data -> ${JSON.stringify(data)}`);
  calendarMgr?.getCalendar(calendarAccount).then((data: calendarManager.Calendar) => {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
    calendarMgr?.deleteCalendar(data).then(() => {
      console.info('Succeeded in deleting calendar');
    }).catch((err: BusinessError) => {
      // 检查参数是否正确。
      console.error(`Failed to delete calendar. Code: ${err.code}, message: ${err.message}`);
    });
  }).catch((err: BusinessError) => {
    // 检查权限是否已成功申请或者参数是否正确。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((error: BusinessError) => {
  // 检查权限是否已成功申请或者参数是否正确。
  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);
})

```

## deleteCalendar

```TypeScript
deleteCalendar(calendar: Calendar, callback: AsyncCallback<void>): void
```

Deletes a specified Calendar object. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| calendar | Calendar | 是 | Calendar object to delete. The default account cannot be deleted. |
| callback | AsyncCallback&lt;void> | 是 | Asynchronous callback that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

const calendarAccount: calendarManager.CalendarAccount = {
  name: 'DeleteMyCalendarByCallBack',
  type: calendarManager.CalendarType.LOCAL
};
calendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {
  console.info(`Succeeded in creating calendar, data -> ${JSON.stringify(data)}`);
  calendarMgr?.getCalendar(calendarAccount, (err: BusinessError, data: calendarManager.Calendar) => {
    if (err) {
      console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
      calendarMgr?.deleteCalendar(data, (err1: BusinessError) => {
        if (err1) {
          // 检查参数是否正确。
          console.error(`Failed to delete calendar. Code: ${err1.code}, message: ${err1.message}`);
        } else {
          console.info('Succeeded in deleting calendar');
        }
      });
    }
  });
}).catch((error: BusinessError) => {
  // 检查权限是否已成功申请或者参数是否正确。
  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);
})

```

## editEvent

```TypeScript
editEvent(event: Event): Promise<number>
```

Edits an event on the event creation page, with no event ID specified in **Event**. The **instanceStartTime**, **instanceEndTime**, **identifier**, **attendee**, **service**, **isLunar**, and **timeZone** attributes cannot be set. Important events cannot be added either. This API uses a promise to return the result. Events created using this API can be obtained and modified by the system calendar. Third-party applications can obtain and modify the events after they requested the **READ_WHOLE_CALENDAR** permission and the **WRITE_WHOLE_CALENDAR** permission, respectively.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Event | 是 | Event object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the event ID. The event ID is the unique identifier of an  event and is the auto-increment primary key of the database. If the event creation fails, no value is  returned; if the value is less than 0, the event creation is canceled; if the value is greater than 0  , the event creation is successful. The return value cannot be 0 |

**示例：**

```TypeScript
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

const date = new Date();
const event: calendarManager.Event = {
  title: 'title',
  type: calendarManager.EventType.NORMAL,
  startTime: date.getTime(),
  endTime: date.getTime() + 60 * 60 * 1000
};
calendarMgr?.editEvent(event).then((eventId: number): void => {
  console.info(`create Event id = ${eventId}`);
});

```

## getAllCalendars

```TypeScript
getAllCalendars(): Promise<Calendar[]>
```

Obtains the created and default Calendar objects of the current application. This API uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Calendar[]> | Promise used to return an array of obtained Calendar objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

calendarMgr?.getAllCalendars().then((data: calendarManager.Calendar[]) => {
  console.info(`Succeeded in getting all calendars, data -> ${JSON.stringify(data)}`);
  data.forEach((calendar) => {
    const account = calendar.getAccount();
    console.info(`account -> ${JSON.stringify(account)}`);
  })
}).catch((err: BusinessError) => {
  // 检查权限是否已成功申请。
  console.error(`Failed to get all calendars. Code: ${err.code}, message: ${err.message}`);
  
});

```

## getAllCalendars

```TypeScript
getAllCalendars(callback: AsyncCallback<Calendar[]>): void
```

Obtains the created and default Calendar objects of the current application. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Calendar[]> | 是 | Callback used to return an array of the obtained Calendar objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

calendarMgr?.getAllCalendars((err: BusinessError, data: calendarManager.Calendar[]) => {
  if (err) {
    console.error(`Failed to get all calendars. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting all calendars, data -> ${JSON.stringify(data)}`);
    data.forEach((calendar) => {
      const account = calendar.getAccount();
      console.info(`account -> ${JSON.stringify(account)}`);
    })
  }
});

```

## getCalendar

```TypeScript
getCalendar(calendarAccount?: CalendarAccount): Promise<Calendar>
```

Obtains the default or specified Calendar object. This API uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| calendarAccount | CalendarAccount | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Calendar> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900003 | The specified account was not found. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

calendarMgr?.getCalendar().then((data: calendarManager.Calendar) => {
  console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  // 检查权限是否已成功申请。
  console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
});

```

## getCalendar

```TypeScript
getCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void
```

Obtains a specified Calendar object. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| calendarAccount | CalendarAccount | 是 | Calendar account information. |
| callback | AsyncCallback&lt;Calendar> | 是 | Callback used to return the obtained Calendar object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900003 | The specified account was not found. [since 23] |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

const calendarAccount: calendarManager.CalendarAccount = {
  name: 'MyCalendar',
  type: calendarManager.CalendarType.LOCAL
};
calendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {
  console.info(`Succeeded in creating calendar, data -> ${JSON.stringify(data)}`);
  calendarMgr?.getCalendar(calendarAccount, (err: BusinessError, data: calendarManager.Calendar) => {
    if (err) {
      console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
      // 检查权限是否已成功申请或者参数是否正确。
    } else {
      console.info(`Succeeded in getting calendar data -> ${JSON.stringify(data)}`);
    }
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to create calendar. Code: ${error.code}, message: ${error.message}`);
  // 检查权限是否已成功申请或者参数是否正确。
})

```

## getCalendar

```TypeScript
getCalendar(callback: AsyncCallback<Calendar>): void
```

Obtains the default Calendar object, which is created when the data storage runs for the first time. This API uses an asynchronous callback to return the result. You can call this API instead of createCalendar() to use the default calendar for a new event.

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Calendar> | 是 | Callback used to return the obtained Calendar object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 23900004 | Internal program errors. Possible causes:  1. dataShare database execution error;  2. null pointer error;  3. Data parsing error. [since 23] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// EntryAbility文件须按照calendarManager.getCalendarManager处示例代码进行配置
import { calendarMgr } from '../entryability/EntryAbility';
import { calendarManager } from '@kit.CalendarKit';

calendarMgr?.getCalendar((err: BusinessError, data:calendarManager.Calendar) => {
  if (err) {
    // 检查权限是否已成功申请或者参数是否正确。
    console.error(`Failed to get calendar. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in getting calendar, data -> ${JSON.stringify(data)}`);
  }
});

```

