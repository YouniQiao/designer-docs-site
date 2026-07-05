# getDisposedRulesByBundle

## getDisposedRulesByBundle

```TypeScript
function getDisposedRulesByBundle(bundleName: string): Array<DisposedRuleConfiguration>
```

获取指定应用程序包设置的所有拦截规则。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示设置拦截规则的应用程序包的包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;DisposedRuleConfiguration> | 指定应用程序包已设置的拦截规则。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 801 | Capability not supported. |

