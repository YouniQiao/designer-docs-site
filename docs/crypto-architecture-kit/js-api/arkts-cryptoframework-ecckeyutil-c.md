# ECCKeyUtil

提供ECC密钥参数生成和基于指定椭圆曲线的点转换工具。

**Since:** 11

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## convertPoint

```TypeScript
static convertPoint(curveName: string, encodedPoint: Uint8Array): Point
```

根据椭圆曲线的曲线名，即相应的NID（Name Identifier），将指定的点数据转换为Point对象。当前支持压缩/非压缩格式的点数据。 > **说明：** > > 根据RFC5480规范中第2.2节的描述： > 1. 非压缩格式的点数据表示为 **0x04**|x坐标|y坐标。 > 2. **Fp**域（当前不支持**F2m**域）中的压缩点数据表示如下：**0x03**|x坐标（当y坐标为奇数时）；**0x02**|x坐标（当y坐标为偶数时）。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| curveName | string | Yes | 椭圆曲线的曲线名，即相应的NID（Name Identifier）。 |
| encodedPoint | Uint8Array | Yes | 指定的ECC椭圆曲线上的点的数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Point | 返回ECC的Point对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

// Randomly generated uncompressed point data.
let pkData =
  new Uint8Array([4, 143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195,
    157, 111, 40, 217, 215, 148, 120, 224, 205, 82, 83, 92, 185, 21, 211, 184, 5, 19, 114, 33, 86, 85, 228, 123, 242,
    206, 200, 98, 178, 184, 130, 35, 232, 45, 5, 202, 189, 11, 46, 163, 156, 152]);
let returnPoint = cryptoFramework.ECCKeyUtil.convertPoint('NID_brainpoolP256r1', pkData);
console.info('returnPoint: ' + returnPoint.x.toString(16));

```

## genECCCommonParamsSpec

```TypeScript
static genECCCommonParamsSpec(curveName: string): ECCCommonParamsSpec
```

根据椭圆曲线相应的NID（Name Identifier）字符串名称生成相应的非对称公共密钥参数。详见 [ECC密钥生成规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md#ecc)和 [SM2密钥生成规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md#sm2)。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| curveName | string | Yes | 椭圆曲线相应的NID（Name Identifier）字符串名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| ECCCommonParamsSpec | 返回ECC公共密钥参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';
try {
  let ECCCommonParamsSpec = cryptoFramework.ECCKeyUtil.genECCCommonParamsSpec('NID_brainpoolP160r1');
  console.info('genECCCommonParamsSpec result: success.');
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error(`genECCCommonParamsSpec failed: errCode: ${e.code}, errMsg: ${e.message}`);
}

```

## getEncodedPoint

```TypeScript
static getEncodedPoint(curveName: string, point: Point, format: string): Uint8Array
```

根据椭圆曲线的曲线名，即相应的NID（Name Identifier），按照指定的点数据格式，将Point对象转换为点数据。当前支持压缩/非压缩格式的点 数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| curveName | string | Yes | 椭圆曲线的曲线名，即相应的NID（Name Identifier）。 |
| point | Point | Yes | 椭圆曲线上的Point点对象。 |
| format | string | Yes | 需要获取的点数据格式，当前支持"COMPRESSED"或"UNCOMPRESSED"。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 返回指定格式的点数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function doTest() {
  let generator = cryptoFramework.createAsyKeyGenerator('ECC_BrainPoolP256r1');
  let keyPair = await generator.generateKeyPair();
  let eccPkX = keyPair.pubKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_PK_X_BN);
  let eccPkY = keyPair.pubKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_PK_Y_BN);
  console.info('ECC_PK_X_BN 16: ' + eccPkX.toString(16));
  console.info('ECC_PK_Y_BN 16: ' + eccPkY.toString(16));
  // Place eccPkX.toString(16) in x and eccPkY.toString(16) in y.
  let returnPoint: cryptoFramework.Point = {
    x: BigInt('0x' + eccPkX.toString(16)),
    y: BigInt('0x' + eccPkY.toString(16))
  };
  let returnData = cryptoFramework.ECCKeyUtil.getEncodedPoint('NID_brainpoolP256r1', returnPoint, 'UNCOMPRESSED');
  console.info('returnData: ' + returnData);
}

```

