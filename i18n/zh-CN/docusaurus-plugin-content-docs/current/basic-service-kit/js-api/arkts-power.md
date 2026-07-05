# @ohos.power

该模块主要提供重启、关机、查询屏幕状态等接口。开发者可以使用该模块的接口获取设备的活动状态、电源模式、亮灭屏状态等。

**起始版本：** 7

**系统能力：** SystemCapability.PowerManager.PowerManager.Core

## 导入模块

```TypeScript
import { power } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getPowerConfig](arkts-power-getpowerconfig-f-sys.md#getPowerConfig-1) | 按场景名称查询电源配置值。 |
| [getPowerMode](arkts-power-getpowermode-f.md#getPowerMode-1) | 获取当前设备的电源模式。 |
| <!--DelRow-->[hibernate](arkts-power-hibernate-f-sys.md#hibernate-1) | 休眠设备。 |
| [isActive](arkts-power-isactive-f.md#isActive-1) | 检测当前设备是否处于活动状态。 - 有屏的设备亮屏时为活动状态，熄屏时为非活动状态。 - 无屏的设备非休眠时为活动状态，休眠时为非活动状态。 |
| [isScreenOn](arkts-power-isscreenon-f.md#isScreenOn-1) | 检测当前设备的亮灭屏状态。使用callback异步回调。 |
| [isScreenOn](arkts-power-isscreenon-f.md#isScreenOn-2) | 检测当前设备的亮灭屏状态。使用Promise异步回调。 |
| [isStandby](arkts-power-isstandby-f.md#isStandby-1) | 检测当前设备是否进入待机低功耗续航模式。 |
| <!--DelRow-->[reboot](arkts-power-reboot-f-sys.md#reboot-1) | 重启设备。 |
| [rebootDevice](arkts-power-rebootdevice-f.md#rebootDevice-1) | 重启系统。 |
| <!--DelRow-->[refreshActivity](arkts-power-refreshactivity-f-sys.md#refreshActivity-1) | 刷新设备活动状态（如：重设屏幕超时息屏时间等）。 只有设备在活动状态下生效，设备活动状态见[power.isActive]{@link @ohos.power:power.isActive}接口。 |
| <!--DelRow-->[registerShutdownCallback](arkts-power-registershutdowncallback-f-sys.md#registerShutdownCallback-1) | 订阅电源关机或重启的回调提醒。使用callback异步回调。 |
| <!--DelRow-->[setPowerConfig](arkts-power-setpowerconfig-f-sys.md#setPowerConfig-1) | 根据场景名称设置电源配置值。 |
| <!--DelRow-->[setPowerKeyFilteringStrategy](arkts-power-setpowerkeyfilteringstrategy-f-sys.md#setPowerKeyFilteringStrategy-1) | 设置电源键过滤策略，在电源服务订阅电源键事件后，用于配置电源键事件的处理方式。 电源键过滤策略见[power.PowerKeyFilteringStrategy]{@link @ohos.power:power.PowerKeyFilteringStrategy}接口。 |
| <!--DelRow-->[setPowerMode](arkts-power-setpowermode-f-sys.md#setPowerMode-1) | 设置当前设备的电源模式。使用callback异步回调。 |
| <!--DelRow-->[setPowerMode](arkts-power-setpowermode-f-sys.md#setPowerMode-2) | 设置当前设备的电源模式。使用Promise异步回调。 |
| <!--DelRow-->[setScreenOffTime](arkts-power-setscreenofftime-f-sys.md#setScreenOffTime-1) | 设置熄屏超时时间。 |
| <!--DelRow-->[shutdown](arkts-power-shutdown-f-sys.md#shutdown-1) | 系统关机。 |
| <!--DelRow-->[suspend](arkts-power-suspend-f-sys.md#suspend-1) | 使设备进入睡眠状态。 |
| <!--DelRow-->[unregisterShutdownCallback](arkts-power-unregistershutdowncallback-f-sys.md#unregisterShutdownCallback-1) | 取消订阅电源关机或重启的回调提醒。使用callback同步回调。 |
| <!--DelRow-->[wakeup](arkts-power-wakeup-f-sys.md#wakeup-1) | 唤醒设备。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [DevicePowerMode](arkts-power-devicepowermode-e.md) | 表示电源模式的枚举值。 |
| [PowerKeyFilteringStrategy](arkts-power-powerkeyfilteringstrategy-e.md) | 表示电源键过滤策略。 |

