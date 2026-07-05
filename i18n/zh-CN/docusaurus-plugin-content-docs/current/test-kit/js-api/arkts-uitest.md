# @ohos.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [ON](arkts-on-n.md) | 用于便捷构建{@link On}对象的静态构造器，使用示例：ON.text('txt').enabled(true)。 |

### 类

| 名称 | 描述 |
| --- | --- |
| [By](arkts-by-c.md) | UiTest框架在**By**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **By**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[By.isBefore<sup>(已废弃)</sup>]{@link By#isBefore}和 [By.isAfter<sup>(已废弃)</sup>]{@link By#isAfter}等API指定相邻组件的特征来辅助定位。 **By**类中提供的所有API都是同步的。建议使用静态构造器**BY**以链式模式创建**By**对象。 |
| [Component](arkts-component-c.md) | 表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。 |
| [Driver](arkts-driver-c.md) | Driver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。 此类提供的所有API（除**Driver.create()**外）都使用Promise返回结果，必须使用**await**调用。 |
| [On](arkts-on-c.md) | 自API版本9起，UiTest框架在**On**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **On**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[ON.isBefore]{@link On.isBefore(on: On)}和 [ON.isAfter]{@link On.isAfter(on: On)}等API指定相邻组件的特征来辅助定位。 **On**类中提供的所有API都是同步的。建议使用静态构造器**ON**以链式模式创建**On**对象。 |
| [PointerMatrix](arkts-pointermatrix-c.md) | 表示设备显示上的指针二维数组，用于构建可通过UiDriver注入的多指轨迹。 |
| [UiComponent](arkts-uicomponent-c.md) | 在**UiTest**中，**UiComponent**类表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。 |
| [UiDriver](arkts-uidriver-c.md) | UiDriver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。 此类提供的所有API（除**UiDriver.create()**外）都使用Promise返回结果，必须使用**await**调用。 |
| [UiWindow](arkts-uiwindow-c.md) | UiWindow**类表示UI上的窗口，提供获取窗口属性、拖动窗口和调整窗口大小的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ComponentEventOptions](arkts-componenteventoptions-i.md) | 描述组件操作事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。 |
| [InputTextMode](arkts-inputtextmode-i.md) | 描述文本输入模式。 |
| [KeyOptions](arkts-keyoptions-i.md) | 表示按键操作的选项。 |
| [PenKeyOperationOptions](arkts-penkeyoperationoptions-i.md) | 手写笔按键操作选项。 |
| [Point](arkts-point-i.md) | 表示设备屏幕上的坐标点。 |
| [Rect](arkts-rect-i.md) | 表示设备屏幕上的矩形区域。 |
| [TouchOptions](arkts-touchoptions-i.md) | 触摸操作的通用选项。 |
| [TouchPadSwipeOptions](arkts-touchpadswipeoptions-i.md) | 描述触控板滑动手势选项的信息。 |
| [UIElementInfo](arkts-uielementinfo-i.md) | 提供UI事件的信息。 |
| [UIEventObserver](arkts-uieventobserver-i.md) | 用于监听UI事件的观察者。 |
| [WindowChangeOptions](arkts-windowchangeoptions-i.md) | 描述窗口变更事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。 |
| [WindowFilter](arkts-windowfilter-i.md) | 提供此窗口的标志属性。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ComponentEventType](arkts-componenteventtype-e.md) | 枚举可监听的组件操作事件类型。 |
| [DisplayRotation](arkts-displayrotation-e.md) | 描述设备的显示旋转方向。 |
| [MatchPattern](arkts-matchpattern-e.md) | 枚举组件属性支持的匹配模式。 |
| [MouseButton](arkts-mousebutton-e.md) | 描述注入的模拟鼠标按键。 |
| [PenKey](arkts-penkey-e.md) | 手写笔按键类型枚举。 |
| [PenKeyOperation](arkts-penkeyoperation-e.md) | 手写笔按键操作类型枚举。 |
| [PenMode](arkts-penmode-e.md) | 手写笔模式枚举。 |
| [ResizeDirection](arkts-resizedirection-e.md) | 枚举窗口可调整大小的方向。 |
| [UiDirection](arkts-uidirection-e.md) | 描述fling等UI操作的方向。 |
| [WindowChangeType](arkts-windowchangetype-e.md) | 枚举可监听的窗口变更事件类型。 |
| [WindowMode](arkts-windowmode-e.md) | 枚举窗口模式。 |

