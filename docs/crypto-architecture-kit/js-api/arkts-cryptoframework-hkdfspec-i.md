# HKDFSpec

密钥派生函数参数[KdfSpec]cryptoFramework.KdfSpec的子类，作为HKDF密钥派生函数进行密钥派生时的输入。 > **说明：** > > key指的是用户输入的最初的密钥材料。根据模式的不同info与salt可以传空，但是不可不传。 > > 例如：EXTRACT_AND_EXPAND模式需要输入全部的值，EXTRACT_ONLY模式info可以为空，在构建HKDFSpec的时候，info传入null值。 > > 默认的模式为EXTRACT_AND_EXPAND，"HKDF|SHA256|EXTRACT_AND_EXPAND"等价于"HKDF|SHA256"。

**Inheritance:** HKDFSpecextends: KdfSpec.

**Since:** 12

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## salt

```TypeScript
salt: Uint8Array
```

盐值。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## keySize

```TypeScript
keySize: int
```

派生得到的密钥字节长度，单位为bytes。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## key

```TypeScript
key: string | Uint8Array
```

密钥材料。

**Type:** string | Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

## info

```TypeScript
info: Uint8Array
```

拓展信息。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

