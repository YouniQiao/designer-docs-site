# X509Cert

Provides APIs for X.509 certificate operations.

**Since:** 9

<!--Device-cert-interface X509Cert--><!--Device-cert-interface X509Cert-End-->

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## checkValidityWithDate

```TypeScript
checkValidityWithDate(date: string): void
```

Checks the validity period of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-checkValidityWithDate(date: string): void--><!--Device-X509Cert-checkValidityWithDate(date: string): void-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | string | Yes | Date in the ASN.1 format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |
| [19030003](../errorcode-cert.md#19030003-certificate-has-not-taken-effect) | the certificate has not taken effect. |
| [19030004](../errorcode-cert.md#19030004-certificate-expired) | the certificate has expired. |

## getBasicConstraints

```TypeScript
getBasicConstraints(): number
```

Obtains the basic constraints of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getBasicConstraints(): int--><!--Device-X509Cert-getBasicConstraints(): int-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| number | Basic constraints obtained. |

## getCRLDistributionPoint

```TypeScript
getCRLDistributionPoint(): DataArray
```

Obtains the CRL distribution points of this X.509 certificate.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getCRLDistributionPoint(): DataArray--><!--Device-X509Cert-getCRLDistributionPoint(): DataArray-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataArray](arkts-devicecertificate-cert-dataarray-i.md) | URIs of the CRL distribution points from this X.509 certificate obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getCertSerialNumber

```TypeScript
getCertSerialNumber(): bigint
```

Obtains the X.509 certificate serial number.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getCertSerialNumber(): bigint--><!--Device-X509Cert-getCertSerialNumber(): bigint-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| bigint | X.509 certificate serial number obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |

## getEncoded

```TypeScript
getEncoded(callback: AsyncCallback<EncodingBlob>): void
```

Obtains the serialized X.509 certificate data. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getEncoded(callback: AsyncCallback<EncodingBlob>): void--><!--Device-X509Cert-getEncoded(callback: AsyncCallback<EncodingBlob>): void-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<EncodingBlob> | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined**, and **data** is the serialized X.509 certificate data obtained.Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getEncoded

```TypeScript
getEncoded(): Promise<EncodingBlob>
```

Obtains the serialized X.509 certificate data. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getEncoded(): Promise<EncodingBlob>--><!--Device-X509Cert-getEncoded(): Promise<EncodingBlob>-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<EncodingBlob> | Promise used to return the serialized X.509 certificate data obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getExtKeyUsage

```TypeScript
getExtKeyUsage(): DataArray
```

Obtains the usage of the extended key of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getExtKeyUsage(): DataArray--><!--Device-X509Cert-getExtKeyUsage(): DataArray-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataArray](arkts-devicecertificate-cert-dataarray-i.md) | Usage of the extended key obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getExtensionsObject

```TypeScript
getExtensionsObject(): CertExtension
```

Obtains the certificate extensions in DER format.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getExtensionsObject(): CertExtension--><!--Device-X509Cert-getExtensionsObject(): CertExtension-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [CertExtension](arkts-devicecertificate-cert-certextension-i.md) | Certificate extensions object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getIssuerAltNames

```TypeScript
getIssuerAltNames(): DataArray
```

Obtains the Issuer Alternative Names (IANs) of this X.509 certificate.

> **NOTE**  
>  
> The obtained IANs contain a string terminator.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getIssuerAltNames(): DataArray--><!--Device-X509Cert-getIssuerAltNames(): DataArray-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataArray](arkts-devicecertificate-cert-dataarray-i.md) | IANs obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getIssuerName

```TypeScript
getIssuerName(): DataBlob
```

Obtains the X.509 certificate issuer.

> **NOTE**  
>  
> The obtained X.509 certificate issuer name contains a string terminator.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getIssuerName(): DataBlob--><!--Device-X509Cert-getIssuerName(): DataBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](arkts-devicecertificate-cert-datablob-i.md) | X.509 certificate issuer obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getIssuerName

```TypeScript
getIssuerName(encodingType: EncodingType): string
```

Obtains the issuer name of an X.509 certificate based on the encoding type.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-X509Cert-getIssuerName(encodingType: EncodingType): string--><!--Device-X509Cert-getIssuerName(encodingType: EncodingType): string-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | [EncodingType](arkts-devicecertificate-cert-encodingtype-e.md) | Yes | Encoding type. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Issuer name of an X.509 certificate, separated by commas (,). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19020003](../errorcode-cert.md#19020003-parameter-check-failure) | parameter check failed. Possible causes:<br>1. The value of encodingType is not in the EncodingType enumeration range. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getIssuerX500DistinguishedName

```TypeScript
getIssuerX500DistinguishedName(): X500DistinguishedName
```

Obtains the X.500 distinguished name object of the X.509 certificate issuer.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getIssuerX500DistinguishedName(): X500DistinguishedName--><!--Device-X509Cert-getIssuerX500DistinguishedName(): X500DistinguishedName-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [X500DistinguishedName](arkts-devicecertificate-cert-x500distinguishedname-i.md) | X.500 distinguished name object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getItem

```TypeScript
getItem(itemType: CertItemType): DataBlob
```

Obtains the fields in the X.509 certificate.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getItem(itemType: CertItemType): DataBlob--><!--Device-X509Cert-getItem(itemType: CertItemType): DataBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemType | [CertItemType](arkts-devicecertificate-cert-certitemtype-e.md) | Yes | Certificate field to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](arkts-devicecertificate-cert-datablob-i.md) | Fields in DER format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getKeyUsage

```TypeScript
getKeyUsage(): DataBlob
```

Obtains the key usage of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getKeyUsage(): DataBlob--><!--Device-X509Cert-getKeyUsage(): DataBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](arkts-devicecertificate-cert-datablob-i.md) | Key usage of the X.509 certificate obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getNotAfterTime

```TypeScript
getNotAfterTime(): string
```

Obtains the expiration time of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getNotAfterTime(): string--><!--Device-X509Cert-getNotAfterTime(): string-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | Certificate expiration time obtained, in ASN.1 format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getNotBeforeTime

```TypeScript
getNotBeforeTime(): string
```

Obtains the start time of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getNotBeforeTime(): string--><!--Device-X509Cert-getNotBeforeTime(): string-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | Certificate start time obtained, in ASN.1 format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getPublicKey

```TypeScript
getPublicKey(): cryptoFramework.PubKey
```

Obtains the public key of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getPublicKey(): cryptoFramework.PubKey--><!--Device-X509Cert-getPublicKey(): cryptoFramework.PubKey-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| cryptoFramework.PubKey | Public key of the X.509 certificate obtained. This object is used only for **verify()** of **X509Cert**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSerialNumber

```TypeScript
getSerialNumber(): number
```

Obtains the X.509 certificate serial number.

> **NOTE**  
>  
> This API is supported since API version 9 and deprecated since API version 10. Use  
> [X509Cert.getCertSerialNumber()](arkts-devicecertificate-cert-x509cert-i.md#getcertserialnumber-1) instead.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getCertSerialNumber

<!--Device-X509Cert-getSerialNumber(): number--><!--Device-X509Cert-getSerialNumber(): number-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| number | X.509 certificate serial number obtained. |

## getSignature

```TypeScript
getSignature(): DataBlob
```

Obtains the signature data of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getSignature(): DataBlob--><!--Device-X509Cert-getSignature(): DataBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](arkts-devicecertificate-cert-datablob-i.md) | Signature data obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSignatureAlgName

```TypeScript
getSignatureAlgName(): string
```

Obtains the signing algorithm of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getSignatureAlgName(): string--><!--Device-X509Cert-getSignatureAlgName(): string-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | X.509 certificate signing algorithm obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSignatureAlgOid

```TypeScript
getSignatureAlgOid(): string
```

Obtains the object identifier (OID) of the X.509 certificate signing algorithm. OIDs are allocated by the International Organization for Standardization (ISO).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getSignatureAlgOid(): string--><!--Device-X509Cert-getSignatureAlgOid(): string-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | OID obtained. It will be truncated if the length exceeds 127 bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSignatureAlgParams

```TypeScript
getSignatureAlgParams(): DataBlob
```

Obtains the signing algorithm parameters of this X.509 certificate.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getSignatureAlgParams(): DataBlob--><!--Device-X509Cert-getSignatureAlgParams(): DataBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](arkts-devicecertificate-cert-datablob-i.md) | X.509 certificate signing algorithm parameters obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | this operation is not supported. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSubjectAltNames

```TypeScript
getSubjectAltNames(): DataArray
```

Obtains the Subject Alternative Names (SANs) of this X.509 certificate.

> **NOTE**  
>  
> The obtained SANs contain a string terminator.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getSubjectAltNames(): DataArray--><!--Device-X509Cert-getSubjectAltNames(): DataArray-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataArray](arkts-devicecertificate-cert-dataarray-i.md) | SANs obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSubjectName

```TypeScript
getSubjectName(encodingType?: EncodingType): DataBlob
```

Obtains the subject of this X.509 certificate.

> **NOTE**  
>  
> The obtained X.509 certificate subject name contains a string terminator.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getSubjectName(encodingType?: EncodingType): DataBlob--><!--Device-X509Cert-getSubjectName(encodingType?: EncodingType): DataBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | [EncodingType](arkts-devicecertificate-cert-encodingtype-e.md) | No | Encoding type. If this parameter is set, the subject name in UTF-8format is to be obtained. If this parameter is not set, the subject name in ASCII encoding format is obtained by default.<br>This parameter is available since API version 12.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](arkts-devicecertificate-cert-datablob-i.md) | Represents the subject name of an X.509 certificate. If the encodingType parameter is not set, relative distinguished names are separated by slashes (/) after the data is converted into a string. If the encodingType parameter is set to EncodingType.ENCODING_UTF8, relative distinguished names are separated by commas (,) after the data is converted into a string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Incorrect parameter types;<br>2. Parameter verification failed.<br>**Applicable version:** 12 and later |

## getSubjectX500DistinguishedName

```TypeScript
getSubjectX500DistinguishedName(): X500DistinguishedName
```

Obtains the X.500 distinguished name object of the X.509 certificate subject.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getSubjectX500DistinguishedName(): X500DistinguishedName--><!--Device-X509Cert-getSubjectX500DistinguishedName(): X500DistinguishedName-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [X500DistinguishedName](arkts-devicecertificate-cert-x500distinguishedname-i.md) | X.500 distinguished name object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getVersion

```TypeScript
getVersion(): number
```

Obtains the X.509 certificate version.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-getVersion(): int--><!--Device-X509Cert-getVersion(): int-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| number | X.509 certificate version obtained. |

## hashCode

```TypeScript
hashCode(): Uint8Array
```

Obtains the hash value of the data in DER format.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-hashCode(): Uint8Array--><!--Device-X509Cert-hashCode(): Uint8Array-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [Uint8Array](../../apis-na/arkts-apis/arkts-na-lib-es5-uint8array-i.md) | Hash value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## match

```TypeScript
match(param: X509CertMatchParameters): boolean
```

Checks whether this certificate matches the specified parameters.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-match(param: X509CertMatchParameters): boolean--><!--Device-X509Cert-match(param: X509CertMatchParameters): boolean-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [X509CertMatchParameters](arkts-devicecertificate-cert-x509certmatchparameters-i.md) | Yes | Parameters specified for matching the certificate. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the certificate matches the parameters specified; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## toString

```TypeScript
toString(): string
```

Converts the object data into a string.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-toString(): string--><!--Device-X509Cert-toString(): string-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## toString

```TypeScript
toString(encodingType: EncodingType): string
```

Converts this object into a string in the specified encoding format.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-X509Cert-toString(encodingType: EncodingType): string--><!--Device-X509Cert-toString(encodingType: EncodingType): string-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | [EncodingType](arkts-devicecertificate-cert-encodingtype-e.md) | Yes | Encoding type. |

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19020003](../errorcode-cert.md#19020003-parameter-check-failure) | parameter check failed. Possible causes:<br>1. The value of encodingType is not in the EncodingType enumeration range. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## verify

```TypeScript
verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void
```

Verifies the certificate signature. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void--><!--Device-X509Cert-verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | cryptoFramework.PubKey | Yes | Public key used for signature verification. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## verify

```TypeScript
verify(key: cryptoFramework.PubKey): Promise<void>
```

Verifies the certificate signature. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509Cert-verify(key: cryptoFramework.PubKey): Promise<void>--><!--Device-X509Cert-verify(key: cryptoFramework.PubKey): Promise<void>-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | cryptoFramework.PubKey | Yes | Public key used for signature verification. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

