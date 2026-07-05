# CmsVerificationConfig

CMS验签的配置。

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

内容数据的格式。默认为CmsContentDataFormat.BINARY。

**Type:** CmsContentDataFormat

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## contentData

```TypeScript
contentData?: Uint8Array
```

内容数据，如果是detached模式，则需要指定明文数据。attached模式可以不传。

**Type:** Uint8Array

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## signerCerts

```TypeScript
signerCerts?: Array<X509Cert>
```

签名者证书。

**Type:** Array<X509Cert>

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## trustCerts

```TypeScript
trustCerts: Array<X509Cert>
```

信任证书。 > **说明：** > > 需要配置所有签名者的信任证书。

**Type:** Array<X509Cert>

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

