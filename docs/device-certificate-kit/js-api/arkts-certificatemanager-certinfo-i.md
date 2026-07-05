# CertInfo

表示证书详细信息。

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## Modules to Import

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
```

## certAlias

```TypeScript
certAlias: string
```

表示证书的别名，最大长度为128字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## notAfter

```TypeScript
notAfter: string
```

表示证书有效期截止日期，最大长度为32字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## serial

```TypeScript
serial: string
```

表示证书的序列号，最大长度为64字节。格式为16进制字符串，例如：62C2CB4DE8405E96。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## issuerName

```TypeScript
issuerName: string
```

表示证书的颁发者名称，最大长度为256字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## cert

```TypeScript
cert: Uint8Array
```

表示证书二进制数据，最大长度为8196字节。

**Type:** Uint8Array

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## state

```TypeScript
state: boolean
```

表示证书的状态，true为启用状态、false为禁用状态。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## uri

```TypeScript
uri: string
```

表示证书的唯一标识符，最大长度为256字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## notBefore

```TypeScript
notBefore: string
```

表示证书有效期起始日期，最大长度为32字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## fingerprintSha256

```TypeScript
fingerprintSha256: string
```

表示证书的指纹值，最大长度为128字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## subjectName

```TypeScript
subjectName: string
```

表示证书的使用者名称，最大长度为1024字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

