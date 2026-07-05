# CmsEnvelopedDecryptionConfig

CMS解封装的配置。

**Since:** 22

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## contentDataFormat

```TypeScript
contentDataFormat?: CmsContentDataFormat
```

内容数据的格式。

**Type:** CmsContentDataFormat

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## encryptedContentData

```TypeScript
encryptedContentData?: Uint8Array
```

加密的内容数据，如果CMS不包含指定数据。

**Type:** Uint8Array

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## cert

```TypeScript
cert?: X509Cert
```

公钥证书。默认为空。

**Type:** X509Cert

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## keyInfo

```TypeScript
keyInfo?: PrivateKeyInfo
```

私钥参数。默认为空。

**Type:** PrivateKeyInfo

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

