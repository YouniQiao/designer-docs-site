# getPacFileUrl

## getPacFileUrl

```TypeScript
function getPacFileUrl(): string
```

Obtain the URL {@link pacFileUrl} of the current PAC script.

**起始版本：** 20

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the URL of the current PAC script or empty string if there is no PAC script. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100002 | Failed to connect to the service. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacFileUrl = connection.getPacFileUrl();
console.info(pacFileUrl);

```

