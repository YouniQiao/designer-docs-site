# createHttp

## Modules to Import

```TypeScript
import { http } from '@kit.NetworkKit';
```

<a id="createhttp"></a>
## createHttp

```TypeScript
function createHttp(): HttpRequest
```

Creates an HTTP request task.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-http-function createHttp(): HttpRequest--><!--Device-http-function createHttp(): HttpRequest-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [HttpRequest](arkts-network-connection-httprequest-t.md) | the HttpRequest of the createHttp. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();

```

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();

```

