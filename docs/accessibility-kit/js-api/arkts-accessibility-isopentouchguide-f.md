# isOpenTouchGuide

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## isOpenTouchGuide

```TypeScript
function isOpenTouchGuide(callback: AsyncCallback<boolean>): void
```

Checks whether touch guide mode is enabled. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [isOpenTouchGuideSync](arkts-accessibility-isopentouchguidesync-f.md#isopentouchguidesync-1)

**System capability:** SystemCapability.BarrierFree.Accessibility.Vision

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. Returns **true** if touch guidemode is enabled; returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

accessibility.isOpenTouchGuide((err: BusinessError, data: boolean) => {
  if (err) {
    console.error(`failed to isOpenTouchGuide, Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`success data:isOpenTouchGuide : ${JSON.stringify(data)}`);
});

```


## isOpenTouchGuide

```TypeScript
function isOpenTouchGuide(): Promise<boolean>
```

Checks whether touch guide mode is enabled. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [isOpenTouchGuideSync](arkts-accessibility-isopentouchguidesync-f.md#isopentouchguidesync-1)

**System capability:** SystemCapability.BarrierFree.Accessibility.Vision

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. Returns **true** if touch guide mode is enabled;returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

accessibility.isOpenTouchGuide().then((data: boolean) => {
  console.info(`success data:isOpenTouchGuide : ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`failed to  isOpenTouchGuide, Code is ${err.code}, message is ${err.message}`);
});

```

