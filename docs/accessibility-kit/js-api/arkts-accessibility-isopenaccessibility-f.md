# isOpenAccessibility

## isOpenAccessibility

```TypeScript
function isOpenAccessibility(callback: AsyncCallback<boolean>): void
```

Checks whether an accessibility application is enabled. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitute:** accessibility.isOpenAccessibilitySync

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | Callback used to return the result. Returns true if the  accessibility application is enabled; returns false otherwise. |

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

## isOpenAccessibility

```TypeScript
function isOpenAccessibility(): Promise<boolean>
```

Checks whether an accessibility application is enabled. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitute:** accessibility.isOpenAccessibilitySync

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. Returns true if the accessibility application  is enabled; returns false otherwise. |

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

