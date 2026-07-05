# PbesParams

表示基于密码的加密算法参数，当前仅支持PBES2。

**Since:** 21

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## saltLen

```TypeScript
saltLen?: int
```

表示盐值长度。默认为16，最小值为8。 取值应为≥8的整数。

**Type:** int

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## encryptionAlgorithm

```TypeScript
encryptionAlgorithm?: PbesEncryptionAlgorithm
```

表示PBES加密算法类型。默认为AES_256_CBC。

**Type:** PbesEncryptionAlgorithm

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## iterations

```TypeScript
iterations?: int
```

表示迭代次数。默认为2048。 取值应为正整数。

**Type:** int

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

