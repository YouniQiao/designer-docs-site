# createHttpResponseCache

## Modules to Import

```TypeScript
import { http } from '@kit.NetworkKit';
```

## createHttpResponseCache

```TypeScript
function createHttpResponseCache(cacheSize?: number): HttpResponseCache
```

Creates a default {@code HttpResponseCache} object to store the responses of HTTP access requests.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-http-function createHttpResponseCache(cacheSize?: int): HttpResponseCache--><!--Device-http-function createHttpResponseCache(cacheSize?: int): HttpResponseCache-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cacheSize | number | No | the size of cache(max value is 10MB), default is 10*1024*1024(10MB). |

**Return value:**

| Type | Description |
| --- | --- |
| [HttpResponseCache](arkts-network-http-httpresponsecache-i.md) | the HttpResponseCache of the createHttpResponseCache. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpResponseCache = http.createHttpResponseCache();

```

```TypeScript
import { http } from '@kit.NetworkKit';

let httpResponseCache = http.createHttpResponseCache();

```

