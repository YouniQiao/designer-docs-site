# setPacUrl

## setPacUrl

```TypeScript
function setPacUrl(pacUrl: string): void
```

Set the URL {@link pacUrl} of the current PAC script. To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission.

**起始版本：** 15

**需要权限：** 

 ohos.permission.SET_PAC_URL

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pacUrl | string | 是 | Indicates the URL of the current PAC script. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacUrl = "xxx";
connection.setPacUrl(pacUrl);

```

