# @ohos.security.cert

The certificate algorithm library framework provides certificate-related APIs. The **certFramework** module depends
on the basic algorithm capabilities of the Crypto framework. For details, see
[cryptoFramework](../../apis-crypto-architecture-kit/arkts-apis/arkts-security-cryptoframework.md).

**Since:** 9

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [buildX509CertChain](arkts-devicecertificate-buildx509certchain-f.md#buildx509certchain-1) | Builds an X.509 certificate chain with a CertChainBuildParameters object. This API uses a promise to return theresult. |
| [createCertCRLCollection](arkts-devicecertificate-createcertcrlcollection-f.md#createcertcrlcollection-1) | Creates an object for a collection of X.509 certificates and CRLs. |
| [createCertChainValidator](arkts-devicecertificate-createcertchainvalidator-f.md#createcertchainvalidator-1) | Creates a **CertChainValidator** object. |
| [createCertExtension](arkts-devicecertificate-createcertextension-f.md#createcertextension-1) | Creates a certificate extension object. This API uses an asynchronous callback to return the result. |
| [createCertExtension](arkts-devicecertificate-createcertextension-f.md#createcertextension-2) | Creates a certificate extension object. This API uses a promise to return the result. |
| [createCmsGenerator](arkts-devicecertificate-createcmsgenerator-f.md#createcmsgenerator-1) | Creates a **CmsGenerator** object. |
| [createCmsParser](arkts-devicecertificate-createcmsparser-f.md#createcmsparser-1) | Creates a **CmsParser** object. |
| [createPkcs12](arkts-devicecertificate-createpkcs12-f.md#createpkcs12-1) | Creates P12. This API uses a promise to return the result. |
| [createPkcs12Sync](arkts-devicecertificate-createpkcs12sync-f.md#createpkcs12sync-1) | Creates P12. This API returns the result synchronously. |
| [createTrustAnchorsWithKeyStore](arkts-devicecertificate-createtrustanchorswithkeystore-f.md#createtrustanchorswithkeystore-1) | Creates a [TrustAnchor](arkts-devicecertificate-x509trustanchor-i.md) object array by using the CA certificate parsed from a .p12keystore file. This API uses a promise to return the result. |
| [createX500DistinguishedName](arkts-devicecertificate-createx500distinguishedname-f.md#createx500distinguishedname-1) | Creates an **X500DistinguishedName** object with a name in the form of a string. This API uses a promise to returnthe result. |
| [createX500DistinguishedName](arkts-devicecertificate-createx500distinguishedname-f.md#createx500distinguishedname-2) | Creates an **X500DistinguishedName** object with a name in DER format. This API uses a promise to return theresult. |
| [createX509CRL](arkts-devicecertificate-createx509crl-f.md#createx509crl-1) | Creates an **X509CRL** instance. This API uses an asynchronous callback to return the result. |
| [createX509CRL](arkts-devicecertificate-createx509crl-f.md#createx509crl-2) | Creates an **X509CRL** instance. This API uses a promise to return the result. |
| [createX509Cert](arkts-devicecertificate-createx509cert-f.md#createx509cert-1) | Creates an **X509Cert** instance. This API uses an asynchronous callback to return the result. |
| [createX509Cert](arkts-devicecertificate-createx509cert-f.md#createx509cert-2) | Creates an **X509Cert** instance. This API uses a promise to return the result. |
| [createX509CertChain](arkts-devicecertificate-createx509certchain-f.md#createx509certchain-1) | Creates an **X509CertChain** instance. This API uses a promise to return the result. |
| [createX509CertChain](arkts-devicecertificate-createx509certchain-f.md#createx509certchain-2) | Creates an **X509CertChain** instance. This API uses an asynchronous callback to return the result. |
| [createX509CertChain](arkts-devicecertificate-createx509certchain-f.md#createx509certchain-3) | Creates an X.509 certificate chain object based on the specified certificates. This API returns the resultsynchronously. |
| [createX509Crl](arkts-devicecertificate-createx509crl-f.md#createx509crl-1) | Creates an **X509Crl** instance. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; This API is supported since API version 9 and deprecated since API version 11. Use&gt; [cert.createX509CRL()](arkts-devicecertificate-createx509crl-f.md#createx509crl-1) instead. |
| [createX509Crl](arkts-devicecertificate-createx509crl-f.md#createx509crl-2) | Creates an **X509Crl** instance. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; This API is supported since API version 9 and deprecated since API version 11. Use&gt; [cert.createX509CRL()](arkts-devicecertificate-createx509crl-f.md#createx509crl-2) instead. |
| [generateCsr](arkts-devicecertificate-generatecsr-f.md#generatecsr-1) | Generates a CSR. |
| [parsePkcs12](arkts-devicecertificate-parsepkcs12-f.md#parsepkcs12-1) | Parses P12. |
| [parsePkcs12](arkts-devicecertificate-parsepkcs12-f.md#parsepkcs12-2) | Parses P12. This API uses a promise to return the result. |

### Interfaces

| Name | Description |
| --- | --- |
| [CertCRLCollection](arkts-devicecertificate-certcrlcollection-i.md) | Provides APIs for locating certificates or CRLs in a **CertCRLCollection** object. |
| [CertChainBuildParameters](arkts-devicecertificate-certchainbuildparameters-i.md) | Represents the parameters for building a certificate chain. |
| [CertChainBuildResult](arkts-devicecertificate-certchainbuildresult-i.md) | Represents the certificate chain build result. |
| [CertChainData](arkts-devicecertificate-certchaindata-i.md) | Defines the certificate chain data, which is passed in as input parameters during certificate chain verification. |
| [CertChainValidationParameters](arkts-devicecertificate-certchainvalidationparameters-i.md) | Represents the parameters for certificate chain validation. |
| [CertChainValidationResult](arkts-devicecertificate-certchainvalidationresult-i.md) | Represents the return value of certificate chain validation. |
| [CertChainValidator](arkts-devicecertificate-certchainvalidator-i.md) | Provides APIs for certificate chain validator operations. |
| [CertExtension](arkts-devicecertificate-certextension-i.md) | Provides APIs for operating on certificate extensions. |
| [CertValidationParams](arkts-devicecertificate-certvalidationparams-i.md) | Parameters for certificate validation. |
| [CertValidationResult](arkts-devicecertificate-certvalidationresult-i.md) | Result of certificate validation. |
| [CmsEnvelopedDecryptionConfig](arkts-devicecertificate-cmsenvelopeddecryptionconfig-i.md) | Represents CMS decapsulation configuration. |
| [CmsGenerator](arkts-devicecertificate-cmsgenerator-i.md) | Provides APIs for generating the messages in CMS format.&gt; **NOTE**&gt;&gt; PKCS #7 is a standard syntax for storing signed or encrypted data. CMS is an extension of PKCS #7. PKCS #7&gt; supports data types including data, signed data, enveloped data, signed and enveloped data, digested&gt; data, and encrypted data. It is often used to protect data integrity and confidentiality. |
| [CmsGeneratorOptions](arkts-devicecertificate-cmsgeneratoroptions-i.md) | Represents the configuration for generating a CMS message. |
| [CmsKeyAgreeRecipientInfo](arkts-devicecertificate-cmskeyagreerecipientinfo-i.md) | Represents KeyAgree recipient information for CMS enveloped data. |
| [CmsKeyTransRecipientInfo](arkts-devicecertificate-cmskeytransrecipientinfo-i.md) | Represents KeyTrans recipient information for CMS enveloped data. |
| [CmsParser](arkts-devicecertificate-cmsparser-i.md) | Verifies or decrypts a CMS message.&gt; **NOTE**&gt;&gt; PKCS #7 is a standard syntax for storing signed or encrypted data. CMS is an extension of PKCS #7. PKCS #7&gt; supports data types including data, signed data, enveloped data, signed and enveloped data, digested&gt; data, and encrypted data. It is often used to protect data integrity and confidentiality. |
| [CmsRecipientInfo](arkts-devicecertificate-cmsrecipientinfo-i.md) | Represents recipient information for the CMS message.&gt; **NOTE**&gt;&gt; At least one recipient needs to be set. |
| [CmsSignerConfig](arkts-devicecertificate-cmssignerconfig-i.md) | Represents the configuration of the CMS signer. |
| [CmsVerificationConfig](arkts-devicecertificate-cmsverificationconfig-i.md) | Represents CMS verification configuration. |
| [CsrAttribute](arkts-devicecertificate-csrattribute-i.md) | Defines the CSR attribute representation.CSR attribute field. Currently, only character string attribute fields are supported. The attribute value added tothe CSR is encoded in UTF-8 format. The common type is challengePassword. |
| [CsrGenerationConfig](arkts-devicecertificate-csrgenerationconfig-i.md) | Configuration parameters for generating a CSR, including the subject name, digest algorithm, attribute,and output format.&gt; **NOTE**&gt;&gt; - subject is an object of the Name type defined by X509.&gt;&gt; - mdName indicates the digest algorithm name. Currently, SHA1, SHA256, SHA384, and SHA512 are supported.&gt;&gt; - attributes is an optional parameter that specifies the attribute types and attribute values specified in&gt; PKCS #9 to generate a CSR. For example, challengePassword.&gt;&gt; - outFormat specifies the format of the output CSR. If the format is not specified, the PEM format is used by&gt; default. |
| [DataArray](arkts-devicecertificate-dataarray-i.md) | Defines a list of data arrays. |
| [DataBlob](arkts-devicecertificate-datablob-i.md) | Encapsulates binary data. The core field **data** is of the Uint8Array type. |
| [EncodingBlob](arkts-devicecertificate-encodingblob-i.md) | Defines a binary data array in encoding format. |
| [GeneralName](arkts-devicecertificate-generalname-i.md) | Represents the GeneralName. |
| [PbesParams](arkts-devicecertificate-pbesparams-i.md) | Represents PBES algorithm parameters. Currently, only PBES2 is supported. |
| [Pkcs12CreationConfig](arkts-devicecertificate-pkcs12creationconfig-i.md) | Represents the configuration for creating .p12 files. |
| [Pkcs12Data](arkts-devicecertificate-pkcs12data-i.md) | P12(PKCS #12) data, which includes private key, certificate, and other certificates. |
| [Pkcs12ParsingConfig](arkts-devicecertificate-pkcs12parsingconfig-i.md) | Represents the configuration for parsing P12. |
| [PrivateKeyInfo](arkts-devicecertificate-privatekeyinfo-i.md) | Represents the private key information. |
| [RevocationCheckParameter](arkts-devicecertificate-revocationcheckparameter-i.md) | Represents the parameters for checking the certificate revocation status for a certificate chain. |
| [X500DistinguishedName](arkts-devicecertificate-x500distinguishedname-i.md) | Provides APIs for managing the **X500DistinguishedName** instance. |
| [X509CRL](arkts-devicecertificate-x509crl-i.md) | Provides APIs for managing a CRL object. |
| [X509CRLEntry](arkts-devicecertificate-x509crlentry-i.md) | Provides APIs for operating on a revoked certificate entry in a CRL. |
| [X509CRLMatchParameters](arkts-devicecertificate-x509crlmatchparameters-i.md) | Represents the parameters used to match a certificate revocation list (CRL). If no parameter is specified, all CRLsare matched. |
| [X509Cert](arkts-devicecertificate-x509cert-i.md) | Provides APIs for X.509 certificate operations. |
| [X509CertChain](arkts-devicecertificate-x509certchain-i.md) | Provides APIs for managing the X.509 certificate chain. |
| [X509CertMatchParameters](arkts-devicecertificate-x509certmatchparameters-i.md) | Defines the parameters used to match a certificate. If no parameter is specified, all certificates are matched. |
| [X509CertRevokedParams](arkts-devicecertificate-x509certrevokedparams-i.md) | Parameters for checking certificate revocation status. |
| [X509Crl](arkts-devicecertificate-x509crl-i.md) | Provides APIs for X.509 CRL operations.&gt; **NOTE**&gt;&gt; This API is supported since API version 9 and deprecated since API version 11. Use [X509CRL()](arkts-devicecertificate-x509crl-i.md)&gt; instead. |
| [X509CrlEntry](arkts-devicecertificate-x509crlentry-i.md) | Provides APIs for operating on a revoked certificate entry in a CRL.&gt; **NOTE**&gt;&gt; This API is supported since API version 9 and deprecated since API version 11. Use&gt; [X509CRLEntry()](arkts-devicecertificate-x509crlentry-i.md) instead. |
| [X509TrustAnchor](arkts-devicecertificate-x509trustanchor-i.md) | Represents an X.509 trust anchor, which is used to verify the certificate chain. The certificate or public key inthe trust anchor is used as the trusted root to verify the certificate chain. |

### Enums

| Name | Description |
| --- | --- |
| [CertItemType](arkts-devicecertificate-certitemtype-e.md) | Enumerates the certificate fields that can be obtained. |
| [CertResult](arkts-devicecertificate-certresult-e.md) | Enumerates the error codes. |
| [CertRevocationFlag](arkts-devicecertificate-certrevocationflag-e.md) | Enumerates the certificate revocation flags. |
| [CmsCertType](arkts-devicecertificate-cmscerttype-e.md) | Enumerates certificate types obtained from CMS. |
| [CmsContentDataFormat](arkts-devicecertificate-cmscontentdataformat-e.md) | Enumerates the CMS message formats. |
| [CmsContentType](arkts-devicecertificate-cmscontenttype-e.md) | Enumerates the Cryptographic Message Syntax (CMS) message types. |
| [CmsFormat](arkts-devicecertificate-cmsformat-e.md) | Enumerates the CMS encoding formats. |
| [CmsKeyAgreeRecipientDigestAlgorithm](arkts-devicecertificate-cmskeyagreerecipientdigestalgorithm-e.md) | Enumerates the digest algorithms of the CMS KeyAgree type. |
| [CmsRecipientEncryptionAlgorithm](arkts-devicecertificate-cmsrecipientencryptionalgorithm-e.md) | Enumerates the content-encryption algorithms for CMS enveloped data. |
| [CmsRsaSignaturePadding](arkts-devicecertificate-cmsrsasignaturepadding-e.md) | Enumerates the RSA CMS signature padding modes. |
| [EncodingBaseFormat](arkts-devicecertificate-encodingbaseformat-e.md) | Enumerates the encoding formats for certificate-related data. |
| [EncodingFormat](arkts-devicecertificate-encodingformat-e.md) | Enumerates the certificate encoding formats. |
| [EncodingType](arkts-devicecertificate-encodingtype-e.md) | Enumerates the encoding formats. |
| [ExtensionEntryType](arkts-devicecertificate-extensionentrytype-e.md) | Enumerates the entry types in certificate extensions that can be obtained. |
| [ExtensionOidType](arkts-devicecertificate-extensionoidtype-e.md) | Enumerates the OID types of the certificate extensions that can be obtained. |
| [GeneralNameType](arkts-devicecertificate-generalnametype-e.md) | Enumerates the types of GeneralName as defined in X.509, which can appear in Subject Alternative Name and otherextensions. |
| [KeyUsageType](arkts-devicecertificate-keyusagetype-e.md) | Enumerates the purposes for which the key in the certificate is used. |
| [OcspDigest](arkts-devicecertificate-ocspdigest-e.md) | Enumerates the OCSP digest algorithm. |
| [PbesEncryptionAlgorithm](arkts-devicecertificate-pbesencryptionalgorithm-e.md) | Enumerates password-based encryption scheme (PBES) algorithms. |
| [Pkcs12MacDigestAlgorithm](arkts-devicecertificate-pkcs12macdigestalgorithm-e.md) | Enumerates the P12 MAC digest algorithms. |
| [RevocationCheckOptions](arkts-devicecertificate-revocationcheckoptions-e.md) | Enumerates the options for checking the certificate revocation status. |
| [ValidationPolicyType](arkts-devicecertificate-validationpolicytype-e.md) | Enumerates the types of the online certificate chain validation policy. |

