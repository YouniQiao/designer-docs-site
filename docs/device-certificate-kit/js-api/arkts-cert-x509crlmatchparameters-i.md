# X509CRLMatchParameters

用于匹配证书吊销列表的过滤参数。如果参数中任一项都未指定，则匹配所有证书吊销列表。

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## minCRL

```TypeScript
minCRL?: bigint
```

指定CRL编号（CRL number）的最小值。

**Type:** bigint

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## maxCRL

```TypeScript
maxCRL?: bigint
```

指定CRL编号（CRL number）的最大值。

**Type:** bigint

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## x509Cert

```TypeScript
x509Cert?: X509Cert
```

指定具体的证书对象。

**Type:** X509Cert

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## updateDateTime

```TypeScript
updateDateTime?: string
```

指定CRL更新时间。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## issuer

```TypeScript
issuer?: Array<Uint8Array>
```

指定CRL颁发者，为DER编码格式。

**Type:** Array<Uint8Array>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

