# createVerify

## createVerify

```TypeScript
function createVerify(algName: string): Verify
```

生成Verify实例。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | 指定签名验证算法。当前支持RSA、ECC、DSA、SM210+，Ed2551911+和  ML-DSA26.0.0+。  使用RSA PKCS1模式时需设置摘要；使用RSA PSS模式时需设置摘要和掩码摘要。使用RSA算法验签时，设置recover参数可支持验签恢复。  支持的规格详见  [签名验签规格](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Verify | 返回由输入算法指定生成的Verify对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let verifier1 = cryptoFramework.createVerify('RSA1024|PKCS1|SHA256');

let verifier2 = cryptoFramework.createVerify('RSA1024|PSS|SHA256|MGF1_SHA256');

let verifier3 = cryptoFramework.createVerify('RSA1024|PKCS1|SHA256|Recover');

```

