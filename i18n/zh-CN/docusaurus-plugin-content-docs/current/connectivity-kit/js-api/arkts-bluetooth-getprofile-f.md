# getProfile

## getProfile

```TypeScript
function getProfile(profileId: ProfileId): A2dpSourceProfile | HandsFreeAudioGatewayProfile
```

Obtains the instance of profile.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.getProfileInstance

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| profileId | ProfileId | 是 | The profile id.. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| A2dpSourceProfile | Returns instance of profile. |

**示例：**

```TypeScript
let a2dpSrc : bluetooth.A2dpSourceProfile = bluetooth.getProfile(bluetooth.ProfileId.PROFILE_A2DP_SOURCE) as bluetooth.A2dpSourceProfile;

```

