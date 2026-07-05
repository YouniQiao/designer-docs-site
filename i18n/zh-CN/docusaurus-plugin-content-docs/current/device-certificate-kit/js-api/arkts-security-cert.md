# @ohos.security.cert

证书算法库框架提供证书相关接口。其中，依赖加解密算法库框架的基础算法能力的部分，详细接口说明可参考 [cryptoFramework API参考]{@link @ohos.security.cryptoFramework:cryptoFramework}。

**起始版本：** 9

**系统能力：** SystemCapability.Security.Cert

## 导入模块

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [buildX509CertChain](arkts-cert-buildx509certchain-f.md#buildX509CertChain-1) | 表示使用CertChainBuildParameters对象方式创建X509证书链对象。使用Promise方式返回结果。 |
| [createCertCRLCollection](arkts-cert-createcertcrlcollection-f.md#createCertCRLCollection-1) | 表示创建证书和证书吊销列表集合对象，并返回相应的结果。 |
| [createCertChainValidator](arkts-cert-createcertchainvalidator-f.md#createCertChainValidator-1) | 表示创建证书链校验器对象。 |
| [createCertExtension](arkts-cert-createcertextension-f.md#createCertExtension-1) | 表示创建证书扩展域段的对象。使用Callback异步回调。 |
| [createCertExtension](arkts-cert-createcertextension-f.md#createCertExtension-2) | 表示创建证书扩展域段的对象。使用Promise方式返回结果。 |
| [createCmsGenerator](arkts-cert-createcmsgenerator-f.md#createCmsGenerator-1) | 表示创建CmsGenerator对象。 |
| [createCmsParser](arkts-cert-createcmsparser-f.md#createCmsParser-1) | 表示创建CmsParser对象。 |
| [createPkcs12](arkts-cert-createpkcs12-f.md#createPkcs12-1) | 表示创建P12。使用Promise方式返回结果。 |
| [createPkcs12Sync](arkts-cert-createpkcs12sync-f.md#createPkcs12Sync-1) | 表示创建P12，同步返回结果。 |
| [createTrustAnchorsWithKeyStore](arkts-cert-createtrustanchorswithkeystore-f.md#createTrustAnchorsWithKeyStore-1) | 表示从P12中读取ca证书来构造[TrustAnchor]{@link cert.X509TrustAnchor}对象数组。使用Promise方式返回结果。 |
| [createX500DistinguishedName](arkts-cert-createx500distinguishedname-f.md#createX500DistinguishedName-1) | 表示使用字符串格式的名称创建X500DistinguishedName对象。使用Promise方式返回结果。 |
| [createX500DistinguishedName](arkts-cert-createx500distinguishedname-f.md#createX500DistinguishedName-2) | 表示使用DER格式的名称创建X500DistinguishedName对象。使用Promise方式返回结果。 |
| [createX509CRL](arkts-cert-createx509crl-f.md#createX509CRL-1) | 表示创建X509证书吊销列表的对象。使用Callback异步回调。 |
| [createX509CRL](arkts-cert-createx509crl-f.md#createX509CRL-2) | 表示创建X509证书吊销列表的对象。使用Promise方式返回结果。 |
| [createX509Cert](arkts-cert-createx509cert-f.md#createX509Cert-1) | 表示创建X509证书对象。使用Callback异步回调。 |
| [createX509Cert](arkts-cert-createx509cert-f.md#createX509Cert-2) | 表示创建X509证书对象。使用Promise方式返回结果。 |
| [createX509CertChain](arkts-cert-createx509certchain-f.md#createX509CertChain-1) | 表示创建X509证书链对象。使用Promise方式返回结果。 |
| [createX509CertChain](arkts-cert-createx509certchain-f.md#createX509CertChain-2) | 表示创建X509证书链对象。使用Callback异步回调。 |
| [createX509CertChain](arkts-cert-createx509certchain-f.md#createX509CertChain-3) | 表示使用X509Cert数组方式创建X509证书链对象，并同步返回结果。 |
| [createX509Crl](arkts-cert-createx509crl-f.md#createX509Crl-1) | 表示创建X509证书吊销列表的对象。使用Callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃，建议使用 > [cert.createX509CRL()]{@link cert.createX509CRL(inStream: EncodingBlob, callback: AsyncCallback<X509CRL>)}替代。 |
| [createX509Crl](arkts-cert-createx509crl-f.md#createX509Crl-2) | 表示创建X509证书吊销列表的对象。使用Promise方式返回结果。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃，建议使用 > [cert.createX509CRL()]{@link cert.createX509CRL(inStream: EncodingBlob)}替代。 |
| [generateCsr](arkts-cert-generatecsr-f.md#generateCsr-1) | 表示使用指定的私钥，传入主体、扩展、摘要算法、输出格式等配置参数去生成CSR。 |
| [parsePkcs12](arkts-cert-parsepkcs12-f.md#parsePkcs12-1) | 解析P12。 |
| [parsePkcs12](arkts-cert-parsepkcs12-f.md#parsePkcs12-2) | 解析P12。使用Promise方式返回结果。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CertChainBuildParameters](arkts-cert-certchainbuildparameters-i.md) | 用于指定证书链创建参数。 |
| [CertChainBuildResult](arkts-cert-certchainbuildresult-i.md) | 用于指定证书链创建结果。 |
| [CertChainData](arkts-cert-certchaindata-i.md) | 证书链数据，在证书链校验时，作为入参传入。 |
| [CertChainValidationParameters](arkts-cert-certchainvalidationparameters-i.md) | 表示证书链校验的参数。 |
| [CertChainValidationResult](arkts-cert-certchainvalidationresult-i.md) | 表示证书链校验的返回值。 |
| [CertChainValidator](arkts-cert-certchainvalidator-i.md) | 证书链校验器对象。 |
| [CertCRLCollection](arkts-cert-certcrlcollection-i.md) | 证书和证书吊销列表集合对象。 |
| [CertExtension](arkts-cert-certextension-i.md) | 证书扩展域段类。 |
| [CertValidationParams](arkts-cert-certvalidationparams-i.md) | 证书验证的参数。 |
| [CertValidationResult](arkts-cert-certvalidationresult-i.md) | 证书验证的结果。 |
| [CmsEnvelopedDecryptionConfig](arkts-cert-cmsenvelopeddecryptionconfig-i.md) | CMS解封装的配置。 |
| [CmsGenerator](arkts-cert-cmsgenerator-i.md) | CmsGenerator对象用于生成CMS（Cryptographic Message Syntax）格式的消息。 > **说明：** > > PKCS #7是用于存储签名或加密数据的标准语法。注意CMS是PKCS #7的扩展，PKCS #7支持的数据类型包括数据、签名数据、封装数据、 > 签名和封装数据、摘要数据、加密数据。常用于保护数据的完整性和机密性。 |
| [CmsGeneratorOptions](arkts-cert-cmsgeneratoroptions-i.md) | 表示生成CMS消息的配置选项。 |
| [CmsKeyAgreeRecipientInfo](arkts-cert-cmskeyagreerecipientinfo-i.md) | CMS封装数据的KeyAgree接收方信息。 |
| [CmsKeyTransRecipientInfo](arkts-cert-cmskeytransrecipientinfo-i.md) | CMS封装数据的KeyTrans接收方信息。 |
| [CmsParser](arkts-cert-cmsparser-i.md) | CmsParser对象用于对CMS签名或封装数据进行验签或解封装。 > **说明：** > > PKCS #7是用于存储签名或加密数据的标准语法。注意CMS是PKCS #7的扩展，PKCS #7支持的数据类型包括数据、签名数据、封装数据、 > 签名和封装数据、摘要数据、加密数据。常用于保护数据的完整性和机密性。 |
| [CmsRecipientInfo](arkts-cert-cmsrecipientinfo-i.md) | CMS封装数据的接收者信息。 > **说明：** > > 至少需要设置一个接收者。 |
| [CmsSignerConfig](arkts-cert-cmssignerconfig-i.md) | 表示Cms签名者的配置选项。 |
| [CmsVerificationConfig](arkts-cert-cmsverificationconfig-i.md) | CMS验签的配置。 |
| [CsrAttribute](arkts-cert-csrattribute-i.md) | 定义CSR属性表示。 CSR属性字段，当前仅支持字符串类型的属性字段，属性值添加到CSR中编码为utf-8。常见的type为challengePassword。 |
| [CsrGenerationConfig](arkts-cert-csrgenerationconfig-i.md) | 用于生成CSR的配置参数，包含主体名称、扩展、摘要算法、输出格式等。 > **说明：** > > - subject是X509定义的Name类型的对象。 > > - mdName是摘要算法名，当前支持SHA1、SHA256、SHA384、SHA512。 > > - attributes是可选参数，指定**PKCS #9**中规定的扩展类型跟扩展值生成CSR。例如challengePassword。 > > - outFormat指定输出CSR的格式，若不指定默认为PEM格式。 |
| [DataArray](arkts-cert-dataarray-i.md) | buffer数组的列表。 |
| [DataBlob](arkts-cert-datablob-i.md) | 二进制数据的封装接口，核心字段data为Uint8Array类型。 |
| [EncodingBlob](arkts-cert-encodingblob-i.md) | 定义编码格式的二进制数据数组。 |
| [GeneralName](arkts-cert-generalname-i.md) | 用于表示GeneralName。 |
| [PbesParams](arkts-cert-pbesparams-i.md) | 表示基于密码的加密算法参数，当前仅支持PBES2。 |
| [Pkcs12CreationConfig](arkts-cert-pkcs12creationconfig-i.md) | 表示创建P12的配置。 |
| [Pkcs12Data](arkts-cert-pkcs12data-i.md) | P12（PKCS #12）数据，包含私钥、证书和其他证书。 |
| [Pkcs12ParsingConfig](arkts-cert-pkcs12parsingconfig-i.md) | 表示解析P12的配置。 |
| [PrivateKeyInfo](arkts-cert-privatekeyinfo-i.md) | 表示私钥信息。 |
| [RevocationCheckParameter](arkts-cert-revocationcheckparameter-i.md) | 表示证书链校验证书吊销状态的参数。 |
| [X500DistinguishedName](arkts-cert-x500distinguishedname-i.md) | X509定义的Name类型的对象。 |
| [X509Cert](arkts-cert-x509cert-i.md) | X509证书类。 |
| [X509CertChain](arkts-cert-x509certchain-i.md) | X509证书链对象。 |
| [X509CertMatchParameters](arkts-cert-x509certmatchparameters-i.md) | 用于匹配证书的过滤参数。如果参数中任一项都未指定，则匹配所有证书。 |
| [X509CertRevokedParams](arkts-cert-x509certrevokedparams-i.md) | 表示证书吊销检查参数。 |
| [X509Crl](arkts-cert-x509crl-i.md) | X.509 CRL操作。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL()]{@link cert.X509CRL}替代。 |
| [X509CRL](arkts-cert-x509crl-i.md) | X.509 CRL操作。 |
| [X509CrlEntry](arkts-cert-x509crlentry-i.md) | 证书吊销条目。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRLEntry()]{@link cert.X509CRLEntry}替代。 |
| [X509CRLEntry](arkts-cert-x509crlentry-i.md) | 证书吊销条目。 |
| [X509CRLMatchParameters](arkts-cert-x509crlmatchparameters-i.md) | 用于匹配证书吊销列表的过滤参数。如果参数中任一项都未指定，则匹配所有证书吊销列表。 |
| [X509TrustAnchor](arkts-cert-x509trustanchor-i.md) | 表示X509信任锚，用于校验证书链。使用信任锚中的证书或者公钥作为可信根，对证书链进行校验。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CertItemType](arkts-cert-certitemtype-e.md) | 表示获取证书字段的枚举。 |
| [CertResult](arkts-cert-certresult-e.md) | 表示执行结果的枚举。 |
| [CertRevocationFlag](arkts-cert-certrevocationflag-e.md) | 表示证书吊销检查标志的枚举。 |
| [CmsCertType](arkts-cert-cmscerttype-e.md) | 从CMS中获取证书不同类型的枚举。 |
| [CmsContentDataFormat](arkts-cert-cmscontentdataformat-e.md) | 表示Cms内容数据格式的枚举。 |
| [CmsContentType](arkts-cert-cmscontenttype-e.md) | 表示Cms内容类型的枚举。 |
| [CmsFormat](arkts-cert-cmsformat-e.md) | 表示CMS编码格式的枚举。 |
| [CmsKeyAgreeRecipientDigestAlgorithm](arkts-cert-cmskeyagreerecipientdigestalgorithm-e.md) | CMS KeyAgree类型接收者摘要算法的枚举。 |
| [CmsRecipientEncryptionAlgorithm](arkts-cert-cmsrecipientencryptionalgorithm-e.md) | CMS封装数据的内容加密算法的枚举。 |
| [CmsRsaSignaturePadding](arkts-cert-cmsrsasignaturepadding-e.md) | 表示RSA类型CMS签名填充方式的枚举。 |
| [EncodingBaseFormat](arkts-cert-encodingbaseformat-e.md) | 表示生成证书相关数据的编码格式的枚举。 |
| [EncodingFormat](arkts-cert-encodingformat-e.md) | 表示证书编码格式的枚举。 |
| [EncodingType](arkts-cert-encodingtype-e.md) | 表示编码格式的枚举。 |
| [ExtensionEntryType](arkts-cert-extensionentrytype-e.md) | 表示获取扩展域中对象类型的枚举。 |
| [ExtensionOidType](arkts-cert-extensionoidtype-e.md) | 表示获取扩展域中对象标识符类型的枚举。 |
| [GeneralNameType](arkts-cert-generalnametype-e.md) | X.509中定义的GeneralName类型的枚举，这些类型可出现在“使用者备用名称”（Subject Alternative Name）及其他扩展项中。 |
| [KeyUsageType](arkts-cert-keyusagetype-e.md) | 表示证书中密钥用途的枚举。 |
| [OcspDigest](arkts-cert-ocspdigest-e.md) | 表示OCSP摘要算法的枚举。 |
| [PbesEncryptionAlgorithm](arkts-cert-pbesencryptionalgorithm-e.md) | 表示基于密码的加密算法枚举。 |
| [Pkcs12MacDigestAlgorithm](arkts-cert-pkcs12macdigestalgorithm-e.md) | 表示P12的MAC摘要算法枚举。 |
| [RevocationCheckOptions](arkts-cert-revocationcheckoptions-e.md) | 表示证书链在线校验证书吊销状态选项的枚举。 |
| [ValidationPolicyType](arkts-cert-validationpolicytype-e.md) | 表示证书链在线校验策略的枚举。 |

