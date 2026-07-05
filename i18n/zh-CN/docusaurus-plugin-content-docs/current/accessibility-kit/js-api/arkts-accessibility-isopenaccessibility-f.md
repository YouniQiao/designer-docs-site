# isOpenAccessibility

## isOpenAccessibility

```TypeScript
function isOpenAccessibility(callback: AsyncCallback<boolean>): void
```

Checks whether an accessibility application is enabled. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 10

**替代接口：** accessibility.isOpenAccessibilitySync

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. Returns true if the  accessibility application is enabled; returns false otherwise. |

**示例：**

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

**起始版本：** 7

**废弃版本：** 10

**替代接口：** accessibility.isOpenAccessibilitySync

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. Returns true if the accessibility application  is enabled; returns false otherwise. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

accessibility.isOpenAccessibility().then((data: boolean) => {
  console.info(`success data:isOpenAccessibility : ${JSON.stringify(data)}`)
}).catch((err: BusinessError) => {
  console.error(`failed to  isOpenAccessibility, Code is ${err.code}, message is ${err.message}`);
});

```

