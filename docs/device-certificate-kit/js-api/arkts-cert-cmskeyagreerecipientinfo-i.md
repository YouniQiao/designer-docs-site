# CmsKeyAgreeRecipientInfo

CMS封装数据的KeyAgree接收方信息。

**Since:** 22

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## digestAlgorithm

```TypeScript
digestAlgorithm?: CmsKeyAgreeRecipientDigestAlgorithm
```

KDF摘要算法，默认为SHA256。

**Type:** CmsKeyAgreeRecipientDigestAlgorithm

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## cert

```TypeScript
cert: X509Cert
```

EC证书。

**Type:** X509Cert

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

