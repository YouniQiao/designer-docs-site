# isAbilityEnabled

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## isAbilityEnabled

```TypeScript
function isAbilityEnabled(info: AbilityInfo, callback: AsyncCallback<boolean>): void
```

Checks whether the ability that matches a given AbilityInfo object is enabled. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

<!--Device-bundle-function isAbilityEnabled(info: AbilityInfo, callback: AsyncCallback<boolean>): void--><!--Device-bundle-function isAbilityEnabled(info: AbilityInfo, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | [AbilityInfo](arkts-ability-abilityinfo-i.md) | Yes | Ability information. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. **true** if enabled, **false** otherwise. |


## isAbilityEnabled

```TypeScript
function isAbilityEnabled(info: AbilityInfo): Promise<boolean>
```

Checks whether the ability that matches a given AbilityInfo object is enabled. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

<!--Device-bundle-function isAbilityEnabled(info: AbilityInfo): Promise<boolean>--><!--Device-bundle-function isAbilityEnabled(info: AbilityInfo): Promise<boolean>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | [AbilityInfo](arkts-ability-abilityinfo-i.md) | Yes | Ability information. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. **true** if enabled, **false** otherwise. |

