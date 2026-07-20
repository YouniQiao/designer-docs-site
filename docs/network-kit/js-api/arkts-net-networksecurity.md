# @ohos.net.networkSecurity

Provides networkSecurity related APIs.

**Since:** 11

<!--Device-unnamed-declare namespace networkSecurity--><!--Device-unnamed-declare namespace networkSecurity-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { networkSecurity } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [certVerification](arkts-network-networksecurity-certverification-f.md#certverification-1) | Certificate verification to the server. |
| [certVerificationSync](arkts-network-networksecurity-certverificationsync-f.md#certverificationsync-1) | Certificate verification to the server. |
| [isCleartextPermitted](arkts-network-networksecurity-iscleartextpermitted-f.md#iscleartextpermitted-1) | Checks whether the Cleartext traffic is permitted.To invoke this method, you must have the {@code ohos.permission.INTERNET} permission. |
| [isCleartextPermittedByHostName](arkts-network-networksecurity-iscleartextpermittedbyhostname-f.md#iscleartextpermittedbyhostname-1) | Checks whether the Cleartext traffic for a specified hostname is permitted.To invoke this method, you must have the {@code ohos.permission.INTERNET} permission. |
| [verifyCertChain](arkts-network-networksecurity-verifycertchain-f.md#verifycertchain-1) | Verifies the server certificate chain and returns a sorted chain. |

### Interfaces

| Name | Description |
| --- | --- |
| [CertBlob](arkts-network-networksecurity-certblob-i.md) | Define the certificate content. |

### Enums

| Name | Description |
| --- | --- |
| [CertType](arkts-network-networksecurity-certtype-e.md) | Defines the certificate type. |

