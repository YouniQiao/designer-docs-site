# SymKey

对称密钥，是[Key]cryptoFramework.Key的子类，在对称加解密时需要将其对象传入 [Cipher]cryptoFramework.Cipher实例的 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法使用。 对称密钥通过对称密钥生成器[SymKeyGenerator]cryptoFramework.SymKeyGenerator来生成。

**继承实现关系：** SymKey继承自：Key。

**起始版本：** 9

**系统能力：** SystemCapability.Security.CryptoFramework.Key.SymKey

## 导入模块

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## clearMem

```TypeScript
clearMem(): void
```

同步方法，将系统底层内存中的密钥数据清零。建议在不再使用对称密钥实例时调用此函数，避免密钥数据在内存中存留过久。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Key.SymKey

**示例：**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function testGenerateAesKeyFun() {
  let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
  let key = await symKeyGenerator.generateSymKey();
  let encodedKey = key.getEncoded();
  console.info('key blob: '+ encodedKey.data);
  key.clearMem();
  encodedKey = key.getEncoded();
  console.info('key blob：' + encodedKey.data);
}

```

