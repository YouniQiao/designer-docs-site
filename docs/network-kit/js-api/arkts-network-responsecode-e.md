# ResponseCode

Enumerates the response codes for an HTTP request.

**Since:** 11

**System capability:** SystemCapability.Communication.NetStack

## OK

```TypeScript
OK = 200
```

The request was successful. Typically used for GET and POST requests.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## CREATED

```TypeScript
CREATED
```

Successfully requested and created a new resource.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## ACCEPTED

```TypeScript
ACCEPTED
```

The request has been accepted but has not been processed completely.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## NOT_AUTHORITATIVE

```TypeScript
NOT_AUTHORITATIVE
```

Unauthorized information. The request was successful.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## NO_CONTENT

```TypeScript
NO_CONTENT
```

No content. The server successfully processed, but did not return content.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## RESET

```TypeScript
RESET
```

Reset the content.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## PARTIAL

```TypeScript
PARTIAL
```

Partial content. The server successfully processed some GET requests.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## MULT_CHOICE

```TypeScript
MULT_CHOICE = 300
```

Multiple options.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## MOVED_PERM

```TypeScript
MOVED_PERM
```

<p>Permanently move. The requested resource has been permanently moved to a new URI,
and the returned information will include the new URI. The browser will automatically redirect to the new URI.</p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## MOVED_TEMP

```TypeScript
MOVED_TEMP
```

Temporary movement.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## SEE_OTHER

```TypeScript
SEE_OTHER
```

View other addresses.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## NOT_MODIFIED

```TypeScript
NOT_MODIFIED
```

Not modified.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## USE_PROXY

```TypeScript
USE_PROXY
```

Using proxies.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## BAD_REQUEST

```TypeScript
BAD_REQUEST = 400
```

The server cannot understand the syntax error error requested by the client.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## UNAUTHORIZED

```TypeScript
UNAUTHORIZED
```

Request for user authentication.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## PAYMENT_REQUIRED

```TypeScript
PAYMENT_REQUIRED
```

Reserved for future use.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## FORBIDDEN

```TypeScript
FORBIDDEN
```

The server understands the request from the requesting client, but refuses to execute it.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## NOT_FOUND

```TypeScript
NOT_FOUND
```

The server was unable to find resources (web pages) based on the client's request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## BAD_METHOD

```TypeScript
BAD_METHOD
```

The method in the client request is prohibited.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## NOT_ACCEPTABLE

```TypeScript
NOT_ACCEPTABLE
```

The server is unable to complete the request based on the content characteristics requested by the client.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## PROXY_AUTH

```TypeScript
PROXY_AUTH
```

Request authentication of the proxy's identity.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## CLIENT_TIMEOUT

```TypeScript
CLIENT_TIMEOUT
```

The request took too long and timed out.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## CONFLICT

```TypeScript
CONFLICT
```

<p>The server may have returned this code when completing the client's PUT request,
as there was a conflict when the server was processing the request.</p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## GONE

```TypeScript
GONE
```

The resource requested by the client no longer exists.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## LENGTH_REQUIRED

```TypeScript
LENGTH_REQUIRED
```

The server is unable to process request information sent by the client without Content Length.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## PRECON_FAILED

```TypeScript
PRECON_FAILED
```

The prerequisite for requesting information from the client is incorrect.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## ENTITY_TOO_LARGE

```TypeScript
ENTITY_TOO_LARGE
```

The request was rejected because the requested entity was too large for the server to process.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## REQ_TOO_LONG

```TypeScript
REQ_TOO_LONG
```

The requested URI is too long (usually a URL) and the server cannot process it.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## UNSUPPORTED_TYPE

```TypeScript
UNSUPPORTED_TYPE
```

The server is unable to process the requested format.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## RANGE_NOT_SATISFIABLE

```TypeScript
RANGE_NOT_SATISFIABLE
```

The server cannot process the requested data range.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NetStack

## INTERNAL_ERROR

```TypeScript
INTERNAL_ERROR = 500
```

Internal server error, unable to complete the request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## NOT_IMPLEMENTED

```TypeScript
NOT_IMPLEMENTED
```

The server does not support the requested functionality and cannot complete the request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## BAD_GATEWAY

```TypeScript
BAD_GATEWAY
```

The server acting as a gateway or proxy received an invalid request from the remote server.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## UNAVAILABLE

```TypeScript
UNAVAILABLE
```

Due to overload or system maintenance, the server is temporarily unable to process client requests.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## GATEWAY_TIMEOUT

```TypeScript
GATEWAY_TIMEOUT
```

The server acting as a gateway or proxy did not obtain requests from the remote server in a timely manner.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

## VERSION

```TypeScript
VERSION
```

The version of the HTTP protocol requested by the server.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

