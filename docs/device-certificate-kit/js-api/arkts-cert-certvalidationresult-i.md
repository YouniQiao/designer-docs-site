# CertValidationResult

证书验证的结果。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## certChain

```TypeScript
readonly certChain: Array<X509Cert>
```

验证后的证书链。验证成功时返回完整的证书链，从终端实体证书到信任锚点。可用于后续的证书信息查询或其他验证操作。

**Type:** Array<X509Cert>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

