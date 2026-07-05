# HuksCryptoExtensionCertInfo

[HuksCryptoExtensionResult](arkts-hukscryptoextensionresultcode-e.md#HuksCryptoExtensionResultCode)中的certs数组中的元素。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

## 导入模块

```TypeScript
import { HuksCryptoExtensionCertInfo,HuksCryptoExtensionResultCode,HuksCryptoExtensionParams,HuksCryptoExtensionParam,HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';
```

## resourceId

```TypeScript
resourceId: string
```

资源ID。JSON格式，能够映射到Ukey中的某个资源。

**类型：** string

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

## purpose

```TypeScript
purpose: certificateManager.CertificatePurpose
```

表示证书链对应密钥的使用类型。

**类型：** certificateManager.CertificatePurpose

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

## cert

```TypeScript
cert: Uint8Array
```

证书。

**类型：** Uint8Array

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

