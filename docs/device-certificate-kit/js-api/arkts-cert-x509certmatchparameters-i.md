# X509CertMatchParameters

用于匹配证书的过滤参数。如果参数中任一项都未指定，则匹配所有证书。

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## privateKeyValid

```TypeScript
privateKeyValid?: string
```

指定证书私钥有效期。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## authorityKeyIdentifier

```TypeScript
authorityKeyIdentifier?: Uint8Array
```

指定证书颁发机构密钥。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## serialNumber

```TypeScript
serialNumber?: bigint
```

指定证书的序列号。

**Type:** bigint

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## subject

```TypeScript
subject?: Uint8Array
```

指定证书主体名称，DER编码格式。

**Type:** Uint8Array

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## validDate

```TypeScript
validDate?: string
```

指定证书有效期。

**Type:** string

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## subjectAlternativeNames

```TypeScript
subjectAlternativeNames?: Array<GeneralName>
```

指定证书主体名称。

**Type:** Array<GeneralName>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## certPolicy

```TypeScript
certPolicy?: Array<string>
```

指定证书策略。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## minPathLenConstraint

```TypeScript
minPathLenConstraint?: int
```

指定证书CA路径长度。

**Type:** int

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

## publicKeyAlgID

```TypeScript
publicKeyAlgID?: string
```

指定证书公钥的算法。

**Type:** string

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## publicKey

```TypeScript
publicKey?: DataBlob
```

指定证书公钥，DER编码格式。

**Type:** DataBlob

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## subjectKeyIdentifier

```TypeScript
subjectKeyIdentifier?: Uint8Array
```

指定证书公钥。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## issuer

```TypeScript
issuer?: Uint8Array
```

指定证书颁发者，为DER编码格式。

**Type:** Uint8Array

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## privateKey

```TypeScript
privateKey?: string | Uint8Array
```

指定证书私钥，string表示PEM格式私钥，Uint8Array表示DER格式私钥。

**Type:** string | Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## keyUsage

```TypeScript
keyUsage?: Array<boolean>
```

指定是否需要匹配密钥用途。true为需要，false为不需要。

**Type:** Array<boolean>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## matchAllSubjectAltNames

```TypeScript
matchAllSubjectAltNames?: boolean
```

指定是否需要匹配证书主体名称。true为需要，false为不需要。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## extendedKeyUsage

```TypeScript
extendedKeyUsage?: Array<string>
```

指定扩展密钥用途。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## nameConstraints

```TypeScript
nameConstraints?: Uint8Array
```

指定证书的使用者名称。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

