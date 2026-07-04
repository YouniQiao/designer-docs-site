# getAuthenticator

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## getAuthenticator

```TypeScript
function getAuthenticator(): Authenticator
```

Obtains an **Authenticator** instance for user authentication.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** [getAuthInstance](arkts-userauthentication-getauthinstance-f.md#getauthinstance-1)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Authenticator | **Authenticator** instance obtained. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let authenticator = userAuth.getAuthenticator();

```

