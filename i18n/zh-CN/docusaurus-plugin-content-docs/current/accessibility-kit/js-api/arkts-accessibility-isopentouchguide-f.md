# isOpenTouchGuide

## isOpenTouchGuide

```TypeScript
function isOpenTouchGuide(callback: AsyncCallback<boolean>): void
```

Checks whether touch guide mode is enabled. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 10

**替代接口：** accessibility.isOpenTouchGuideSync

**系统能力：** SystemCapability.BarrierFree.Accessibility.Vision

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. Returns true if touch guide  mode is enabled; returns false otherwise. |

**示例：**

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

**起始版本：** 7

**废弃版本：** 10

**替代接口：** accessibility.isOpenTouchGuideSync

**系统能力：** SystemCapability.BarrierFree.Accessibility.Vision

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. Returns true if touch guide mode is enabled;  returns false otherwise. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

accessibility.isOpenTouchGuide().then((data: boolean) => {
  console.info(`success data:isOpenTouchGuide : ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`failed to  isOpenTouchGuide, Code is ${err.code}, message is ${err.message}`);
});

```

