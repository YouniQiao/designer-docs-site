# text_timer

定义TextTimer组件实例。

## text_timer

```TypeScript
text_timer(options?: TextTimerOptions)
```

创建文本计时器组件。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | TextTimerOptions | 否 | 通过文本显示计时信息并控制其计时器状态的组件参数。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [TextTimerAttribute](arkts-texttimerattribute-c.md) | 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持以下事件。 |
| [TextTimerController](arkts-texttimercontroller-c.md) | TextTimer组件的控制器，用于控制文本计时器。一个TextTimer组件仅支持绑定一个控制器，组件创建完成后相关指令才能被调用。一个TextTimerController只能控制最后一个绑定此 TextTimerController的TextTimer组件。 ###### 导入对象 ```ts textTimerController: TextTimerController = new TextTimerController() ``` |

### 接口

| 名称 | 描述 |
| --- | --- |
| [TextTimerConfiguration](arkts-texttimerconfiguration-i.md) | ContentModifier接口使用的TextTimer配置。 开发者需要自定义class实现ContentModifier接口。 |
| [TextTimerInterface](arkts-texttimerinterface-i.md) | 通过文本显示计时信息并控制其计时器状态的组件。 组件不可见（非锁屏状态和应用后台状态）时，UI时间变动将停止（即该组件此时不会绘制），[onTimer]{@link TextTimerAttribute#onTimer}仍然会正常触发。 |
| [TextTimerOptions](arkts-texttimeroptions-i.md) | 用于构建TextTimer组件的选项。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [TextTimer](arkts-text-timer-con.md#TextTimer) | 通过文本显示计时信息并控制其计时器状态的组件。 组件不可见（非锁屏状态和应用后台状态）时，UI时间变动将停止（即该组件此时不会绘制），[onTimer]{@link TextTimerAttribute#onTimer}仍然会正常触发。 ###### 子组件 无 |
| [TextTimerInstance](arkts-text-timer-con.md#TextTimerInstance) | 定义TextTimer组件实例。 |

