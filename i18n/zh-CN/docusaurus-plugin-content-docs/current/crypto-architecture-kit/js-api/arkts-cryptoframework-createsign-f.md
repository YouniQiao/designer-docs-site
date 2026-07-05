# createSign

## createSign

```TypeScript
function createSign(algName: string): Sign
```

生成Sign实例。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Signature

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| algName | string | 是 | 指定签名算法。当前支持RSA、ECC、DSA、SM210+，Ed2551911+和  ML-DSA26.0.0+。  使用RSA PKCS1模式时需设置摘要；使用RSA PSS模式时需设置摘要和掩码摘要。签名时，通过设置OnlySign参数可传入数据摘要仅作签名。  支持的规格详见  [签名验签规格](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Sign | 返回由输入算法指定生成的Sign对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |

**示例：**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let signer1 = cryptoFramework.createSign('RSA1024|PKCS1|SHA256');

let signer2 = cryptoFramework.createSign('RSA1024|PSS|SHA256|MGF1_SHA256');

let signer3 = cryptoFramework.createSign('ECC224|SHA256');

let signer4 = cryptoFramework.createSign('DSA2048|SHA256');

let signer5 = cryptoFramework.createSign('RSA1024|PKCS1|SHA256|OnlySign');

```

