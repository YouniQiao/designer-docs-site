# HuksCryptoExtensionCertInfo

Represents the information of certificate.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## Modules to Import

```TypeScript
import { HuksCryptoExtensionCertInfo, HuksCryptoExtensionResultCode, HuksCryptoExtensionParams, HuksCryptoExtensionParam, HuksCryptoExtensionResult } from '@ohos.security.CryptoExtensionAbility';
```

## cert

```TypeScript
cert: Uint8Array
```

The content of the certificate.

**Type:** Uint8Array

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## purpose

```TypeScript
purpose: certificateManager.CertificatePurpose
```

The type of the certificate, sign or encrypt.

**Type:** certificateManager.CertificatePurpose

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## resourceId

```TypeScript
resourceId: string
```

The resource index of the certificate.

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

