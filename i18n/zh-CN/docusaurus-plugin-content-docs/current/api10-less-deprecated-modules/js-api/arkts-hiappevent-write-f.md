# write

## write

```TypeScript
function write(eventName: string, eventType: EventType, keyValues: object): Promise<void>
```

Writes event information to the event file of the current day. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.hiviewdfx.hiAppEvent/hiAppEvent#write

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventName | string | 是 | Application event name. |
| eventType | EventType | 是 | Application event type. |
| keyValues | object | 是 | Application event key-value pair params. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to asynchronously process the callback in the then() and catch()  methods when event writing succeeded or failed. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
import { hilog } from '@kit.PerformanceAnalysisKit';

let eventParams: Record<string, number | string> = {
  "int_data": 100,
  "str_data": "strValue",
};
hiAppEvent.write("test_event", hiAppEvent.EventType.FAULT, eventParams).then(() => {
  // 事件写入正常
  hilog.info(0x0000, 'hiAppEvent', `success to write event`);
}).catch((err: BusinessError) => {
  // 事件写入异常：事件存在异常参数时忽略异常参数后继续写入，或者事件校验失败时不执行写入
  hilog.error(0x0000, 'hiAppEvent', `code: ${err.code}, message: ${err.message}`);
});

```

## write

```TypeScript
function write(eventName: string, eventType: EventType, keyValues: object, callback: AsyncCallback<void>): void
```

Writes event information to the event file of the current day. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.hiviewdfx.hiAppEvent/hiAppEvent#write

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventName | string | 是 | Application event name. |
| eventType | EventType | 是 | Application event type. |
| keyValues | object | 是 | Application event key-value pair params. |
| callback | AsyncCallback&lt;void> | 是 |  |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
import { hilog } from '@kit.PerformanceAnalysisKit';

let eventParams: Record<string, number | string> = {
  "int_data": 100,
  "str_data": "strValue",
};
hiAppEvent.write("test_event", hiAppEvent.EventType.FAULT, eventParams, (err: BusinessError) => {
  if (err) {
    // 事件写入异常：事件存在异常参数时忽略异常参数后继续写入，或者事件校验失败时不执行写入
    hilog.error(0x0000, 'hiAppEvent', `failed to write event, code: ${err.code}, message: ${err.message}`);
    return;
  }
  // 事件写入正常
  hilog.info(0x0000, 'hiAppEvent', `success to write event`);
});

```

