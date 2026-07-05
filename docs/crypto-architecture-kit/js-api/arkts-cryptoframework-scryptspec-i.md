# ScryptSpec

密钥派生函数参数[KdfSpec]cryptoFramework.KdfSpec的子类，作为SCRYPT密钥派生函数进行密钥派生时的输入。 > **说明：** > > passphrase指的是原始密码，如果使用string类型，需要直接传入用于密钥派生的数据，而不是HexString、base64等字符串类型，同时需要确保该 > 字符串为utf-8编码，否则派生结果会有差异。

**Inheritance:** ScryptSpecextends: KdfSpec.

**Since:** 18

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## p

```TypeScript
p: long
```

并行化参数，需要为正整数。

**Type:** long

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## r

```TypeScript
r: long
```

块大小参数，需要为正整数。

**Type:** long

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## salt

```TypeScript
salt: Uint8Array
```

盐值。

**Type:** Uint8Array

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## keySize

```TypeScript
keySize: int
```

派生得到的密钥字节长度，需要为正整数，单位为bytes。

**Type:** int

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## passphrase

```TypeScript
passphrase: string | Uint8Array
```

用户输入的原始密码。

**Type:** string | Uint8Array

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## maxMemory

```TypeScript
maxMemory: long
```

最大内存限制参数，需要为正整数，单位为bytes。

**Type:** long

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## n

```TypeScript
n: long
```

CPU/内存开销参数，需要为正整数。

**Type:** long

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

