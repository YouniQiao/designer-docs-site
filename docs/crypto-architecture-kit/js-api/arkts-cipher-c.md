# Cipher

提供加解密接口。

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## Modules to Import

```TypeScript
import { CipherAesOptions,CipherResponse,CipherRsaOptions } from '@kit.CryptoArchitectureKit';
```

## aes

```TypeScript
static aes(options: CipherAesOptions): void
```

使用AES对数据进行加密或解密。

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CipherAesOptions | Yes | AES 加解密参数。 |

## rsa

```TypeScript
static rsa(options: CipherRsaOptions): void
```

使用RSA对数据进行加密或解密。

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CipherRsaOptions | Yes | RSA 加解密参数。 |

