# queryReusableAuthResult (System API)

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## queryReusableAuthResult

```TypeScript
function queryReusableAuthResult(authParam: AuthParam): Uint8Array
```

Queries whether there is any reusable identity authentication result.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_USER_AUTH_INTERNAL

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authParam | AuthParam | Yes | User authentication parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Reusable AuthToken, up to 1024 bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Called by non-system application. |
| [12500002](../errorcode-useriam.md#12500002-common-error-code-of-the-identity-authentication-system) | General operation error. |
| [12500008](../errorcode-useriam.md#12500008-parameter-verification-failed) | The parameter is out of range. |
| [12500017](../errorcode-useriam.md#12500017-authentication-result-reuse-failed) | Failed to reuse authentication result. |

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

