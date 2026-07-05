# getAuthLockState

## getAuthLockState

```TypeScript
function getAuthLockState(authType: UserAuthType): Promise<AuthLockState>
```

查询指定认证类型的冻结状态，使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.ACCESS_BIOMETRIC

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authType | UserAuthType | Yes | 认证类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AuthLockState> | Promise对象，当查询成功时，返回值为指定认证类型的身份认证冻结状态。失败时报错。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12500002 | General operation error. |
| 12500005 | The authentication type is not supported. |
| 12500008 | The parameter is out of range. |
| 12500010 | The type of credential has not been enrolled. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let queryType = userAuth.UserAuthType.PIN;
let authLockState : userAuth.AuthLockState = {
  isLocked : false,
  remainingAuthAttempts : 0,
  lockoutDuration : 0
}

userAuth.getAuthLockState(queryType)
  .then((result: userAuth.AuthLockState) => {
    authLockState = result;
    console.info('get auth lock state successfully.');
  })
  .catch((err: BusinessError) => {
    console.info(`get auth lock state failed, err code is : ${err?.code}, err message is : ${err?.message}`);
  })

```

