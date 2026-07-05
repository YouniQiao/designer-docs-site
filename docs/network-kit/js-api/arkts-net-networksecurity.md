# @ohos.net.networkSecurity

Provides networkSecurity related APIs.

**Since:** 11

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { networkSecurity } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [certVerification](arkts-networksecurity-certverification-f.md#certVerification-1) | Certificate verification to the server. |
| [certVerificationSync](arkts-networksecurity-certverificationsync-f.md#certVerificationSync-1) | Certificate verification to the server. |
| [isCleartextPermitted](arkts-networksecurity-iscleartextpermitted-f.md#isCleartextPermitted-1) | Checks whether the Cleartext traffic is permitted. To invoke this method, you must have the {@code ohos.permission.INTERNET} permission. |
| [isCleartextPermittedByHostName](arkts-networksecurity-iscleartextpermittedbyhostname-f.md#isCleartextPermittedByHostName-1) | Checks whether the Cleartext traffic for a specified hostname is permitted. To invoke this method, you must have the {@code ohos.permission.INTERNET} permission. |
| [verifyCertChain](arkts-networksecurity-verifycertchain-f.md#verifyCertChain-1) | Verifies the server certificate chain and returns a sorted chain. |

### Interfaces

| Name | Description |
| --- | --- |
| [CertBlob](arkts-networksecurity-certblob-i.md) | Define the certificate content. |

### Enums

| Name | Description |
| --- | --- |
| [CertType](arkts-networksecurity-certtype-e.md) | Defines the certificate type. |

