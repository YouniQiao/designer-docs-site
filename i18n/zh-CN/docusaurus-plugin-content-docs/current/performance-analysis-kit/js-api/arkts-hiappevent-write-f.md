# write

## write

```TypeScript
function write(info: AppEventInfo): Promise<void>
```

Writes events of the **AppEventInfo** type. This API uses a promise to return the result. The event object written by calling this API is a custom object. To avoid conflicts with system events, you are not advised to write it to system events (system event name constants defined in [Event]hiAppEvent.event). The events written by this API can be subscribed to through ([addWatcher]hiAppEvent.addWatcher).

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | AppEventInfo | 是 | Application event object. You are advised to avoid the conflict between the custom  event name and the system event name constant defined in [Event]hiAppEvent.event. [since 11] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 11100001 | Function disabled. Possibly caused by the param disable in ConfigOption is  true. |
| 11101001 | Invalid event domain. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |
| 11101002 | Invalid event name. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |
| 11101003 | Invalid number of event parameters. Possibly caused by the number of  parameters  is over 32. |
| 11101004 | Invalid string length of the event parameter. |
| 11101005 | Invalid event parameter name. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |
| 11101006 | Invalid array length of the event parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let eventParams: Record<string, number | string> = {
  "int_data": 100,
  "str_data": "strValue",
};

// 应用事件打点，使用Promise方式作为异步回调
hiAppEvent.write({
  domain: "test_domain",
  name: "test_event",
  eventType: hiAppEvent.EventType.FAULT,
  params: eventParams,
}).then(() => {
  hilog.info(0x0000, 'hiAppEvent', `success to write event`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'hiAppEvent', `code: ${err.code}, message: ${err.message}`);
});

```

## write

```TypeScript
function write(info: AppEventInfo, callback: AsyncCallback<void>): void
```

Writes events of the **AppEventInfo** type. This API uses an asynchronous callback to return the result. The event object written by calling this API is a custom object. To avoid conflicts with system events, you are not advised to write it to system events (system event name constants defined in [Event]hiAppEvent.event). The events written by this API can be subscribed to through ([addWatcher]hiAppEvent.addWatcher).

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | AppEventInfo | 是 | Application event object. You are advised to avoid the conflict between the custom  event name and the system event name constant defined in [Event]hiAppEvent.event. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 11100001 | Function disabled. Possibly caused by the param disable in ConfigOption is  true. |
| 11101001 | Invalid event domain. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |
| 11101002 | Invalid event name. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |
| 11101003 | Invalid number of event parameters. Possibly caused by the number of  parameters  is over 32. |
| 11101004 | Invalid string length of the event parameter. |
| 11101005 | Invalid event parameter name. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |
| 11101006 | Invalid array length of the event parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let eventParams: Record<string, number | string> = {
  "int_data": 100,
  "str_data": "strValue",
};

// 应用事件打点，使用callback方式作为异步回调
hiAppEvent.write({
  domain: "test_domain",
  name: "test_event",
  eventType: hiAppEvent.EventType.FAULT,
  params: eventParams,
}, (err: BusinessError) => {
  if (err) {
    hilog.error(0x0000, 'hiAppEvent', `code: ${err.code}, message: ${err.message}`);
    return;
  }
  hilog.info(0x0000, 'hiAppEvent', `success to write event`);
});

```

