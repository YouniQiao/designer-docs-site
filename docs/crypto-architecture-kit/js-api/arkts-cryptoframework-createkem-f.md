# createKem

## createKem

```TypeScript
function createKem(algNameId: KemAlgNameId): Kem
```

创建一个用于密钥封装和解封装操作的KEM实例。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algNameId | KemAlgNameId | Yes | KEM的算法名称ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Kem | KEM实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17620002 | 获取Native对象失败或参数转换失败。 |
| 17620003 | 参数检查失败。 |
| 17630001 | 密码操作错误。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

function createKem() {
  try {
    let kem = cryptoFramework.createKem(cryptoFramework.KemAlgNameId.ML_KEM_768);
    console.info('create kem success');
  } catch (err) {
    let e: BusinessError = err as BusinessError;
    console.error(`create kem failed: errCode: ${e.code}, errMsg: ${e.message}`);
  }
}

```

