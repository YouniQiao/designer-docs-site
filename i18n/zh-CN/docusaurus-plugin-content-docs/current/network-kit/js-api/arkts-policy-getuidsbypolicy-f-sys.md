# getUidsByPolicy

## getUidsByPolicy

```TypeScript
function getUidsByPolicy(policy: NetUidPolicy, callback: AsyncCallback<Array<number>>): void
```

Query the application UIDs of the specified policy.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| policy | NetUidPolicy | 是 | the policy of the current UID of application.For details, see {@link NetUidPolicy}. |
| callback | AsyncCallback&lt;Array&lt;number>> | 是 | the callback of getUidsByPolicy. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

policy.getUidsByPolicy(11111, (error: BusinessError, data: number[]) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```

## getUidsByPolicy

```TypeScript
function getUidsByPolicy(policy: NetUidPolicy): Promise<Array<number>>
```

Query the application UIDs of the specified policy.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| policy | NetUidPolicy | 是 | the policy of the current UID of application.For details, see {@link NetUidPolicy}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;number>> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

policy
  .getUidsByPolicy(11111)
  .then((data: object) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

