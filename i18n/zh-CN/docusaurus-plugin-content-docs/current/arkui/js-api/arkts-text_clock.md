# text_clock

定义TextClock组件实例。

## text_clock

```TypeScript
text_clock(options?: TextClockOptions)
```

创建文本时钟组件。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | TextClockOptions | 否 | 通过文本显示当前系统时间的组件参数。 [since 8 - 17] |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [TextClockAttribute](arkts-textclockattribute-c.md) | 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持以下事件。 |
| [TextClockController](arkts-textclockcontroller-c.md) | TextClock容器组件的控制器，可以将该控制器绑定到TextClock组件，通过它控制文本时钟的启动与停止。一个TextClock组件仅支持绑定一个控制器。 ###### 导入对象 ```ts controller: TextClockController = new TextClockController() ``` |

### 接口

| 名称 | 描述 |
| --- | --- |
| [TextClockConfiguration](arkts-textclockconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。 |
| [TextClockInterface](arkts-textclockinterface-i.md) | TextClock组件通过文本将当前系统时间显示在设备上。支持不同时区的时间显示，最高精度到秒级。 组件不可见时，时间变动将停止。组件的可见状态基于 [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)} 处理，可见阈值ratios大于0即视为可见状态。 |
| [TextClockOptions](arkts-textclockoptions-i.md) | 用于构建TextClock组件的选项。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [TextClock](arkts-text-clock-con.md#TextClock) | TextClock组件通过文本将当前系统时间显示在设备上。支持不同时区的时间显示，最高精度到秒级。 组件不可见时，时间变动将停止。组件的可见状态基于 [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)} 处理，可见阈值ratios大于0即视为可见状态。 ###### 子组件 无 |
| [TextClockInstance](arkts-text-clock-con.md#TextClockInstance) | 定义TextClock组件实例。 |

