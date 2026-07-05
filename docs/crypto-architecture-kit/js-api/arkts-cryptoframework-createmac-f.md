# createMac

## createMac

```TypeScript
function createMac(algName: string): Mac
```

生成Mac实例，用于消息认证码的计算与操作。 支持的规格详见[HMAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | 指定摘要算法，支持算法请参考  [HMAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Mac | 返回由输入算法指定生成的[Mac]cryptoFramework.Mac对象。 |

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
  // Set algName based on the algorithm supported.
  let mac = cryptoFramework.createMac('SHA256');
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`sync failed: errCode: ${e.code}, errMsg: ${e.message}`);
}

```

## createMac

```TypeScript
function createMac(macSpec: MacSpec): Mac
```

生成Mac实例，用于进行消息认证码的计算与操作。 支持的规格详见[MAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| macSpec | MacSpec | Yes | 根据消息认证码的不同算法，指定入参参数，支持算法请参考  [MAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Mac | 返回由指定入参参数生成的[Mac]cryptoFramework.Mac对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17620002 | 获取Native对象失败或参数转换失败。 |
| 17630001 | 密码操作错误。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Set algName based on the algorithm supported.
  let spec: cryptoFramework.HmacSpec = {
    algName: 'HMAC',
    mdName: 'SHA256',
  };
  let mac = cryptoFramework.createMac(spec);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`sync failed: errCode: ${error.code}, errMsg: ${error.message}`);
}

```

