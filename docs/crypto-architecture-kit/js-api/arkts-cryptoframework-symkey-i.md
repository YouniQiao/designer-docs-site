# SymKey

对称密钥，是[Key]cryptoFramework.Key的子类，在对称加解密时需要将其对象传入 [Cipher]cryptoFramework.Cipher实例的 [init()]cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)方法使用。 对称密钥通过对称密钥生成器[SymKeyGenerator]cryptoFramework.SymKeyGenerator来生成。

**Inheritance:** SymKeyextends: Key.

**Since:** 9

**System capability:** SystemCapability.Security.CryptoFramework.Key.SymKey

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## clearMem

```TypeScript
clearMem(): void
```

同步方法，将系统底层内存中的密钥数据清零。建议在不再使用对称密钥实例时调用此函数，避免密钥数据在内存中存留过久。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.SymKey

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function testGenerateAesKeyFun() {
  let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
  let key = await symKeyGenerator.generateSymKey();
  let encodedKey = key.getEncoded();
  console.info('key blob: '+ encodedKey.data);
  key.clearMem();
  encodedKey = key.getEncoded();
  console.info('key blob: ' + encodedKey.data);
}

```

