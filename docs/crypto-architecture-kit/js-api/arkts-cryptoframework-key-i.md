# Key

密钥（父类），在运行密码算法（如加解密）时需要提前生成其子类对象，并传入[Cipher]cryptoFramework.Cipher实例的 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法。 密钥通过子类密钥生成器来生成，详见子类描述。具体子类有： [SymKey]cryptoFramework.SymKey、[PubKey]cryptoFramework.PubKey、 [PriKey]cryptoFramework.PriKey。

**Since:** 9

**System capability:** SystemCapability.Security.CryptoFramework.Key

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## getEncoded

```TypeScript
getEncoded(): DataBlob
```

同步方法，获取密钥数据的字节流。密钥可以是对称密钥、公钥或私钥。公钥格式需符合ASN.1语法、X.509规范和DER编码；私钥格式需符合ASN.1 语法、PKCS#8规范和DER编码。 > **说明：** > > RSA算法使用密钥参数生成私钥时，私钥对象支持getEncoded。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 获取的密钥数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function testGenerateAesKey() {
  let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
  let symKey = await symKeyGenerator.generateSymKey();
  let encodedKey = symKey.getEncoded();
  console.info('key hex: ' + encodedKey.data);
}

```

## getKeySize

```TypeScript
getKeySize(): int
```

以同步方式获取密钥的比特长度。密钥可以是对称密钥、公钥或私钥。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key

**Return value:**

| Type | Description |
| --- | --- |
| int | 获取密钥的比特长度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17620002 | 获取Native对象失败或参数转换失败。 |
| 17630001 | 密码操作错误。 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function testGenerateAesKey() {
  let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
  let symKey = await symKeyGenerator.generateSymKey();
  let symKeyLen = symKey.getKeySize();
  console.info('keysize is: ' + symKeyLen);
}

```

## format

```TypeScript
readonly format: string
```

密钥的格式。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key

## algName

```TypeScript
readonly algName: string
```

密钥对应的算法名（如果是对称密钥，则含密钥长度，否则不含密钥长度）。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key

