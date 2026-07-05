# setAudioDevice

## setAudioDevice

```TypeScript
function setAudioDevice(device: AudioDevice, callback: AsyncCallback<void>): void
```

Set the audio device.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | AudioDevice | 是 | Indicates the device of audio. |
| callback | AsyncCallback&lt;void> | 是 | The callback of setAudioDevice. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let audioDevice: call.AudioDevice = {
    deviceType: call.AudioDeviceType.DEVICE_EARPIECE
}
call.setAudioDevice(audioDevice, (err: BusinessError) => {
    if (err) {
        console.error(`setAudioDevice fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`setAudioDevice success.`);
    }
});

```

## setAudioDevice

```TypeScript
function setAudioDevice(device: AudioDevice): Promise<void>
```

Set the audio device.

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | AudioDevice | 是 | Indicates the device of audio. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the setAudioDevice. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let audioDevice: call.AudioDevice = {
    deviceType: call.AudioDeviceType.DEVICE_EARPIECE
}
call.setAudioDevice(audioDevice).then(() => {
    console.info(`setAudioDevice success.`);
}).catch((err: BusinessError) => {
    console.error(`setAudioDevice fail, promise: err->${JSON.stringify(err)}`);
});

```

