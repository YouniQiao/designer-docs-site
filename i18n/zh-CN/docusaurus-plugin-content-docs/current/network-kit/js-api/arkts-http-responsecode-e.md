# ResponseCode

```TypeScript
export enum ResponseCode
```

Enumerates the response codes for an HTTP request.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetStack

## OK

```TypeScript
OK = 200
```

The request was successful. Typically used for GET and POST requests.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## CREATED

```TypeScript
CREATED
```

Successfully requested and created a new resource.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## ACCEPTED

```TypeScript
ACCEPTED
```

The request has been accepted but has not been processed completely.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## NOT_AUTHORITATIVE

```TypeScript
NOT_AUTHORITATIVE
```

Unauthorized information. The request was successful.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## NO_CONTENT

```TypeScript
NO_CONTENT
```

No content. The server successfully processed, but did not return content.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## RESET

```TypeScript
RESET
```

Reset the content.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## PARTIAL

```TypeScript
PARTIAL
```

Partial content. The server successfully processed some GET requests.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## MULT_CHOICE

```TypeScript
MULT_CHOICE = 300
```

Multiple options.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## MOVED_PERM

```TypeScript
MOVED_PERM
```

<p>Permanently move. The requested resource has been permanently moved to a new URI, and the returned information will include the new URI. The browser will automatically redirect to the new URI.</p>

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## MOVED_TEMP

```TypeScript
MOVED_TEMP
```

Temporary movement.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## SEE_OTHER

```TypeScript
SEE_OTHER
```

View other addresses.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## NOT_MODIFIED

```TypeScript
NOT_MODIFIED
```

Not modified.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## USE_PROXY

```TypeScript
USE_PROXY
```

Using proxies.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## BAD_REQUEST

```TypeScript
BAD_REQUEST = 400
```

The server cannot understand the syntax error error requested by the client.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## UNAUTHORIZED

```TypeScript
UNAUTHORIZED
```

Request for user authentication.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## PAYMENT_REQUIRED

```TypeScript
PAYMENT_REQUIRED
```

Reserved for future use.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## FORBIDDEN

```TypeScript
FORBIDDEN
```

The server understands the request from the requesting client, but refuses to execute it.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## NOT_FOUND

```TypeScript
NOT_FOUND
```

The server was unable to find resources (web pages) based on the client's request.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## BAD_METHOD

```TypeScript
BAD_METHOD
```

The method in the client request is prohibited.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## NOT_ACCEPTABLE

```TypeScript
NOT_ACCEPTABLE
```

The server is unable to complete the request based on the content characteristics requested by the client.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## PROXY_AUTH

```TypeScript
PROXY_AUTH
```

Request authentication of the proxy's identity.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## CLIENT_TIMEOUT

```TypeScript
CLIENT_TIMEOUT
```

The request took too long and timed out.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## CONFLICT

```TypeScript
CONFLICT
```

<p>The server may have returned this code when completing the client's PUT request, as there was a conflict when the server was processing the request.</p>

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## GONE

```TypeScript
GONE
```

The resource requested by the client no longer exists.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## LENGTH_REQUIRED

```TypeScript
LENGTH_REQUIRED
```

The server is unable to process request information sent by the client without Content Length.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## PRECON_FAILED

```TypeScript
PRECON_FAILED
```

The prerequisite for requesting information from the client is incorrect.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## ENTITY_TOO_LARGE

```TypeScript
ENTITY_TOO_LARGE
```

The request was rejected because the requested entity was too large for the server to process.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## REQ_TOO_LONG

```TypeScript
REQ_TOO_LONG
```

The requested URI is too long (usually a URL) and the server cannot process it.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## UNSUPPORTED_TYPE

```TypeScript
UNSUPPORTED_TYPE
```

The server is unable to process the requested format.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## RANGE_NOT_SATISFIABLE

```TypeScript
RANGE_NOT_SATISFIABLE
```

The server cannot process the requested data range.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## INTERNAL_ERROR

```TypeScript
INTERNAL_ERROR = 500
```

Internal server error, unable to complete the request.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## NOT_IMPLEMENTED

```TypeScript
NOT_IMPLEMENTED
```

The server does not support the requested functionality and cannot complete the request.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## BAD_GATEWAY

```TypeScript
BAD_GATEWAY
```

The server acting as a gateway or proxy received an invalid request from the remote server.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## UNAVAILABLE

```TypeScript
UNAVAILABLE
```

Due to overload or system maintenance, the server is temporarily unable to process client requests.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## GATEWAY_TIMEOUT

```TypeScript
GATEWAY_TIMEOUT
```

The server acting as a gateway or proxy did not obtain requests from the remote server in a timely manner.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## VERSION

```TypeScript
VERSION
```

The version of the HTTP protocol requested by the server.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

