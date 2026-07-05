# X509TrustAnchor

表示X509信任锚，用于校验证书链。使用信任锚中的证书或者公钥作为可信根，对证书链进行校验。

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## CAPubKey

```TypeScript
CAPubKey?: Uint8Array
```

信任的CA证书公钥，DER格式。仅在未配置CACert时生效。

**Type:** Uint8Array

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## CASubject

```TypeScript
CASubject?: Uint8Array
```

信任CA证书的DER格式主体名称。仅在配置了CAPubKey时生效。校验对象根据CAPubKey类型（自签或上级）决定是校验根证书的主体还是颁发者名称。

**Type:** Uint8Array

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## CACert

```TypeScript
CACert?: X509Cert
```

信任的CA证书。如果配置了CACert，则校验证书链时只使用CACert，不再使用CAPubKey和CASubject。

**Type:** X509Cert

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## nameConstraints

```TypeScript
nameConstraints?: Uint8Array
```

名称约束，DER格式。只校验当前证书链的叶子证书。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

