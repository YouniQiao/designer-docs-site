# HttpResponseCache

Defines an object that stores the response to an HTTP request.

**Since:** 11

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@ohos.net.http';
```

## delete

```TypeScript
delete(callback: AsyncCallback<void>): void
```

Disables a cache and deletes the data in it.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | the callback of delete. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL").then(data => {
  const httpResponseCache = http.createHttpResponseCache();
  httpResponseCache.delete((err: BusinessError) => {
    try {
      if (err) {
        console.error('fail: ' + err);
      } else {
        console.info('success');
      }
    } catch (err) {
      console.error('error: ' + err);
    }
  });
  httpRequest.destroy();
}).catch((error: BusinessError) => {
  console.error("errcode" + JSON.stringify(error));
});

```

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL").then(data => {
  const httpResponseCache = http.createHttpResponseCache();
  httpResponseCache.delete((err: BusinessError) => {
    try {
      if (err) {
        console.error('fail: ' + err);
      } else {
        console.info('success');
      }
    } catch (err) {
      console.error('error: ' + err);
    }
  });
  httpRequest.destroy();
}).catch((error: BusinessError) => {
  console.error("errcode" + JSON.stringify(error));
});

```

## delete

```TypeScript
delete(): Promise<void>
```

Disables a cache and deletes the data in it.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the delete. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL").then(data => {
  const httpResponseCache = http.createHttpResponseCache();
  httpResponseCache.delete().then(() => {
    console.info("success");
  }).catch((err: BusinessError) => {
    console.error("fail");
  });
  httpRequest.destroy();
}).catch((error: BusinessError) => {
  console.error("errcode" + JSON.stringify(error));
});

```

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL").then(data => {
  const httpResponseCache = http.createHttpResponseCache();
  httpResponseCache.delete().then(() => {
    console.info("success");
  }).catch((err: BusinessError) => {
    console.error("fail");
  });
  httpRequest.destroy();
}).catch((error: BusinessError) => {
  console.error("errcode" + JSON.stringify(error));
});

```

## flush

```TypeScript
flush(callback: AsyncCallback<void>): void
```

Writes data in the cache to the file system so that all the cached data can be accessed in the next HTTP request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | the callback of flush. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpResponseCache = http.createHttpResponseCache();
let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL", (err: BusinessError, data: http.HttpResponse) => {
  if (!err) {
    httpResponseCache.flush((err: BusinessError) => {
      if (err) {
        console.error('flush fail');
      }
      console.info('flush success');
    });
    httpRequest.destroy();
  } else {
    console.error('error:' + JSON.stringify(err));
    // Call destroy() to release resources when the request is no longer needed, preventing memory leaks.
    httpRequest.destroy();
  }
});

```

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpResponseCache = http.createHttpResponseCache();
let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL", (err: BusinessError, data: http.HttpResponse) => {
  if (!err) {
    httpResponseCache.flush((err: BusinessError) => {
      if (err) {
        console.error('flush fail');
      }
      console.info('flush success');
    });
    httpRequest.destroy();
  } else {
    console.error('error:' + JSON.stringify(err));
    // Call destroy() to release resources when the request is no longer needed, preventing memory leaks.
    httpRequest.destroy();
  }
});

```

## flush

```TypeScript
flush(): Promise<void>
```

Writes data in the cache to the file system so that all the cached data can be accessed in the next HTTP request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the flush. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
let httpResponseCache = http.createHttpResponseCache();
let promise = httpRequest.request("EXAMPLE_URL");

promise.then((data: http.HttpResponse) => {
  httpResponseCache.flush().then(() => {
    console.error('flush success');
  }).catch((err: BusinessError) => {
    console.error('flush fail');
  });
}).catch((err: Error) => {
  console.error('error:' + JSON.stringify(err));
});

```

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
let httpResponseCache = http.createHttpResponseCache();
let promise = httpRequest.request("EXAMPLE_URL");

promise.then((data: http.HttpResponse) => {
  httpResponseCache.flush().then(() => {
    console.error('flush success');
  }).catch((err: BusinessError) => {
    console.error('flush fail');
  });
}).catch((err: Error) => {
  console.error('error:' + JSON.stringify(err));
});

```

