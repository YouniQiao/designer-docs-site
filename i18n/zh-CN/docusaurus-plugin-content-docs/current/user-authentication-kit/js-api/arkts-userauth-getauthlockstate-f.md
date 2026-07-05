# getAuthLockState

## getAuthLockState

```TypeScript
function getAuthLockState(authType: UserAuthType): Promise<AuthLockState>
```

查询指定认证类型的冻结状态，使用Promise异步回调。

**起始版本：** 22

**需要权限：** 

 ohos.permission.ACCESS_BIOMETRIC

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| authType | UserAuthType | 是 | 认证类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AuthLockState> | Promise对象，当查询成功时，返回值为指定认证类型的身份认证冻结状态。失败时报错。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 12500002 | General operation error. |
| 12500005 | The authentication type is not supported. |
| 12500008 | The parameter is out of range. |
| 12500010 | The type of credential has not been enrolled. |

**示例：**

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

