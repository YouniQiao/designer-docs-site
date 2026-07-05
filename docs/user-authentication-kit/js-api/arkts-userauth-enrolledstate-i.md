# EnrolledState

用户注册凭据的状态。该接口用于描述用户已注册的认证凭据（如人脸、指纹、伴随设备）的当前状态，包括凭据摘要和数量。应用可通过[getEnrolledState]userAuth.getEnrolledState接口查 询凭据状态，用于检测用户凭据是否发生变化（如新增或删除指纹/人脸/伴随设备），以便做出相应的业务处理。

**Since:** 12

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## credentialDigest

```TypeScript
credentialDigest: int
```

注册的凭据摘要，在凭据增加时随机生成。该值用于标识当前注册凭据的版本，当用户新增或删除凭据时该值会变化。应用可保存此值并在后续查询时对比，以判断凭据是否发生变化。 **注意**：当复用认证结果时，如果之前认证使用的凭据已被删除，返回的credentialDigest可能为0。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## credentialCount

```TypeScript
credentialCount: int
```

注册的凭据数量。表示当前用户已注册的该类型凭据数量，例如指纹数量或人脸数量。 **注意**：当复用认证结果时，如果之前认证使用的凭据已被删除，返回的credentialCount可能为0。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

