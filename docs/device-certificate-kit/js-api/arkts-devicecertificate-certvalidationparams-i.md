# CertValidationParams

Parameters for certificate validation.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## allowDownloadIntermediateCa

```TypeScript
allowDownloadIntermediateCa?: boolean
```

Indicates whether intermediate CA certificates can be downloaded from the network. The default value is false.
true: Use the issuer address in the certificate AIA extension to download the issuer certificate when the
intermediate certificate is missing in the certificate chain. false: The intermediate CA certificate cannot be
downloaded from the network.

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## date

```TypeScript
date?: string
```

Validation date, in the format of YYMMDDHHMMSSZ or YYYYMMDDHHMMSSZ. By default, the current system time is
used.
You can customize the verification time, which is applicable to scenarios such as offline verification of
historical signatures.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## emailAddresses

```TypeScript
emailAddresses?: Array<string>
```

Email address list. Verify that the certificate contains the specified email address. The maximum number is 1.
The maximum length of the email address is 128.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## hostnames

```TypeScript
hostnames?: Array<string>
```

List of hostnames. Verify that the certificate's subject alternative name (SAN) or common name (CN) contains the
specified hostname. Maximum number: 100; maximum length of each host name: 128.
If one of the host names is matched, the verification is successful.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## ignoreErrs

```TypeScript
ignoreErrs?: Array<CertResult>
```

Allows specific validation errors to be ignored. Maximum count: 8.
Errors that can be ignored include: ERR_CERT_NOT_YET_VALID, ERR_CERT_HAS_EXPIRED, ERR_UNKNOWN_CRITICAL_EXTENSION,
ERR_CRL_NOT_FOUND, ERR_CRL_NOT_YET_VALID, ERR_CRL_HAS_EXPIRED, ERR_OCSP_RESPONSE_NOT_FOUND, ERR_NETWORK_TIMEOUT.

**Type:** Array<CertResult>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## keyUsage

```TypeScript
keyUsage?: Array<KeyUsageType>
```

Key usage list. Verify that the certificate's key usage extension includes the specified usage.
Maximum count: 9.
The certificate must contain all specified key usages.

**Type:** Array<KeyUsageType>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## partialChain

```TypeScript
partialChain?: boolean
```

Indicates whether to allow partial chain validation. The default value is false. true: Any certificate in the
trust certificate can be used as the trust anchor instead of the root certificate. false: indicates that the root
certificate must be traced during certificate chain construction.

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## revokedParams

```TypeScript
revokedParams?: X509CertRevokedParams
```

Indicates the certificate revocation check parameter. Used to check whether a certificate is revoked. The
configuration includes the CRL list, OCSP response data, and whether online check is allowed.

**Type:** X509CertRevokedParams

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## trustSystemCa

```TypeScript
trustSystemCa?: boolean
```

Indicates whether to trust the system CA. The default value is false. true: Use the preconfigured CA certificate
store as the trust anchor. false: The preconfigured CA certificate store is not used as the trust anchor.

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## trustedCerts

```TypeScript
trustedCerts?: Array<X509Cert>
```

Trust certificate list. Specifies the trusted root certificate or intermediate CA certificate as the trust anchor
for validation. Maximum count: 100.
During verification, the certificate chain must be traced back to the trust certificate. You must set this
parameter or set trustSystemCa to true.

**Type:** Array<X509Cert>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## untrustedCerts

```TypeScript
untrustedCerts?: Array<X509Cert>
```

Indicates the list of untrusted certificates. An intermediate certificate is used only to construct a certificate
chain and is not used as a trust anchor. Maximum count: 100.

**Type:** Array<X509Cert>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## userId

```TypeScript
userId?: Uint8Array
```

User ID. Used to set the user identifier required for signature verification when verifying the SM2 certificate.
Maximum length: 128 characters.
The most commonly used value is `[0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x31, 0x32, 0x33, 0x34, 0x35,
0x36, 0x37, 0x38]`. (The corresponding ASCII character string is 1234567812345678, 16 bytes.)
Certificate revocation check is not supported after userId is set.

**Type:** Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

## validateDate

```TypeScript
validateDate?: boolean
```

Indicates whether to verify the date. true: Verify the validity period of the certificate and CRL. false: The
validity period of the certificate and CRL is not verified.

**Type:** boolean

**Default:** true

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.Cert

