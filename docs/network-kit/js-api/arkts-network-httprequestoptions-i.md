# HttpRequestOptions

Specifies the type and value range of the optional parameters in the HTTP request.

**Since:** 11

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@ohos.net.http';
```

## addressFamily

```TypeScript
addressFamily?: AddressFamily
```

Address family option.

**Type:** AddressFamily

**Since:** 15

**System capability:** SystemCapability.Communication.NetStack

## body

```TypeScript
body?: string | Object | ArrayBuffer
```

The body content of the HTTP request. This parameter explicitly specifies the payload to be sent in the request body. When this field is set, the framework forces the data into the body, regardless of the HTTP request method (GET, POST, etc.). Serialization rules: - string: sent directly as the request body. - Object: serialized to a JSON string before being sent. - ArrayBuffer: sent as raw binary data without additional serialization. If both body and extraData are specified, body takes precedence, and extraData will be ignored.

**Type:** string | Object | ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## caData

```TypeScript
caData?: string
```

A PEM representation of a certificate. The system will create an X.509 certificate object in the SSL process. If the caPath option is set, the caData option will be ignored. Certificate chain is not supported. Maxium length is 8000 Bytes.

**Type:** string

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Communication.NetStack

## caPath

```TypeScript
caPath?: string
```

If this parameter is set, the system will use ca path specified by user, or else use preset ca by the system.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NetStack

## certificatePinning

```TypeScript
certificatePinning?: CertificatePinning | CertificatePinning[]
```

Certificate pinning option. If server certificate's digest does not match {@link CertificatePinning.publicKeyHash}, request will fail.

**Type:** CertificatePinning | CertificatePinning[]

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## clientCert

```TypeScript
clientCert?: ClientCert
```

Support the application to pass in client certificates, allowing the server to verify the client's identity.

**Type:** ClientCert

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## clientEncCert

```TypeScript
clientEncCert?: ClientCert
```

Support the application to pass in client certificates, allowing the server to verify the client's encryption identity.

**Type:** ClientCert

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Communication.NetStack

## connectTimeout

```TypeScript
connectTimeout?: number
```

Connection timeout interval. The default value is 60,000, in ms.

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## customMethod

```TypeScript
customMethod?: string
```

Supports specifying the user custom defined http request method

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Communication.NetStack

## dnsOverHttps

```TypeScript
dnsOverHttps?: string
```

If this parameter is set, incoming DNS resolution server URL for the DoH server to use for name resolving. The parameter must be URL-encoded in the following format: "https://host:port/path". It MUST specify an HTTPS URL.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## dnsServers

```TypeScript
dnsServers?: Array<string>
```

If this parameter is set, use the specified DNS server for DNS resolution. Multiple DNS resolution servers can be set up, with a maximum of 3 servers. Only take the first three if there are more than three.

**Type:** Array<string>

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## enablePartialChain

```TypeScript
enablePartialChain?: boolean
```

Indicates whether to enable partial chain verification. The default value is true when SslType is set to TLS, and false when SslType is set to TLCP. If set to false, the certificate chain must verify up to a trusted root CA. If set to true, the verification succeeds if the chain builds to a trusted intermediate CA, without requiring a path to a trusted root CA.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## expectDataType

```TypeScript
expectDataType?: HttpDataType
```

Data type to be returned. If this parameter is set, the system preferentially returns the specified type.

**Type:** HttpDataType

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## extraData

```TypeScript
extraData?: string | Object | ArrayBuffer
```

Additional data of the request. extraData can be a string or an Object (API 6) or an ArrayBuffer(API 8).

**Type:** string | Object | ArrayBuffer

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## header

```TypeScript
header?: Object
```

HTTP request header. default is 'content-type': 'application/json'

**Type:** Object

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## inactivityMs

```TypeScript
inactivityMs?: number
```

Maximum HTTP idle time (unit: ms)

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## maxLimit

```TypeScript
maxLimit?: number
```

The maximum limit of the response body. The default value is 5 * 1024 * 1024, in Byte. The maximum value is 100 * 1024 *1024, in Byte.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## maxRedirects

```TypeScript
maxRedirects?: number
```

Support specifying the configuration of maximum redirect count

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Communication.NetStack

## method

```TypeScript
method?: RequestMethod
```

Request method,default is GET.

**Type:** RequestMethod

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## multiFormDataList

```TypeScript
multiFormDataList?: Array<MultiFormData>
```

The data fields which is supported by the HTTP protocol to post forms and by the SMTP and IMAP protocols to provide the email data to send/upload.

**Type:** Array<MultiFormData>

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## pathPreference

```TypeScript
pathPreference?: PathPreference
```

Support specifying a preferred network when making HTTP requests. If the specified network is unavailable, the default network will be selected to send the request.

**Type:** PathPreference

**Since:** 23

**System capability:** SystemCapability.Communication.NetStack

## priority

```TypeScript
priority?: number
```

[1, 1000], default is 1.

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## queryParams

```TypeScript
queryParams?: string | QueryParamObject
```

Query parameters to append to the request URL. Supports two input forms: - `string`: a pre-encoded query string provided by the caller. It is appended to the URL as-is and is not encoded again by the system. - `QueryParamObject`: a key-value object. The system encodes keys and values and serializes them into the URL query string automatically. Notes: 1. For `string`, do not include the leading `?` (for example, use `"key=value"`, not `"?key=value"`). 2. For `string`, the caller is responsible for encoding special characters. 3. For `string`, use `&` to separate multiple parameters. If both `queryParams` and `extraData` are specified, `queryParams` takes precedence for URL construction, and `extraData` will be ignored.

**Type:** string | QueryParamObject

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## readTimeout

```TypeScript
readTimeout?: number
```

Read timeout period. The default value is 60,000, in ms.

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## remoteValidation

```TypeScript
remoteValidation?: RemoteValidation
```

Certificate authority(CA) which is used to verify the remote server's identification.

**Type:** RemoteValidation

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NetStack

## resumeFrom

```TypeScript
resumeFrom?: number
```

Used to set to uploading or downloading the start bytes. The default value is 0. HTTP standard (RFC 7233 section 3.1) allows servers to ignore range requests. For HTTP PUT uploads this option should not be used, since it may conflict with other options.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## resumeTo

```TypeScript
resumeTo?: number
```

Used to set to uploading or downloading the end bytes. Translate to the end if not set. HTTP standard (RFC 7233 section 3.1) allows servers to ignore range requests. For HTTP PUT uploads this option should not be used, since it may conflict with other options.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## reuseConnections

```TypeScript
reuseConnections?: boolean
```

Supports forbidding reuse of HTTP/HTTPS connections

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## serverAuthentication

```TypeScript
serverAuthentication?: ServerAuthentication
```

HTTP server authentication settings. No authentication by default.

**Type:** ServerAuthentication

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NetStack

## sniHostName

```TypeScript
sniHostName?: string
```

Support specifying an SNI domain name to include the SNI field during the TLS connection process

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Communication.NetStack

## sslType

```TypeScript
sslType?: SslType
```

Which secure communication protocol is used, TLS (by defaul) or TLCP. If TLCP is used, all TLS related options, such as caPath, caData and clientCert, are ignored.

**Type:** SslType

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Communication.NetStack

## tlsOptions

```TypeScript
tlsOptions?: TlsOptions
```

TLS option.

**Type:** TlsOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NetStack

## usingCache

```TypeScript
usingCache?: boolean
```

default is true

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## usingProtocol

```TypeScript
usingProtocol?: HttpProtocol
```

default is automatically specified by the system.

**Type:** HttpProtocol

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## usingProxy

```TypeScript
usingProxy?: boolean | HttpProxy
```

If this parameter is set as type of boolean, the system will use default proxy or not use proxy. If this parameter is set as type of HttpProxy, the system will use the specified HttpProxy.

**Type:** boolean | HttpProxy

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NetStack

## usingSocks5Proxy

```TypeScript
usingSocks5Proxy?: Socks5Proxy
```

Specifies the use of a SOCKS5 proxy. Note that this configuration takes precedence over usingProxy. It is recommend not to configure both simultaneously.

**Type:** Socks5Proxy

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

