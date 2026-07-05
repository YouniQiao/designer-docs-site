# net_ssl_c_type.h

## Overview

Defines the data structures for the C APIs of the SSL/TLS certificate chain verification module.

**Library**: libnet_ssl.so

**System capability**: SystemCapability.Communication.NetStack

**Since**: 11

**Related module**: [netstack](capi-netstack.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [NetStack_CertBlob](capi-netstack-netstack-certblob.md) | - | Defines the certificate data structure. |
| [NetStack_CertificatePinning](capi-netstack-netstack-certificatepinning.md) | NetStack_CertificatePinning | Defines the certificate lock information. |
| [NetStack_Certificates](capi-netstack-netstack-certificates.md) | NetStack_Certificates | Defines the certificate information. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [NetStack_CertType](#netstack_certtype) | - | Enumerates certificate types. |
| [NetStack_CertificatePinningKind](#netstack_certificatepinningkind) | NetStack_CertificatePinningKind | Defines the certificate lock type. |
| [NetStack_HashAlgorithm](#netstack_hashalgorithm) | NetStack_HashAlgorithm | Defines the hash algorithm. |

## Enum type description

### NetStack_CertType

```c
enum NetStack_CertType
```

**Description**

Enumerates certificate types.

**Since**: 11

| Enum item | Description |
| -- | -- |
| NETSTACK_CERT_TYPE_PEM = 0 | PEM certificate |
| NETSTACK_CERT_TYPE_DER = 1 | DER certificate |
| NETSTACK_CERT_TYPE_INVALID | Invalid certificate |

### NetStack_CertificatePinningKind

```c
enum NetStack_CertificatePinningKind
```

**Description**

Defines the certificate lock type.

**Since**: 12

| Enum item | Description |
| -- | -- |
| PUBLIC_KEY | Public key pinning |

### NetStack_HashAlgorithm

```c
enum NetStack_HashAlgorithm
```

**Description**

Defines the hash algorithm.

**Since**: 12

| Enum item | Description |
| -- | -- |
| SHA_256 | Sha256 |


