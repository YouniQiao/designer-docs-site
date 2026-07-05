# PrivateKeyInfo

表示私钥信息。

**Since:** 18

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## password

```TypeScript
password?: string
```

私钥的密码，如果私钥是加密的。

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## key

```TypeScript
key: string | Uint8Array
```

未加密或加密的私钥，支持PEM或DER格式。

**Type:** string | Uint8Array

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

