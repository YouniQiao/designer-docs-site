# isAppUid

## Modules to Import

```TypeScript
import { process } from '@ohos.process';
```

## isAppUid

```TypeScript
function isAppUid(v: number): boolean
```

Checks whether a UID belongs to this application.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isAppUid](arkts-arkts-processmanager-c.md#isappuid-1)

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| v | number | Yes | UID. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** is returned if the UID belongs to the application;otherwise, **false** is returned. |

**Example**

```TypeScript
let result = process.isAppUid(688);

```

