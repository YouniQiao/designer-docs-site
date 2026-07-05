# @ohos.cooperate

键鼠穿越功能模块，提供两台或多台设备组网协同后键鼠共享能力，实现键鼠输入设备的跨设备协同操作。 > **说明** > > - 本模块接口均为系统接口。

**Since:** 10

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cooperate } from '@kit.DistributedServiceKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[activate](arkts-cooperate-activate-f-sys.md#activate-1) | 启动键鼠穿越，使用Callback异步回调。 |
| <!--DelRow-->[activate](arkts-cooperate-activate-f-sys.md#activate-2) | 启动键鼠穿越，使用Promise异步回调。 |
| <!--DelRow-->[activateCooperate](arkts-cooperate-activatecooperate-f-sys.md#activateCooperate-1) | 启动键鼠穿越，使用Callback异步回调。 |
| <!--DelRow-->[activateCooperate](arkts-cooperate-activatecooperate-f-sys.md#activateCooperate-2) | 启动键鼠穿越，使用Promise异步回调。 |
| <!--DelRow-->[activateCooperateWithOptions](arkts-cooperate-activatecooperatewithoptions-f-sys.md#activateCooperateWithOptions-1) | 启动键鼠穿越，使用选项开始屏幕跳转。 |
| <!--DelRow-->[deactivate](arkts-cooperate-deactivate-f-sys.md#deactivate-1) | 停止键鼠穿越，使用Callback异步回调。 |
| <!--DelRow-->[deactivate](arkts-cooperate-deactivate-f-sys.md#deactivate-2) | 停止键鼠穿越，使用Promise异步回调。 |
| <!--DelRow-->[deactivateCooperate](arkts-cooperate-deactivatecooperate-f-sys.md#deactivateCooperate-1) | 停止键鼠穿越，使用Callback异步回调。 |
| <!--DelRow-->[deactivateCooperate](arkts-cooperate-deactivatecooperate-f-sys.md#deactivateCooperate-2) | 停止键鼠穿越，使用Promise异步回调。 |
| <!--DelRow-->[getCooperateSwitchState](arkts-cooperate-getcooperateswitchstate-f-sys.md#getCooperateSwitchState-1) | 获取目标设备键鼠穿越开关的状态，使用Callback异步回调。 |
| <!--DelRow-->[getCooperateSwitchState](arkts-cooperate-getcooperateswitchstate-f-sys.md#getCooperateSwitchState-2) | 获取目标设备键鼠穿越开关的状态，使用Promise异步方式返回结果。 |
| <!--DelRow-->[getCrossingSwitchState](arkts-cooperate-getcrossingswitchstate-f-sys.md#getCrossingSwitchState-1) | 获取目标设备键鼠穿越开关的状态，使用Callback异步回调。 |
| <!--DelRow-->[getCrossingSwitchState](arkts-cooperate-getcrossingswitchstate-f-sys.md#getCrossingSwitchState-2) | 获取目标设备键鼠穿越开关的状态，使用Promise异步方式返回结果。 |
| <!--DelRow-->[off](arkts-cooperate-off-f-sys.md#off-1) | 取消监听键鼠穿越状态。 |
| <!--DelRow-->[off](arkts-cooperate-off-f-sys.md#off-2) | 取消监听键鼠穿越状态。 |
| <!--DelRow-->[off](arkts-cooperate-off-f-sys.md#off-3) | 取消监听指定设备鼠标光标位置。 |
| <!--DelRow-->[offCooperateMessage](arkts-cooperate-offcooperatemessage-f-sys.md#offCooperateMessage-1) | Disables listening for screen hopping status change events. |
| <!--DelRow-->[offCooperateMouseEvent](arkts-cooperate-offcooperatemouseevent-f-sys.md#offCooperateMouseEvent-1) | Disables listening for mouse pointer position information on the specified device for cooperation. |
| <!--DelRow-->[on](arkts-cooperate-on-f-sys.md#on-1) | 注册监听键鼠穿越状态。 |
| <!--DelRow-->[on](arkts-cooperate-on-f-sys.md#on-2) | 注册监听键鼠穿越状态。 |
| <!--DelRow-->[on](arkts-cooperate-on-f-sys.md#on-3) | 注册监听指定设备鼠标光标位置。 |
| <!--DelRow-->[onCooperateMessage](arkts-cooperate-oncooperatemessage-f-sys.md#onCooperateMessage-1) | Enables listening for screen hopping status change events. |
| <!--DelRow-->[onCooperateMouseEvent](arkts-cooperate-oncooperatemouseevent-f-sys.md#onCooperateMouseEvent-1) | Enables listening for mouse pointer position information on the specified device for cooperation. |
| <!--DelRow-->[prepare](arkts-cooperate-prepare-f-sys.md#prepare-1) | 准备键鼠穿越，使用Callback异步回调。 |
| <!--DelRow-->[prepare](arkts-cooperate-prepare-f-sys.md#prepare-2) | 准备键鼠穿越，使用Promise异步方式返回结果。 |
| <!--DelRow-->[prepareCooperate](arkts-cooperate-preparecooperate-f-sys.md#prepareCooperate-1) | 准备键鼠穿越，使用Callback异步回调。 |
| <!--DelRow-->[prepareCooperate](arkts-cooperate-preparecooperate-f-sys.md#prepareCooperate-2) | 准备键鼠穿越，使用Promise异步方式返回结果。 |
| <!--DelRow-->[unprepare](arkts-cooperate-unprepare-f-sys.md#unprepare-1) | 取消键鼠穿越准备，使用Callback异步回调。 |
| <!--DelRow-->[unprepare](arkts-cooperate-unprepare-f-sys.md#unprepare-2) | 取消键鼠穿越准备，使用Promise异步回调。 |
| <!--DelRow-->[unprepareCooperate](arkts-cooperate-unpreparecooperate-f-sys.md#unprepareCooperate-1) | 取消键鼠穿越准备，使用Callback异步回调。 |
| <!--DelRow-->[unprepareCooperate](arkts-cooperate-unpreparecooperate-f-sys.md#unprepareCooperate-2) | 取消键鼠穿越准备，使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[CooperateMessage](arkts-cooperate-cooperatemessage-i-sys.md) | 键鼠穿越的消息。 |
| <!--DelRow-->[CooperateOptions](arkts-cooperate-cooperateoptions-i-sys.md) | 键鼠穿越可选控制参数，控制穿出点位置。 |
| <!--DelRow-->[MouseLocation](arkts-cooperate-mouselocation-i-sys.md) | 键鼠穿越的位置。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[CooperateMsg](arkts-cooperate-cooperatemsg-e-sys.md) | 键鼠穿越的消息通知。 |
| <!--DelRow-->[CooperateState](arkts-cooperate-cooperatestate-e-sys.md) | 键鼠穿越状态的枚举。 |

