# setAbilityEnabled

## setAbilityEnabled

```TypeScript
function setAbilityEnabled(info: AbilityInfo, isEnable: boolean, callback: AsyncCallback<void>): void
```

设置是否启用指定的Ability组件，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AbilityInfo | Yes | Ability信息，指示需要设置启用状态的Ability。 |
| isEnable | boolean | Yes | 指定是否启用应用程序。true表示启用，false禁用。 |
| callback | AsyncCallback&lt;void> | Yes | 为返回操作结果而调用的回调。 |

## setAbilityEnabled

```TypeScript
function setAbilityEnabled(info: AbilityInfo, isEnable: boolean): Promise<void>
```

设置是否启用指定的Ability组件，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AbilityInfo | Yes | Ability信息，指示需要设置启用状态的Ability。 |
| isEnable | boolean | Yes | 指定是否启用应用程序。true表示启用，false禁用。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

