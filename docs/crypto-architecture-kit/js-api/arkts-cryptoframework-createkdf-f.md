# createKdf

## createKdf

```TypeScript
function createKdf(algName: string): Kdf
```

密钥派生函数（key derivation function）实例生成。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | 指定密钥派生算法（包含HMAC配套的散列函数）：目前支持PBKDF2、HKDF、SCRYPT、X963KDF算法，  如"PBKDF2\|SHA256", "HKDF\|SHA256", "SCRYPT", "X963KDF\|SHA256"。 支持的规格详见  [密钥派生函数规格](docroot://security/CryptoArchitectureKit/crypto-key-derivation-overview.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Kdf | 返回由输入算法指定生成的Kdf对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let kdf = cryptoFramework.createKdf('PBKDF2|SHA256');

```

