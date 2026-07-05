# createAsyKeyGenerator

## createAsyKeyGenerator

```TypeScript
function createAsyKeyGenerator(algName: string): AsyKeyGenerator
```

通过指定算法名称的字符串，获取相应的非对称密钥生成器实例。 支持的规格详见 [非对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | 非对称密钥生成支持的算法名。详见  [非对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)  一节中的“字符串参数”。 |

**Return value:**

| Type | Description |
| --- | --- |
| AsyKeyGenerator | 返回非对称密钥生成器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let asyKeyGenerator = cryptoFramework.createAsyKeyGenerator('ECC256');

```

