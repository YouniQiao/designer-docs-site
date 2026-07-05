# setPacFileUrl

## setPacFileUrl

```TypeScript
function setPacFileUrl(pacFileUrl: string): void
```

Set the URL {@link pacFileUrl} of the current PAC script. Proxy information can be obtained through parsing the script address. To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission.

**起始版本：** 20

**需要权限：** 

 ohos.permission.SET_PAC_URL

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pacFileUrl | string | 是 | Indicates the URL of the current PAC script. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacFileUrl = "http://example.com/proxy.pac";
connection.setPacFileUrl(pacFileUrl);

```

