# InterceptorType

Types of an HTTP interceptor.

**Since:** 22

**System capability:** SystemCapability.Communication.NetStack

## INITIAL_REQUEST

```TypeScript
INITIAL_REQUEST = 'INITIAL_REQUEST'
```

Intercept after the initial HTTP request is assembled.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Communication.NetStack

## REDIRECTION

```TypeScript
REDIRECTION = 'REDIRECTION'
```

Intercept when we get a redirection responsed and is going to send another request.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Communication.NetStack

## CACHE_CHECKED

```TypeScript
CACHE_CHECKED = 'READ_CACHE'
```

Intercept after we checked the HTTP cache.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Communication.NetStack

## NETWORK_CONNECT

```TypeScript
NETWORK_CONNECT = 'CONNECT_NETWORK'
```

Intercept when we perform network connection, such as TLS and TCP.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Communication.NetStack

## FINAL_RESPONSE

```TypeScript
FINAL_RESPONSE = 'FINAL_RESPONSE'
```

Intercept when we get the final HTTP response.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Communication.NetStack

