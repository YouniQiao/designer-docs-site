# @ohos.UiTest

用于便捷构建{@link On}对象的静态构造器，使用示例：ON.text('txt').enabled(true)。

## 汇总

### 类

| 名称 | 说明 |
| --- | --- |
| [By](arkts-test-by-c.md) | UiTest框架在**By**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **By**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[By.isBefore&lt;sup&gt;(已废弃)&lt;/sup&gt;](arkts-test-by-c.md#isbefore-1)和 [By.isAfter&lt;sup&gt;(已废弃)&lt;/sup&gt;](arkts-test-by-c.md#isafter-1)等API指定相邻组件的特征来辅助定位。 **By**类中提供的所有API都是同步的。建议使用静态构造器**BY**以链式模式创建**By**对象。 |
| [Component](arkts-test-component-c.md) | 表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。 |
| [Driver](arkts-test-driver-c.md) | **Driver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。 此类提供的所有API（除**Driver.create()**外）都使用Promise返回结果，必须使用**await**调用。 |
| [On](arkts-test-on-c.md) | 自API版本9起，UiTest框架在**On**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。 **On**类提供的API具有以下特点： 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。 2. 为组件属性提供多种匹配模式。 3. 支持组件的绝对定位和相对定位。可以使用[ON.isBefore](arkts-test-on-c.md#isbefore-1)和 [ON.isAfter](arkts-test-on-c.md#isafter-1)等API指定相邻组件的特征来辅助定位。 **On**类中提供的所有API都是同步的。建议使用静态构造器**ON**以链式模式创建**On**对象。 |
| [PointerMatrix](arkts-test-pointermatrix-c.md) | 表示设备显示上的指针二维数组，用于构建可通过UiDriver注入的多指轨迹。 |
| [UiComponent](arkts-test-uicomponent-c.md) | 在**UiTest**中，**UiComponent**类表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。 |
| [UiDriver](arkts-test-uidriver-c.md) | **UiDriver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。 此类提供的所有API（除**UiDriver.create()**外）都使用Promise返回结果，必须使用**await**调用。 |
| [UiWindow](arkts-test-uiwindow-c.md) | **UiWindow**类表示UI上的窗口，提供获取窗口属性、拖动窗口和调整窗口大小的API。 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。 |

### 接口

| 名称 | 说明 |
| --- | --- |
| [ComponentEventOptions](arkts-test-componenteventoptions-i.md) | 描述组件操作事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。 |
| [InputTextMode](arkts-test-inputtextmode-i.md) | 描述文本输入模式。 |
| [KeyOptions](arkts-test-keyoptions-i.md) | 表示按键操作的选项。 |
| [PenKeyOperationOptions](arkts-test-penkeyoperationoptions-i.md) | 手写笔按键操作选项。 |
| [Point](arkts-test-point-i.md) | 表示设备屏幕上的坐标点。 |
| [Rect](arkts-test-rect-i.md) | 表示设备屏幕上的矩形区域。 |
| [TouchOptions](arkts-test-touchoptions-i.md) | 触摸操作的通用选项。 |
| [TouchPadSwipeOptions](arkts-test-touchpadswipeoptions-i.md) | 描述触控板滑动手势选项的信息。 |
| [UIElementInfo](arkts-test-uielementinfo-i.md) | 提供UI事件的信息。 |
| [UIEventObserver](arkts-test-uieventobserver-i.md) | 用于监听UI事件的观察者。 |
| [WindowChangeOptions](arkts-test-windowchangeoptions-i.md) | 描述窗口变更事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。 |
| [WindowFilter](arkts-test-windowfilter-i.md) | 提供此窗口的标志属性。 |

### 枚举

| 名称 | 说明 |
| --- | --- |
| [ComponentEventType](arkts-test-componenteventtype-e.md) | 枚举可监听的组件操作事件类型。 |
| [DisplayRotation](arkts-test-displayrotation-e.md) | 描述设备的显示旋转方向。 |
| [MatchPattern](arkts-test-matchpattern-e.md) | 枚举组件属性支持的匹配模式。 |
| [MouseButton](arkts-test-mousebutton-e.md) | 描述注入的模拟鼠标按键。 |
| [PenKey](arkts-test-penkey-e.md) | 手写笔按键类型枚举。 |
| [PenKeyOperation](arkts-test-penkeyoperation-e.md) | 手写笔按键操作类型枚举。 |
| [PenMode](arkts-test-penmode-e.md) | 手写笔模式枚举。 |
| [ResizeDirection](arkts-test-resizedirection-e.md) | 枚举窗口可调整大小的方向。 |
| [UiDirection](arkts-test-uidirection-e.md) | 描述fling等UI操作的方向。 |
| [WindowChangeType](arkts-test-windowchangetype-e.md) | 枚举可监听的窗口变更事件类型。 |
| [WindowMode](arkts-test-windowmode-e.md) | 枚举窗口模式。 |

