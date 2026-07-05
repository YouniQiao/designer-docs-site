# @ohos.security.cryptoFramework

提供统一的密码算法库加解密接口，以屏蔽底层硬件和算法库。

**Since:** 9

**System capability:** SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAsyKeyGenerator](arkts-cryptoframework-createasykeygenerator-f.md#createAsyKeyGenerator-1) | 通过指定算法名称的字符串，获取相应的非对称密钥生成器实例。 支持的规格详见 [非对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)。 |
| [createAsyKeyGeneratorBySpec](arkts-cryptoframework-createasykeygeneratorbyspec-f.md#createAsyKeyGeneratorBySpec-1) | 指定密钥参数，获取AsyKeyGeneratorBySpec非对称密钥生成器实例。 |
| [createCipher](arkts-cryptoframework-createcipher-f.md#createCipher-1) | 通过指定算法名称，获取相应的[Cipher]{@link cryptoFramework.Cipher}实例。 > **说明：** > > 1. 在对称加解密中，PKCS #5和PKCS #7的实现方式相同，即补位长度和块大小保持一致。3DES补位为8字节，AES补位为16字节。**NoPadding** > 表示不进行补位。 > 需要了解不同分组模式的区别，使用正确的参数规格。例如，ECB和CBC模式需要补位，否则需保证明文长度为块大小的整数倍。其他模式建议不补位， > 此时密文长度和明文长度一致。 > 2. 使用RSA或SM2进行非对称加解密时，需要创建两个**Cipher**对象分别进行加密和解密。对称加解密不需要如此，算法规格相同时，可以使用同 > 一个**Cipher**对象进行加解密。 |
| [createKdf](arkts-cryptoframework-createkdf-f.md#createKdf-1) | 密钥派生函数（key derivation function）实例生成。 |
| [createKem](arkts-cryptoframework-createkem-f.md#createKem-1) | 创建一个用于密钥封装和解封装操作的KEM实例。 |
| [createKeyAgreement](arkts-cryptoframework-createkeyagreement-f.md#createKeyAgreement-1) | 生成KeyAgreement实例。 |
| [createMac](arkts-cryptoframework-createmac-f.md#createMac-1) | 生成Mac实例，用于消息认证码的计算与操作。 支持的规格详见[HMAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。 |
| [createMac](arkts-cryptoframework-createmac-f.md#createMac-2) | 生成Mac实例，用于进行消息认证码的计算与操作。 支持的规格详见[MAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。 |
| [createMd](arkts-cryptoframework-createmd-f.md#createMd-1) | 生成Md实例，用于进行消息摘要的计算与操作。 支持的规格详见 [MD消息摘要算法规格](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest-overview.md#支持的算法与规格)。 |
| [createRandom](arkts-cryptoframework-createrandom-f.md#createRandom-1) | 生成Random实例，用于进行随机数的计算与设置种子。 |
| [createSign](arkts-cryptoframework-createsign-f.md#createSign-1) | 生成Sign实例。 |
| [createSymKeyGenerator](arkts-cryptoframework-createsymkeygenerator-f.md#createSymKeyGenerator-1) | 通过指定算法名称获取相应的对称密钥生成器实例。 支持的规格详见 [对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)。 |
| [createVerify](arkts-cryptoframework-createverify-f.md#createVerify-1) | 生成Verify实例。 |

### Classes

| Name | Description |
| --- | --- |
| [DHKeyUtil](arkts-cryptoframework-dhkeyutil-c.md) | 根据素数P的长度和私钥长度（bit位数）生成DH公共密钥参数。 |
| [ECCKeyUtil](arkts-cryptoframework-ecckeyutil-c.md) | 提供ECC密钥参数生成和基于指定椭圆曲线的点转换工具。 |
| [SignatureUtils](arkts-cryptoframework-signatureutils-c.md) | 用于ECC/SM2签名数据转换的工具类。 |
| [SM2CryptoUtil](arkts-cryptoframework-sm2cryptoutil-c.md) | 用于SM2密码学运算的工具类。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AeadParamsSpec](arkts-cryptoframework-aeadparamsspec-i.md) | 用于AEAD（带附加数据的认证加密）对称加解密的 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法参数，继承自 [ParamsSpec]{@link cryptoFramework.ParamsSpec}。 适用于[AES算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#aes)的CCM和GCM分组模式。 适用于[SM4算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#sm4)的GCM分组模式。 适用于[ChaCha20-Poly1305算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20) 分组模式。 > **说明：** > > 在AES-CCM模式下使用AeadParamsSpec加密时： > - 如果加密时指定了tag长度，解密时也必须传入相同的长度。 > > - CCM模式下[update]{@link cryptoFramework.Cipher.update}与[doFinal]{@link cryptoFramework.Cipher.doFinal}只能调用其 > 中一个进行加密或者解密，且每个方法只能调用一次。 |
| [AsyKeyGenerator](arkts-cryptoframework-asykeygenerator-i.md) | 非对称密钥生成器。在使用该类的方法前，需要先使用[createAsyKeyGenerator]{@link cryptoFramework.createAsyKeyGenerator}方法构建 一个AsyKeyGenerator实例。 |
| [AsyKeyGeneratorBySpec](arkts-cryptoframework-asykeygeneratorbyspec-i.md) | AsyKeyGeneratorBySpec非对称密钥生成器。在使用该类的方法前，需要先使用 [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法构建一个AsyKeyGeneratorBySpec 实例。 |
| [AsyKeySpec](arkts-cryptoframework-asykeyspec-i.md) | 指定非对称密钥参数的基本接口，用于创建密钥生成器。在指定非对称密钥参数时需要构造其子类对象，并将子类对象传入 [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法创建密钥生成器。构造子类对象时， 除了RSA密钥采用小端写法外，其他bigint类型的密钥参数均采用大端写法，并使用正数。 |
| [CcmParamsSpec](arkts-cryptoframework-ccmparamsspec-i.md) | 加解密参数[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，封装使用CCM AEAD模式进行加密或解密的参数，需要IV、AAD和认证 标签。它是[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，用于在对称加解密时作为 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法的参数。 适用于CCM模式。 > **说明：** > > 传入[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法前需 > 要指定其algName属性（来源于父类[ParamsSpec]{@link cryptoFramework.ParamsSpec}）。 |
| [Cipher](arkts-cryptoframework-cipher-i.md) | 提供加解密的算法操作功能，按序调用本类中的 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}、 [update()]{@link cryptoFramework.Cipher.update(data: DataBlob, callback: AsyncCallback<DataBlob>)}、 [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)}方法， 可以实现对称加密/对称解密/非对称加密/非对称解密。 完整的加解密流程示例可参考[开发指南](docroot://security/CryptoArchitectureKit/crypto-encryption-decryption-overview.md)。 一次完整的加/解密流程在对称加密和非对称加密中略有不同： - 对称加解密：init为必选，update为可选（且允许多次update加/解密大数据），doFinal为必选；doFinal结束后可以重新init开始新一轮加/解密 流程。 - RSA、SM2非对称加解密：init为必选，不支持update操作，doFinal为必选（允许连续多次doFinal加/解密大数据）；RSA不支持重复init，切换 加解密模式或填充方式时，需要重新创建Cipher对象。 |
| [CmacSpec](arkts-cryptoframework-cmacspec-i.md) | 消息认证码参数[MacSpec]{@link cryptoFramework.MacSpec}的子类，作为CMAC计算的输入。 > **说明：** > > cipherName是必选参数，表示CMAC使用的对称密码算法。 |
| [DataBlob](arkts-cryptoframework-datablob-i.md) | 二进制数据的封装接口，核心字段data为Uint8Array类型。 > **说明：** > > Uint8Array类型数据表示8位无符号整数的数组。 |
| [DHCommonParamsSpec](arkts-cryptoframework-dhcommonparamsspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DH算法中公私钥包含的公共参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [DHKeyPairSpec](arkts-cryptoframework-dhkeypairspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DH算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [DHPriKeySpec](arkts-cryptoframework-dhprikeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DH算法中私钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [DHPubKeySpec](arkts-cryptoframework-dhpubkeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DH算法中公钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [DSACommonParamsSpec](arkts-cryptoframework-dsacommonparamsspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DSA算法中公私钥包含的公共参数，随机生成公/私钥。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [DSAKeyPairSpec](arkts-cryptoframework-dsakeypairspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DSA算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [DSAPubKeySpec](arkts-cryptoframework-dsapubkeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DSA算法中公钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [ECCCommonParamsSpec](arkts-cryptoframework-ecccommonparamsspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定ECC算法中公私钥包含的公共参数，随机生成公/私钥。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [ECCKeyPairSpec](arkts-cryptoframework-ecckeypairspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定ECC算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [ECCPriKeySpec](arkts-cryptoframework-eccprikeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定ECC算法中私钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [ECCPubKeySpec](arkts-cryptoframework-eccpubkeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定ECC算法中公钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [EccSignatureSpec](arkts-cryptoframework-eccsignaturespec-i.md) | 包含（r、s）的ECC/SM2签名数据的对象。 > **说明：** > > r和s的长度各为256位。 |
| [ECField](arkts-cryptoframework-ecfield-i.md) | 指定椭圆曲线的域类型。当前只支持Fp域。 |
| [ECFieldFp](arkts-cryptoframework-ecfieldfp-i.md) | 指定椭圆曲线的素数域。是[ECField]{@link cryptoFramework.ECField}的子类。 |
| [ED25519KeyPairSpec](arkts-cryptoframework-ed25519keypairspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定Ed25519算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [ED25519PriKeySpec](arkts-cryptoframework-ed25519prikeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定Ed25519算法中私钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [ED25519PubKeySpec](arkts-cryptoframework-ed25519pubkeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定Ed25519算法中公钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [GcmParamsSpec](arkts-cryptoframework-gcmparamsspec-i.md) | 加解密参数[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，封装使用GCM AEAD模式进行加密或解密的参数，需要IV、AAD和认证 标签。它是[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，用于在对称加解密时作为 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法的参数。 适用于GCM模式。 > **说明：** > > 1. 传入[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法前需 > 要指定其algName属性（来源于父类[ParamsSpec]{@link cryptoFramework.ParamsSpec}）。 > 2. 如果不需要aad或者aad长度为0，构造GcmParamsSpec时可以将aad的data属性设置为空的Uint8Array， > 即aad: { data: new Uint8Array() }。 |
| [HKDFSpec](arkts-cryptoframework-hkdfspec-i.md) | 密钥派生函数参数[KdfSpec]{@link cryptoFramework.KdfSpec}的子类，作为HKDF密钥派生函数进行密钥派生时的输入。 > **说明：** > > key指的是用户输入的最初的密钥材料。根据模式的不同info与salt可以传空，但是不可不传。 > > 例如：EXTRACT_AND_EXPAND模式需要输入全部的值，EXTRACT_ONLY模式info可以为空，在构建HKDFSpec的时候，info传入null值。 > > 默认的模式为EXTRACT_AND_EXPAND，"HKDF|SHA256|EXTRACT_AND_EXPAND"等价于"HKDF|SHA256"。 |
| [HmacSpec](arkts-cryptoframework-hmacspec-i.md) | 消息认证码参数[MacSpec]{@link cryptoFramework.MacSpec}的子类，作为HMAC计算的输入。 > **说明：** > > mdName是必选参数，表示HMAC摘要算法。 |
| [IvParamsSpec](arkts-cryptoframework-ivparamsspec-i.md) | 加解密参数[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，用于在对称加解密时作为 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法的参数。 适用于CBC、CTR、OFB、CFB这些需要iv作为参数的加解密模式。 > **说明：** > > 传入[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法前需要 > 指定其algName属性（来源于父类[ParamsSpec]{@link cryptoFramework.ParamsSpec}）。 |
| [Kdf](arkts-cryptoframework-kdf-i.md) | 密钥派生函数（key derivation function）类，使用密钥派生方法之前需要创建该类的实例进行操作，通过createKdf(algName: string): Kdf 方法构造此实例。 |
| [KdfSpec](arkts-cryptoframework-kdfspec-i.md) | 密钥派生函数参数，使用密钥派生函数进行密钥派生时，需要构建其子类对象并作为输入。 |
| [Kem](arkts-cryptoframework-kem-i.md) | 提供KEM密钥封装和解封装操作的API。 |
| [KemEncapResult](arkts-cryptoframework-kemencapresult-i.md) | KEM封装结果。 |
| [Key](arkts-cryptoframework-key-i.md) | 密钥（父类），在运行密码算法（如加解密）时需要提前生成其子类对象，并传入[Cipher]{@link cryptoFramework.Cipher}实例的 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法。 密钥通过子类密钥生成器来生成，详见子类描述。具体子类有： [SymKey]{@link cryptoFramework.SymKey}、[PubKey]{@link cryptoFramework.PubKey}、 [PriKey]{@link cryptoFramework.PriKey}。 |
| [KeyAgreement](arkts-cryptoframework-keyagreement-i.md) | KeyAgreement类，使用密钥协商方法之前需要创建该类的实例进行操作，通过 [createKeyAgreement(algName: string): KeyAgreement]{@link cryptoFramework.createKeyAgreement}方法构造此实例。 |
| [KeyEncodingConfig](arkts-cryptoframework-keyencodingconfig-i.md) | RSA私钥编码参数，使用获取私钥字符串时，可以添加此参数，生成指定算法、密码的编码后的私钥字符串。 > **说明：** > > - password是必选参数，表示编码用到的密码。 > > - cipherName是必选参数，指定编码用到的算法。当前仅支持AES-128-CBC、AES-192-CBC、AES-256-CBC、DES-EDE3-CBC。 |
| [KeyPair](arkts-cryptoframework-keypair-i.md) | 非对称密钥对包含公钥和私钥。 可以通过非对称密钥生成器[AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator}、 [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}来生成。 > **说明：** > > KeyPair对象中的pubKey对象和priKey对象是KeyPair对象的成员。当KeyPair对象超出作用域时，其内部的pubKey对象和priKey对象将被析构。 > > 业务方使用时应持有KeyPair对象的引用，而非内部pubKey或priKey对象的引用。 |
| [Mac](arkts-cryptoframework-mac-i.md) | Mac类，调用Mac方法进行消息认证码（Message Authentication Code）计算。调用前，需要通过 [createMac]{@link cryptoFramework.createMac(algName: string)}构造Mac实例。 |
| [MacSpec](arkts-cryptoframework-macspec-i.md) | 消息认证码参数，计算HMAC或CMAC时，需要构建子类对象并作为输入参数。 > **说明：** > > algName是必选参数，表示消息认证码算法。 |
| [Md](arkts-cryptoframework-md-i.md) | Md类，调用Md方法进行消息摘要（Message Digest）计算。调用前，需要通过[createMd]{@link cryptoFramework.createMd}构造Md实例。 |
| [ParamsSpec](arkts-cryptoframework-paramsspec-i.md) | 加解密参数，在进行对称加解密时需要构造其子类对象，并将子类对象传入 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法。 适用于需要iv等参数的对称加解密模式（对于无iv等参数的模式如ECB模式，无需构造，在 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}中传入null即可）。 > **说明：** > > iv（Initialization Vector，初始化向量）是用于对称加密模式（如 CBC/CTR/OFB/CFB/GCM/CCM/ChaCha20-Poly1305）中引入随机性或 > 唯一性的字节序列，保证相同明文在相同密钥下产生不同密文。 > **说明：** > > 由于[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}的params > 参数是ParamsSpec类型（父类），而实际需要传入具体的子类对象（如[IvParamsSpec]{@link cryptoFramework.IvParamsSpec}），因此在 > 构造子类对象时应设置其父类ParamsSpec的algName参数，使算法库在init()时知道传入的是哪种子类对象。 |
| [PBKDF2Spec](arkts-cryptoframework-pbkdf2spec-i.md) | 密钥派生函数参数[KdfSpec]{@link cryptoFramework.KdfSpec}的子类，作为PBKDF2密钥派生函数进行密钥派生时的输入。 > **说明：** > > password 是原始密码。如果使用 string 类型，需直接传入用于密钥派生的数据，而不是 HexString 或 base64 等字符串类型，并确保该字符串 > 为 UTF-8 编码，否则派生结果会有差异。 |
| [Point](arkts-cryptoframework-point-i.md) | 指定椭圆曲线上的一个点。 |
| [Poly1305ParamsSpec](arkts-cryptoframework-poly1305paramsspec-i.md) | 加解密参数[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，封装使用ChaCha20-Poly1305 AEAD模式进行加密或解密的参数， 需要nonce、AAD和认证标签。它是 [ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，用于在对称加解密时作为 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法的参数。 适用于[ChaCha20-Poly1305](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20)。 > **说明：** > > 传入[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法前需要 > 指定其algName属性（来源于父类[ParamsSpec]{@link cryptoFramework.ParamsSpec}）。 > > 在ChaCha20-Poly1305加密时，需从 > [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)}或 > [doFinalSync()]{@link cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)}输出的 > [DataBlob]{@link cryptoFramework.DataBlob}末尾提取16字节，作为解密时 > [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}或 > [initSync()]{@link cryptoFramework.Cipher.initSync}方法的参数 > [Poly1305ParamsSpec]{@link cryptoFramework.Poly1305ParamsSpec}中的authTag。 |
| [PriKey](arkts-cryptoframework-prikey-i.md) | 私钥，是[Key]{@link cryptoFramework.Key}的子类，在非对称解密、签名、密钥协商时需要将其作为输入使用。 私钥可以通过非对称密钥生成器[AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator}、 [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}来生成。 |
| [PubKey](arkts-cryptoframework-pubkey-i.md) | 公钥，是[Key]{@link cryptoFramework.Key}的子类，在非对称加密、签名验证、密钥协商时需要将其对象作为输入使用。 公钥可以通过非对称密钥生成器[AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator}、 [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}来生成。 |
| [Random](arkts-cryptoframework-random-i.md) | Random类，调用Random方法生成随机数。调用前，需要通过[createRandom]{@link cryptoFramework.createRandom}构造Random实例。 |
| [RSACommonParamsSpec](arkts-cryptoframework-rsacommonparamsspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定RSA算法中公私钥包含的公共参数，随机生成公/私钥。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [RSAKeyPairSpec](arkts-cryptoframework-rsakeypairspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定RSA算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [RSAPubKeySpec](arkts-cryptoframework-rsapubkeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定RSA算法中公钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [ScryptSpec](arkts-cryptoframework-scryptspec-i.md) | 密钥派生函数参数[KdfSpec]{@link cryptoFramework.KdfSpec}的子类，作为SCRYPT密钥派生函数进行密钥派生时的输入。 > **说明：** > > passphrase指的是原始密码，如果使用string类型，需要直接传入用于密钥派生的数据，而不是HexString、base64等字符串类型，同时需要确保该 > 字符串为utf-8编码，否则派生结果会有差异。 |
| [Sign](arkts-cryptoframework-sign-i.md) | Sign类，使用Sign方法之前需要创建该类的实例进行操作，通过 [createSign(algName: string): Sign]{@link cryptoFramework.createSign}方法构造此实例。按序调用本类中的init、update、sign 方法完成签名操作。签名操作的示例代码详见 [签名验签开发指导](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1.md)。 Sign类不支持重复初始化，当业务方需要使用新密钥签名时，需要重新创建新Sign对象并调用init初始化。 业务方使用时，调用createSign接口确定签名的模式，调用init接口设置密钥。 当待签名数据长度较短时，可在初始化后直接调用sign接口传入数据进行签名，无需调用update。 当待签名数据较长时，可通过update接口分段传入切分后的原文数据，最后调用sign接口对整体原文数据进行签名。 当使用update分段传入原文时，sign接口API 10之前只支持传入DataBlob， API 10之后增加支持null。业务方可在循环中调用update接口，循环 结束后调用sign进行签名。 使用DSA算法签名时，如果摘要算法设置为NoHash，则不支持update操作，调用update接口将返回错误码ERR_CRYPTO_OPERATION。 |
| [SM2CipherTextSpec](arkts-cryptoframework-sm2ciphertextspec-i.md) | SM2密文参数，使用SM2密文格式转换函数进行格式转换时，需要用到此对象。可以通过指定此参数，生成符合国密标准的ASN.1格式的SM2密文，反之， 也可以从ASN.1格式的SM2密文中获取具体参数。 > **说明：** > > - hashData为使用SM3算法对明文数据运算得到的杂凑值，其长度固定为256位。 > > - cipherTextData是与明文等长的密文。 > > - 在拼接生成C1C3C2格式的密文时，如果x分量（C1_X）或y分量（C1_Y）的长度不足32字节，需要在高位补0，使得x分量和y分量的长度均为32字节。 |
| [SymKey](arkts-cryptoframework-symkey-i.md) | 对称密钥，是[Key]{@link cryptoFramework.Key}的子类，在对称加解密时需要将其对象传入 [Cipher]{@link cryptoFramework.Cipher}实例的 [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法使用。 对称密钥通过对称密钥生成器[SymKeyGenerator]{@link cryptoFramework.SymKeyGenerator}来生成。 |
| [SymKeyGenerator](arkts-cryptoframework-symkeygenerator-i.md) | 对称密钥生成器。 在使用该类的方法前，先使用[createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}构建SymKeyGenerator实例。 |
| [Verify](arkts-cryptoframework-verify-i.md) | Verify类，使用Verify方法之前需要创建该类的实例进行操作，通过 [createVerify(algName: string): Verify]{@link cryptoFramework.createVerify}方法构造此实例。按序调用本类中的init、update、 verify方法完成签名操作。验签操作的示例代码详见 [签名验签开发指导](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1.md)。 Verify类不支持重复初始化，当业务方需要使用新密钥验签时，需要重新创建新Verify对象并调用init初始化。 业务方使用时，在createVerify时确定验签的模式，调用init接口设置密钥。 当被签名的消息较短时，可在init初始化后，（无需update）直接调用verify接口传入被签名的消息和签名（signatureData）进行验签。 当被签名的消息较长时，可通过update接口分段传入被签名的消息，最后调用verify接口对消息全文进行验签。verify接口的data入参在API 10之前只 支持DataBlob， API 10之后增加支持null。业务方可在循环中调用update接口，循环结束后调用verify传入签名（signatureData）进行验签。 当使用DSA算法进行验签，并设置了摘要算法为NoHash时，则不支持update操作，update接口会返回错误码ERR_CRYPTO_OPERATION。 |
| [X25519KeyPairSpec](arkts-cryptoframework-x25519keypairspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定X25519算法中公私钥包含的全量参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [X25519PriKeySpec](arkts-cryptoframework-x25519prikeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定X25519算法中私钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [X25519PubKeySpec](arkts-cryptoframework-x25519pubkeyspec-i.md) | 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定X25519算法中公钥包含的参数。 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法 创建密钥生成器。 |
| [X963KdfSpec](arkts-cryptoframework-x963kdfspec-i.md) | 密钥派生函数参数[KdfSpec]{@link cryptoFramework.KdfSpec}的子类，作为X963KDF密钥派生函数进行密钥派生时的输入。 > **说明：** > > key指的是用户输入的最初的密钥材料。 |

### Enums

| Name | Description |
| --- | --- |
| [AsyKeyDataItem](arkts-cryptoframework-asykeydataitem-e.md) | 表示非对称密钥数据项类型的枚举。 |
| [AsyKeySpecItem](arkts-cryptoframework-asykeyspecitem-e.md) | 表示密钥参数的枚举。 |
| [AsyKeySpecType](arkts-cryptoframework-asykeyspectype-e.md) | 表示密钥参数类型的枚举。 |
| [CipherSpecItem](arkts-cryptoframework-cipherspecitem-e.md) | 表示加解密参数的枚举。这些参数支持通过[setCipherSpec]{@link cryptoFramework.Cipher.setCipherSpec}接口设置，通过 [getCipherSpec]{@link cryptoFramework.Cipher.getCipherSpec}接口获取。 当前只支持RSA算法和SM2算法，从API version 11开始，增加对SM2_MD_NAME_STR参数的支持，详细规格请参考 [加解密规格](docroot://security/CryptoArchitectureKit/crypto-asym-encrypt-decrypt-spec.md)。 API version 10-11 系统能力为 SystemCapability.Security.CryptoFramework；从 API version 12 开始为 SystemCapability.Security.CryptoFramework.Cipher |
| [CryptoMode](arkts-cryptoframework-cryptomode-e.md) | 枚举加密和解密的密码操作模式。 |
| [KemAlgNameId](arkts-cryptoframework-kemalgnameid-e.md) | 枚举KEM算法名称ID。 |
| [Result](arkts-cryptoframework-result-e.md) | 表示执行结果的枚举。 |
| [SignSpecItem](arkts-cryptoframework-signspecitem-e.md) | 表示签名验签参数的枚举。这些参数支持通过 [setSignSpec]{@link cryptoFramework.Sign.setSignSpec(itemType: SignSpecItem, itemValue: int)}、 [setVerifySpec]{@link cryptoFramework.Verify.setVerifySpec(itemType: SignSpecItem, itemValue: int)}接口设置，通过 [getSignSpec]{@link cryptoFramework.Sign.getSignSpec}、[getVerifySpec]{@link cryptoFramework.Verify.getVerifySpec}接口 获取。 当前只支持RSA算法和SM2算法，从API version 11开始，增加对SM2_USER_ID_UINT8ARR参数的支持，详细规格请参考 [签名验签规格](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)。 |

