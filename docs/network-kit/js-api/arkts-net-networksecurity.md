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
| [certVerification](arkts-network-certverification-f.md#certverification-1) | Certificate verification to the server. |
| [certVerificationSync](arkts-network-certverificationsync-f.md#certverificationsync-1) | Certificate verification to the server. |
| [isCleartextPermitted](arkts-network-iscleartextpermitted-f.md#iscleartextpermitted-1) | Checks whether the Cleartext traffic is permitted.To invoke this method, you must have the {@code ohos.permission.INTERNET} permission. |
| [isCleartextPermittedByHostName](arkts-network-iscleartextpermittedbyhostname-f.md#iscleartextpermittedbyhostname-1) | Checks whether the Cleartext traffic for a specified hostname is permitted.To invoke this method, you must have the {@code ohos.permission.INTERNET} permission. |
| [verifyCertChain](arkts-network-verifycertchain-f.md#verifycertchain-1) | Verifies the server certificate chain and returns a sorted chain. |

### Interfaces

| Name | Description |
| --- | --- |
| [CertBlob](arkts-network-certblob-i.md) | Define the certificate content. |

### Enums

| Name | Description |
| --- | --- |
| [CertType](arkts-network-certtype-e.md) | Defines the certificate type. |

