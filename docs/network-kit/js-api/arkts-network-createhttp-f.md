# createHttp

## Modules to Import

```TypeScript
import { http } from '@ohos.net.http';
```

## createHttp

```TypeScript
function createHttp(): HttpRequest
```

Creates an HTTP request task.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| HttpRequest | the HttpRequest of the createHttp. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();

```

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();

```

