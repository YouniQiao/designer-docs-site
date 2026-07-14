# CertChainValidationParameters

Represents the parameters for certificate chain validation.

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## allowDownloadIntermediateCa

```TypeScript
allowDownloadIntermediateCa?: boolean
```

Whether to allow the application to download the missing intermediate CA certificate from the network. **true** means yes; **false** otherwise. The default value is **false**. The download address is obtained from the certificate AIA extension. Only HTTP is supported. To use the network for download, you need to request the **ohos.permission.INTERNET** permission. For details about the permission configuration, see [Declaring Permissions](../../../../security/AccessToken/declare-permissions.md).

**Type:** boolean

**Default:** false

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Security.Cert

## certCRLs

```TypeScript
certCRLs?: Array<CertCRLCollection>
```

CRL collections used to check whether the certificate is revoked.

**Type:** Array<CertCRLCollection>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## date

```TypeScript
date?: string
```

Date for checking certificate validity.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## keyUsage

```TypeScript
keyUsage?: Array<KeyUsageType>
```

Usage of the key in the certificate to be validated.

**Type:** Array<KeyUsageType>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## policy

```TypeScript
policy?: ValidationPolicyType
```

Type of the policy for certificate validation.

**Type:** ValidationPolicyType

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## revocationCheckParam

```TypeScript
revocationCheckParam?: RevocationCheckParameter
```

Parameters for checking the certificate revocation status.

**Type:** RevocationCheckParameter

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## sslHostname

```TypeScript
sslHostname?: string
```

Host name in the certificate to be verified. This parameter must be used together with **policy**.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## trustAnchors

```TypeScript
trustAnchors: Array<X509TrustAnchor>
```

List of trusted anchors.

**Type:** Array<X509TrustAnchor>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## trustSystemCa

```TypeScript
trustSystemCa?: boolean
```

Whether to use the prebuilt CA certificate to validate the certificate chain. **true** means yes; **false** otherwise.

**Type:** boolean

**Default:** false

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Security.Cert

