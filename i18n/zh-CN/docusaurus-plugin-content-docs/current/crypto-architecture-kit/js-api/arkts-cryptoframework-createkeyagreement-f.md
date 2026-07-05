# createKeyAgreement

## createKeyAgreement

```TypeScript
function createKeyAgreement(algName: string): KeyAgreement
```

生成KeyAgreement实例。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.KeyAgreement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| algName | string | 是 | 指定密钥协商算法：目前仅支持ECDH，从API version 11开始，增加支持X25519和DH。 支持的规格详见  [密钥协商规格](docroot://security/CryptoArchitectureKit/crypto-key-agreement-overview.md)。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| KeyAgreement | 返回由输入算法指定生成的KeyAgreement对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |

**示例：**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let keyAgreement = cryptoFramework.createKeyAgreement('ECC256');

```

