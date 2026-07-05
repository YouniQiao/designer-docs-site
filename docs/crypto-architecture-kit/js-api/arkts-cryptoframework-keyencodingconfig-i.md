# KeyEncodingConfig

RSA私钥编码参数，使用获取私钥字符串时，可以添加此参数，生成指定算法、密码的编码后的私钥字符串。 > **说明：** > > - password是必选参数，表示编码用到的密码。 > > - cipherName是必选参数，指定编码用到的算法。当前仅支持AES-128-CBC、AES-192-CBC、AES-256-CBC、DES-EDE3-CBC。

**Since:** 18

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## password

```TypeScript
password: string
```

密码。

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## cipherName

```TypeScript
cipherName: string
```

用于编码私钥的对称密码算法。

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

