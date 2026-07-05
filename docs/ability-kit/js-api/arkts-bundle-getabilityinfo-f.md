# getAbilityInfo

## getAbilityInfo

```TypeScript
function getAbilityInfo(bundleName: string, abilityName: string, callback: AsyncCallback<AbilityInfo>): void
```

通过Bundle名称和组件名获取Ability组件信息，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| abilityName | string | Yes | Ability名称。 |
| callback | AsyncCallback&lt;AbilityInfo> | Yes | 程序启动作为入参的回调函数，返回Ability信息。 |

## getAbilityInfo

```TypeScript
function getAbilityInfo(bundleName: string, abilityName: string): Promise<AbilityInfo>
```

通过Bundle名称和组件名获取Ability组件信息，使用Promise形式异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| abilityName | string | Yes | Ability组件名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityInfo> | Promise形式返回Ability信息。 |

