# @ohos.multimodalInput.inputDeviceCooperate

键鼠穿越功能模块，提供两台或多台设备组网协同后键鼠共享能力，实现键鼠输入设备的跨设备协同操作。 > **说明** > > - 本模块接口从API Version 10开始不再维护，从API version 23开始废弃，推荐使用新接口[@ohos.cooperate]{@link @ohos.cooperate:cooperate} (键鼠穿越)。 > > - 本模块接口均为系统接口。

**Since:** 9

**Deprecated since:** 23

**Substitute:** ohos.cooperate/cooperate

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

## Modules to Import

```TypeScript
import { inputDeviceCooperate } from '@kit.InputKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[enable](arkts-inputdevicecooperate-enable-f-sys.md#enable-1) | 开启、关闭键鼠穿越，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.prepareCooperate]{@link @ohos.cooperate:cooperate.prepareCooperate(callback: AsyncCallback<void>)}、 > [cooperate.unprepareCooperate]{@link @ohos.cooperate:cooperate.unprepareCooperate(callback: AsyncCallback<void>)} > 替代。 |
| <!--DelRow-->[enable](arkts-inputdevicecooperate-enable-f-sys.md#enable-2) | 开启、关闭键鼠穿越，使用Promise异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.prepareCooperate]{@link @ohos.cooperate:cooperate.prepareCooperate()}、 > [cooperate.unprepareCooperate]{@link @ohos.cooperate:cooperate.unprepareCooperate()}替代。 |
| <!--DelRow-->[getState](arkts-inputdevicecooperate-getstate-f-sys.md#getState-1) | 获取键鼠穿越开关的状态，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.getCooperateSwitchState]{@link @ohos.cooperate:cooperate.getCooperateSwitchState(networkId: string, callback: AsyncCallback<boolean>)} > 替代。 |
| <!--DelRow-->[getState](arkts-inputdevicecooperate-getstate-f-sys.md#getState-2) | 获取键鼠穿越开关的状态，使用Promise异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.getCooperateSwitchState]{@link @ohos.cooperate:cooperate.getCooperateSwitchState(networkId: string)}替 > 代。 |
| <!--DelRow-->[off](arkts-inputdevicecooperate-off-f-sys.md#off-1) | 关闭监听键鼠穿越状态，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.off]{@link @ohos.cooperate:cooperate.off(type: 'cooperateMessage', callback?: Callback<CooperateMessage>)} > 替代。 |
| <!--DelRow-->[on](arkts-inputdevicecooperate-on-f-sys.md#on-1) | 注册监听键鼠穿越状态，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.on]{@link @ohos.cooperate:cooperate.on(type: 'cooperateMessage', callback: Callback<CooperateMessage>)} > 替代。 |
| <!--DelRow-->[start](arkts-inputdevicecooperate-start-f-sys.md#start-1) | 启动键鼠穿越，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.activateCooperate]{@link @ohos.cooperate:cooperate.activateCooperate(targetNetworkId: string, inputDeviceId: int, callback: AsyncCallback<void>)} > 替代。 |
| <!--DelRow-->[start](arkts-inputdevicecooperate-start-f-sys.md#start-2) | 启动键鼠穿越，使用Promise异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.activateCooperate]{@link @ohos.cooperate:cooperate.activateCooperate(targetNetworkId: string, inputDeviceId: int)} > 替代。 |
| <!--DelRow-->[stop](arkts-inputdevicecooperate-stop-f-sys.md#stop-1) | 停止键鼠穿越，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.deactivateCooperate]{@link @ohos.cooperate:cooperate.deactivateCooperate(isUnchained: boolean, callback: AsyncCallback<void>)} > 替代。 |
| <!--DelRow-->[stop](arkts-inputdevicecooperate-stop-f-sys.md#stop-2) | 停止键鼠穿越，使用Promise异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.deactivateCooperate]{@link @ohos.cooperate:cooperate.deactivateCooperate(isUnchained: boolean)}替代。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[EventMsg](arkts-inputdevicecooperate-eventmsg-e-sys.md) | 键鼠穿越事件。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用[CooperateMessage]{@link @ohos.cooperate:cooperate.CooperateMessage}替 > 代。 |

