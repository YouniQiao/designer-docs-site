---
last_update:
  date: 2026-07-04
---

# UiDriver

**UiDriver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。 此类提供的所有API（除**UiDriver.create()**外）都使用Promise返回结果，必须使用**await**调用。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [Driver](arkts-test-driver-c.md#driver)

**系统能力：** SystemCapability.Test.UiTest

## assertComponentExist

```TypeScript
assertComponentExist(by: By): Promise<void>
```

断言当前页面上存在与给定属性匹配的组件。如果组件不存在，该API将抛出JS异常，导致当前测试用例失败。 该API使用Promise返回结果。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [assertComponentExist](arkts-test-driver-c.md#assertcomponentexist-1)

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| by | By | 是 | 目标组件的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 输入参数无效。 |
| [17000002](../errorcode-uitest.md#17000002-当前无法调用) | 该API不支持并发调用。 |
| [17000003](../errorcode-uitest.md#17000003-断言失败) | 断言失败。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [click](arkts-test-component-c.md#click-1)

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。<br>单位：px |
| y | number | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。<br>单位：px |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

创建**UiDriver**对象并返回创建的对象。该API为静态API。 > **说明：** > > 该方法自API版本8起支持，自API版本9起废弃。建议使用[create<sup>9+</sup>](arkts-test-driver-c.md#create-1)替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [create](arkts-test-driver-c.md#create-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UiDriver | - 创建的**UiDriver**对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [delayMs](arkts-test-driver-c.md#delayms-1)

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| duration | number | 是 | 持续时间。<br>单位：ms |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [doubleClick](arkts-test-component-c.md#doubleclick-1)

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。<br>单位：px |
| y | number | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。<br>单位：px |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** findComponent(on:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| by | By | 是 | 目标组件的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;UiComponent&gt; | - 用于返回组件的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** findComponents(on:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| by | By | 是 | 目标组件的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;UiComponent&gt;&gt; | - 用于返回组件列表的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [longClick](arkts-test-component-c.md#longclick-1)

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。<br>单位：px |
| y | number | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。<br>单位：px |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [pressBack()](arkts-test-driver-c.md#pressback-1)

**系统能力：** SystemCapability.Test.UiTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** screenCap(savePath:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| savePath | string | 是 | 文件保存路径。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | - 用于返回截图操作是否成功的Promise对象。值**true**表示截图操作成功，**false**表示失败。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** [swipe](arkts-test-driver-c.md#swipe-1)

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startx | number | 是 | 数值，表示起点的水平坐标。该值为大于或等于0的整数。<br>单位：px |
| starty | number | 是 | 数值，表示起点的垂直坐标。该值为大于或等于0的整数。<br>单位：px |
| endx | number | 是 | 数值，表示目标点的水平坐标。该值为大于或等于0的整数。<br>单位：px |
| endy | number | 是 | 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。<br>单位：px |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** triggerKey(keyCode:

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyCode | number | 是 | 键值。该值为大于或等于0的整数。详见[KeyCode](../../apis-input-kit/arkts-apis/arkts-input-keycode-e.md#keycode)。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | - 无返回值的Promise对象。 |

**示例：**

```TypeScript
// xxx.test.ets
import { UiDriver } from '@kit.TestKit';
import { KeyCode } from '@kit.InputKit';

async function demo() {
  let driver: UiDriver = UiDriver.create();
  await driver.triggerKey(KeyCode.KEYCODE_BACK); // 返回键
}

```

