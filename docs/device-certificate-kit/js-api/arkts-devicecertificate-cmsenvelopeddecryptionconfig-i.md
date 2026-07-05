# CmsEnvelopedDecryptionConfig

Represents CMS decapsulation configuration.

**Since:** 22

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## cert

```TypeScript
cert?: X509Cert
```

Public key certificate. This parameter is left empty by default.

**Type:** X509Cert

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

## contentDataFormat

```TypeScript
contentDataFormat?: CmsContentDataFormat
```

Format of the content. The default value is **CmsContentDataFormat.BINARY**.

**Type:** CmsContentDataFormat

**Default:** CmsContentDataFormat.BINARY

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

## encryptedContentData

```TypeScript
encryptedContentData?: Uint8Array
```

Encrypted content data used when the CMS does not contain the specified data. This parameter is left empty by default.

**Type:** Uint8Array

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

## keyInfo

```TypeScript
keyInfo?: PrivateKeyInfo
```

Private key parameter. This parameter is left empty by default.

**Type:** PrivateKeyInfo

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

