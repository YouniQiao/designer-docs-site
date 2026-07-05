# getAuthenticator

## getAuthenticator

```TypeScript
function getAuthenticator(): Authenticator
```

获取Authenticator对象，用于执行用户身份认证。

**Since:** 6

**Deprecated since:** 8

**Substitute:** userAuth.getAuthInstance

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Authenticator | 认证器对象。 |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let authenticator = userAuth.getAuthenticator();

```

