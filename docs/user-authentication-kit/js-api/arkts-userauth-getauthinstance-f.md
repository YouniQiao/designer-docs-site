# getAuthInstance

## getAuthInstance

```TypeScript
function getAuthInstance(challenge: Uint8Array, authType: UserAuthType, authTrustLevel: AuthTrustLevel): AuthInstance
```

获取AuthInstance对象，用于执行用户身份认证。 > **说明：** > > 每个AuthInstance只能进行一次认证，若需要再次进行认证则需重新获取AuthInstance。

**Since:** 9

**Deprecated since:** 10

**Substitute:** userAuth.getUserAuthInstance

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| challenge | Uint8Array | Yes | 挑战值，最大长度为32字节，可以传Uint8Array([])。 |
| authType | UserAuthType | Yes | 认证类型，当前支持FACE和FINGERPRINT。 |
| authTrustLevel | AuthTrustLevel | Yes | 认证信任等级。 |

**Return value:**

| Type | Description |
| --- | --- |
| AuthInstance | 认证器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. |
| 12500002 | General operation error. |
| 12500005 | The authentication type is not supported. |
| 12500006 | The authentication trust level is not supported. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let challenge = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
let authType = userAuth.UserAuthType.FACE;
let authTrustLevel = userAuth.AuthTrustLevel.ATL1;

try {
  let auth = userAuth.getAuthInstance(challenge, authType, authTrustLevel);
  console.info('get auth instance successfully.');
} catch (error) {
  console.error(`get auth instance failed, error = ${error}`);
}

```

