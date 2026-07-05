# SM2CryptoUtil

Provides APIs for SM2 cryptographic operations.

**Since:** 12

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## genCipherTextBySpec

```TypeScript
static genCipherTextBySpec(spec: SM2CipherTextSpec, mode?: string): DataBlob
```

Generates SM2 ciphertext in ASN.1 format.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| spec | SM2CipherTextSpec | Yes | SM2 ciphertext parameters. |
| mode | string | No | Order of the SM2 parameters in the ciphertext. Currently, only C1C3C2 is supported. Ifthis parameter is left empty or is an empty string, the default value is used. |

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | SM2 ciphertext in ASN.1 format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## getCipherTextSpec

```TypeScript
static getCipherTextSpec(cipherText: DataBlob, mode?: string): SM2CipherTextSpec
```

Obtains SM2 ciphertext parameters from the SM2 ciphertext in ASN.1 format.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cipherText | DataBlob | Yes | SM2 ciphertext in ASN.1 format. |
| mode | string | No | Order of the SM2 parameters in the ciphertext. Currently, only C1C3C2 is supported. Ifthis parameter is left empty or is an empty string, the default value is used. |

**Return value:**

| Type | Description |
| --- | --- |
| SM2CipherTextSpec | SM2 ciphertext parameters obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

