# setUninstallDisposedRule

## setUninstallDisposedRule

```TypeScript
function setUninstallDisposedRule(appIdentifier: string, rule: UninstallDisposedRule, appIndex?: int): void
```

设置指定应用或分身应用的卸载处置规则。

**Since:** 15

**Required permissions:** 

 ohos.permission.MANAGE_DISPOSED_APP_STATUS

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appIdentifier | string | Yes | 要设置卸载处置规则的应用的appIdentifier。 如果应用没有appIdentifier可使用appId代替。appId是应用的唯一标识，由应用  Bundle名称和签名信息决定，获取方法参见[获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。 |
| rule | UninstallDisposedRule | Yes | 表示要设置的卸载处置规则。 |
| appIndex | int | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700061 | AppIndex is not in the valid range. |
| 17700074 | The specified appIdentifier is invalid. |
| 17700075 | The specified bundleName of want is not the same with caller. |

