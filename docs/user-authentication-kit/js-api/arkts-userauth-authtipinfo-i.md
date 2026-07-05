# AuthTipInfo

用户认证中间状态。该接口用于描述认证过程中产生的各种中间状态信息，包括状态对应的认证类型和具体的状态码。应用可通过[AuthTipCallback]userAuth.AuthTipCallback获取这些中间状态， 以便在认证过程中提供更精细的用户反馈和状态感知。

**Since:** 20

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## tipCode

```TypeScript
tipCode: UserAuthTipCode
```

中间状态值。表示具体的中间状态类型，如认证不通过、超时、冻结、界面加载/释放等。应用应根据tipCode为用户提供相应的反馈或执行相应的处理逻辑。

**Type:** UserAuthTipCode

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## tipType

```TypeScript
tipType: UserAuthType
```

中间状态对应的认证类型。表示产生当前中间状态的认证方式，如人脸认证(FACE)、指纹认证(FINGERPRINT)或PIN认证(PIN)。应用可根据认证类型为用户提供针对性的提示。

**Type:** UserAuthType

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

