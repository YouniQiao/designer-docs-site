# getProfileConnState

## getProfileConnState

```TypeScript
function getProfileConnState(profileId: ProfileId): ProfileConnectionState
```

Obtains the connection state of profile.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.getProfileConnectionState

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| profileId | ProfileId | 是 | The profile id. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ProfileConnectionState | Returns the connection state. |

**示例：**

```TypeScript
let result : bluetooth.ProfileConnectionState = bluetooth.getProfileConnState(bluetooth.ProfileId.PROFILE_A2DP_SOURCE);

```

