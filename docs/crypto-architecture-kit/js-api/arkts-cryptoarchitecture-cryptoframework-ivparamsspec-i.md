# IvParamsSpec

Encapsulates the parameters for encryption or decryption using a block cipher mode that requires an IV. It is a child class of [ParamsSpec](arkts-cryptoarchitecture-cryptoframework-paramsspec-i.md) and used as a parameter in [init()](arkts-cryptoarchitecture-cryptoframework-cipher-i.md#init-1) for symmetric encryption or decryption.

This class is applicable to block cipher modes that require an IV, such as CBC, CTR, OFB, and CFB.

> **NOTE**  
>  
> Before passing a value to  
> [init()](arkts-cryptoarchitecture-cryptoframework-cipher-i.md#init-1), specify  
> **algName** for its parent class [ParamsSpec](arkts-cryptoarchitecture-cryptoframework-paramsspec-i.md).

**Inheritance/Implementation:** IvParamsSpec extends [ParamsSpec](arkts-cryptoarchitecture-cryptoframework-paramsspec-i.md)

**Since:** 9

<!--Device-cryptoFramework-interface IvParamsSpec extends ParamsSpec--><!--Device-cryptoFramework-interface IvParamsSpec extends ParamsSpec-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Cipher
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## iv

```TypeScript
iv: DataBlob
```

IV for encryption or decryption. Options:

- In the CBC, CTR, OFB, or CFB mode of AES: The IV length is 16 bytes.  
- In the CBC, OFB, or CFB mode of 3DES: The IV length is 8 bytes.  
- In the CBC, CTR, OFB, or CFB mode of SM4<sup>10+</sup>: The IV length is 16 bytes.

**Type:** DataBlob

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-IvParamsSpec-iv: DataBlob--><!--Device-IvParamsSpec-iv: DataBlob-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Cipher
- API version 9 to 11: SystemCapability.Security.CryptoFramework

