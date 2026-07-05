# HuksKeyPurpose

```TypeScript
export enum HuksKeyPurpose
```

表示密钥用途。 一个密钥仅能用于单类用途，不能既用于加解密又用于签名验签。

**Since:** 8

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_ENCRYPT

```TypeScript
HUKS_KEY_PURPOSE_ENCRYPT = 1
```

表示密钥用于对明文进行加密操作。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_DECRYPT

```TypeScript
HUKS_KEY_PURPOSE_DECRYPT = 2
```

表示密钥用于对密文进行解密操作。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_SIGN

```TypeScript
HUKS_KEY_PURPOSE_SIGN = 4
```

表示密钥用于对数据进行签名。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_VERIFY

```TypeScript
HUKS_KEY_PURPOSE_VERIFY = 8
```

表示密钥用于验证签名后的数据。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_DERIVE

```TypeScript
HUKS_KEY_PURPOSE_DERIVE = 16
```

表示密钥用于派生密钥。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_WRAP

```TypeScript
HUKS_KEY_PURPOSE_WRAP = 32
```

表示密钥用于加密导出。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_UNWRAP

```TypeScript
HUKS_KEY_PURPOSE_UNWRAP = 64
```

表示密钥用于安全导入。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_MAC

```TypeScript
HUKS_KEY_PURPOSE_MAC = 128
```

表示密钥用于生成消息验证码。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_KEY_PURPOSE_AGREE

```TypeScript
HUKS_KEY_PURPOSE_AGREE = 256
```

表示密钥用于进行密钥协商。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

