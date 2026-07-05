# CsrAttribute

定义CSR属性表示。 CSR属性字段，当前仅支持字符串类型的属性字段，属性值添加到CSR中编码为utf-8。常见的type为challengePassword。

**Since:** 18

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## type

```TypeScript
type: string
```

PKCS #9指定的扩展类型。

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## value

```TypeScript
value: string
```

属性值。

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

