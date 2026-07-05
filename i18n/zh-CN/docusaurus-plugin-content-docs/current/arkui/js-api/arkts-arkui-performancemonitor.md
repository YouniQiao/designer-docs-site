# @ohos.arkui.performanceMonitor

提供用户操作场景性能相关指标监测能力，在场景开始和结束时分别调用begin和end接口，即可获得该场景相关性能指标，目前仅包含响应时延、完成时延、丢帧。 > **说明：** > > - 从API Version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > - 本模块接口为系统接口。

**起始版本：** 10

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { performanceMonitor } from '@kit.ArkUI';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[begin](arkts-performancemonitor-begin-f-sys.md#begin-1) | 用于标记用户场景开始，用户场景开始时调用此接口。 |
| <!--DelRow-->[end](arkts-performancemonitor-end-f-sys.md#end-1) | 用于标记用户场景结束，用户场景结束时调用此接口。 |
| <!--DelRow-->[recordInputEventTime](arkts-performancemonitor-recordinputeventtime-f-sys.md#recordInputEventTime-1) | 记录动效场景开始前，用户输入触发事件类型与时间。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ActionType](arkts-performancemonitor-actiontype-e-sys.md) | 用户场景（通常为具有动效的场景）触发模式枚举。 |
| <!--DelRow-->[SourceType](arkts-performancemonitor-sourcetype-e-sys.md) | 用户场景触发源类型枚举。 |

