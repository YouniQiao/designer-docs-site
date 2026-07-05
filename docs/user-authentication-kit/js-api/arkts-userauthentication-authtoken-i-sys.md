# AuthToken (System API)

Represents the AuthToken data returned after a successful verification.

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userAccessCtrl } from '@ohos.userIAM.userAccessCtrl';
```

## authTrustLevel

```TypeScript
authTrustLevel: userAuth.AuthTrustLevel
```

Authentication trust level.

**Type:** userAuth.AuthTrustLevel

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## authType

```TypeScript
authType: userAuth.UserAuthType
```

Credential type for the identity authentication.

**Type:** userAuth.UserAuthType

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## challenge

```TypeScript
challenge: Uint8Array
```

Random challenge for the authentication.

**Type:** Uint8Array

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## credentialId

```TypeScript
credentialId?: bigint
```

Credential ID.

**Type:** bigint

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## enrolledId

```TypeScript
enrolledId?: bigint
```

Credential enrollment ID.

**Type:** bigint

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## secureUid

```TypeScript
secureUid?: bigint
```

Secure user ID.

**Type:** bigint

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## timeInterval

```TypeScript
timeInterval: bigint
```

Time elapsed since the issuance of the authentication token, in milliseconds.

**Type:** bigint

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## tokenType

```TypeScript
tokenType: AuthTokenType
```

Authentication token type.

**Type:** AuthTokenType

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## userId

```TypeScript
userId: number
```

User ID.

**Type:** number

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

