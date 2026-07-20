# getNameForUid

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## getNameForUid

```TypeScript
function getNameForUid(uid: number, callback: AsyncCallback<string>): void
```

Obtains bundle name by the given uid.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getBundleNameByUid

<!--Device-bundle-function getNameForUid(uid: number, callback: AsyncCallback<string>): void--><!--Device-bundle-function getNameForUid(uid: number, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | Indicates the UID of an application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes |  |


## getNameForUid

```TypeScript
function getNameForUid(uid: number): Promise<string>
```

Obtains the bundle name based on a UID. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

<!--Device-bundle-function getNameForUid(uid: number): Promise<string>--><!--Device-bundle-function getNameForUid(uid: number): Promise<string>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | UID based on which the bundle name is to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Returns the bundle name. |

