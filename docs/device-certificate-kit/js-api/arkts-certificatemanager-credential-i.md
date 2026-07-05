# Credential

表示凭据详细信息。

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## Modules to Import

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
```

## keyUri

```TypeScript
keyUri: string
```

表示凭据的唯一标识符，最大长度为256字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## keyNum

```TypeScript
keyNum: int
```

表示凭据中包含的密钥个数。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## alias

```TypeScript
alias: string
```

表示凭据的别名，最大长度为128字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## certPurpose

```TypeScript
certPurpose?: CertificatePurpose
```

表示凭据的用途。默认值为CertificatePurpose.PURPOSE_DEFAULT。

**Type:** CertificatePurpose

**Since:** 22

**System capability:** SystemCapability.Security.CertificateManager

## credentialData

```TypeScript
credentialData: Uint8Array
```

表示凭据二进制数据，最大长度为20480字节。

**Type:** Uint8Array

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## certNum

```TypeScript
certNum: int
```

表示凭据中包含的证书个数。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## type

```TypeScript
type: string
```

表示凭据的类型，最大长度为8字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

