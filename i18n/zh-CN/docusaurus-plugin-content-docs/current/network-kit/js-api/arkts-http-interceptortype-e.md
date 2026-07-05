# InterceptorType

```TypeScript
export enum InterceptorType
```

Types of an HTTP interceptor.

**起始版本：** 22

**系统能力：** SystemCapability.Communication.NetStack

## INITIAL_REQUEST

```TypeScript
INITIAL_REQUEST = 'INITIAL_REQUEST'
```

Intercept after the initial HTTP request is assembled.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## REDIRECTION

```TypeScript
REDIRECTION = 'REDIRECTION'
```

Intercept when we get a redirection responsed and is going to send another request.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## CACHE_CHECKED

```TypeScript
CACHE_CHECKED = 'READ_CACHE'
```

Intercept after we checked the HTTP cache.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## NETWORK_CONNECT

```TypeScript
NETWORK_CONNECT = 'CONNECT_NETWORK'
```

Intercept when we perform network connection, such as TLS and TCP.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## FINAL_RESPONSE

```TypeScript
FINAL_RESPONSE = 'FINAL_RESPONSE'
```

Intercept when we get the final HTTP response.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

