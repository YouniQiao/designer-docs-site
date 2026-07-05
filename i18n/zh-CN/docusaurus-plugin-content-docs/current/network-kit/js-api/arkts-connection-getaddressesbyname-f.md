# getAddressesByName

## getAddressesByName

```TypeScript
function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void
```

Resolves the host name to obtain all IP addresses based on the default data network.

**起始版本：** 8

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| host | string | 是 | Indicates the host name or the domain. |
| callback | AsyncCallback&lt;Array&lt;NetAddress>> | 是 | Returns the NetAddress list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getAddressesByName("xxxx", (error: BusinessError, data: connection.NetAddress[]) => {
  if (error) {
    console.error(`Failed to get addresses. Code:${error.code}, message:${error.message}`);
    return;
  }
  console.info("Succeeded to get data: " + JSON.stringify(data));
});

```

## getAddressesByName

```TypeScript
function getAddressesByName(host: string): Promise<Array<NetAddress>>
```

Resolves the host name to obtain all IP addresses based on the default data network.

**起始版本：** 8

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| host | string | 是 | Indicates the host name or the domain. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;NetAddress>> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

connection.getAddressesByName("xxxx").then((data: connection.NetAddress[]) => {
  console.info("Succeeded to get data: " + JSON.stringify(data));
});

```

