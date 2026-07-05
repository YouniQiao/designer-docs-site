# AuthToken

认证令牌数据。表示校验通过后返回解析的AuthToken数据结果，包含认证的详细信息，如挑战值、认证信任等级、认证类型、用户ID等。

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userAccessCtrl } from '@kit.UserAuthenticationKit';
```

## secureUid

```TypeScript
secureUid?: bigint
```

安全用户ID。系统内部用于标识用户的安全标识，仅在特定认证场景下返回。

**Type:** bigint

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## enrolledId

```TypeScript
enrolledId?: bigint
```

凭据注册ID。enrolledState中credentialDigest的原始值，反映了凭据的变更情况。

**Type:** bigint

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## authTrustLevel

```TypeScript
authTrustLevel: userAuth.AuthTrustLevel
```

认证信任等级。表示本次认证达到的安全强度等级，值为ATL1(10000)、ATL2(20000)、ATL3(30000)或ATL4(40000)。等级越高，表示活体检测能力越强、身份识别越精确。

**Type:** userAuth.AuthTrustLevel

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## credentialId

```TypeScript
credentialId?: bigint
```

凭据ID。表示本次认证匹配成功的凭据标识，用于关联具体的认证凭据。

**Type:** bigint

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## timeInterval

```TypeScript
timeInterval: bigint
```

AuthToken签发后经过的时间。自AuthToken签发至当前的时间间隔，单位为毫秒。

**Type:** bigint

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## challenge

```TypeScript
challenge: Uint8Array
```

认证随机挑战值。用于防重放攻击，认证时传入的挑战值会被包含在AuthToken中，业务可通过验证此字段确认认证结果的有效性。

**Type:** Uint8Array

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## tokenType

```TypeScript
tokenType: AuthTokenType
```

认证令牌类型。标识令牌的签发来源，如本地认证、复用认证或协同认证。

**Type:** AuthTokenType

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## authType

```TypeScript
authType: userAuth.UserAuthType
```

身份认证的凭据类型。表示本次认证使用的认证方式，如PIN(1)、FACE(2)、FINGERPRINT(4)等。

**Type:** userAuth.UserAuthType

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## userId

```TypeScript
userId: int
```

用户ID。表示完成认证的用户标识，为大于等于0的正整数。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

