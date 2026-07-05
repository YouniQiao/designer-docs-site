# @ohos.multimodalInput.inputEventClient

输入事件注入模块，提供输入按键、鼠标/触控板、触屏输入事件注入能力。 > **说明：** > > - 本模块接口为系统接口。

**起始版本：** 8

**系统能力：** SystemCapability.MultimodalInput.Input.InputSimulator

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createKeyboardController](arkts-inputeventclient-createkeyboardcontroller-f.md#createKeyboardController-1) | 创建键盘控制器，用于模拟按键操作。使用Promise异步回调。 |
| [createMouseController](arkts-inputeventclient-createmousecontroller-f.md#createMouseController-1) | 创建鼠标控制器，用于模拟鼠标操作。使用Promise异步回调。 |
| [createTouchController](arkts-inputeventclient-createtouchcontroller-f.md#createTouchController-1) | 创建触控控制器，用于模拟触控操作。使用Promise异步回调。 |
| <!--DelRow-->[injectEvent](arkts-inputeventclient-injectevent-f-sys.md#injectEvent-1) | 按键(包括单个按键和组合键)注入。 |
| <!--DelRow-->[injectEvent](arkts-inputeventclient-injectevent-f-sys.md#injectEvent-2) | 按键(包括单个按键和组合键)注入。 |
| <!--DelRow-->[injectKeyEvent](arkts-inputeventclient-injectkeyevent-f-sys.md#injectKeyEvent-1) | 按键(包括单个按键和组合键)事件注入。 |
| <!--DelRow-->[injectMouseEvent](arkts-inputeventclient-injectmouseevent-f-sys.md#injectMouseEvent-1) | 鼠标/触控板事件注入。 |
| <!--DelRow-->[injectTouchEvent](arkts-inputeventclient-injecttouchevent-f-sys.md#injectTouchEvent-1) | 触屏输入事件注入。 |
| <!--DelRow-->[permitInjection](arkts-inputeventclient-permitinjection-f-sys.md#permitInjection-1) | 允许事件注入权限。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [KeyboardController](arkts-inputeventclient-keyboardcontroller-i.md) | 提供模拟按键操作的功能。模拟按键操作序列必须满足以下要求： 1. 按键只能在抬起状态下被按下，或者在该按键是最近按下的按键且未抬起的情况下被按下。 2. 按键只能在被按下后才能抬起。 3. 最多可以同时按下并保持五个按键。 |
| <!--DelRow-->[KeyEvent](arkts-inputeventclient-keyevent-i-sys.md) | 按键注入描述信息。 |
| <!--DelRow-->[KeyEventData](arkts-inputeventclient-keyeventdata-i-sys.md) | 按键注入描述信息。 |
| <!--DelRow-->[KeyEventInfo](arkts-inputeventclient-keyeventinfo-i-sys.md) | 定义用户注入的按键事件信息。 |
| [MouseController](arkts-inputeventclient-mousecontroller-i.md) | 提供模拟鼠标操作的功能。模拟鼠标操作序列必须满足以下要求： 1. 鼠标按键只能在抬起状态下被按下。 2. 鼠标按键只能在被按下后才能抬起。 3. 有效的轴事件序列必须先调用beginAxis开始事件，然后调用零次或多次updateAxis更新事件，最后调用endAxis结束事件。 4. 同一时间只能有一个进行中的轴事件序列。 |
| <!--DelRow-->[MouseEventData](arkts-inputeventclient-mouseeventdata-i-sys.md) | 鼠标注入描述信息。 |
| [TouchController](arkts-inputeventclient-touchcontroller-i.md) | 提供模拟触控操作的功能。模拟触控操作序列必须满足以下要求： 1. 所有触点的displayId必须相同。 2. 每个触点都必须以`touchDown()`开始，以`touchUp()`结束，中间可包含多个`touchMove()`。 |
| <!--DelRow-->[TouchEventData](arkts-inputeventclient-toucheventdata-i-sys.md) | 触屏注入描述信息。 |
| [TouchPoint](arkts-inputeventclient-touchpoint-i.md) | 表示屏幕上的单个触点信息。 |

