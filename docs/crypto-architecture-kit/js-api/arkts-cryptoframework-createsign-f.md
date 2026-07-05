# createSign

## createSign

```TypeScript
function createSign(algName: string): Sign
```

生成Sign实例。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | 指定签名算法。当前支持RSA、ECC、DSA、SM210+，Ed2551911+和  ML-DSA26.0.0+。  使用RSA PKCS1模式时需设置摘要；使用RSA PSS模式时需设置摘要和掩码摘要。签名时，通过设置OnlySign参数可传入数据摘要仅作签名。  支持的规格详见  [签名验签规格](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Sign | 返回由输入算法指定生成的Sign对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let signer1 = cryptoFramework.createSign('RSA1024|PKCS1|SHA256');

let signer2 = cryptoFramework.createSign('RSA1024|PSS|SHA256|MGF1_SHA256');

let signer3 = cryptoFramework.createSign('ECC224|SHA256');

let signer4 = cryptoFramework.createSign('DSA2048|SHA256');

let signer5 = cryptoFramework.createSign('RSA1024|PKCS1|SHA256|OnlySign');

```

