# createKdf

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## createKdf

```TypeScript
function createKdf(algName: string): Kdf
```

Creates a key derivation function instance.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Kdf
- API version 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | Key derivation algorithm (including the hash function for the HMAC). Currently, PBKDF2,HKDF, SCRYPT, and X963KDF are supported. For example, **PBKDF2\|SHA256**, **HKDF\|SHA256**,**SCRYPT**, or **X963KDF\|SHA256**.<br>For details about the supported specifications, see[Key Derivation Function Specifications](../../../../security/CryptoArchitectureKit/crypto-key-derivation-overview.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Kdf | Key derivation function instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This operation is not supported. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |

**Example**

PBKDF2

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let kdf = cryptoFramework.createKdf('PBKDF2|SHA256');

```

