# @ohos.userIAM.userAccessCtrl

userAccessCtrl**模块是OpenHarmony用户身份认证体系（UserIAM）的核心组件，专门用于认证令牌的验证和管理。该模块提供了验证认证令牌（AuthToken）的API，能够解析和验证用户身份认证结果，并返回 详细的认证信息。 该模块主要用于以下场景： - 系统级应用需要验证用户身份认证令牌的有效性。 - 需要获取认证令牌的详细信息（如认证类型、信任级别、用户ID等）。 - 需要基于认证结果进行访问控制决策的场景。

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAccessCtrl } from '@kit.UserAuthenticationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[verifyAuthToken](arkts-useraccessctrl-verifyauthtoken-f-sys.md#verifyAuthToken-1) | 验证认证令牌。该接口用于校验AuthToken的有效性，包括完整性校验和时效性校验，校验通过后返回解析后的AuthToken详细信息。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[AuthToken](arkts-useraccessctrl-authtoken-i-sys.md) | 认证令牌数据。表示校验通过后返回解析的AuthToken数据结果，包含认证的详细信息，如挑战值、认证信任等级、认证类型、用户ID等。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[AuthTokenType](arkts-useraccessctrl-authtokentype-e-sys.md) | 认证令牌类型枚举。该枚举定义了认证令牌的类型，用于标识令牌的签发来源。 |

