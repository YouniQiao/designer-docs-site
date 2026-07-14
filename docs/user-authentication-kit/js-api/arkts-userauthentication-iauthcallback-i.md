# IAuthCallback

Provides callbacks to return the authentication result. This API defines the authentication result callback method, which is used to obtain the authentication result after the authentication is complete. By implementing the **onResult** method, the application can obtain the authentication token when the authentication is successful, or obtain the error code and related information when the authentication fails.

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## onResult

```TypeScript
onResult(result: UserAuthResult): void
```

Called to return the authentication result. If the authentication is successful, you can obtain the token information through **UserAuthResult** for subsequent security operation verification. If the authentication fails, you can obtain the error code through the **result** field and take corresponding measures (for example, prompting the user to perform authentication again or guiding the user to register a credential).

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | UserAuthResult | Yes | Authentication result. It contains information such as the authenticationresult code, authentication token (when the authentication is successful), authentication type, andcredential status. The application needs to check the **result.result** field to determine whether theauthentication is successful.<br>- If the value of **result.result** is **SUCCESS(12500000)**, the authentication is successful. In thiscase, you can use **result.token** to perform the subsequent operations.<br>- If the value of **result.result** is another value, the authentication fails. In this case, you need tohandle the error based on the specific error code. |

