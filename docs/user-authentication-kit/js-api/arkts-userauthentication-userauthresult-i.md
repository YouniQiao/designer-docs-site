# UserAuthResult

Represents the user authentication result. If the authentication is successful, the authentication type and token information are returned.

**Since:** 10

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## authType

```TypeScript
authType?: UserAuthType
```

Authentication type.

**Type:** UserAuthType

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## enrolledState

```TypeScript
enrolledState?: EnrolledState
```

Credential state.

**Type:** EnrolledState

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## result

```TypeScript
result: number
```

User authentication result. If the authentication is successful, **SUCCESS** is returned. Otherwise, an error code is returned. For details, see [UserAuthResultCode](arkts-userauthentication-userauthresultcode-e.md#userauthresultcode).

**Type:** number

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## token

```TypeScript
token?: Uint8Array
```

Authentication token information. The value can contain a maximum of 1024 bytes.

**Type:** Uint8Array

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

