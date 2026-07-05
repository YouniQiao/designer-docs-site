# CertChainBuildParameters

Represents the parameters for building a certificate chain.

**Since:** 12

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## certMatchParameters

```TypeScript
certMatchParameters: X509CertMatchParameters
```

Filter criteria.

**Type:** X509CertMatchParameters

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## maxLength

```TypeScript
maxLength?: number
```

Maximum length of the CA certificate in the certificate chain.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## validationParameters

```TypeScript
validationParameters: CertChainValidationParameters
```

Parameters for certificate chain validation.

**Type:** CertChainValidationParameters

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

