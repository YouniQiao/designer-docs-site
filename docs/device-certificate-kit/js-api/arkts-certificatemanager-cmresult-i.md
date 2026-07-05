# CMResult

表示接口的返回结果。

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## Modules to Import

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
```

## credentialDetailList

```TypeScript
credentialDetailList?: Array<Credential>
```

表示凭据详细信息。

**Type:** Array<Credential>

**Since:** 22

**System capability:** SystemCapability.Security.CertificateManager

## credential

```TypeScript
credential?: Credential
```

表示凭据详情。

**Type:** Credential

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## outData

```TypeScript
outData?: Uint8Array
```

表示签名结果。

**Type:** Uint8Array

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## certInfo

```TypeScript
certInfo?: CertInfo
```

表示证书详情。

**Type:** CertInfo

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## appUidList

```TypeScript
appUidList?: Array<string>
```

表示授权应用列表。

**Type:** Array<string>

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## uriList

```TypeScript
uriList?: Array<string>
```

表示证书URI列表。 26.0.0

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

## certList

```TypeScript
certList?: Array<CertAbstract>
```

表示证书简要信息的列表。

**Type:** Array<CertAbstract>

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## credentialList

```TypeScript
credentialList?: Array<CredentialAbstract>
```

表示凭据简要信息的列表。

**Type:** Array<CredentialAbstract>

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## uri

```TypeScript
uri?: string
```

表示证书或凭据的唯一标识符，最大长度为256字节。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

