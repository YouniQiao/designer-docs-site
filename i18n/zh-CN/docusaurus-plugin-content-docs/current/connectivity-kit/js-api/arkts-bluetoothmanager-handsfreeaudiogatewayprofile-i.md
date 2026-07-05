# HandsFreeAudioGatewayProfile

Manager handsfree AG profile.

**继承实现关系：** HandsFreeAudioGatewayProfile继承自：BaseProfile。

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## connect

```TypeScript
connect(device: string): void
```

Connect to device with hfp. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile#connect

**需要权限：** 

- API版本9 - 9： ohos.permission.DISCOVER_BLUETOOTH

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | The address of the remote device to connect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let hfpAg: bluetoothManager.HandsFreeAudioGatewayProfile = bluetoothManager.getProfileInstance(bluetoothManager.ProfileId.PROFILE_HANDS_FREE_AUDIO_GATEWAY) as bluetoothManager.HandsFreeAudioGatewayProfile;
    hfpAg.connect('XX:XX:XX:XX:XX:XX');
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## disconnect

```TypeScript
disconnect(device: string): void
```

Disconnect to device with hfp. On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile#disconnect

**需要权限：** 

- API版本9 - 9： ohos.permission.DISCOVER_BLUETOOTH

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | The address of the remote device to disconnect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let hfpAg: bluetoothManager.HandsFreeAudioGatewayProfile = bluetoothManager.getProfileInstance(bluetoothManager.ProfileId.PROFILE_HANDS_FREE_AUDIO_GATEWAY) as bluetoothManager.HandsFreeAudioGatewayProfile;
    hfpAg.disconnect('XX:XX:XX:XX:XX:XX');
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

## off('connectionStateChange')

```TypeScript
off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void
```

Unsubscribe the event reported when the profile connection state changes. On API 10 and above, the permission required by this interface is changed to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile.off#event:connectionStateChange

**需要权限：** 

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | 是 | Type of the profile connection state changes event to listen for . |
| callback | Callback&lt;StateChangeParam> | 否 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |

## on('connectionStateChange')

```TypeScript
on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void
```

Subscribe the event reported when the profile connection state changes. On API 10 and above, the permission required by this interface is changed to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.hfp/hfp.HandsFreeAudioGatewayProfile.on#event:connectionStateChange

**需要权限：** 

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connectionStateChange' | 是 | Type of the profile connection state changes event to listen for . |
| callback | Callback&lt;StateChangeParam> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |

