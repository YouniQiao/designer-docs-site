# CryptoParam

Represents the configuration of database encryption parameters. This configuration is valid only when **encrypt** of **StoreConfig** is set to **true** or the key is not empty.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## iterationCount

```TypeScript
iterationCount?: int
```

Number of iterations of the PBKDF2 algorithm used in the RDB store. The value is an integer. Default value: **10000**. The value must be an integer greater than 0. If it is not an integer, the value is rounded down. If this parameter is not specified or is set to **0**, the default value **10000** and the default encryption algorithm **AES_256_GCM** are used.

**类型：** int

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## hmacAlgo

```TypeScript
hmacAlgo?: HmacAlgo
```

HMAC algorithm used for database encryption and decryption. Default value: **SHA256**.

**类型：** HmacAlgo

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## encryptionAlgo

```TypeScript
encryptionAlgo?: EncryptionAlgo
```

Algorithm used for database encryption and decryption. Default value: **AES_256_GCM**.

**类型：** EncryptionAlgo

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## cryptoPageSize

```TypeScript
cryptoPageSize?: int
```

Page size used for database encryption and decryption. The value is an integer. Unit: byte Default value: **1024**. The value must be an integer within the range of 1,024 to 65,536 and must be 2<sup>n</sup>. If the specified value is not an integer, the value is rounded down.

**类型：** int

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## kdfAlgo

```TypeScript
kdfAlgo?: KdfAlgo
```

PBKDF2 algorithm used for database encryption and decryption. Default value: the same as the HMAC algorithm used.

**类型：** KdfAlgo

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## encryptionKey

```TypeScript
encryptionKey: Uint8Array
```

Key used for database encryption and decryption. If this parameter is not specified, the RDB store generates a key, saves the key, and uses the key to open the database file. If the key is not required, you need to set the key to **0**.

**类型：** Uint8Array

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

