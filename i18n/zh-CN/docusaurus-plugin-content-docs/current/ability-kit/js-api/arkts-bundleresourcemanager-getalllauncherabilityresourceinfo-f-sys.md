# getAllLauncherAbilityResourceInfo

## getAllLauncherAbilityResourceInfo

```TypeScript
function getAllLauncherAbilityResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<LauncherAbilityResourceInfo>>): void
```

根据给定的resourceFlags获取当前所有应用的LauncherAbilityResourceInfo。使用callback异步回调。

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

**系统能力：** SystemCapability.BundleManager.BundleFramework.Resource

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resourceFlags | int | 是 | 指定返回的LauncherAbilityResourceInfo所包含的信息。 |
| callback | AsyncCallback&lt;Array&lt;LauncherAbilityResourceInfo>> | 是 | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成  功时，err为undefined，data为获取到的LauncherAbilityResourceInfo数组；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |

## getAllLauncherAbilityResourceInfo

```TypeScript
function getAllLauncherAbilityResourceInfo(resourceFlags: int): Promise<Array<LauncherAbilityResourceInfo>>
```

根据给定的resourceFlags获取当前所有应用的LauncherAbilityResourceInfo。使用Promise异步回调。

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

**系统能力：** SystemCapability.BundleManager.BundleFramework.Resource

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resourceFlags | int | 是 | 指定返回的LauncherAbilityResourceInfo所包含的信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;LauncherAbilityResourceInfo>> | Promise对象，返回LauncherAbilityResourceInfo数组。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |

