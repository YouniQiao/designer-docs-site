# HandsFreeAudioGatewayProfile

Manager handsfree AG profile.

**继承实现关系：** HandsFreeAudioGatewayProfile继承自：BaseProfile。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## connect

```TypeScript
connect(device: string): boolean
```

Connect to device with hfp.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile#connect

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | The address of the remote device to connect. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the connect is in process; returns {@code false} otherwise. |

**示例：**

```TypeScript
let hfpAg : bluetooth.HandsFreeAudioGatewayProfile= bluetooth.getProfile(bluetooth.ProfileId
    .PROFILE_HANDS_FREE_AUDIO_GATEWAY);
let ret : boolean = hfpAg.connect('XX:XX:XX:XX:XX:XX');

```

## disconnect

```TypeScript
disconnect(device: string): boolean
```

Disconnect to device with hfp.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile#disconnect

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | The address of the remote device to disconnect. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the disconnect is in process; returns {@code false} otherwise. |

**示例：**

```TypeScript
let hfpAg : bluetooth.HandsFreeAudioGatewayProfile = bluetooth.getProfile(bluetooth.ProfileId
    .PROFILE_HANDS_FREE_AUDIO_GATEWAY);
let ret : boolean = hfpAg.disconnect('XX:XX:XX:XX:XX:XX');

```

## off('connectionStateChange')

```TypeScript
off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void
```

Unsubscribe the event reported when the profile connection state changes .

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile.off#event:connectionStateChange

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | 是 | Type of the profile connection state changes event to listen for . |
| callback | Callback&lt;StateChangeParam> | 否 | Callback used to listen for event. |

## on('connectionStateChange')

```TypeScript
on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void
```

Subscribe the event reported when the profile connection state changes .

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.HandsFreeAudioGatewayProfile.on#event:connectionStateChange

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | 是 | Type of the profile connection state changes event to listen for . |
| callback | Callback&lt;StateChangeParam> | 是 | Callback used to listen for event. |

