# CertChainValidationParameters

表示证书链校验的参数。

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## date

```TypeScript
date?: string
```

用于检查证书有效性的日期。

**Type:** string

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## keyUsage

```TypeScript
keyUsage?: Array<KeyUsageType>
```

表示需要校验证书中的密钥用途。

**Type:** Array<KeyUsageType>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## revocationCheckParam

```TypeScript
revocationCheckParam?: RevocationCheckParameter
```

表示需要校验证书吊销状态的参数对象。

**Type:** RevocationCheckParameter

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## trustSystemCa

```TypeScript
trustSystemCa?: boolean
```

表示是否使用系统预置CA证书校验证书链。true表示使用；false表示不使用。

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## sslHostname

```TypeScript
sslHostname?: string
```

表示需要校验证书中主机名，与policy配合使用。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## allowDownloadIntermediateCa

```TypeScript
allowDownloadIntermediateCa?: boolean
```

表示是否允许尝试从网络下载缺失的中间CA证书。 true表示允许；false表示不允许。默认值为false。 下载地址将从证书AIA扩展中获取，仅支持http，如需使用网络下载，需申请ohos.permission.INTERNET权限。配置方式请参见 [声明权限](docroot://security/AccessToken/declare-permissions.md)。

**Type:** boolean

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## trustAnchors

```TypeScript
trustAnchors: Array<X509TrustAnchor>
```

表示信任锚列表。

**Type:** Array<X509TrustAnchor>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## certCRLs

```TypeScript
certCRLs?: Array<CertCRLCollection>
```

用于检查证书是否被吊销的CRL集合。

**Type:** Array<CertCRLCollection>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## policy

```TypeScript
policy?: ValidationPolicyType
```

表示需要校验证书的策略类型。

**Type:** ValidationPolicyType

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

