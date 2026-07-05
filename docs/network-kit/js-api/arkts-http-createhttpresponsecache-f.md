# createHttpResponseCache

## createHttpResponseCache

```TypeScript
function createHttpResponseCache(cacheSize?: int): HttpResponseCache
```

Creates a default {@code HttpResponseCache} object to store the responses of HTTP access requests.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cacheSize | int | No | the size of cache(max value is 10MB), default is 1010241024(10MB). |

**Return value:**

| Type | Description |
| --- | --- |
| HttpResponseCache | the HttpResponseCache of the createHttpResponseCache. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpResponseCache = http.createHttpResponseCache();


import { http } from '@kit.NetworkKit';

let httpResponseCache = http.createHttpResponseCache();

```

