# createKeyAgreement

## createKeyAgreement

```TypeScript
function createKeyAgreement(algName: string): KeyAgreement
```

生成KeyAgreement实例。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.KeyAgreement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | 指定密钥协商算法：目前仅支持ECDH，从API version 11开始，增加支持X25519和DH。 支持的规格详见  [密钥协商规格](docroot://security/CryptoArchitectureKit/crypto-key-agreement-overview.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| KeyAgreement | 返回由输入算法指定生成的KeyAgreement对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let keyAgreement = cryptoFramework.createKeyAgreement('ECC256');

```

