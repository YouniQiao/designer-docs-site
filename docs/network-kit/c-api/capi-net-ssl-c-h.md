# net_ssl_c.h

## Overview

Defines C APIs for the SSL/TLS certificate chain verification module.

**Library**: libnet_ssl.so

**System capability**: SystemCapability.Communication.NetStack

**Since**: 11

**Related module**: [netstack](capi-netstack.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [uint32_t OH_NetStack_CertVerification(const struct NetStack_CertBlob *cert, const struct NetStack_CertBlob *caCert)](#oh_netstack_certverification) | Provides certificate chain verification APIs for external systems. |
| [int32_t OH_NetStack_GetPinSetForHostName(const char *hostname, NetStack_CertificatePinning *pin)](#oh_netstack_getpinsetforhostname) | Gets pin set for hostname. |
| [int32_t OH_NetStack_GetCertificatesForHostName(const char *hostname, NetStack_Certificates *certs)](#oh_netstack_getcertificatesforhostname) | Gets certificates for hostname. |
| [void OH_Netstack_DestroyCertificatesContent(NetStack_Certificates *certs)](#oh_netstack_destroycertificatescontent) | Frees content of the certificates. |
| [int32_t OH_Netstack_IsCleartextPermitted(bool *isCleartextPermitted)](#oh_netstack_iscleartextpermitted) | Checks whether the Cleartext traffic is permitted. |
| [int32_t OH_Netstack_IsCleartextPermittedByHostName(const char *hostname, bool *isCleartextPermitted)](#oh_netstack_iscleartextpermittedbyhostname) | Checks whether the Cleartext traffic for a specified hostname is permitted. |
| [int32_t OH_Netstack_IsCleartextCfgByComponent(const char *component, bool *componentCfg)](#oh_netstack_iscleartextcfgbycomponent) | Checks whether the component is configured for Cleartext traffic interception. |
| [uint32_t OH_NetStack_CreateAndVerifySortedCertChain(const struct NetStack_CertBlob *cert, size_t certCount, const struct NetStack_CertBlob *caCert, const char *hostname, struct NetStack_CertBlob **outSortedChain, size_t *outSortedCount)](#oh_netstack_createandverifysortedcertchain) | Creates and verifies a sorted certificate chain. |
| [void OH_NetStack_FreeCertChain(struct NetStack_CertBlob *certChain, size_t certCount)](#oh_netstack_freecertchain) | Frees the certificate chain allocated by OH_NetStack_CreateAndVerifySortedCertChain. |

## Function description

### OH_NetStack_CertVerification()

```c
uint32_t OH_NetStack_CertVerification(const struct NetStack_CertBlob *cert, const struct NetStack_CertBlob *caCert)
```

**Description**

Provides certificate chain verification APIs for external systems.

**System capability**: SystemCapability.Communication.NetStack

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const struct NetStack_CertBlob](capi-netstack-netstack-certblob.md) *cert | Certificate to be verified. |
| [const struct NetStack_CertBlob](capi-netstack-netstack-certblob.md) *caCert | CA certificate specified by the user. If this parameter is left blank, the preset certificate is used. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | 0 - success.<br> 2305001 - Unspecified error.<br> 2305002 - Unable to get issuer certificate.<br> 2305003 - Unable to get certificate revocation list (CRL).<br> 2305004 - Unable to decrypt certificate signature.<br> 2305005 - Unable to decrypt CRL signature.<br> 2305006 - Unable to decode issuer public key.<br> 2305007 - Certificate signature failure.<br> 2305008 - CRL signature failure.<br> 2305009 - Certificate is not yet valid.<br> 2305010 - Certificate has expired.<br> 2305011 - CRL is not yet valid.<br> 2305012 - CRL has expired.<br> 2305023 - Certificate has been revoked.<br> 2305024 - Invalid certificate authority (CA).<br> 2305027 - Certificate is untrusted. |

### OH_NetStack_GetPinSetForHostName()

```c
int32_t OH_NetStack_GetPinSetForHostName(const char *hostname, NetStack_CertificatePinning *pin)
```

**Description**

Gets pin set for hostname.

**System capability**: SystemCapability.Communication.NetStack

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *hostname | Hostname. |
| [NetStack_CertificatePinning](capi-netstack-netstack-certificatepinning.md) *pin | Certificate lock information. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         401 - Parameter error.<br>         2305999 - Out of memory. |

### OH_NetStack_GetCertificatesForHostName()

```c
int32_t OH_NetStack_GetCertificatesForHostName(const char *hostname, NetStack_Certificates *certs)
```

**Description**

Gets certificates for hostname.

**System capability**: SystemCapability.Communication.NetStack

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *hostname | Hostname. |
| [NetStack_Certificates](capi-netstack-netstack-certificates.md) *certs | Certificate Information. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         401 - Parameter error.<br>         2305999 - Out of memory. |

### OH_Netstack_DestroyCertificatesContent()

```c
void OH_Netstack_DestroyCertificatesContent(NetStack_Certificates *certs)
```

**Description**

Frees content of the certificates.

**System capability**: SystemCapability.Communication.NetStack

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [NetStack_Certificates](capi-netstack-netstack-certificates.md) *certs | Certificate. |

### OH_Netstack_IsCleartextPermitted()

```c
int32_t OH_Netstack_IsCleartextPermitted(bool *isCleartextPermitted)
```

**Description**

Checks whether the Cleartext traffic is permitted.

**Required permission**: ohos.permission.INTERNET

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| bool *isCleartextPermitted | Indicates output parameter,{@code true} if the Cleartext traffic is permitted, {@code false} otherwise. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         201 - Permission denied.<br>         401 - Parameter error. |

### OH_Netstack_IsCleartextPermittedByHostName()

```c
int32_t OH_Netstack_IsCleartextPermittedByHostName(const char *hostname, bool *isCleartextPermitted)
```

**Description**

Checks whether the Cleartext traffic for a specified hostname is permitted.

**Required permission**: ohos.permission.INTERNET

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *hostname | Indicates the host name. |
| bool *isCleartextPermitted | Indicates output parameter,{@code true} if the Cleartext traffic for a specified hostname is permitted, {@code false} otherwise. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         201 - Permission denied.<br>         401 - Parameter error. |

### OH_Netstack_IsCleartextCfgByComponent()

```c
int32_t OH_Netstack_IsCleartextCfgByComponent(const char *component, bool *componentCfg)
```

**Description**

Checks whether the component is configured for Cleartext traffic interception.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *component | Indicates the component name. |
| bool *componentCfg | Indicates output parameter,{@code true} if the component is configured for Cleartext traffic interception, {@code false} otherwise. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         2100001 - Invalid parameter value. |

### OH_NetStack_CreateAndVerifySortedCertChain()

```c
uint32_t OH_NetStack_CreateAndVerifySortedCertChain(const struct NetStack_CertBlob *cert, size_t certCount, const struct NetStack_CertBlob *caCert, const char *hostname, struct NetStack_CertBlob **outSortedChain, size_t *outSortedCount)
```

**Description**

Creates and verifies a sorted certificate chain.

>**Note**: 
>After use, you must call [OH_NetStack_FreeCertChain](capi-net-ssl-c-h.md#oh_netstack_freecertchain) to release the
 *       allocated memory pointed by outSortedChain. Failure to do so will cause memory leaks.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const struct NetStack_CertBlob](capi-netstack-netstack-certblob.md) *cert | Certificate chain to be verified. Cannot be NULL or empty. |
| size_t certCount | Certificate number of param cert. |
| [const struct NetStack_CertBlob](capi-netstack-netstack-certblob.md) *caCert | CA certificate specified by the user. If NULL, the preset certificate is used. |
| const char *hostname | The expected server hostname. |
| [struct NetStack_CertBlob](capi-netstack-netstack-certblob.md) **outSortedChain | Pointer to receive the sorted certificate chain.Can be NULL if the caller does not need the chain data.Valid only if return value is 0.Allocated memory must be freed using OH_NetStack_FreeCertChain. |
| size_t *outSortedCount | Pointer to receive the count of sorted certificates. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | 0 - success.<br>         2305001 - Unspecified error.<br>         2305002 - Unable to get issuer certificate.<br>         2305004 - Unable to decrypt certificate signature.<br>         2305006 - Unable to decode issuer public key.<br>         2305007 - Certificate signature failure.<br>         2305009 - Certificate is not yet valid.<br>         2305010 - Certificate has expired.<br>         2305024 - Invalid certificate authority (CA).<br>         2305062 - Hostname verification failed.<br>         2305027 - Certificate is untrusted. |

### OH_NetStack_FreeCertChain()

```c
void OH_NetStack_FreeCertChain(struct NetStack_CertBlob *certChain, size_t certCount)
```

**Description**

Frees the certificate chain allocated by OH_NetStack_CreateAndVerifySortedCertChain.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct NetStack_CertBlob](capi-netstack-netstack-certblob.md) *certChain | The certificate chain pointer received from outSortedChain.If NULL, this function does nothing. |
| size_t certCount | The number of certificates in the chain. |


