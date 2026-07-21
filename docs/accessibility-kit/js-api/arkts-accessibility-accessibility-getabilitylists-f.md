# getAbilityLists

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="getabilitylists"></a>
## getAbilityLists

```TypeScript
function getAbilityLists(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void
```

Obtains the accessibility application list. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getAccessibilityExtensionList(abilityType:](arkts-accessibility-accessibility-getaccessibilityextensionlist-f.md#getaccessibilityextensionlist-1)

<!--Device-accessibility-function getAbilityLists(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void--><!--Device-accessibility-function getAbilityLists(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityType | [AbilityType](arkts-accessibility-accessibility-abilitytype-t.md) | Yes | Accessibility application type. |
| stateType | [AbilityState](arkts-accessibility-accessibility-abilitystate-t.md) | Yes | Accessibility application status. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;AccessibilityAbilityInfo&gt;&gt; | Yes | Callback used to return the accessibility application list. If the operation is successful, **err** is **undefined** and **data** is the accessibility application list. Otherwise, it is an error object. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let abilityType: accessibility.AbilityType = 'spoken';
let abilityState: accessibility.AbilityState = 'enable';

accessibility.getAbilityLists(abilityType, abilityState, (err: BusinessError, data: accessibility.AccessibilityAbilityInfo[]) => {
  if (err) {
    console.error(`failed to get accessibility extension list because ${JSON.stringify(err)}`);
    return;
  }
  console.info(`succeeded in getting accessibility extension list, ${JSON.stringify(data)}`);
})

```


<a id="getabilitylists-1"></a>
## getAbilityLists

```TypeScript
function getAbilityLists(abilityType: AbilityType, stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>
```

Obtains the accessibility application list. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getAccessibilityExtensionList(abilityType:](arkts-accessibility-accessibility-getaccessibilityextensionlist-f.md#getaccessibilityextensionlist-1)

<!--Device-accessibility-function getAbilityLists(abilityType: AbilityType, stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>--><!--Device-accessibility-function getAbilityLists(abilityType: AbilityType, stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityType | [AbilityType](arkts-accessibility-accessibility-abilitytype-t.md) | Yes | Accessibility application type. |
| stateType | [AbilityState](arkts-accessibility-accessibility-abilitystate-t.md) | Yes | Accessibility application status. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityAbilityInfo&gt;&gt; | Promise used to return the accessibility application list. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let abilityType: accessibility.AbilityType = 'spoken';
let abilityState: accessibility.AbilityState = 'enable';

accessibility.getAbilityLists(abilityType, abilityState).then((data: accessibility.AccessibilityAbilityInfo[]) => {
  console.info(`succeeded in getting accessibility extension list, ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`failed to get accessibility extension list because ${JSON.stringify(err)}`);
});

```

