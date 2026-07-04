# HttpInterceptor

Defines an HTTP Interceptor. User can implement this interface to define the handle function.

**Since:** 22

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@ohos.net.http';
```

## interceptorHandle

```TypeScript
interceptorHandle(reqContext: HttpRequestContext, rspContext: HttpResponse): Promise<ChainContinue>
```

Intercept an HTTP process and do changes as disired.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reqContext | HttpRequestContext | Yes | the context of the target HTTP request. |
| rspContext | HttpResponse | Yes | the context of the target HTTP response. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ChainContinue&gt; | Continue the HTTP process or terminate then return the HTTP response. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

// Create a custom interceptor.
class CustomInterceptor implements http.HttpInterceptor {
  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;

  async interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {
    // Add the authentication header in the initial request phase.
    reqContext.header['Authorization'] = 'Bearer token';
    console.info('Interceptor: Added authorization header');
    return true; // Continue to process the interceptor chain.
  }
}

let customInterceptor = new CustomInterceptor();

```

```TypeScript
import { http } from '@kit.NetworkKit';

// Create a custom interceptor.
class CustomInterceptor implements http.HttpInterceptor {
  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;

  async interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {
    // Add the authentication header in the initial request phase.
    reqContext.header['Authorization'] = 'Bearer token';
    console.info('Interceptor: Added authorization header');
    return true; // Continue to process the interceptor chain.
  }
}

let customInterceptor = new CustomInterceptor();

```

## interceptorType

```TypeScript
interceptorType: InterceptorType
```

The type of this interceptor. It defines when this intercptor would be called.

**Type:** InterceptorType

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Communication.NetStack

