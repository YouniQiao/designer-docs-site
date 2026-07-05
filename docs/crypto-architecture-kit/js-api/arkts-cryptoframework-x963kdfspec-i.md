# X963KdfSpec

密钥派生函数参数[KdfSpec]cryptoFramework.KdfSpec的子类，作为X963KDF密钥派生函数进行密钥派生时的输入。 > **说明：** > > key指的是用户输入的最初的密钥材料。

**Inheritance:** X963KdfSpecextends: KdfSpec.

**Since:** 22

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## keySize

```TypeScript
keySize: int
```

派生得到的密钥字节长度，需要为正整数，单位为bytes。 取值应为正整数。

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## key

```TypeScript
key: string | Uint8Array
```

密钥材料。

**Type:** string | Uint8Array

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## info

```TypeScript
info: Uint8Array
```

共享信息。

**Type:** Uint8Array

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

