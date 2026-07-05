# createCipher

## createCipher

```TypeScript
function createCipher(transformation: string): Cipher
```

通过指定算法名称，获取相应的[Cipher]cryptoFramework.Cipher实例。 > **说明：** > > 1. 在对称加解密中，PKCS #5和PKCS #7的实现方式相同，即补位长度和块大小保持一致。3DES补位为8字节，AES补位为16字节。**NoPadding** > 表示不进行补位。 > 需要了解不同分组模式的区别，使用正确的参数规格。例如，ECB和CBC模式需要补位，否则需保证明文长度为块大小的整数倍。其他模式建议不补位， > 此时密文长度和明文长度一致。 > 2. 使用RSA或SM2进行非对称加解密时，需要创建两个**Cipher**对象分别进行加密和解密。对称加解密不需要如此，算法规格相同时，可以使用同 > 一个**Cipher**对象进行加解密。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transformation | string | Yes | 待生成Cipher的算法名称（含密钥长度）、加密模式以及填充方法的组合。 支持的规格详见  [对称密钥加解密算法规格](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md)和  [非对称密钥加解密算法规格](docroot://security/CryptoArchitectureKit/crypto-asym-encrypt-decrypt-spec.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Cipher | 返回加解密生成器的对象。 |

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

let cipherAlgName = '3DES192|ECB|PKCS7';
try {
  let cipher = cryptoFramework.createCipher(cipherAlgName);
  console.info('cipher algName: ' + cipher.algName);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`sync failed: errCode: ${e.code}, errMsg: ${e.message}`);
}

```

