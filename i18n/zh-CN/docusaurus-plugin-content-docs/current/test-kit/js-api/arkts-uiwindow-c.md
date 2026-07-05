# UiWindow

UiWindow**类表示UI上的窗口，提供获取窗口属性、拖动窗口和调整窗口大小的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## close

```TypeScript
close(): Promise<void>
```

关闭窗口。该API使用Promise返回结果。

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
| 17000004 | 窗口或组件不可见或已销毁。 |
| 17000005 | 不支持此操作。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  await window.close();
}

```

## focus

```TypeScript
focus(): Promise<void>
```

聚焦窗口。该API使用Promise返回结果。

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
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  await window.focus();
}

```

## getBounds

```TypeScript
getBounds(): Promise<Rect>
```

获取窗口的边界信息。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Rect> | - 用于返回窗口边框信息的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 查找当前活跃窗口
  let window: UiWindow = await driver.findWindow({ active: true });
  // 获取窗口的边框信息
  let rect = await window.getBounds();
}

```

## getBundleName

```TypeScript
getBundleName(): Promise<string>
```

获取窗口所属应用的包名。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | - 用于返回窗口所属应用包名的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 查找当前活跃窗口
  let window: UiWindow = await driver.findWindow({ active: true });
  // 获取窗口归属应用的包名
  let name: string = await window.getBundleName();
}

```

## getDisplayId

```TypeScript
getDisplayId(): Promise<int>
```

获取窗口所属的显示ID。该API使用Promise返回结果。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | - 用于返回窗口所属显示ID的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { UiWindow, Driver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  let id = await window.getDisplayId();
}

```

## getTitle

```TypeScript
getTitle(): Promise<string>
```

获取窗口标题。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | - 用于返回窗口标题的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  let title = await window.getTitle();
}

```

## getWindowMode

```TypeScript
getWindowMode(): Promise<WindowMode>
```

获取窗口模式。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WindowMode> | - 用于返回窗口模式信息的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  let mode = await window.getWindowMode();
}

```

## isActive

```TypeScript
isActive(): Promise<boolean>
```

检查窗口是否处于活动状态。该API使用Promise返回结果。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回窗口是否处于活动状态的Promise对象。值true表示窗口处于活动状态，false表示未活动。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  let focused = await window.isActive();
}

```

## isActived

```TypeScript
isActived(): Promise<boolean>
```

检查窗口是否处于活动状态。该API使用Promise返回结果。

**起始版本：** 9

**废弃版本：** 11

**替代接口：** UiWindow#isActive

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回窗口是否处于活动状态的Promise对象。值true表示窗口处于活动状态，false表示未活动。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  let focused = await window.isActived();
}

```

## isFocused

```TypeScript
isFocused(): Promise<boolean>
```

检查窗口是否已聚焦。该API使用Promise返回结果。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - 用于返回窗口是否聚焦的Promise对象。值true表示窗口已聚焦，false表示未聚焦。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  let focused = await window.isFocused();
}

```

## maximize

```TypeScript
maximize(): Promise<void>
```

最大化窗口。该API使用Promise返回结果。该API适用于可最大化的窗口。

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
| 17000004 | 窗口或组件不可见或已销毁。 |
| 17000005 | 不支持此操作。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  await window.maximize();
}

```

## minimize

```TypeScript
minimize(): Promise<void>
```

最小化窗口。该API使用Promise返回结果。该API适用于可最小化的窗口。

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
| 17000004 | 窗口或组件不可见或已销毁。 |
| 17000005 | 不支持此操作。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  await window.minimize();
}

```

## moveTo

```TypeScript
moveTo(x: int, y: int): Promise<void>
```

将窗口移动到目标点。该API使用Promise返回结果。该API适用于可移动的窗口。

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
| 17000004 | 窗口或组件不可见或已销毁。 |
| 17000005 | 不支持此操作。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  await window.moveTo(100, 100);
}

```

## resize

```TypeScript
resize(wide: int, height: int, direction: ResizeDirection): Promise<void>
```

根据指定的宽度、高度和方向调整窗口大小。该API使用Promise返回结果。 该API适用于可调整大小的窗口。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wide | int | 是 | 调整后的窗口宽度，数值格式。该值为大于或等于0的整数。  单位：px |
| height | int | 是 | 调整后的窗口高度，数值格式。该值为大于或等于0的整数。  单位：px |
| direction | ResizeDirection | 是 | 调整大小的方向。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |
| 17000002 | 该API不支持并发调用。 |
| 17000004 | 窗口或组件不可见或已销毁。 |
| 17000005 | 不支持此操作。 |

## resume

```TypeScript
resume(): Promise<void>
```

将窗口恢复到之前的模式。该API使用Promise返回结果。

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
| 17000004 | 窗口或组件不可见或已销毁。 |
| 17000005 | 不支持此操作。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  await window.resume();
}

```

## split

```TypeScript
split(): Promise<void>
```

切换到分屏模式。该API使用Promise返回结果。该API适用于支持分屏的窗口。

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
| 17000004 | 窗口或组件不可见或已销毁。 |
| 17000005 | 不支持此操作。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UiWindow } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let window: UiWindow = await driver.findWindow({ active: true });
  await window.split();
}

```

