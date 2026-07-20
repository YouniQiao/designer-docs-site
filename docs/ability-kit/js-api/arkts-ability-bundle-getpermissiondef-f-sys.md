# getPermissionDef (System API)

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## getPermissionDef

```TypeScript
function getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>): void
```

Obtains the permission details by permission name. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-bundle-function getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>): void--><!--Device-bundle-function getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | string | Yes | Name of the permission. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<PermissionDef> | Yes | Callback used to return the permission details. |


## getPermissionDef

```TypeScript
function getPermissionDef(permissionName: string): Promise<PermissionDef>
```

Obtains the permission details by permission name. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-bundle-function getPermissionDef(permissionName: string): Promise<PermissionDef>--><!--Device-bundle-function getPermissionDef(permissionName: string): Promise<PermissionDef>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | string | Yes | Name of the permission. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PermissionDef> | Promise used to return the permission details. |

