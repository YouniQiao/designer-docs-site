# Http_RequestOptions

```c
typedef struct Http_RequestOptions {...} Http_RequestOptions
```

## Overview

Defines the parameters for http request options.

**Since**: 20

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_http_type.h](capi-net-http-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const char *method | Request method. |
| uint32_t priority | Priority of http requests. A larger value indicates a higher priority. |
| [Http_Headers](capi-netstack-http-headers.md) *headers | Header of http requests, see [Http_Headers](capi-netstack-http-headers.md). |
| uint32_t readTimeout | Read timeout interval. |
| uint32_t connectTimeout | Connection timeout interval. |
| [Http_HttpProtocol](capi-net-http-type-h.md#http_httpprotocol) httpProtocol | Use the protocol. The default value is automatically specified by the system, see [Http_HttpProtocol](capi-net-http-type-h.md#http_httpprotocol). |
| [Http_Proxy](capi-netstack-http-proxy.md) *httpProxy | Indicates whether to use the HTTP proxy. The default value is false,and http proxy config, see [Http_Proxy](capi-netstack-http-proxy.md). |
| const char *caPath | CA certificate of the user-specified path. |
| int64_t resumeFrom | Set the download start position. This parameter can be used only in the GET method. |
| int64_t resumeTo | Set the download end position. This parameter can be used only in the GET method. |
| [Http_ClientCert](capi-netstack-http-clientcert.md) *clientCert | Client certificates can be transferred, see [Http_ClientCert](capi-netstack-http-clientcert.md). |
| const char *dnsOverHttps | Set the DNS resolution for the https server. |
| [Http_AddressFamilyType](capi-net-http-type-h.md#http_addressfamilytype) addressFamily | The address family can be specified when target domain name is resolved, see [Http_AddressFamilyType](capi-net-http-type-h.md#http_addressfamilytype). |


