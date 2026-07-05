# FrameMetrics

帧率指标。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

## 导入模块

```TypeScript
import { window } from '@kit.ArkUI';
```

## layoutMeasureDuration

```TypeScript
layoutMeasureDuration: long
```

一帧中的布局测量耗时（单位：纳秒）。

**类型：** long

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

## vsyncTimestamp

```TypeScript
vsyncTimestamp: long
```

当前帧的开始时间戳（单位：纳秒）。

**类型：** long

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

## firstDrawFrame

```TypeScript
firstDrawFrame: boolean
```

是否是首帧。true表示首帧，false表示非首帧。

**类型：** boolean

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

## inputHandlingDuration

```TypeScript
inputHandlingDuration: long
```

一帧中的手势处理耗时（单位：纳秒）。

**类型：** long

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

