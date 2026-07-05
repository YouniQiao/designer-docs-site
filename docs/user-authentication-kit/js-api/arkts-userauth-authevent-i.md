# AuthEvent

认证接口的异步回调对象。

**Since:** 9

**Deprecated since:** 11

**Substitute:** userAuth.IAuthCallback

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## callback

```TypeScript
callback(result: EventInfo): void
```

通过该回调获取认证结果信息或认证过程中的提示信息。

**Since:** 9

**Deprecated since:** 11

**Substitute:** userAuth.IAuthCallback.onResult(result:

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | EventInfo | Yes | 返回的认证结果信息或提示信息。 |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let challenge = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
let authType = userAuth.UserAuthType.FACE;
let authTrustLevel = userAuth.AuthTrustLevel.ATL1;
// Obtain the authentication result via a callback.
try {
  let auth = userAuth.getAuthInstance(challenge, authType, authTrustLevel);
  auth.on('result', {
    callback: (result: userAuth.AuthResultInfo) => {
      console.info(`result: ${result.result}`);
    }
  } as userAuth.AuthEvent);
  auth.start();
  console.info('auth start successfully.');
} catch (error) {
  console.error(`auth failed, error = ${error}`);
  // do error.
}
// Obtain the authentication tip information via a callback.
try {
  let auth = userAuth.getAuthInstance(challenge, authType, authTrustLevel);
  auth.on('tip', {
    callback : (result : userAuth.TipInfo) => {
      switch (result.tip) {
        case userAuth.FaceTips.FACE_AUTH_TIP_TOO_BRIGHT:
          // Do something.
          break;
        case userAuth.FaceTips.FACE_AUTH_TIP_TOO_DARK:
          // Do something.
          break;
        default:
          // do others.
      }
    }
  } as userAuth.AuthEvent);
  auth.start();
  console.info('auth start successfully.');
} catch (error) {
  console.error(`auth failed, error = ${error}`);
  // do error.
}

```

