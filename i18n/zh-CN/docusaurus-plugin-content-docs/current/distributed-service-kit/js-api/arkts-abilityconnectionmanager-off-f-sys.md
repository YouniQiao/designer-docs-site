# off

## off('receiveImage')

```TypeScript
function off(type: 'receiveImage', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void
```

Unregisters receiveImage event.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'receiveImage' | 是 | Registration Type, 'receiveImage'. |
| sessionId | number | 是 | Ability connection Session id. |
| callback | Callback&lt;EventCallbackInfo> | 否 | Used to handle ('receiveImage') command. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';

let sessionId = 100;
abilityConnectionManager.off("receiveImage", sessionId);

```

## off('collaborateEvent')

```TypeScript
function off(type: 'collaborateEvent', sessionId: number,
        callback?: Callback<CollaborateEventInfo>): void
```

Unregisters collaborateEvent event.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'collaborateEvent' | 是 | Registration Type, 'collaborateEvent'. |
| sessionId | number | 是 | Ability connection Session id. |
| callback | Callback&lt;CollaborateEventInfo> | 否 | Called when an error event comes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';

let sessionId = 100;
abilityConnectionManager.off("collaborateEvent", sessionId);

```

