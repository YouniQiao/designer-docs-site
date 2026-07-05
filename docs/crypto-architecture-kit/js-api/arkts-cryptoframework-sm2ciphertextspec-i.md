# SM2CipherTextSpec

SM2密文参数，使用SM2密文格式转换函数进行格式转换时，需要用到此对象。可以通过指定此参数，生成符合国密标准的ASN.1格式的SM2密文，反之， 也可以从ASN.1格式的SM2密文中获取具体参数。 > **说明：** > > - hashData为使用SM3算法对明文数据运算得到的杂凑值，其长度固定为256位。 > > - cipherTextData是与明文等长的密文。 > > - 在拼接生成C1C3C2格式的密文时，如果x分量（C1_X）或y分量（C1_Y）的长度不足32字节，需要在高位补0，使得x分量和y分量的长度均为32字节。

**Since:** 12

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## xCoordinate

```TypeScript
xCoordinate: bigint
```

x分量。

**Type:** bigint

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## yCoordinate

```TypeScript
yCoordinate: bigint
```

y分量，也称为C1y。

**Type:** bigint

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## hashData

```TypeScript
hashData: Uint8Array
```

哈希值，也称为C3。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## cipherTextData

```TypeScript
cipherTextData: Uint8Array
```

密文数据，也称为C2。

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

