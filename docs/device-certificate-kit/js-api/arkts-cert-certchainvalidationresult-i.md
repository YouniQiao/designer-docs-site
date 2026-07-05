# CertChainValidationResult

表示证书链校验的返回值。

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## trustAnchor

```TypeScript
readonly trustAnchor: X509TrustAnchor
```

表示信任锚。

**Type:** X509TrustAnchor

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## entityCert

```TypeScript
readonly entityCert: X509Cert
```

表示实体证书。

**Type:** X509Cert

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

