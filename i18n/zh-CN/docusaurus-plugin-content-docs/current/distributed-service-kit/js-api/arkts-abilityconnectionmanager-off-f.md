# off

## off('connect')

```TypeScript
function off(type: 'connect', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void
```

Disables listening for **connect** events.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connect' | 是 | Event type. This field has a fixed value of connect. |
| sessionId | number | 是 | ID of the collaboration session. |
| callback | Callback&lt;EventCallbackInfo> | 否 | Registered callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';

let sessionId = 100;
abilityConnectionManager.off("connect", sessionId);


```

## off('disconnect')

```TypeScript
function off(type: 'disconnect', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void
```

Disables listening for **disconnect** events.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'disconnect' | 是 | Event type. This field has a fixed value of disconnect. |
| sessionId | number | 是 | ID of the collaboration session. |
| callback | Callback&lt;EventCallbackInfo> | 否 | Registered callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.off("disconnect", sessionId);


```

## off('receiveMessage')

```TypeScript
function off(type: 'receiveMessage', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void
```

Disables listening for **receiveMessage** events.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'receiveMessage' | 是 | Event type. This field has a fixed value of receiveMessage. |
| sessionId | number | 是 | ID of the collaboration session. |
| callback | Callback&lt;EventCallbackInfo> | 否 | Registered callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.off("receiveMessage", sessionId);


```

## off('receiveData')

```TypeScript
function off(type: 'receiveData', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void
```

Disables listening for **receiveData** events.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'receiveData' | 是 | Event type. This field has a fixed value of receiveData. |
| sessionId | number | 是 | ID of the collaboration session. |
| callback | Callback&lt;EventCallbackInfo> | 否 | Registered callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.off("receiveData", sessionId);


```

