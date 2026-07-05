# getAllLauncherAbilityResourceInfo

## getAllLauncherAbilityResourceInfo

```TypeScript
function getAllLauncherAbilityResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<LauncherAbilityResourceInfo>>): void
```

根据给定的resourceFlags获取当前所有应用的LauncherAbilityResourceInfo。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | int | Yes | 指定返回的LauncherAbilityResourceInfo所包含的信息。 |
| callback | AsyncCallback&lt;Array&lt;LauncherAbilityResourceInfo>> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成  功时，err为undefined，data为获取到的LauncherAbilityResourceInfo数组；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |

## getAllLauncherAbilityResourceInfo

```TypeScript
function getAllLauncherAbilityResourceInfo(resourceFlags: int): Promise<Array<LauncherAbilityResourceInfo>>
```

根据给定的resourceFlags获取当前所有应用的LauncherAbilityResourceInfo。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | int | Yes | 指定返回的LauncherAbilityResourceInfo所包含的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;LauncherAbilityResourceInfo>> | Promise对象，返回LauncherAbilityResourceInfo数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |

