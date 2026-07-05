# SignatureUtils

用于ECC/SM2签名数据转换的工具类。

**Since:** 20

**System capability:** SystemCapability.Security.CryptoFramework.Signature

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## genEccSignature

```TypeScript
static genEccSignature(spec: EccSignatureSpec): Uint8Array
```

将（r、s）的ECC/SM2签名数据转换为ASN1 DER格式。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| spec | EccSignatureSpec | Yes | （r、s）的ECC/SM2签名数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | ASN1 DER格式的签名数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17620002 | 获取Native对象失败或参数转换失败。 |
| 17620003 | 参数检查失败。可能的原因：  1. spec参数的r或s值为0或过大。 |
| 17630001 | 密码操作错误。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

function testGenEccSignature() {
  try {
    let spec: cryptoFramework.EccSignatureSpec = {
      r: BigInt('97726608965854271693043443511967021777934035174185659091642456228829830775155'),
      s: BigInt('23084224202834231287427338597254751764391338275617140205467537273296855150376'),
    }

    let data = cryptoFramework.SignatureUtils.genEccSignature(spec)
    console.info('genEccSignature result: success.');
    console.info('data = ' + data)
  } catch (err) {
    let e: BusinessError = err as BusinessError;
    console.error(`ecc failed: errCode: ${e.code}, errMsg: ${e.message}`);
  }
}

```

## genEccSignatureSpec

```TypeScript
static genEccSignatureSpec(data: Uint8Array): EccSignatureSpec
```

从ASN1 DER格式的ECC/SM2签名数据获取r和s。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Uint8Array | Yes | ASN1 DER格式的签名数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| EccSignatureSpec | 包含r和s的数据对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17620002 | 获取Native对象失败或参数转换失败。 |
| 17620003 | 参数检查失败。可能的原因：  1. data参数长度为0或过大。 |
| 17630001 | 密码操作错误。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

function testGenEccSignatureSpec() {
  try {
    let data =
      new Uint8Array([48, 69, 2, 33, 0, 216, 15, 76, 238, 158, 165, 108, 76, 72, 63, 115, 52, 255, 51, 149, 54, 224,
        179, 49, 225, 70, 36, 117, 88, 154, 154, 27, 194, 161, 3, 1, 115, 2, 32, 51, 9, 53, 55, 248, 82, 7, 159, 179,
        144, 57, 151, 195, 17, 31, 106, 123, 32, 139, 219, 6, 253, 62, 240, 181, 134, 214, 107, 27, 230, 175, 40])
    let spec: cryptoFramework.EccSignatureSpec = cryptoFramework.SignatureUtils.genEccSignatureSpec(data)
    console.info('genEccSignatureSpec result: success.');
  } catch (err) {
    let e: BusinessError = err as BusinessError;
    console.error(`ecc failed: errCode: ${e.code}, errMsg: ${e.message}`);
  }
}

```

