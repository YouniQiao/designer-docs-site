# Http_ClientCert

```c
typedef struct Http_ClientCert {...} Http_ClientCert
```

## Overview

Client certificate which is sent to the remote server, the the remote server will use it to verify theclient's identification.

**Since**: 20

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_http_type.h](capi-net-http-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char *certPath | A path to a client certificate. |
| [Http_CertType](capi-net-http-type-h.md#http_certtype) type | Client certificate type, see [Http_CertType](capi-net-http-type-h.md#http_certtype). |
| char *keyPath | File path of your client certificate private key. |
| char *keyPassword | Password for your client certificate private key. |


