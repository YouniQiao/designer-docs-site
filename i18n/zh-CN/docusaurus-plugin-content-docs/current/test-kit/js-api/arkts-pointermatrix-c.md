# PointerMatrix

表示设备显示上的指针二维数组，用于构建可通过UiDriver注入的多指轨迹。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## create

```TypeScript
static create(fingers: int, steps: int): PointerMatrix
```

创建**PointerMatrix**对象并返回创建的对象。该API为静态API。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fingers | int | 是 | 多指操作期间注入的手指数。  取值范围：[1, 10] |
| steps | int | 是 | 手指执行的步数。  取值范围：[1, 1000] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PointerMatrix | - 创建的PointerMatrix对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { PointerMatrix } from '@kit.TestKit';

async function demo() {
  let pointerMatrix: PointerMatrix = PointerMatrix.create(2, 3);
}

```

## setPoint

```TypeScript
setPoint(finger: int, step: int, point: Point): void
```

在**PointerMatrix**对象中为指定手指和步数对应的动作设置坐标。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| finger | int | 是 | 手指数。该值为大于或等于0的整数，不能超过构建PointerMatrix对象时设置的手指数。 |
| step | int | 是 | 步数。该值为大于或等于0的整数，不能超过构建PointerMatrix对象时设置的步数。 |
| point | Point | 是 | 动作的坐标。建议相邻坐标之间的距离在10 px到80 px范围内。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { PointerMatrix } from '@kit.TestKit';

async function demo() {
  let pointers: PointerMatrix = PointerMatrix.create(2, 5);
  pointers.setPoint(0, 0, { x: 250, y: 480 });
  pointers.setPoint(0, 1, { x: 250, y: 440 });
  pointers.setPoint(0, 2, { x: 250, y: 400 });
  pointers.setPoint(0, 3, { x: 250, y: 360 });
  pointers.setPoint(0, 4, { x: 250, y: 320 });
  pointers.setPoint(1, 0, { x: 250, y: 480 });
  pointers.setPoint(1, 1, { x: 250, y: 440 });
  pointers.setPoint(1, 2, { x: 250, y: 400 });
  pointers.setPoint(1, 3, { x: 250, y: 360 });
  pointers.setPoint(1, 4, { x: 250, y: 320 });
}

```

