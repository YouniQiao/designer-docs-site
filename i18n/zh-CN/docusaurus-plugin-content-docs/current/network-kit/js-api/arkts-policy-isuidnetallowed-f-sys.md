# isUidNetAllowed

## isUidNetAllowed

```TypeScript
function isUidNetAllowed(uid: number, isMetered: boolean, callback: AsyncCallback<boolean>): void
```

Get the status whether the uid app can access the metered network or non-metered network.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | number | 是 | The specified UID of application. |
| isMetered | boolean | 是 | Indicates metered network or non-metered network. |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of isUidNetAllowed. |

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

policy.isUidNetAllowed(11111, true, (error: BusinessError, data: boolean) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```

## isUidNetAllowed

```TypeScript
function isUidNetAllowed(uid: number, isMetered: boolean): Promise<boolean>
```

Get the status whether the uid app can access the metered network or non-metered network.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | number | 是 | The specified UID of application. |
| isMetered | boolean | 是 | Indicates metered network or non-metered network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

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
  .isUidNetAllowed(11111, true)
  .then((data: boolean) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

## isUidNetAllowed

```TypeScript
function isUidNetAllowed(uid: number, iface: string, callback: AsyncCallback<boolean>): void
```

Get the status of whether the specified uid can access the specified network.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | number | 是 | The specified UID of application. |
| iface | string | 是 | The specified network interface name. |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of isUidNetAllowed. |

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

policy.isUidNetAllowed(11111, 'wlan0', (error: BusinessError, data: boolean) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```

## isUidNetAllowed

```TypeScript
function isUidNetAllowed(uid: number, iface: string): Promise<boolean>
```

Get the status of whether the specified uid can access the specified network.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | number | 是 | The specified UID of application. |
| iface | string | 是 | The specified network interface name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

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
  .isUidNetAllowed(11111, 'wlan0')
  .then((data: boolean) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

