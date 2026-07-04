# CmsKeyAgreeRecipientInfo

Represents KeyAgree recipient information encapsulated in CMS data.

**Since:** 22

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## cert

```TypeScript
cert: X509Cert
```

EC certificate.

**Type:** X509Cert

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

## digestAlgorithm

```TypeScript
digestAlgorithm?: CmsKeyAgreeRecipientDigestAlgorithm
```

KDF digest algorithm. The default value is **SHA256**.

**Type:** CmsKeyAgreeRecipientDigestAlgorithm

**Default:** CmsKeyAgreeRecipientDigestAlgorithm.SHA256

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

