# @ohos.net.http

Provides http related APIs.

**Since:** 11

<!--Device-unnamed-declare namespace http--><!--Device-unnamed-declare namespace http-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createHttp](arkts-network-http-createhttp-f.md#createhttp-1) | Creates an HTTP request task. |
| [createHttpResponseCache](arkts-network-http-createhttpresponsecache-f.md#createhttpresponsecache-1) | Creates a default {@code HttpResponseCache} object to store the responses of HTTP access requests. |

### Classes

| Name | Description |
| --- | --- |
| [HttpInterceptorChain](arkts-network-http-httpinterceptorchain-c.md) | Defines an HTTP Interceptor chain. |

### Interfaces

| Name | Description |
| --- | --- |
| [CertificatePinning](arkts-network-http-certificatepinning-i.md) | Certificate pinning option. |
| [ClientCert](arkts-network-http-clientcert-i.md) | The clientCert field of the client certificate, which includes 4 attributes:client certificate (cert), client certificate type (certType), certificate private key (key), and passphrase (keyPassword). |
| [ConnectionExtraInfo](arkts-network-http-connectionextrainfo-i.md) | Information details of the HTTP request |
| [Credential](arkts-network-http-credential-i.md) | HTTP credential. Some server or proxy server need this. |
| [DataReceiveProgressInfo](arkts-network-http-datareceiveprogressinfo-i.md) | This interface is used to obtain the progress information of file upload or download. |
| [DataSendProgressInfo](arkts-network-http-datasendprogressinfo-i.md) | This interface is used to monitor the progress of sending data. |
| [HttpInterceptor](arkts-network-http-httpinterceptor-i.md) | Defines an HTTP Interceptor. User can implement this interface to define the handle function. |
| [HttpRequest](arkts-network-http-httprequest-i.md) | &lt;p&gt;Defines an HTTP request task. Before invoking APIs provided by HttpRequest,you must call createHttp() to create an HttpRequestTask object.&lt;/p&gt; |
| [HttpRequestContext](arkts-network-http-httprequestcontext-i.md) | The request data. |
| [HttpRequestOptions](arkts-network-http-httprequestoptions-i.md) | Specifies the type and value range of the optional parameters in the HTTP request. |
| [HttpResponse](arkts-network-http-httpresponse-i.md) | Defines the response to an HTTP request. |
| [HttpResponseCache](arkts-network-http-httpresponsecache-i.md) | Defines an object that stores the response to an HTTP request. |
| [MultiFormData](arkts-network-http-multiformdata-i.md) | Represents the properties of a form object. |
| [PerformanceTiming](arkts-network-http-performancetiming-i.md) | Counting the time taken of various stages of HTTP request. |
| [ServerAuthentication](arkts-network-http-serverauthentication-i.md) | HTTP server authentication. |
| [TlsConfig](arkts-network-http-tlsconfig-i.md) | TLS config. |
| [ValidationContext](arkts-network-http-validationcontext-i.md) | The validation context of {@link ValidationCallback} |

### Enums

| Name | Description |
| --- | --- |
| [AddressFamily](arkts-network-http-addressfamily-e.md) | Enum for Address Family |
| [CertType](arkts-network-http-certtype-e.md) | Enum for certificate types |
| [HttpDataType](arkts-network-http-httpdatatype-e.md) | Indicates the type of the returned data. |
| [HttpProtocol](arkts-network-http-httpprotocol-e.md) | Supported protocols. |
| [InterceptorType](arkts-network-http-interceptortype-e.md) | Types of an HTTP interceptor. |
| [RequestMethod](arkts-network-http-requestmethod-e.md) | Defines an HTTP request method. |
| [ResponseCode](arkts-network-http-responsecode-e.md) | Enumerates the response codes for an HTTP request. |
| [TlsVersion](arkts-network-http-tlsversion-e.md) | Enum for Tls version |

### Types

| Name | Description |
| --- | --- |
| [AuthenticationType](arkts-network-http-authenticationtype-t.md) | The server's authentication type. |
| [ChainContinue](arkts-network-http-chaincontinue-t.md) | Whether or not to continue process of interceptor chain. |
| [CipherSuite](arkts-network-http-ciphersuite-t.md) | Include all cipher suite. |
| [HttpProxy](arkts-network-http-httpproxy-t.md) | Http Proxy Configuration Information. |
| [PathPreference](arkts-network-http-pathpreference-t.md) | HTTP request path preference.This is only a suggestion of the caller, and the system decides which path to use. |
| [QueryParamObject](arkts-network-http-queryparamobject-t.md) | A key-value object used to construct URL query parameters automatically.Each property name is treated as a query parameter key.Each property value may be either: - a single {@link QueryParamValue}, or - an array of {@link QueryParamValue}, which is expanded into repeated parameters with the same key.Serialization rules: - Keys and values are URL-encoded by the system. - A single value is serialized as one `key=value` pair. - An array value is serialized as multiple pairs using the same key.For example, `{ tag: ['a', 'b'] }` is serialized as `tag=a&tag=b`. - For array values, `undefined` and `null` elements are serialized as empty values without `=`.For example, `{ a: [1, "", undefined, null] }` is serialized as `a=1&a=&a&a`.Order semantics: - This type represents query parameters as an object, not as an ordered list of key-value pairs. - Multiple values for the same key are supported through arrays. - However, callers must not rely on preserving an exact original pair order such as `a=1&b=2&a=3`. If strict ordering or repeated-key ordering is required, use a pre-encoded query string instead of {@link QueryParamObject}.Usage notes: - Provide raw, unencoded keys and values. Do not pre-encode them. - If you need full control over the final query string format, use the `string`form of `queryParams` instead. |
| [QueryParamValue](arkts-network-http-queryparamvalue-t.md) | A single value that can be used as a query parameter.Serialization rules when used in {@link QueryParamObject}: - textual values: serialized as-is before URL encoding. - numeric values: converted to its string representation before URL encoding. - logical values: converted to "true" or "false" before URL encoding. - null or undefined: serialized as the key without `=` or a value (for example, `{ a: null }` -&gt; `a`). |
| [RemoteValidation](arkts-network-http-remotevalidation-t.md) | Remote Validation Type. |
| [Socks5Proxy](arkts-network-http-socks5proxy-t.md) | Socks5 Proxy Configuration Information. |
| [SslType](arkts-network-http-ssltype-t.md) | The secure communication protocol. |
| [TlsOptions](arkts-network-http-tlsoptions-t.md) | TlsOptions.'system': use system tls configuration.TlsOption: tls version range, and specify cipher suite. |
| [TlsV10CipherSuite](arkts-network-http-tlsv10ciphersuite-t.md) | TLS1.0 cipher suite. |
| [TlsV10SpecificCipherSuite](arkts-network-http-tlsv10specificciphersuite-t.md) | Cipher suite which TLS1.0+ support. |
| [TlsV11CipherSuite](arkts-network-http-tlsv11ciphersuite-t.md) | TLS1.1 cipher suite is same as TLS1.0 cipher suite. |
| [TlsV12CipherSuite](arkts-network-http-tlsv12ciphersuite-t.md) | TLS1.2 cipher suite should include TLS1.1 cipher suite. |
| [TlsV12SpecificCipherSuite](arkts-network-http-tlsv12specificciphersuite-t.md) | Cipher suite which TLS1.2+ support. |
| [TlsV13CipherSuite](arkts-network-http-tlsv13ciphersuite-t.md) | TLS1.3 cipher suite should include TLS1.2 cipher suite. |
| [TlsV13SpecificCipherSuite](arkts-network-http-tlsv13specificciphersuite-t.md) | Cipher suite which TLS1.3+ support.The framework has a built-in preference order, but your choice will be recorded. |
| [ValidationCallback](arkts-network-http-validationcallback-t.md) | Self defined remote validation.This API uses a promise to return the result. |
| [X509Cert](arkts-network-http-x509cert-t.md) | X509 certificate. |

