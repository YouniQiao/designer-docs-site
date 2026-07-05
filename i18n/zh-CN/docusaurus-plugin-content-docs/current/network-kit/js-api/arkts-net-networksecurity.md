# @ohos.net.networkSecurity

Provides networkSecurity related APIs.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { networkSecurity } from '@kit.NetworkKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [certVerification](arkts-networksecurity-certverification-f.md#certVerification-1) | Certificate verification to the server. |
| [certVerificationSync](arkts-networksecurity-certverificationsync-f.md#certVerificationSync-1) | Certificate verification to the server. |
| [isCleartextPermitted](arkts-networksecurity-iscleartextpermitted-f.md#isCleartextPermitted-1) | Checks whether the Cleartext traffic is permitted. To invoke this method, you must have the {@code ohos.permission.INTERNET} permission. |
| [isCleartextPermittedByHostName](arkts-networksecurity-iscleartextpermittedbyhostname-f.md#isCleartextPermittedByHostName-1) | Checks whether the Cleartext traffic for a specified hostname is permitted. To invoke this method, you must have the {@code ohos.permission.INTERNET} permission. |
| [verifyCertChain](arkts-networksecurity-verifycertchain-f.md#verifyCertChain-1) | Verifies the server certificate chain and returns a sorted chain. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CertBlob](arkts-networksecurity-certblob-i.md) | Define the certificate content. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CertType](arkts-networksecurity-certtype-e.md) | Defines the certificate type. |

