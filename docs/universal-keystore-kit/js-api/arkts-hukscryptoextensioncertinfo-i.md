# HuksCryptoExtensionCertInfo

[HuksCryptoExtensionResult](arkts-hukscryptoextensionresultcode-e.md#HuksCryptoExtensionResultCode)中的certs数组中的元素。

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## Modules to Import

```TypeScript
import { HuksCryptoExtensionCertInfo,HuksCryptoExtensionResultCode,HuksCryptoExtensionParams,HuksCryptoExtensionParam,HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';
```

## resourceId

```TypeScript
resourceId: string
```

资源ID。JSON格式，能够映射到Ukey中的某个资源。

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## purpose

```TypeScript
purpose: certificateManager.CertificatePurpose
```

表示证书链对应密钥的使用类型。

**Type:** certificateManager.CertificatePurpose

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## cert

```TypeScript
cert: Uint8Array
```

证书。

**Type:** Uint8Array

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

