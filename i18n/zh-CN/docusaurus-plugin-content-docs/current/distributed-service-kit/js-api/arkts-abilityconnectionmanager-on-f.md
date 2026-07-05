# on

## on('connect')

```TypeScript
function on(type: 'connect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Enables listening for **connect** events. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connect' | 是 | Event type. This field has a fixed value of connect. This event is triggered when  [abilityConnectionManager.connect()]abilityConnectionManager.connect(sessionId: int) is called. |
| sessionId | number | 是 | ID of the collaboration session. |
| callback | Callback&lt;EventCallbackInfo> | 是 | Registered callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("connect", sessionId,(callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'session connect, sessionId is', callbackInfo.sessionId);
});


```

## on('disconnect')

```TypeScript
function on(type: 'disconnect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Enables listening for **disconnect** events.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'disconnect' | 是 | Event type. This field has a fixed value of disconnect. This event is triggered when  [abilityConnectionManager.disconnect()]abilityConnectionManager.disconnect(sessionId: int) is called. |
| sessionId | number | 是 | ID of the collaboration session. |
| callback | Callback&lt;EventCallbackInfo> | 是 | Registered callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("disconnect", sessionId,(callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'session disconnect, sessionId is', callbackInfo.sessionId);
});


```

## on('receiveMessage')

```TypeScript
function on(type: 'receiveMessage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Enables listening for **receiveMessage** events.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'receiveMessage' | 是 | Event type. This field has a fixed value of receiveMessage. This event is  triggered when  [abilityConnectionManager.sendMessage()]abilityConnectionManager.sendMessage(sessionId: int, msg: string) is  called. |
| sessionId | number | 是 | ID of the collaboration session. |
| callback | Callback&lt;EventCallbackInfo> | 是 | Registered callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("receiveMessage", sessionId,(callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'receiveMessage, sessionId is', callbackInfo.sessionId);
});


```

## on('receiveData')

```TypeScript
function on(type: 'receiveData', sessionId: number,
        callback: Callback<EventCallbackInfo>): void
```

Enables listening for **receiveData** events.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'receiveData' | 是 | Event type. This field has a fixed value of receiveData. This event is triggered  when  [abilityConnectionManager.sendData()]abilityConnectionManager.sendData(sessionId: int, data: ArrayBuffer) is  called. |
| sessionId | number | 是 | ID of the collaboration session. |
| callback | Callback&lt;EventCallbackInfo> | 是 | Registered callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.on("receiveData", sessionId,(callbackInfo) => {
  hilog.info(0x0000, 'testTag', 'receiveData, sessionId is', callbackInfo.sessionId);
});


```

