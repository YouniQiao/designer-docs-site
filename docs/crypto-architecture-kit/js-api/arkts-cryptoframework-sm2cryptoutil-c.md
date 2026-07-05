# SM2CryptoUtil

用于SM2密码学运算的工具类。

**Since:** 12

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## genCipherTextBySpec

```TypeScript
static genCipherTextBySpec(spec: SM2CipherTextSpec, mode?: string): DataBlob
```

根据指定的SM2密文参数，生成符合国密标准的ASN.1格式SM2密文。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| spec | SM2CipherTextSpec | Yes | 指定的SM2密文参数。 |
| mode | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 返回符合国密标准的ASN.1格式的SM2密文。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

## getCipherTextSpec

```TypeScript
static getCipherTextSpec(cipherText: DataBlob, mode?: string): SM2CipherTextSpec
```

从符合国密标准的ASN.1格式的SM2密文中，获取具体的SM2密文参数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cipherText | DataBlob | Yes | 符合国密标准的ASN.1格式的SM2密文。 |
| mode | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| SM2CipherTextSpec | 返回SM2密文参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

