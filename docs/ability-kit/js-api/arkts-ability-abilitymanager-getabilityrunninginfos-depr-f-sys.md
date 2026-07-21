# getAbilityRunningInfos (System API)

<a id="getabilityrunninginfos"></a>
## getAbilityRunningInfos

```TypeScript
function getAbilityRunningInfos(): Promise<Array<AbilityRunningInfo>>
```

Obtains the ability running information. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAbilityRunningInfos

**Required permissions:** ohos.permission.GET_RUNNING_INFO

<!--Device-abilityManager-function getAbilityRunningInfos(): Promise<Array<AbilityRunningInfo>>--><!--Device-abilityManager-function getAbilityRunningInfos(): Promise<Array<AbilityRunningInfo>>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AbilityRunningInfo&gt;&gt; | Promise used to return the ability running information. |


<a id="getabilityrunninginfos-1"></a>
## getAbilityRunningInfos

```TypeScript
function getAbilityRunningInfos(callback: AsyncCallback<Array<AbilityRunningInfo>>): void
```

Obtains the ability running information. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAbilityRunningInfos

**Required permissions:** ohos.permission.GET_RUNNING_INFO

<!--Device-abilityManager-function getAbilityRunningInfos(callback: AsyncCallback<Array<AbilityRunningInfo>>): void--><!--Device-abilityManager-function getAbilityRunningInfos(callback: AsyncCallback<Array<AbilityRunningInfo>>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;AbilityRunningInfo&gt;&gt; | Yes | Callback used to return the ability running information. |

