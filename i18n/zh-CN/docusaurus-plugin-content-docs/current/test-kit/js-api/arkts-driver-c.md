# Driver

Driver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。 此类提供的所有API（除**Driver.create()**外）都使用Promise返回结果，必须使用**await**调用。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## assertComponentExist

```TypeScript
assertComponentExist(on: On): Promise<void>
```

断言当前页面上是否存在与指定属性匹配的组件。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000003 | 断言失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.assertComponentExist(ON.text('next page'));
}

```

## click

```TypeScript
click(x: int, y: int): Promise<void>
```

单击目标坐标点。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| y | int | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 在坐标(100,100)处执行点击操作
  await driver.click(100, 100);
}

```

## clickAt

```TypeScript
clickAt(point: Point): Promise<void>
```

单击目标坐标点。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | Point对象，用于传递目标点信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.clickAt({ x: 100, y: 100, displayId: 0 });
}

```

## clickAt

```TypeScript
clickAt(point: Point, options?: TouchOptions): Promise<void>
```

在屏幕指定位置单击，可设置触摸选项。

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | 手指触摸屏幕的坐标点。 |
| options | TouchOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

## create

```TypeScript
static create(): Driver
```

创建**Driver**对象并返回创建的对象。该API为静态API。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Driver | - 创建的{@link Driver}对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000001 | 初始化失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
}

```

## createUIEventObserver

```TypeScript
createUIEventObserver(): UIEventObserver
```

创建UI事件监听器{@link UIEventObserver}。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIEventObserver | - UI事件监听器{@link UIEventObserver}。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UIEventObserver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let observer: UIEventObserver = driver.createUIEventObserver();
}

```

## crownRotate

```TypeScript
crownRotate(d: int, speed?: int): Promise<void>
```

注入表冠旋转事件。可以指定旋转速度。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| d | int | 是 | 旋转刻度数。正值表示顺时针旋转，负值表示逆时针旋转。该值必须为整数。 |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | 能力不支持。由于设备能力限制，无法调用该API。 |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 顺时针旋转50格，旋转速度为30格/秒
  await driver.crownRotate(50, 30);
  // 逆时针旋转20格，旋转速度为30格/秒
  await driver.crownRotate(-20, 30);
}

```

## delayMs

```TypeScript
delayMs(duration: int): Promise<void>
```

延迟执行指定持续时间。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| duration | int | 是 | 指定时间，单位为ms。该值为大于或等于0的整数。  单位：ms  取值范围：值应 >= 0 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.delayMs(1000);
}

```

## doubleClick

```TypeScript
doubleClick(x: int, y: int): Promise<void>
```

双击目标坐标点。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| y | int | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.doubleClick(100, 100);
}

```

## doubleClickAt

```TypeScript
doubleClickAt(point: Point): Promise<void>
```

双击目标坐标点。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | Point对象，用于传递目标点信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.doubleClickAt({ x: 100, y: 100, displayId: 0 });
}

```

## drag

```TypeScript
drag(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>
```

从起始坐标点拖动到目标坐标点。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startx | int | 是 | 数值，表示起点的水平坐标。该值为大于或等于0的整数。  单位：px |
| starty | int | 是 | 数值，表示起点的垂直坐标。该值为大于或等于0的整数。  单位：px |
| endx | int | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| endy | int | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.drag(100, 100, 200, 200, 600);
}

```

## dragBetween

```TypeScript
dragBetween(from: Point, to: Point, speed?: int, duration?: int): Promise<void>
```

从起点拖动到目标点。可以指定拖动速度和拖动前的点击持续时间。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | Point对象，传递起点坐标和起点所属的显示ID。 |
| to | Point | 是 | Point对象，传递目标点坐标和目标点所属的显示ID。  注意：目标点和起点必须在同一屏幕上。否则将抛出17000007异常。 |
| speed | int | 否 |  |
| duration | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.dragBetween({ x: 100, y: 100, displayId: 0 }, { x: 1000, y: 1000, displayId: 0 }, 800, 1500);
}

```

## dragBetween

```TypeScript
dragBetween(from: Point, to: Point, options?: TouchOptions): Promise<void>
```

在屏幕指定点之间拖动，可设置选项。

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | 手指触摸屏幕的坐标点。 |
| to | Point | 是 | 手指离开屏幕的坐标点。 |
| options | TouchOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

## dumpLayout

```TypeScript
dumpLayout(savePath: string, displayId?: int): Promise<boolean>
```

获取当前布局信息并以json格式保存为文件。

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| savePath | string | 是 | 存储json的路径，必须在应用沙箱目录中。  路径必须为当前应用的[沙箱路径](docroot://file-management/app-sandbox-directory.md)。 |
| displayId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | 如果成功完成转储布局和文件存储则返回true，否则返回false。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 获取当前布局信息并保存为JSON文件
  await driver.dumpLayout('/data/storage/el2/base/cache/layout.json', 0);
}

```

## findComponent

```TypeScript
findComponent(on: On): Promise<Component>
```

根据指定属性查找目标组件。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Component> | - 用于返回{@link Component}或undefined的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 查找text为'next page'的控件
  let button: Component = await driver.findComponent(ON.text('next page'));
}

```

## findComponent

```TypeScript
findComponent(on: On): Promise<Component | null>
```

在当前UI上查找第一个匹配的{@link Component}。

**起始版本：** 23

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性要求。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Component \| null> | 第一个匹配的{@link Component}或undefined。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

## findComponents

```TypeScript
findComponents(on: On): Promise<Array<Component>>
```

根据指定属性查找所有匹配的组件并保存到列表中。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Component>> | - 用于返回{@link Component}列表的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 查找所有text为'next page'的控件
  let buttonList: Array<Component> = await driver.findComponents(ON.text('next page'));
}

```

## findComponents

```TypeScript
findComponents(on: On): Promise<Array<Component> | null>
```

查找当前UI上所有匹配的{@link Component}。

**起始版本：** 23

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性要求。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Component> \| null> | 匹配的{@link Component}列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

## findWindow

```TypeScript
findWindow(filter: WindowFilter): Promise<UiWindow>
```

根据指定属性查找窗口。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | WindowFilter | 是 | 目标{@link UiWindow}的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;UiWindow> | - 用于返回目标{@link UiWindow}的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
}

```

## findWindow

```TypeScript
findWindow(filter: WindowFilter): Promise<UiWindow | null>
```

查找第一个匹配的{@link UiWindow}窗口。

**起始版本：** 23

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | WindowFilter | 是 | 目标{@link UiWindow}的过滤条件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;UiWindow \| null> | 第一个匹配的{@link UiWindow}或undefined。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

## fling

```TypeScript
fling(from: Point, to: Point, stepLen: int, speed: int): Promise<void>
```

模拟fling操作。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | 手指触摸屏幕的点的坐标。 |
| to | Point | 是 | 手指离开屏幕的点的坐标。 |
| stepLen | int | 是 | 步长，单位为像素。该值为大于或等于0的整数。  单位：px |
| speed | int | 是 | fling速度，单位为px/s。取值范围为200到40000。如果设置的值不在范围内，  将使用默认值600。  取值范围：[200, 40000]  单位：px/s。  如果为负数则抛出错误码17000007。  默认值：600 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.fling({ x: 500, y: 480 }, { x: 450, y: 480 }, 5, 600);
}

```

## fling

```TypeScript
fling(direction: UiDirection, speed: int): Promise<void>
```

模拟指定方向和速度的fling操作。该API使用Promise返回结果。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| direction | UiDirection | 是 | fling操作的方向。 |
| speed | int | 是 | 滚动速度。  取值范围：[200, 40000]  单位：px/s。  如果为负数则抛出错误码401。  默认值：600 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiDirection } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.fling(UiDirection.DOWN, 10000);
}

```

## fling

```TypeScript
fling(direction: UiDirection, speed: int, displayId: int): Promise<void>
```

在指定显示上模拟指定方向和速度的fling操作。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| direction | UiDirection | 是 | fling操作的方向。 |
| speed | int | 是 | fling速度，单位为px/s。取值范围为200到40000。如果设置的值不在范围内，  将使用默认值600。  取值范围：[200, 40000]  单位：px/s。  如果为负数则抛出错误码401。  默认值：600 |
| displayId | int | 是 | 显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常401。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiDirection } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.fling(UiDirection.DOWN, 10000, 0);
}

```

## getDisplayDensity

```TypeScript
getDisplayDensity(): Promise<Point>
```

获取当前设备的显示密度。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Point> | 用于返回Point对象的Promise对象。当前设备显示密度为  Point.xPoint.y。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let density = await driver.getDisplayDensity();
}

```

## getDisplayDensity

```TypeScript
getDisplayDensity(displayId: int): Promise<Point>
```

获取当前设备指定显示的密度。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | int | 是 | 显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常17000007。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Point> | 用于返回Point对象的Promise对象。指定显示的密度为  Point.xPoint.y。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let density = await driver.getDisplayDensity(0);
}

```

## getDisplayRotation

```TypeScript
getDisplayRotation(): Promise<DisplayRotation>
```

获取当前设备的显示旋转方向。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DisplayRotation> | - 用于返回当前设备显示旋转方向的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { DisplayRotation, Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let rotation: DisplayRotation = await driver.getDisplayRotation();
}

```

## getDisplayRotation

```TypeScript
getDisplayRotation(displayId: int): Promise<DisplayRotation>
```

获取指定设备的显示旋转方向。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | int | 是 | 显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常17000007。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DisplayRotation> | - 用于返回指定设备显示旋转方向的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { DisplayRotation, Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let rotation: DisplayRotation = await driver.getDisplayRotation(0);
}

```

## getDisplaySize

```TypeScript
getDisplaySize(): Promise<Point>
```

获取当前设备的显示大小。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Point> | - 用于返回Point对象的Promise对象。  当前设备屏幕大小为Point.x  Point.y。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let size = await driver.getDisplaySize();
}

```

## getDisplaySize

```TypeScript
getDisplaySize(displayId: int): Promise<Point>
```

获取当前设备指定显示的大小。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | int | 是 | 显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常17000007。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Point> | 用于返回Point对象的Promise对象。指定显示的大小为  Point.x  Point.y。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let size = await driver.getDisplaySize(0);
}

```

## injectKnucklePointerAction

```TypeScript
injectKnucklePointerAction(pointers: PointerMatrix, speed?: int): Promise<void>
```

模拟多点指关节滚动操作。该API使用Promise返回结果。 > **说明：** > > 如果设备上的指关节手势已禁用<!--RP4--><!--RP4End-->，将返回17000005。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pointers | PointerMatrix | 是 | 滚动轨迹，包括手指数和沿轨迹的坐标数组。   注意：目前仅支持单指操作。PointerMatrix中的fingers值必须设置为1。 |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000005 | 不支持此操作。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, PointerMatrix } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 模拟指关节滑动在屏幕上画'S'
  let pointers: PointerMatrix = PointerMatrix.create(1, 6);
  pointers.setPoint(0, 0, { x: 750, y: 300 });
  pointers.setPoint(0, 1, { x: 500, y: 100 });
  pointers.setPoint(0, 2, { x: 250, y: 300 });
  pointers.setPoint(0, 3, { x: 750, y: 800 });
  pointers.setPoint(0, 4, { x: 500, y: 1000 });
  pointers.setPoint(0, 5, { x: 250, y: 800 });
  await driver.injectKnucklePointerAction(pointers);
}

```

## injectMultiPointerAction

```TypeScript
injectMultiPointerAction(pointers: PointerMatrix, speed?: int): Promise<boolean>
```

向设备注入多指操作。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pointers | PointerMatrix | 是 | 滚动轨迹，包括手指数和沿轨迹的坐标数组。 |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回操作是否成功的Promise对象。  值true表示操作成功，false表示失败。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, PointerMatrix } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 创建2指5步的滑动轨迹矩阵
  let pointers: PointerMatrix = PointerMatrix.create(2, 5);
  // 设置第一根手指的滑动轨迹
  pointers.setPoint(0, 0, { x: 250, y: 480 });
  pointers.setPoint(0, 1, { x: 250, y: 440 });
  pointers.setPoint(0, 2, { x: 250, y: 400 });
  pointers.setPoint(0, 3, { x: 250, y: 360 });
  pointers.setPoint(0, 4, { x: 250, y: 320 });
  // 设置第二根手指的滑动轨迹
  pointers.setPoint(1, 0, { x: 250, y: 480 });
  pointers.setPoint(1, 1, { x: 250, y: 440 });
  pointers.setPoint(1, 2, { x: 250, y: 400 });
  pointers.setPoint(1, 3, { x: 250, y: 360 });
  pointers.setPoint(1, 4, { x: 250, y: 320 });
  // 注入双指滑动操作
  await driver.injectMultiPointerAction(pointers);
}

```

## injectPenPointerAction

```TypeScript
injectPenPointerAction(pointers: PointerMatrix, speed?: int, pressure?: double): Promise<void>
```

模拟连续多点手写笔注入操作。该API使用Promise返回结果。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pointers | PointerMatrix | 是 | 滚动轨迹，包括手指数和沿轨迹的坐标数组。  注意：目前仅支持单指操作。PointerMatrix中的fingers值必须设置为1。 |
| speed | int | 否 |  |
| pressure | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 |  |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, PointerMatrix } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 创建单指8步的滑动轨迹矩阵
  let pointer = PointerMatrix.create(1, 8);
  // 循环设置每步坐标点，模拟从下向上的滑动
  for (let step = 0; step < 8; step++) {
    pointer.setPoint(0, step, { x: 500, y: 1100 - 100 * step });
  }
  // 以600px/s速率和0.5压力值注入手写笔滑动操作
  await driver.injectPenPointerAction(pointer, 600, 0.5);
}

```

## inputText

```TypeScript
inputText(p: Point, text: string): Promise<void>
```

在指定坐标处输入文本，不清除组件中的原文本。该API使用Promise返回结果。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 目标坐标。 |
| text | string | 是 | 输入文本。目前支持英文、中文和特殊字符。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 查找TextInput类型的目标控件
  let text: Component = await driver.findComponent(ON.type('TextInput'));
  // 获取控件中心点坐标
  let point = await text.getBoundsCenter();
  // 在坐标点处输入文本'123'
  await driver.inputText(point, '123');
}

```

## inputText

```TypeScript
inputText(p: Point, text: string, mode: InputTextMode): Promise<void>
```

在指定坐标点以指定输入模式输入文本。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 目标坐标。 |
| text | string | 是 | 输入文本。目前支持英文、中文和特殊字符。 |
| mode | InputTextMode | 是 | 文本输入模式。  详见[InputTextMode](arkts-inputtextmode-i.md#InputTextMode)。  说明   如果InputTextMode.addition设置为true，则光标移动到文本末尾并输入指定文本。  如果值为false，则在坐标点输入指定文本。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 801 |  |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let text: Component = await driver.findComponent(ON.type('TextInput'));
  let point = await text.getBoundsCenter();
  await driver.inputText(point, '123', { paste: true, addition: false });
}

async function demoChinese() {
  let driver: Driver = Driver.create();
  let text: Component = await driver.findComponent(ON.type('TextInput'));
  let point = await text.getBoundsCenter();
  await driver.inputText(point, '中文&', { paste: false, addition: true });
  // 以复制粘贴方式输入中文、特殊符号， 指定文本追加到指定坐标所在文本段的末尾。
}

```

## isComponentPresentWhenDrag

```TypeScript
isComponentPresentWhenDrag(on: On, from: Point, to: Point, speed?: int, duration?: int): Promise<boolean>
```

从起点拖动到终点并检查目标组件是否存在。该API使用Promise返回结果。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性。 |
| from | Point | 是 | Point对象，传递起点坐标和起点所属的显示ID。 |
| to | Point | 是 | Point对象，传递目标点坐标和目标点所属的显示ID。  注意：目标点和起点必须在同一屏幕上。否则将抛出17000007异常。 |
| speed | int | 否 |  |
| duration | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回拖动操作期间目标组件是否存在的Promise对象。  值true表示目标组件存在，false表示不存在。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let isExist = await driver.isComponentPresentWhenDrag(ON.id('123'), { x: 100, y: 100 }, { x: 200, y: 200 }, 1000, 2000);
}

```

## isComponentPresentWhenLongClick

```TypeScript
isComponentPresentWhenLongClick(on: On, point: Point, duration?: int): Promise<boolean>
```

在指定坐标处长按并检查目标组件是否存在。该API使用Promise返回结果。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性。 |
| point | Point | 是 | 长按点的坐标。 |
| duration | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回长按操作期间目标组件是否存在的Promise对象。  值true表示目标组件存在，false表示不存在。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let isExist = await driver.isComponentPresentWhenLongClick(ON.id('123'), { x: 100, y: 100 }, 2000);
}

```

## isComponentPresentWhenSwipe

```TypeScript
isComponentPresentWhenSwipe(on: On, from: Point, to: Point, speed?: int): Promise<boolean>
```

从起点滑动到终点并检查目标组件是否存在。该API使用Promise返回结果。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标组件的属性。 |
| from | Point | 是 | Point对象，传递起点坐标和起点所属的显示ID。 |
| to | Point | 是 | Point对象，传递目标点坐标和目标点所属的显示ID。  注意：目标点和起点必须在同一屏幕上。否则将抛出17000007异常。 |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回滑动操作期间目标组件是否存在的Promise对象。  值true表示目标组件存在，false表示不存在。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let isExist = await driver.isComponentPresentWhenSwipe(ON.id('123'), { x: 100, y: 100 }, { x: 200, y: 200 }, 1000);
}

```

## knuckleKnock

```TypeScript
knuckleKnock(pointers: Array<Point>, times: int): Promise<void>
```

模拟显示屏幕上的指关节敲击。该API使用Promise返回结果。 > **说明：** > > 如果设备上的指关节手势已禁用<!--RP4--><!--RP4End-->，将返回17000005。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pointers | Array&lt;Point> | 是 | 显示屏幕上指关节敲击的坐标数组。数组长度可以为1或2。 |
| times | int | 是 | 在显示屏幕上连续敲击的次数。  取值范围：[1,2] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000005 | 不支持此操作。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, Point } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 模拟指关节单指双击手势
  let points: Array<Point> = [{ x: 100, y: 100 }];
  await driver.knuckleKnock(points, 2);
}

```

## longClick

```TypeScript
longClick(x: int, y: int): Promise<void>
```

长按目标坐标点。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| y | int | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.longClick(100, 100);
}

```

## longClickAt

```TypeScript
longClickAt(point: Point, duration?: int): Promise<void>
```

在目标坐标点长按指定持续时间。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | Point对象，用于传递目标点信息。 |
| duration | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.longClickAt({ x: 100, y: 100, displayId: 0 }, 1500);
}

```

## longClickAt

```TypeScript
longClickAt(point: Point, options?: TouchOptions): Promise<void>
```

在屏幕指定位置长按，可设置触摸选项。

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | 手指触摸屏幕的坐标点。 |
| options | TouchOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

## mouseClick

```TypeScript
mouseClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>
```

在指定坐标处注入鼠标单击动作，可选按键或组合键。该API使用Promise返回结果。 例如，如果**key1**的值为**2072**，则鼠标单击时按下**Ctrl**键。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 鼠标单击的坐标。 |
| btnId | MouseButton | 是 | 按下的鼠标按键。 |
| key1 | int | 否 |  |
| key2 | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, MouseButton } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseClick({ x: 248, y: 194 }, MouseButton.MOUSE_BUTTON_LEFT, 2072);
}

```

## mouseDoubleClick

```TypeScript
mouseDoubleClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>
```

在指定坐标处注入双击动作，可选按键或组合键。该API使用Promise返回结果。 例如，如果**key**的值为**2072**，则双击时按下**Ctrl**键。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 双击的坐标。 |
| btnId | MouseButton | 是 | 按下的鼠标按键。 |
| key1 | int | 否 |  |
| key2 | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, MouseButton } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseDoubleClick({ x: 248, y: 194 }, MouseButton.MOUSE_BUTTON_LEFT, 2072);
}

```

## mouseDrag

```TypeScript
mouseDrag(from: Point, to: Point, speed?: number): Promise<void>
```

将鼠标指针从起点拖动到终点。该API使用Promise返回结果。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | 起点坐标。 |
| to | Point | 是 | 终点坐标。 |
| speed | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseDrag({ x: 100, y: 100 }, { x: 200, y: 200 }, 600);
}

```

## mouseDrag

```TypeScript
mouseDrag(from: Point, to: Point, speed?: int, duration?: int): Promise<void>
```

将鼠标从起点拖动到终点。可以指定拖动速度和拖动前的持续时间。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | 起点坐标。 |
| to | Point | 是 | 终点坐标。 |
| speed | int | 否 |  |
| duration | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseDrag({ x: 100, y: 100 }, { x: 200, y: 200 }, 600, 2000);
}

```

## mouseDrag

```TypeScript
mouseDrag(from: Point, to: Point, touchOptions?: TouchOptions, keyOptions?: KeyOptions): Promise<void>
```

按住鼠标左键在屏幕指定点之间拖动，可设置触摸和按键选项。

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | 起始点。 |
| to | Point | 是 | 结束点。 |
| touchOptions | TouchOptions | 否 |  |
| keyOptions | KeyOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

## mouseLongClick

```TypeScript
mouseLongClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>
```

在指定坐标处注入鼠标长按动作，可选按键或组合键。该API使用Promise返回结果。 例如，如果**Key**的值为**2072**，则在指定坐标处执行鼠标长按，同时按住**Ctrl**键。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 鼠标设备长按的坐标。 |
| btnId | MouseButton | 是 | 按下的鼠标按键。 |
| key1 | number | 否 |  |
| key2 | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, MouseButton } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 键码值为2072时，按下Ctrl并进行鼠标长按动作
  await driver.mouseLongClick({ x: 248, y: 194 }, MouseButton.MOUSE_BUTTON_LEFT, 2072);
}

```

## mouseLongClick

```TypeScript
mouseLongClick(p: Point, btnId: MouseButton, key1?: int, key2?: int, duration?: int): Promise<void>
```

在指定坐标处注入鼠标长按动作，可选按键或组合键及指定持续时间。该API使用Promise返回结果。 例如，如果**Key**的值为**2072**，则在指定坐标处执行鼠标长按，同时按住**Ctrl**键。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 鼠标设备长按的坐标。 |
| btnId | MouseButton | 是 | 按下的鼠标按键。 |
| key1 | int | 否 |  |
| key2 | int | 否 |  |
| duration | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, MouseButton } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 键码值为2072时，按下Ctrl并进行鼠标长按动作，长按时长2000ms
  await driver.mouseLongClick({ x: 248, y: 194 }, MouseButton.MOUSE_BUTTON_LEFT, 2072, 0, 2000);
}

```

## mouseMoveTo

```TypeScript
mouseMoveTo(p: Point): Promise<void>
```

将鼠标光标移动到目标点。该API使用Promise返回结果。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 终点坐标。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseMoveTo({ x: 100, y: 100 });
}

```

## mouseMoveWithTrack

```TypeScript
mouseMoveWithTrack(from: Point, to: Point, speed?: int): Promise<void>
```

将鼠标指针从起点移动到终点。该API使用Promise返回结果。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | 起点坐标。 |
| to | Point | 是 | 终点坐标。 |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseMoveWithTrack({ x: 100, y: 100 }, { x: 200, y: 200 }, 600);
}

```

## mouseScroll

```TypeScript
mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number): Promise<void>
```

在指定坐标处注入鼠标滚轮滚动动作，可选按键或组合键。该API使用Promise返回结果。 例如，如果**key1**的值为**2072**，则鼠标滚动时按下**Ctrl**键。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 鼠标单击的坐标。 |
| down | boolean | 是 | 鼠标滚轮是否向下滚动。值true表示鼠标滚轮向下滚动，false表示向上滚动。 |
| d | number | 是 | 鼠标滚轮滚动的刻度数。一个刻度表示滚动120 px。  该值为大于或等于0的整数。  取值范围：值应 >= 0  单位：px |
| key1 | number | 否 |  |
| key2 | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseScroll({ x: 360, y: 640 }, true, 30, 2072);
}

```

## mouseScroll

```TypeScript
mouseScroll(p: Point, down: boolean, d: int, key1?: int, key2?: int, speed?: int): Promise<void>
```

在指定坐标处注入鼠标滚轮滚动动作，可选按键或组合键及指定滚动速度。该API使用Promise返回结果。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| p | Point | 是 | 鼠标单击的坐标。 |
| down | boolean | 是 | 鼠标滚轮是否向下滚动。值true表示鼠标滚轮向下滚动，false表示向上滚动。 |
| d | int | 是 | 鼠标滚轮滚动的刻度数。一个刻度表示滚动120 px。该值为大于或等于0的整数。  单位：cell |
| key1 | int | 否 |  |
| key2 | int | 否 |  |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.mouseScroll({ x: 360, y: 640 }, true, 30, 2072, 20);
}

```

## penClick

```TypeScript
penClick(point: Point): Promise<void>
```

模拟手写笔单击操作。该API使用Promise返回结果。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | 单击点的坐标。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 |  |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.penClick({ x: 100, y: 100 });
}

```

## penDoubleClick

```TypeScript
penDoubleClick(point: Point): Promise<void>
```

模拟手写笔双击操作。该API使用Promise返回结果。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | 双击点的坐标。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 |  |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.penDoubleClick({ x: 100, y: 100 });
}

```

## penLongClick

```TypeScript
penLongClick(point: Point, pressure?: double): Promise<void>
```

模拟手写笔长按操作。该API使用Promise返回结果。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | 长按点的坐标。 |
| pressure | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 |  |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.penLongClick({ x: 100, y: 100 }, 0.5);
}

```

## penSwipe

```TypeScript
penSwipe(startPoint: Point, endPoint: Point, speed?: int, pressure?: double): Promise<void>
```

模拟手写笔滑动操作。该API使用Promise返回结果。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startPoint | Point | 是 | 起点坐标。 |
| endPoint | Point | 是 | 终点坐标。 |
| speed | int | 否 |  |
| pressure | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 |  |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.penSwipe({ x: 100, y: 100 }, { x: 100, y: 500 }, 600, 0.5);
}

```

## pressBack

```TypeScript
pressBack(): Promise<void>
```

按下返回键。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.pressBack();
}

```

## pressBack

```TypeScript
pressBack(displayId: int): Promise<void>
```

在指定屏幕上按下返回键。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | int | 是 | 显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常17000007。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.pressBack(0);
}

```

## pressHome

```TypeScript
pressHome(): Promise<void>
```

在设备上注入返回主屏幕的操作。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.pressHome();
}

```

## pressHome

```TypeScript
pressHome(displayId: int): Promise<void>
```

在指定显示上注入返回主屏幕的操作。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | int | 是 | 显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常17000007。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.pressHome(0);
}

```

## screenCap

```TypeScript
screenCap(savePath: string): Promise<boolean>
```

截取当前屏幕并保存为PNG图像到给定的保存路径。该API使用Promise返回结果。 该API可用于支持截图的场景。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| savePath | string | 是 | 文件保存路径。路径必须为当前应用的  [沙箱路径](docroot://file-management/app-sandbox-directory.md)。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回截图操作是否成功的Promise对象。  值true表示操作成功，false表示失败。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.screenCap('/data/storage/el2/base/cache/1.png');
}

```

## screenCap

```TypeScript
screenCap(savePath: string, displayId: int): Promise<boolean>
```

截取指定屏幕并保存为PNG图像到给定的保存路径。该API使用Promise返回结果。 该API可用于支持截图的场景。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| savePath | string | 是 | 文件保存路径。路径必须为当前应用的  [沙箱路径](docroot://file-management/app-sandbox-directory.md)。 |
| displayId | int | 是 | 显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常401。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | 用于返回截图操作是否成功的Promise对象。值  true表示截图操作成功，false表示失败。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.screenCap('/data/storage/el2/base/cache/1.png', 0);
}

```

## screenCapture

```TypeScript
screenCapture(savePath: string, rect?: Rect): Promise<boolean>
```

截取当前屏幕的指定区域并将截图保存为PNG图像到指定路径。该API使用Promise返回结果。 该API可用于支持截图的场景。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| savePath | string | 是 | 文件保存路径。路径必须为当前应用的  [沙箱路径](docroot://file-management/app-sandbox-directory.md)。 |
| rect | Rect | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回截图操作是否成功的Promise对象。  值true表示截图操作成功，false表示失败。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.screenCapture('/data/storage/el2/base/cache/1.png', {
    left: 0,
    top: 0,
    right: 100,
    bottom: 100
  });
}

```

## setDisplayRotation

```TypeScript
setDisplayRotation(rotation: DisplayRotation): Promise<void>
```

设置当前场景的显示旋转方向。该API使用Promise返回结果。适用于可旋转场景。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rotation | DisplayRotation | 是 | 设备的显示旋转方向。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, DisplayRotation } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.setDisplayRotation(DisplayRotation.ROTATION_180);
}

```

## setDisplayRotationEnabled

```TypeScript
setDisplayRotationEnabled(enabled: boolean): Promise<void>
```

启用或禁用显示旋转。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 屏幕是否可以旋转。值true表示屏幕可以旋转，false表示不可旋转。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.setDisplayRotationEnabled(false);
}

```

## swipe

```TypeScript
swipe(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>
```

从起始坐标点滑动到目标坐标点。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startx | int | 是 | 数值，表示起点的水平坐标。该值为大于或等于0的整数。  单位：px |
| starty | int | 是 | 数值，表示起点的垂直坐标。该值为大于或等于0的整数。  单位：px |
| endx | int | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| endy | int | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 从坐标(100,100)滑动到坐标(200,200)，滑动速率为600px/s
  await driver.swipe(100, 100, 200, 200, 600);
}

```

## swipeBetween

```TypeScript
swipeBetween(from: Point, to: Point, speed?: int): Promise<void>
```

从起始坐标点滑动到目标坐标点。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | Point对象，传递起点坐标和起点所属的显示ID。 |
| to | Point | 是 | Point对象，传递目标点坐标和目标点所属的显示ID。  注意：目标点和起点必须在同一屏幕上。否则将抛出17000007异常。 |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.swipeBetween({ x: 100, y: 100, displayId: 0 }, { x: 1000, y: 1000, displayId: 0 }, 800);
}

```

## swipeBetween

```TypeScript
swipeBetween(from: Point, to: Point, options?: TouchOptions): Promise<void>
```

在屏幕指定点之间滑动，可设置触摸选项。

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | Point | 是 | 手指触摸屏幕的坐标点。 |
| to | Point | 是 | 手指离开屏幕的坐标点。 |
| options | TouchOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000007 | 参数校验失败。 |

## touchPadMultiFingerSwipe

```TypeScript
touchPadMultiFingerSwipe(fingers: int, direction: UiDirection, options?: TouchPadSwipeOptions): Promise<void>
```

模拟触控板上的多指滑动手势。该API使用Promise返回结果。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fingers | int | 是 | 手指数。值可以为3或4。 |
| direction | UiDirection | 是 | 滑动方向。 |
| options | TouchPadSwipeOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 |  |
| 17000002 | 该API不支持并发调用。 |
| 17000005 |  |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiDirection } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.touchPadMultiFingerSwipe(3, UiDirection.UP);
}

```

## touchPadTwoFingersScroll

```TypeScript
touchPadTwoFingersScroll(point: Point, direction: UiDirection, d: int, speed?: int): Promise<void>
```

模拟触控板上的双指滚动操作。该API使用Promise返回结果。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | 在触控板上执行双指滚动时鼠标光标的位置。 |
| direction | UiDirection | 是 | 触控板上双指滚动的方向。 |
| d | int | 是 | 双指在触控板上滚动的刻度数。一个刻度表示向目标点移动120 px。  该值为大于或等于0的整数。 |
| speed | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000005 | 不支持此操作。 |
| 17000007 | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiDirection } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.touchPadTwoFingersScroll({ x: 100, y: 100 }, UiDirection.UP, 20, 10);
}

```

## triggerCombineKeys

```TypeScript
triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>
```

根据指定键值触发组合键事件。该API使用Promise返回结果。 例如，如果**Key**的值为(2072, 2019)，则找到并单击匹配的组合键**Ctrl+C**。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key0 | number | 是 | 第一个键值。该值为大于或等于0的整数。  详见[KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode)。 |
| key1 | number | 是 | 第二个键值。该值为大于或等于0的整数。  详见[KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode)。 |
| key2 | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 注入Ctrl+Alt+Delete组合键
  await driver.triggerCombineKeys(2072, 2047, 2035);
}

```

## triggerCombineKeys

```TypeScript
triggerCombineKeys(key0: int, key1: int, key2?: int, displayId?: int): Promise<void>
```

在指定屏幕上根据指定键值触发组合键事件。该API使用Promise返回结果。 例如，如果**Key**的值为(2072, 2019)，则找到并单击匹配的组合键**Ctrl+C**。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key0 | int | 是 | 第一个键值。该值为大于或等于0的整数。  详见[KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode)。 |
| key1 | int | 是 | 第二个键值。该值为大于或等于0的整数。  详见[KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode)。 |
| key2 | int | 否 |  |
| displayId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.triggerCombineKeys(2072, 2047, 2035, 0);
}

```

## triggerKey

```TypeScript
triggerKey(keyCode: int): Promise<void>
```

通过传入键值触发按键事件。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyCode | int | 是 | 键值。该值为大于或等于0的整数。  详见[KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode)。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';
import { KeyCode } from '@kit.InputKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.triggerKey(KeyCode.KEYCODE_BACK); // 返回键
}

```

## triggerKey

```TypeScript
triggerKey(keyCode: int, displayId: int): Promise<void>
```

在指定屏幕上通过传入键值触发按键事件。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyCode | int | 是 | 键值。该值为大于或等于0的整数。  详见[KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode)。 |
| displayId | int | 是 | 显示ID。该值为大于或等于0的整数。  注意：如果输入的displayId不存在，将上报异常401。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';
import { KeyCode } from '@kit.InputKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.triggerKey(KeyCode.KEYCODE_BACK, 0); // 返回键
}

```

## triggerPenKey

```TypeScript
triggerPenKey(key: PenKey, mode: PenMode, operation: PenKeyOperation, options?: PenKeyOperationOptions): Promise<void>
```

触发手写笔按键操作。 支持的组合： - HANDWRITING模式：HANDWRITING键配合CLICK或DOUBLE_CLICK操作。 - AIR_MOUSE模式：AIR_MOUSE键配合CLICK或DOUBLE_CLICK操作（需要options中的point）， HANDWRITING键配合CLICK或DOUBLE_CLICK操作，SMART键配合CLICK操作。 其他组合将导致BusinessError 17000007。

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | PenKey | 是 | 要操作的手写笔按键。 |
| mode | PenMode | 是 | 手写笔模式。 |
| operation | PenKeyOperation | 是 | 操作类型。 |
| options | PenKeyOperationOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000005 | 不支持此操作。 |
| 17000007 | 参数校验失败。不支持的键、模式和操作组合。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, PenKey, PenMode, PenKeyOperation } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  // 手写模式下触发手写键单击
  await driver.triggerPenKey(PenKey.HANDWRITING, PenMode.HANDWRITING, PenKeyOperation.CLICK);
  // 空鼠模式下触发空鼠键双击
  await driver.triggerPenKey(PenKey.AIR_MOUSE, PenMode.AIR_MOUSE, PenKeyOperation.DOUBLE_CLICK, { point: { x: 500, y: 500 } });
  // 空鼠模式下触发智慧键单击
  await driver.triggerPenKey(PenKey.SMART, PenMode.AIR_MOUSE, PenKeyOperation.CLICK);
}

```

## waitForComponent

```TypeScript
waitForComponent(on: On, time: number): Promise<Component>
```

在指定时间内根据属性查找目标组件。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性。 |
| time | number | 是 | 查找目标{@link Component}的持续时间，单位为ms。该值为大于或等于0的整数。  单位：ms  取值范围：值应 >= 0 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Component> | 第一个匹配的{@link Component}或undefined。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Component, Driver, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let button: Component = await driver.waitForComponent(ON.text('next page'), 500);
}

```

## waitForComponent

```TypeScript
waitForComponent(on: On, time: int): Promise<Component | null>
```

在给定时间内查找当前UI上第一个匹配的{@link Component}。

**起始版本：** 23

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | On | 是 | 目标{@link Component}的属性要求。 |
| time | int | 是 | 查找持续时间，单位为毫秒。  取值范围：值应 >= 0  单位：ms |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Component \| null> | 第一个匹配的{@link Component}或undefined。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

## waitForIdle

```TypeScript
waitForIdle(idleTime: int, timeout: int): Promise<boolean>
```

检查当前UI上的所有组件是否处于空闲状态。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| idleTime | int | 是 | 空闲时间阈值，单位为ms。如果组件保持不活跃的持续时间达到此阈值，  则认为其处于空闲状态。该值必须为大于或等于0的整数。  单位：ms |
| timeout | int | 是 | 最大等待时间，单位为毫秒。该值为大于或等于0的整数。  单位：ms |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回当前UI上所有组件是否处于空闲状态的Promise对象。  值true表示当前UI上所有组件处于空闲状态，false表示相反。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let idled: boolean = await driver.waitForIdle(4000, 5000);
}

```

## wakeUpDisplay

```TypeScript
wakeUpDisplay(): Promise<void>
```

唤醒当前显示。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  await driver.wakeUpDisplay();
}

```

