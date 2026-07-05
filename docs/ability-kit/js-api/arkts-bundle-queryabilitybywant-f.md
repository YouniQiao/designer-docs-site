# queryAbilityByWant

## queryAbilityByWant

```TypeScript
function queryAbilityByWant(want: Want,
    bundleFlags: number, userId: number, callback: AsyncCallback<Array<AbilityInfo>>): void
```

根据给定的意图获取指定用户下Ability信息，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 指示包含要查询的应用Bundle名称的意图。 |
| bundleFlags | number | Yes | 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明]bundle.BundleFlag中Ability信息相关flag。 |
| userId | number | Yes | 用户ID。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;AbilityInfo>> | Yes | 程序启动作为入参的回调函数，返回Ability信息。 |

## queryAbilityByWant

```TypeScript
function queryAbilityByWant(want: Want, bundleFlags: number, callback: AsyncCallback<Array<AbilityInfo>>): void
```

根据给定的意图获取Ability信息，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 指示包含要查询的应用Bundle名称的意图。 |
| bundleFlags | number | Yes | 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明]bundle.BundleFlag中Ability信息相关flag。 |
| callback | AsyncCallback&lt;Array&lt;AbilityInfo>> | Yes | 程序启动作为入参的回调函数，返回Ability信息。 |

## queryAbilityByWant

```TypeScript
function queryAbilityByWant(want: Want, bundleFlags: number, userId?: number): Promise<Array<AbilityInfo>>
```

根据给定的意图获取Ability组件信息，使用Promise异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 7

**Deprecated since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 包含要查询的应用Bundle名称的意图。 |
| bundleFlags | number | Yes | 用于指定返回abilityInfo信息。取值范围：参考[BundleFlag说明]bundle.BundleFlag中Ability信息相关flag。 |
| userId | number | No | 用户ID。默认值：调用方所在用户，取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AbilityInfo>> | Promise形式返回Ability信息。 |

