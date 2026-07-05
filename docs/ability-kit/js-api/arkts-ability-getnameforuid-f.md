# getNameForUid

## Modules to Import

```TypeScript
import { bundle } from '@ohos.bundle';
```

## getNameForUid

```TypeScript
function getNameForUid(uid: number, callback: AsyncCallback<string>): void
```

Obtains bundle name by the given uid.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getBundleNameByUid

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | Indicates the UID of an application. |
| callback | AsyncCallback&lt;string&gt; | Yes |  |


## getNameForUid

```TypeScript
function getNameForUid(uid: number): Promise<string>
```

Obtains the bundle name based on a UID. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | UID based on which the bundle name is to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns the bundle name. |

