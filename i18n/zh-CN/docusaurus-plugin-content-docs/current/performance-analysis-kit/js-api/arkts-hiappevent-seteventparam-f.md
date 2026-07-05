# setEventParam

## setEventParam

```TypeScript
function setEventParam(params: Record<string, ParamType>, domain: string, name?: string): Promise<void>
```

Sets custom event parameters. This API uses a promise to return the result. During the same lifecycle, system events and application events can be associated through event domain and event name.System events only support crash, freeze and resource leak events.

**起始版本：** 12

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Record&lt;string, ParamType> | 是 | Custom parameter object. The parameter name and value are defined as  follows: - A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9),  letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and  end with a digit or letter. - The parameter value is of the [ParamType]hiAppEvent.ParamType and  contains a maximum of 1024 characters. - The number of parameters must be less than 64. |
| domain | string | 是 | Event domain. The event domain can be associated with application events and system  events (hiAppEvent.domain.OS). |
| name | string | 否 | Event name. The default value is an empty string, which indicates all event names in the  associated event domain. Event names can be used to associate application events and system events. System  events can only be associated with the following events: -  [Crash event](docroot://dfx/hiappevent-watcher-crash-events.md) (hiAppEvent.event.APP_CRASH) -  [Application freeze event](docroot://dfx/hiappevent-watcher-freeze-events.md) (hiAppEvent.event.APP_FREEZE)  - [Resource leak event](docroot://dfx/hiappevent-watcher-resourceleak-events.md) (  hiAppEvent.event.RESOURCE_OVERLIMIT). Note: Since API version 20, the  [resource leak event](docroot://dfx/hiappevent-watcher-resourceleak-events.md) is supported. |

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
| 11101004 | Invalid string length of the event parameter. |
| 11101005 | Invalid event parameter name. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |
| 11101007 | The number of parameter keys exceeds the limit. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let params: Record<string, hiAppEvent.ParamType> = {
  "int_data": 100,
  "str_data": "strValue",
};

// 给应用事件追加自定义参数
hiAppEvent.setEventParam(params, "test_domain", "test_event").then(() => {
  hilog.info(0x0000, 'hiAppEvent', `success to set event param`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'hiAppEvent', `code: ${err.code}, message: ${err.message}`);
});

```

