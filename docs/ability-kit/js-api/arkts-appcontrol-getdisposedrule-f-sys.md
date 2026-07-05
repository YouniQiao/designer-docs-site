# getDisposedRule

## getDisposedRule

```TypeScript
function getDisposedRule(appId: string, appIndex?: int): DisposedRule
```

获取指定应用或分身应用已设置的拦截规则。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | 要获取拦截规则的应用的appId或appIdentifier。使用appId设置的拦截规则只能通过appId获取，使用appIdentifier设置的同理。  说明： appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见  [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。  [appIdentifier]./bundleManager/BundleInfo:SignatureInfo也是应用的唯一标识，详情信息可参考  [什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，获取方法参见  [获取应用的appIdentifier](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appidentifier)。 |
| appIndex | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| DisposedRule | 对应用的拦截规则。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700005 | The specified app ID is invalid. |
| 17700061 | AppIndex is not in the valid range. [since 12] |

