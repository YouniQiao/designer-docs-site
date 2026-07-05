# connect

## connect

```TypeScript
function connect(sessionId: int): Promise<ConnectResult>
```

Sets up a UIAbility connection after a collaboration session is created and the session ID is obtained. This API uses a promise to return the result.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | int | 是 | ID of the collaboration session. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ConnectResult> | Promise used to return the  [connection result]abilityConnectionManager.ConnectResult. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.connect(sessionId).then((ConnectResult) => {
  if (!ConnectResult.isConnected) {
    hilog.info(0x0000, 'testTag', 'connect failed');
    return;
  }
}).catch(() => {
  hilog.error(0x0000, 'testTag', "connect failed");
})

```

