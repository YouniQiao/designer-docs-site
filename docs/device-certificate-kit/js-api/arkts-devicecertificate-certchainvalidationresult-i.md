# CertChainValidationResult

Represents the return value of certificate chain validation.

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## entityCert

```TypeScript
readonly entityCert: X509Cert
```

Entity certificate.

**Type:** X509Cert

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## trustAnchor

```TypeScript
readonly trustAnchor: X509TrustAnchor
```

Trust anchor.

**Type:** X509TrustAnchor

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

