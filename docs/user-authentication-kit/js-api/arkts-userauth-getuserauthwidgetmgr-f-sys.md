# getUserAuthWidgetMgr

## getUserAuthWidgetMgr

```TypeScript
function getUserAuthWidgetMgr(version: int): UserAuthWidgetMgr
```

获取身份认证组件管理器对象。用于获取UserAuthWidgetMgr实例，通过该实例可将自定义身份认证控件注册到系统进行统一管理。 > **说明：** > > 每个UserAuthWidgetMgr实例可管理一个身份认证控件，若需要管理多个控件则需获取多个实例。

**Since:** 10

**Required permissions:** 

 ohos.permission.SUPPORT_USER_AUTH

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| version | int | Yes | 身份认证组件的版本号。用于指定组件的版本，目前支持版本1。组件版本决定了组件与框架之间的通信协议和功能支持范围。 |

**Return value:**

| Type | Description |
| --- | --- |
| UserAuthWidgetMgr | 身份认证组件管理器对象。可用于订阅和取消订阅来自用户认证框架的命令。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. Called by non-system application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12500002 | General operation error. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let userAuthWidgetMgrVersion = 1;
try {
  let userAuthWidgetMgr = userAuth.getUserAuthWidgetMgr(userAuthWidgetMgrVersion);
  console.info('get userAuthWidgetMgr instance successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`userAuth widgetMgr failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

