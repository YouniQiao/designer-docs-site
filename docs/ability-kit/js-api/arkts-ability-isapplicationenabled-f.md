# isApplicationEnabled

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## isApplicationEnabled

```TypeScript
function isApplicationEnabled(bundleName: string, callback: AsyncCallback<boolean>): void
```

Checks whether an application is enabled based on a given bundle name. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. **true** if enabled, **false**otherwise. |


## isApplicationEnabled

```TypeScript
function isApplicationEnabled(bundleName: string): Promise<boolean>
```

Checks whether an application is enabled based on a given bundle name. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. **true** if enabled, **false** otherwise. |

