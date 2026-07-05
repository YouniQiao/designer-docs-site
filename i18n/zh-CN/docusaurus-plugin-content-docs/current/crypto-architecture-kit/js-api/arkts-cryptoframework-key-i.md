# Key

密钥（父类），在运行密码算法（如加解密）时需要提前生成其子类对象，并传入[Cipher]cryptoFramework.Cipher实例的 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法。 密钥通过子类密钥生成器来生成，详见子类描述。具体子类有： [SymKey]cryptoFramework.SymKey、[PubKey]cryptoFramework.PubKey、 [PriKey]cryptoFramework.PriKey。

**起始版本：** 9

**系统能力：** SystemCapability.Security.CryptoFramework.Key

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## getEncoded

```TypeScript
getEncoded(): DataBlob
```

同步方法，获取密钥数据的字节流。密钥可以是对称密钥、公钥或私钥。公钥格式需符合ASN.1语法、X.509规范和DER编码；私钥格式需符合ASN.1 语法、PKCS#8规范和DER编码。 > **说明：** > > RSA算法使用密钥参数生成私钥时，私钥对象支持getEncoded。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataBlob | 获取的密钥数据。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | 该操作不支持。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

**示例：**

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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 获取密钥的比特长度。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17620002 | 获取Native对象失败或参数转换失败。 |
| 17630001 | 密码操作错误。 |

**示例：**

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

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key

## algName

```TypeScript
readonly algName: string
```

密钥对应的算法名（如果是对称密钥，则含密钥长度，否则不含密钥长度）。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key

