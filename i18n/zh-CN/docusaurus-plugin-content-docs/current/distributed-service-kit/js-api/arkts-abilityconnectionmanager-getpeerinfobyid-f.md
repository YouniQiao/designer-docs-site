# getPeerInfoById

## getPeerInfoById

```TypeScript
function getPeerInfoById(sessionId: int): PeerInfo | undefined
```

Obtains information about the peer application in the specified session.

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
| PeerInfo | Information about the peer application if the corresponding peerInfo exists;  undefined if the session ID is not found. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

hilog.info(0x0000, 'testTag', 'getPeerInfoById called');
let sessionId = 100;
const peerInfo = abilityConnectionManager.getPeerInfoById(sessionId);

```

