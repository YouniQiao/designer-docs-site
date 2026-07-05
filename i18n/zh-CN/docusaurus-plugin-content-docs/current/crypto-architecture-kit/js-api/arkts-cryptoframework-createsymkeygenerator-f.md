# createSymKeyGenerator

## createSymKeyGenerator

```TypeScript
function createSymKeyGenerator(algName: string): SymKeyGenerator
```

通过指定算法名称获取相应的对称密钥生成器实例。 支持的规格详见 [对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.SymKey

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| algName | string | 是 | 待生成对称密钥生成器的算法名称。 具体取值详见  [对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)  一节中的“字符串参数”。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SymKeyGenerator | 返回对称密钥生成器的对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |

**示例：**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let symKeyGenerator = cryptoFramework.createSymKeyGenerator('3DES192');

```

