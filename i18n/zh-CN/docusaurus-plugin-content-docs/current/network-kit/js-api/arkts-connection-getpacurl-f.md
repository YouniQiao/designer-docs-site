# getPacUrl

## getPacUrl

```TypeScript
function getPacUrl(): string
```

Obtain the URL {@link pacUrl} of the current PAC script.

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the URL of the current PAC script or empty string if there is no PAC script. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacUrl = connection.getPacUrl();

```

