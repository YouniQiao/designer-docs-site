# Pkcs12Data

P12（PKCS #12）数据，包含私钥、证书和其他证书。

**Since:** 18

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## privateKey

```TypeScript
privateKey?: string | Uint8Array
```

私钥。**string**对应PEM格式，**Uint8Array**对应DER格式。

**Type:** string | Uint8Array

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## cert

```TypeScript
cert?: X509Cert
```

和私钥匹配的证书。

**Type:** X509Cert

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## otherCerts

```TypeScript
otherCerts?: Array<X509Cert>
```

其他证书。

**Type:** Array<X509Cert>

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

