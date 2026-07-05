# queryReusableAuthResult

## queryReusableAuthResult

```TypeScript
function queryReusableAuthResult(authParam: AuthParam): Uint8Array
```

查询是否有可复用的身份认证结果。该接口用于在发起认证前查询是否存在满足复用条件的认证结果，若存在则直接返回可复用的AuthToken，无需用户再次进行认证交互。

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESS_USER_AUTH_INTERNAL

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authParam | AuthParam | Yes | 用户认证相关参数。包含挑战值（challenge）、认证类型列表（authType）、认证信任等级（authTrustLevel）以及认证结果复用配置（  reuseUnlockResult）。系统会根据这些参数判断是否存在满足条件的可复用认证结果。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 可复用的认证令牌（AuthToken）。若存在满足条件的可复用认证结果，返回AuthToken数据，最大长度为1024字节；若不存在，则抛出相应错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. Called by non-system application. |
| 12500002 | General operation error. |
| 12500008 | The parameter is out of range. |
| 12500017 | Failed to reuse authentication result. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { userAuth } from '@kit.UserAuthenticationKit';

try {
  const rand = cryptoFramework.createRandom();
  const len: number = 16;
  const randData: Uint8Array = rand?.generateRandomSync(len)?.data;
  const reuseUnlockResult: userAuth.ReuseUnlockResult = {
    reuseMode: userAuth.ReuseMode.AUTH_TYPE_RELEVANT,
    reuseDuration: userAuth.MAX_ALLOWABLE_REUSE_DURATION,
  }
  const authParam: userAuth.AuthParam = {
    challenge: randData,
    authType: [userAuth.UserAuthType.PIN],
    authTrustLevel: userAuth.AuthTrustLevel.ATL3,
    reuseUnlockResult: reuseUnlockResult,
  };
  let authToken = userAuth.queryReusableAuthResult(authParam);
  console.info('query reuse auth result successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`query reuse auth result failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

