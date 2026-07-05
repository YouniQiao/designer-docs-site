# createHttp

## createHttp

```TypeScript
function createHttp(): HttpRequest
```

Creates an HTTP request task.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| HttpRequest | the HttpRequest of the createHttp. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();


import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();

```

