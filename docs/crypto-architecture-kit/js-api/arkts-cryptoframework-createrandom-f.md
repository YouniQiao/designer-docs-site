# createRandom

## createRandom

```TypeScript
function createRandom(): Random
```

生成Random实例，用于进行随机数的计算与设置种子。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Rand

**Return value:**

| Type | Description |
| --- | --- |
| Random | 返回由输入算法指定生成的[Random]cryptoFramework.Random对象。  支持的规格详见框架概述[随机数算法规格](docroot://security/CryptoArchitectureKit/crypto-generate-random-number.md#支持的算法与规格)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let rand = cryptoFramework.createRandom();
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`sync failed: errCode: ${e.code}, errMsg: ${e.message}`);
}

```

