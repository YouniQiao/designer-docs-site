# getPermissionDef

## getPermissionDef

```TypeScript
function getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>): void
```

按权限名称获取权限的详细信息，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | string | Yes | 需要查询的权限的名称。 |
| callback | AsyncCallback&lt;PermissionDef> | Yes | 程序启动作为入参的回调函数，返回定义的权限信息。 |

## getPermissionDef

```TypeScript
function getPermissionDef(permissionName: string): Promise<PermissionDef>
```

按权限名称获取权限的详细信息，使用promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | string | Yes | 需要查询的权限的名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionDef> | Promise对象，获取成功时返回权限详细信息。 |

