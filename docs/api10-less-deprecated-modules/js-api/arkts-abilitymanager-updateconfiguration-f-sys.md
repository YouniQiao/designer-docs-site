# updateConfiguration

## updateConfiguration

```TypeScript
function updateConfiguration(config: Configuration, callback: AsyncCallback<void>): void
```

通过传入要修改的配置项来更新配置。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.abilityManager/abilityManager#updateConfiguration

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | Configuration | Yes | 新的配置项。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当通过修改配置来更新配置成功，err为undefined，否则为错误对象。 |

## updateConfiguration

```TypeScript
function updateConfiguration(config: Configuration): Promise<void>
```

通过传入要修改的配置项来更新配置。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.abilityManager/abilityManager#updateConfiguration

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | Configuration | Yes | 新的配置项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

