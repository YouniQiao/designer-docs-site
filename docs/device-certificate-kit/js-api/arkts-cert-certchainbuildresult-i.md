# CertChainBuildResult

用于指定证书链创建结果。

**Since:** 12

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## validationResult

```TypeScript
readonly validationResult: CertChainValidationResult
```

证书链校验结果。

**Type:** CertChainValidationResult

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## certChain

```TypeScript
readonly certChain: X509CertChain
```

生成的证书链对象。

**Type:** X509CertChain

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

