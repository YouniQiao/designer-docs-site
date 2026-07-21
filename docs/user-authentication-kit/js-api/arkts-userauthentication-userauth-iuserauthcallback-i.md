# IUserAuthCallback

Provides callbacks to return the authentication result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [AuthEvent](arkts-userauthentication-userauth-authevent-i.md)

<!--Device-userAuth-interface IUserAuthCallback--><!--Device-userAuth-interface IUserAuthCallback-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## onAcquireInfo

```TypeScript
onAcquireInfo?: (module: number, acquire: number, extraInfo: any) => void
```

Called to acquire authentication tip information. This API is optional.

- **module**: ID of the module that sends the tip information.  
- **acquire**: Authentication tip information.  
- **extraInfo**: Reserved field.

**Type:** (module: number, acquire: number, extraInfo: any) =&gt; void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [callback](arkts-userauthentication-userauth-authevent-i.md#callback-1)

<!--Device-IUserAuthCallback-onAcquireInfo?: (module: number, acquire: number, extraInfo: any) => void--><!--Device-IUserAuthCallback-onAcquireInfo?: (module: number, acquire: number, extraInfo: any) => void-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## onResult

```TypeScript
onResult: (result: number, extraInfo: AuthResult) => void
```

Called to return the authentication result.

- **result**: Authentication result. For details, see [ResultCode](arkts-userauthentication-userauth-resultcode-e.md).  
- **extraInfo**: Extended information, which varies depending on the authentication result. If the authentication is successful, the user authentication token will be returned in **extraInfo**. If the authentication fails, the remaining number of authentication times will be returned in **extraInfo**. If the authentication executor is locked, the freeze time will be returned in **extraInfo**.

**Type:** (result: number, extraInfo: AuthResult) =&gt; void

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [callback](arkts-userauthentication-userauth-authevent-i.md#callback-1)

<!--Device-IUserAuthCallback-onResult: (result: number, extraInfo: AuthResult) => void--><!--Device-IUserAuthCallback-onResult: (result: number, extraInfo: AuthResult) => void-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

