# genSessionId

## Modules to Import

```TypeScript
import { distributedDataObject } from '@ohos.data.distributedDataObject';
```

## genSessionId

```TypeScript
function genSessionId(): string
```

Creates a random session ID.

**Since:** 8

**System capability:** SystemCapability.DistributedDataManager.DataObject.DistributedObject

**Return value:**

| Type | Description |
| --- | --- |
| string | Session ID created. |

**Example**

```TypeScript
let sessionId: string = distributedDataObject.genSessionId();

```

