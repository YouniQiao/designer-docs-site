# getLauncherAbilityResourceInfo

## getLauncherAbilityResourceInfo

```TypeScript
function getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int): Array<LauncherAbilityResourceInfo>
```

以同步方法根据给定的bundleName和resourceFlags获取当前应用的LauncherAbilityResourceInfo。

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_BUNDLE_RESOURCES

**系统能力：** SystemCapability.BundleManager.BundleFramework.Resource

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 指定查询应用的包名。 |
| resourceFlags | int | 否 | 指定返回的LauncherAbilityResourceInfo所包含的信息，默认值为  [ResourceFlag]bundleResourceManager.ResourceFlag.GET_RESOURCE_INFO_ALL。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;LauncherAbilityResourceInfo> | 返回指定应用的LauncherAbilityResourceInfo。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |

## getLauncherAbilityResourceInfo

```TypeScript
function getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int): Array<LauncherAbilityResourceInfo>
```

以同步方法根据给定的bundleName、resourceFlags和appIndex获取当前应用或分身应用的LauncherAbilityResourceInfo。

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_BUNDLE_RESOURCES

**系统能力：** SystemCapability.BundleManager.BundleFramework.Resource

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 指定查询应用的包名。 |
| resourceFlags | int | 否 |  |
| appIndex | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;LauncherAbilityResourceInfo> | 返回指定应用的LauncherAbilityResourceInfo。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700061 | AppIndex not in valid range or not found. |

