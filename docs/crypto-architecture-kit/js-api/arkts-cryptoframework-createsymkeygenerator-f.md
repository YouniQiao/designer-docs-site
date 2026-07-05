# createSymKeyGenerator

## createSymKeyGenerator

```TypeScript
function createSymKeyGenerator(algName: string): SymKeyGenerator
```

通过指定算法名称获取相应的对称密钥生成器实例。 支持的规格详见 [对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.SymKey

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | 待生成对称密钥生成器的算法名称。 具体取值详见  [对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)  一节中的“字符串参数”。 |

**Return value:**

| Type | Description |
| --- | --- |
| SymKeyGenerator | 返回对称密钥生成器的对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let symKeyGenerator = cryptoFramework.createSymKeyGenerator('3DES192');

```

