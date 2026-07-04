# IvParamsSpec

Encapsulates the parameters for encryption or decryption using a block cipher mode that requires an IV. It is a child class of [ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md#paramsspec) and used as a parameter in [init()](arkts-cryptoarchitecture-cipher-i.md#init-4) for symmetric encryption or decryption. This class is applicable to block cipher modes that require an IV, such as CBC, CTR, OFB, and CFB. > **NOTE** > > Before passing a value to > [init()](arkts-cryptoarchitecture-cipher-i.md#init-4), specify > **algName** for its parent class [ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md#paramsspec).

**Inheritance/Implementation:** IvParamsSpec extends [ParamsSpec](arkts-cryptoarchitecture-paramsspec-i.md#paramsspec)

**Since:** 9

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Cipher
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## iv

```TypeScript
iv: DataBlob
```

IV for encryption or decryption. Options: - In the CBC, CTR, OFB, or CFB mode of AES: The IV length is 16 bytes. - In the CBC, OFB, or CFB mode of 3DES: The IV length is 8 bytes. - In the CBC, CTR, OFB, or CFB mode of SM4<sup>10+</sup>: The IV length is 16 bytes.

**Type:** DataBlob

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Cipher
- API version 9 to 11: SystemCapability.Security.CryptoFramework

