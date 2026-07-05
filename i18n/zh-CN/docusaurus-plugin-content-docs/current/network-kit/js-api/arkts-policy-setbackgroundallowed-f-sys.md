# setBackgroundAllowed

## setBackgroundAllowed

```TypeScript
function setBackgroundAllowed(isAllowed: boolean, callback: AsyncCallback<void>): void
```

Control if applications can use data on background.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isAllowed | boolean | 是 | Allow applications to use data on background. |
| callback | AsyncCallback&lt;void> | 是 | the callback of setBackgroundAllowed. |

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

policy.setBackgroundAllowed(true, (error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```

## setBackgroundAllowed

```TypeScript
function setBackgroundAllowed(isAllowed: boolean): Promise<void>
```

Control if applications can use data on background.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isAllowed | boolean | 是 | Allow applications to use data on background. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

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

policy.setBackgroundAllowed(true).then(() => {
  console.info("setBackgroundAllowed success");
}).catch((error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```

