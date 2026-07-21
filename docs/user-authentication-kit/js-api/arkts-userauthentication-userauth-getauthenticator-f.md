# getAuthenticator

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

<a id="getauthenticator"></a>
## getAuthenticator

```TypeScript
function getAuthenticator(): Authenticator
```

Obtains an **Authenticator** instance for user authentication.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** [getAuthInstance](arkts-userauthentication-userauth-getauthinstance-f.md#getauthinstance-1)

<!--Device-userAuth-function getAuthenticator(): Authenticator--><!--Device-userAuth-function getAuthenticator(): Authenticator-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Authenticator](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-appaccount-authenticator-c.md) | **Authenticator** instance obtained. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let authenticator = userAuth.getAuthenticator();

```

