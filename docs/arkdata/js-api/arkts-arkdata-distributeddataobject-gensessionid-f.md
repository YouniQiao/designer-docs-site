# genSessionId

## Modules to Import

```TypeScript
import { distributedDataObject } from '@kit.ArkData';
```

<a id="gensessionid"></a>
## genSessionId

```TypeScript
function genSessionId(): string
```

Creates a random session ID.

**Since:** 8

<!--Device-distributedDataObject-function genSessionId(): string--><!--Device-distributedDataObject-function genSessionId(): string-End-->

**System capability:** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**Return value:**

| Type | Description |
| --- | --- |
| string | Session ID created. |

**Example**

```TypeScript
let sessionId: string = distributedDataObject.genSessionId();

```

