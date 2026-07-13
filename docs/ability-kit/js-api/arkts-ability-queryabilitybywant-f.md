# queryAbilityByWant

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## queryAbilityByWant

```TypeScript
function queryAbilityByWant(want: Want,
    bundleFlags: number, userId: number, callback: AsyncCallback<Array<AbilityInfo>>): void
```

Obtains the ability information of the specified user based on given Want. This API uses an asynchronous callback
to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want containing the bundle name. |
| bundleFlags | number | Yes | Ability information to be returned. For details about the available enumeratedvalues, see the ability information flags in [BundleFlag](arkts-ability-bundleflag-e.md). |
| userId | number | Yes | User ID. The value must be greater than or equal to 0. |
| callback | AsyncCallback&lt;Array&lt;AbilityInfo&gt;&gt; | Yes | Callback used to return the ability information. |


## queryAbilityByWant

```TypeScript
function queryAbilityByWant(want: Want, bundleFlags: number, callback: AsyncCallback<Array<AbilityInfo>>): void
```

Obtains the ability information based on given Want. This API uses an asynchronous callback to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want containing the bundle name. |
| bundleFlags | number | Yes | Ability information to be returned. For details about the available enumeratedvalues, see the ability information flags in [BundleFlag](arkts-ability-bundleflag-e.md). |
| callback | AsyncCallback&lt;Array&lt;AbilityInfo&gt;&gt; | Yes | Callback used to return the ability information. |


## queryAbilityByWant

```TypeScript
function queryAbilityByWant(want: Want, bundleFlags: number, userId?: number): Promise<Array<AbilityInfo>>
```

Obtains the ability information based on given Want. This API uses a promise to return the result.

No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want containing the bundle name. |
| bundleFlags | number | Yes | Ability information to be returned. For details about the available enumeratedvalues, see the ability information flags in [BundleFlag](arkts-ability-bundleflag-e.md). |
| userId | number | No | User ID. The default value is the user ID of the caller. The value must be greater thanor equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AbilityInfo&gt;&gt; | Promise used to return the ability information. |

