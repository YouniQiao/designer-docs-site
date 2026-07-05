# RevocationCheckParameter

表示证书链校验证书吊销状态的参数。

**Since:** 12

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## ocspDigest

```TypeScript
ocspDigest?: string
```

表示OCSP通信时创建证书ID使用的哈希算法。默认为SHA256，支持可配置MD5、SHA1、SHA224、SHA256、SHA384、SHA512算法。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## ocspResponderCert

```TypeScript
ocspResponderCert?: X509Cert
```

表示用于OCSP响应的签名校验的签名证书。

**Type:** X509Cert

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## ocspRequestExtension

```TypeScript
ocspRequestExtension?: Array<Uint8Array>
```

表示发送OCSP请求的扩展字段。

**Type:** Array<Uint8Array>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## options

```TypeScript
options?: Array<RevocationCheckOptions>
```

表示证书吊销状态查询的策略组合。

**Type:** Array<RevocationCheckOptions>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## ocspResponderURI

```TypeScript
ocspResponderURI?: string
```

表示用于OCSP请求的备选服务器URI地址，支持HTTP/HTTPS，具体配置由与服务器协商决定。 > **说明：** > > 当前URI只针对实体证书生效。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## crlDownloadURI

```TypeScript
crlDownloadURI?: string
```

表示用于CRL请求的备选下载地址。 > **说明：** > > 当前URI只针对实体证书生效。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## ocspResponses

```TypeScript
ocspResponses?: Uint8Array
```

表示用于OCSP服务器响应的备选数据。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

