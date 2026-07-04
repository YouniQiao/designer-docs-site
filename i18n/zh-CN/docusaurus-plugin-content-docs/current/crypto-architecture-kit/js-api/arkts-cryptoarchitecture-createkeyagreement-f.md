---
last_update:
  date: 2026-07-04
---

# createKeyAgreement

## createKeyAgreement

```TypeScript
function createKeyAgreement(algName: string): KeyAgreement
```

生成KeyAgreement实例。

**起始版本：** 9

**元服务API：** 从API版本12开始，该接口支持在元服务API中使用。

**系统能力：** 
- API版本12+：SystemCapability.Security.CryptoFramework.KeyAgreement
- API版本9-11：SystemCapability.Security.CryptoFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| algName | string | 是 | 指定密钥协商算法：目前仅支持ECC，从API version 11开始，增加支持X25519和DH。<br>支持的规格详见[密钥协商规格](../../../../security/CryptoArchitectureKit/crypto-key-agreement-overview.md)。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| KeyAgreement | 返回由输入算法指定生成的KeyAgreement对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 非法入参。可能的原因：<br>1. 必填参数未指定；<br>2. 参数类型不正确；<br>3. 参数验证失败。 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | 该操作不支持。 |
| [17620001](../errorcode-crypto-framework.md#17620001-内存操作失败) | 内存操作失败。 |

**示例：**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let keyAgreement = cryptoFramework.createKeyAgreement('ECC256');

```

