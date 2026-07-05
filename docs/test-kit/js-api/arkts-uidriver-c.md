# UiDriver

UiDriver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。 此类提供的所有API（除**UiDriver.create()**外）都使用Promise返回结果，必须使用**await**调用。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## assertComponentExist

```TypeScript
assertComponentExist(by: By): Promise<void>
```

断言当前页面上存在与给定属性匹配的组件。如果组件不存在，该API将抛出JS异常，导致当前测试用例失败。 该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#assertComponentExist

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | By | Yes | 目标组件的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 输入参数无效。 |
| 17000002 | 该API不支持并发调用。 |
| 17000003 | 断言失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.assertComponentExist(BY.text('next page'));
}

```

## click

```TypeScript
click(x: number, y: number): Promise<void>
```

根据给定坐标单击此**UiDriver**对象的特定点。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#click

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| y | number | Yes | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.click(100, 100);
}

```

## create

```TypeScript
static create(): UiDriver
```

创建**UiDriver**对象并返回创建的对象。该API为静态API。 > **说明：** > > 该方法自API版本8起支持，自API版本9起废弃。建议使用[create<sup>9+</sup>](arkts-driver-c.md#create)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#create

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| UiDriver | - 创建的UiDriver对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
}

```

## delayMs

```TypeScript
delayMs(duration: number): Promise<void>
```

在指定持续时间内延迟此**UiDriver**对象。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#delayMs

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | number | Yes | 持续时间。  单位：ms |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.delayMs(1000);
}

```

## doubleClick

```TypeScript
doubleClick(x: number, y: number): Promise<void>
```

根据给定坐标双击此**UiDriver**对象的特定点。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#doubleClick

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| y | number | Yes | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.doubleClick(100, 100);
}

```

## findComponent

```TypeScript
findComponent(by: By): Promise<UiComponent>
```

在此**UiDriver**对象中查找与给定属性匹配的目标组件。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#findComponent(on:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | By | Yes | 目标组件的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UiComponent> | - 用于返回组件的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let button: UiComponent = await driver.findComponent(BY.text('next page'));
}

```

## findComponents

```TypeScript
findComponents(by: By): Promise<Array<UiComponent>>
```

在此**UiDriver**对象中查找所有与给定属性匹配的组件。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#findComponents(on:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| by | By | Yes | 目标组件的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;UiComponent>> | - 用于返回组件列表的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver, BY, UiComponent } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  let buttonList: Array<UiComponent> = await driver.findComponents(BY.text('next page'));
}

```

## longClick

```TypeScript
longClick(x: number, y: number): Promise<void>
```

根据给定坐标长按此**UiDriver**对象的特定点。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Component#longClick

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| y | number | Yes | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.longClick(100, 100);
}

```

## pressBack

```TypeScript
pressBack(): Promise<void>
```

在此**UiDriver**对象上按下返回键。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#pressBack()

**System capability:** SystemCapability.Test.UiTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.pressBack();
}

```

## screenCap

```TypeScript
screenCap(savePath: string): Promise<boolean>
```

截取此**UiDriver**对象的当前屏幕并将其保存为PNG图像到给定的保存路径。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#screenCap(savePath:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| savePath | string | Yes | 文件保存路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 用于返回截图操作是否成功的Promise对象。值true表示截图操作成功，false表示失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.screenCap('/data/storage/el2/base/cache/1.png');
}

```

## swipe

```TypeScript
swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>
```

在此**UiDriver**对象上根据给定坐标从起点滑动到终点。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#swipe

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startx | number | Yes | 数值，表示起点的水平坐标。该值为大于或等于0的整数。  单位：px |
| starty | number | Yes | 数值，表示起点的垂直坐标。该值为大于或等于0的整数。  单位：px |
| endx | number | Yes | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。  单位：px |
| endy | number | Yes | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。  单位：px |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.swipe(100, 100, 200, 200);
}

```

## triggerKey

```TypeScript
triggerKey(keyCode: number): Promise<void>
```

触发此**UiDriver**对象中与给定键码匹配的按键。该API使用Promise返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** Driver#triggerKey(keyCode:

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyCode | number | Yes | 键值。该值为大于或等于0的整数。  详见[KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回值的Promise对象。 |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UiDriver } from '@kit.TestKit';
import { KeyCode } from '@kit.InputKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.triggerKey(KeyCode.KEYCODE_BACK); // Back button
}

```

