# createMd

## createMd

```TypeScript
function createMd(algName: string): Md
```

生成Md实例，用于进行消息摘要的计算与操作。 支持的规格详见 [MD消息摘要算法规格](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest-overview.md#支持的算法与规格)。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | 指定摘要算法，支持算法请参考  [MD消息摘要算法规格](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest-overview.md#支持的算法与规格)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Md | 返回由输入算法指定生成的[Md]cryptoFramework.Md对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let md = cryptoFramework.createMd('SHA256');
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`sync failed: errCode: ${e.code}, errMsg: ${e.message}`);
}

```

