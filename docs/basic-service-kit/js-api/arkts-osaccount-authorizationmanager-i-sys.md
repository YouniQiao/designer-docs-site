# AuthorizationManager

系统账号授权管理类，用于管理系统账号授权。

**Since:** 24

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## acquireAuthorization

```TypeScript
acquireAuthorization(privilege: string, options?: AcquireAuthorizationOptions): Promise<AcquireAuthorizationResult>
```

为当前进程获取授权。

**Since:** 24

**Required permissions:** 

 ohos.permission.ACQUIRE_LOCAL_ACCOUNT_AUTHORIZATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| privilege | string | Yes | 目标权限，详见  [配置文件](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json)  。 |
| options | AcquireAuthorizationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AcquireAuthorizationResult> | Promise对象，返回获取授权的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid privilege or options. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let authorizationManager: osAccount.AuthorizationManager = osAccount.getAuthorizationManager();
let privilege: string = 'testPrivilege';
let options: osAccount.AcquireAuthorizationOptions = {
  challenge: new Uint8Array([1, 2, 3]),
  isReuseNeeded: true,
  isInteractionAllowed: true,
};
try {
  authorizationManager.acquireAuthorization(privilege, options).then((result: osAccount.AcquireAuthorizationResult) => {
    console.info(`acquireAuthorization successfully, resultCode: ${result.resultCode}`);
  }).catch((err: BusinessError) => {
    console.error(`acquireAuthorization failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`acquireAuthorization exception: code is ${err.code}, message is ${err.message}`);
}

```

## hasAuthorization

```TypeScript
hasAuthorization(privilege: string): Promise<boolean>
```

检查当前进程是否已获得指定特权的授权。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| privilege | string | Yes | 目标权限，详见  [配置文件](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json)  。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回true表示已获得指定特权的授权；返回false表示未获得指定特权的授权。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid privilege. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let authorizationManager: osAccount.AuthorizationManager = osAccount.getAuthorizationManager();
let privilege: string = 'testPrivilege';

try {
  authorizationManager.hasAuthorization(privilege).then((isAuthorized: boolean) => {
    console.info(`Privilege: ${privilege} has been authorized: ${isAuthorized}`);
  }).catch((e:Error) => {
    const err = e as BusinessError;
    console.error(`hasAuthorization failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`hasAuthorization exception: code is ${err.code}, message is ${err.message}`);
}

```

## releaseAuthorization

```TypeScript
releaseAuthorization(privilege: string): Promise<void>
```

为当前进程撤销指定特权的授权。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| privilege | string | Yes | 目标权限，详见  [配置文件](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json)  。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid privilege. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let authorizationManager: osAccount.AuthorizationManager = osAccount.getAuthorizationManager();
let privilege: string = 'testPrivilege';

try {
  authorizationManager.releaseAuthorization(privilege).then(() => {
    console.info('releaseAuthorization success');
  }).catch((e:Error) => {
    const err = e as BusinessError;
    console.error(`releaseAuthorization failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`releaseAuthorization exception: code is ${err.code}, message is ${err.message}`);
}

```

