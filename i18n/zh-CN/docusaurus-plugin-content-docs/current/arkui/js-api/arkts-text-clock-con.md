# Constants

## TextClock

```TypeScript
declare const TextClock: TextClockInterface
```

TextClock组件通过文本将当前系统时间显示在设备上。支持不同时区的时间显示，最高精度到秒级。 组件不可见时，时间变动将停止。组件的可见状态基于 [onVisibleAreaChange]CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback) 处理，可见阈值ratios大于0即视为可见状态。 ###### 子组件 无

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## TextClockInstance

```TypeScript
declare const TextClockInstance: TextClockAttribute
```

定义TextClock组件实例。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

