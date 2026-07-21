# isOpenAccessibility

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="isopenaccessibility"></a>
## isOpenAccessibility

```TypeScript
function isOpenAccessibility(callback: AsyncCallback<boolean>): void
```

Checks whether an accessibility application is enabled. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [isOpenAccessibilitySync](arkts-accessibility-accessibility-isopenaccessibilitysync-f.md#isopenaccessibilitysync-1)

<!--Device-accessibility-function isOpenAccessibility(callback: AsyncCallback<boolean>): void--><!--Device-accessibility-function isOpenAccessibility(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result. Returns **true** if the accessibility application is enabled; returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

accessibility.isOpenAccessibility((err: BusinessError, data: boolean) => {
  if (err) {
    console.error(`failed to isOpenAccessibility, Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`success data:isOpenAccessibility : ${JSON.stringify(data)}`);
});

```


<a id="isopenaccessibility-1"></a>
## isOpenAccessibility

```TypeScript
function isOpenAccessibility(): Promise<boolean>
```

Checks whether an accessibility application is enabled. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [isOpenAccessibilitySync](arkts-accessibility-accessibility-isopenaccessibilitysync-f.md#isopenaccessibilitysync-1)

<!--Device-accessibility-function isOpenAccessibility(): Promise<boolean>--><!--Device-accessibility-function isOpenAccessibility(): Promise<boolean>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. Returns **true** if the accessibility application is enabled; returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

accessibility.isOpenAccessibility().then((data: boolean) => {
  console.info(`success data:isOpenAccessibility : ${JSON.stringify(data)}`)
}).catch((err: BusinessError) => {
  console.error(`failed to  isOpenAccessibility, Code is ${err.code}, message is ${err.message}`);
});

```

