# getAbilityLabel

## getAbilityLabel

```TypeScript
function getAbilityLabel(bundleName: string, abilityName: string, callback: AsyncCallback<string>): void
```

通过Bundle名称和Ability组件名获取应用名称，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 8

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| abilityName | string | Yes | Ability名称。 |
| callback | AsyncCallback&lt;string> | Yes | 程序启动作为入参的回调函数，返回应用名称信息。 |

## getAbilityLabel

```TypeScript
function getAbilityLabel(bundleName: string, abilityName: string): Promise<string>
```

通过Bundle名称和ability名称获取应用名称，使用Promise异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 8

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| abilityName | string | Yes | Ability名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise形式返回应用名称信息。 |

