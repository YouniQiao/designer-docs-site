# isAbilityEnabled

## isAbilityEnabled

```TypeScript
function isAbilityEnabled(info: AbilityInfo, callback: AsyncCallback<boolean>): void
```

根据给定的AbilityInfo查询ability是否已经启用，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AbilityInfo | Yes | Ability的配置信息。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数，返回boolean代表是否启用。 |

## isAbilityEnabled

```TypeScript
function isAbilityEnabled(info: AbilityInfo): Promise<boolean>
```

根据给定的AbilityInfo查询ability是否已经启用，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AbilityInfo | Yes | Ability的配置信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise形式返回boolean代表是否启用。 |

