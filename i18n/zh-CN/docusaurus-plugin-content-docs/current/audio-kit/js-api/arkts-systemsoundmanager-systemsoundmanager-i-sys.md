# SystemSoundManager

System sound manager object.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { systemSoundManager } from '@kit.AudioKit';
```

## addCustomizedTone

```TypeScript
addCustomizedTone(context: BaseContext, toneAttr: ToneAttrs, externalUri: string): Promise<string>
```

Add customized tone into ringtone library.

**起始版本：** 12

**需要权限：** 

 ohos.permission.WRITE_RINGTONE

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| toneAttr | ToneAttrs | 是 | Tone attributes created by {@link createCustomizedToneAttrs}. |
| externalUri | string | 是 | Tone uri in external storage. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Tone uri after adding into ringtone library. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation is not allowed, e.g. ringtone to add is not customized. |
| 5400103 | I/O error. Possible causes:  1. The target file size exceeds 2 GB;  2. Failed to find the specified file;  3. System sound manager service error. |
| 20700004 | Data size exceeds the limit. Note:  This error is returned when the file size is between 200MB and 2GB. [since 20] |
| 20700005 | The number of files exceeds the limit. [since 20] |
| 20700006 | Insufficient ROM space. [since 20] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let title = 'test'; // 需更改为实际名称。
let fileName = 'displayName_test'; // 需更改为实际文件名。
let categoryValue = systemSoundManager.TONE_CATEGORY_ALARM;

let toneAttrs = systemSoundManager.createCustomizedToneAttrs();
toneAttrs.setTitle(title);
toneAttrs.setFileName(fileName);
toneAttrs.setCategory(categoryValue);

let path = 'file://data/test.ogg'; // 需更改为实际铃音uri。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.addCustomizedTone(context, toneAttrs, path).then((value: string) => {
  console.info('Succeeded in doing addCustomizedTone.');
}).catch((err: BusinessError) => {
  console.error(`Failed to addCustomizedTone. Code: ${err.code}, message: ${err.message}`);
});

```

## addCustomizedTone

```TypeScript
addCustomizedTone(context: BaseContext, toneAttr: ToneAttrs, fd: int, offset?: long, length?: long)
      : Promise<string>
```

Add customized tone into ringtone library.

**起始版本：** 12

**需要权限：** 

 ohos.permission.WRITE_RINGTONE

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| toneAttr | ToneAttrs | 是 | Tone attributes created by {@link createCustomizedToneAttrs}. |
| fd | int | 是 | File descriptor. |
| offset | long | 否 |  |
| length | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Tone uri after adding into ringtone library. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation is not allowed, e.g. ringtone to add is not customized. |
| 5400103 | I/O error. Possible causes:  1. The target file size exceeds 2 GB;  2. Failed to find the specified file;  3. Ringtone library error.  4. System sound manager service error. |
| 20700004 | Data size exceeds the limit. Note:  This error is returned when the file size is between 200MB and 2GB. [since 20] |
| 20700005 | The number of files exceeds the limit. [since 20] |
| 20700006 | Insufficient ROM space. [since 20] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let title = 'test'; // 需更改为实际名称。
let fileName = 'displayName_test'; // 需更改为实际文件名。
let categoryValue = systemSoundManager.TONE_CATEGORY_ALARM;

let toneAttrs = systemSoundManager.createCustomizedToneAttrs();
toneAttrs.setTitle(title);
toneAttrs.setFileName(fileName);
toneAttrs.setCategory(categoryValue);

let fd = 10; // 需更改为实际铃音fd。
let offset = 0; // 需更改为实际所需偏移量。
let length = 50; // 需更改为实际所需数据长度。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.addCustomizedTone(context, toneAttrs, fd, offset, length).then((value: string) => {
  console.info('Succeeded in doing addCustomizedTone.');
}).catch((err: BusinessError) => {
  console.error(`Failed to addCustomizedTone. Code: ${err.code}, message: ${err.message}`);
});

```

## close

```TypeScript
close(fd: int): Promise<void>
```

Close fd.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fd | int | 是 | File descriptor to close. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result of close fd. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let fd = 50; // 需更改为目标铃声的fd。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.close(fd).then(() => {
  console.info('Succeeded in doing close.');
}).catch((err: BusinessError) => {
  console.error(`Failed to close. Code: ${err.code}, message: ${err.message}`);
});

```

## getAlarmToneAttrList

```TypeScript
getAlarmToneAttrList(context: BaseContext): Promise<ToneAttrsArray>
```

Gets attribute list of alarm tones.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneAttrsArray> | Promise used to return attribute list of system tone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getAlarmToneAttrList(context).then((value: systemSoundManager.ToneAttrsArray) => {
  console.info('Succeeded in doing getAlarmToneAttrList.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getAlarmToneAttrList. Code: ${err.code}, message: ${err.message}`);
});

```

## getAlarmToneUri

```TypeScript
getAlarmToneUri(context: BaseContext): Promise<string>
```

Gets uri of the current alarm tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return uri of current alarm tone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getAlarmToneUri(context).then((value: string) => {
  console.info('Succeeded in doing getAlarmToneUri.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getAlarmToneUri. Code: ${err.code}, message: ${err.message}`);
});

```

## getCurrentRingtoneAttribute

```TypeScript
getCurrentRingtoneAttribute(type: RingtoneType): Promise<ToneAttrs>
```

Gets the ringtone attribute which is in use.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | RingtoneType | 是 | Ringtone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneAttrs> | Promise used to return the ringtone attribute in system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getCurrentRingtoneAttribute(type).then((value: systemSoundManager.ToneAttrs) => {
  console.info('Succeeded in doing getCurrentRingtoneAttribute.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getCurrentRingtoneAttribute. Code: ${err.code}, message: ${err.message}`);
});

```

## getDefaultAlarmToneAttrs

```TypeScript
getDefaultAlarmToneAttrs(context: BaseContext): Promise<ToneAttrs>
```

Gets attributes of the default alarm tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneAttrs> | Promise used to return attributes of the default alarm tone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getDefaultAlarmToneAttrs(context).then((value: systemSoundManager.ToneAttrs) => {
  console.info('Succeeded in doing getDefaultAlarmToneAttrs.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getDefaultAlarmToneAttrs. Code: ${err.code}, message: ${err.message}`);
});

```

## getDefaultRingtoneAttrs

```TypeScript
getDefaultRingtoneAttrs(context: BaseContext, type: RingtoneType): Promise<ToneAttrs>
```

Gets attributes of the default ringtone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneAttrs> | Promise used to return attributes of the default ringtone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getDefaultRingtoneAttrs(context, type).then((value: systemSoundManager.ToneAttrs) => {
  console.info('Succeeded in doing getDefaultRingtoneAttrs.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getDefaultRingtoneAttrs. Code: ${err.code}, message: ${err.message}`);
});

```

## getDefaultSystemToneAttrs

```TypeScript
getDefaultSystemToneAttrs(context: BaseContext, type: SystemToneType): Promise<ToneAttrs>
```

Gets attributes of the default system tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | SystemToneType | 是 | system tone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneAttrs> | Promise used to return attributes of the default system tone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.SystemToneType = systemSoundManager.SystemToneType.SYSTEM_TONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getDefaultSystemToneAttrs(context, type).then((value: systemSoundManager.ToneAttrs) => {
  console.info('Succeeded in doing getDefaultSystemToneAttrs.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getDefaultSystemToneAttrs. Code: ${err.code}, message: ${err.message}`);
});

```

## getHapticsAttrsSyncedWithTone

```TypeScript
getHapticsAttrsSyncedWithTone(context: BaseContext, toneUri: string): Promise<ToneHapticsAttrs>
```

Get attributes of haptics which is synchronized with one tone. If no haptics is found, then the attributes in the returned ToneHapticsAttrs is empty.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| toneUri | string | 是 | Uri of tone to query. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneHapticsAttrs> | Promise used to return ToneHapticsAttrs. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. For example, the input URI is not used for tones. |
| 5400103 | I/O error. |
| 20700003 | Unsupported operation. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let toneUri: string = '/data/storage/el2/base/RingTone/alarms/test.ogg'; // 需更改为实际铃音uri。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getHapticsAttrsSyncedWithTone(context, toneUri).then((value: systemSoundManager.ToneHapticsAttrs) => {
  console.info('Succeeded in doing getHapticsAttrsSyncedWithTone.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getHapticsAttrsSyncedWithTone. Code: ${err.code}, message: ${err.message}`);
});

```

## getMockHapticRingtonePlayer

```TypeScript
getMockHapticRingtonePlayer(context: BaseContext, hapticUri: string): Promise<RingtonePlayer | null>
```

Obtains a mock haptic ringtone player for playing vibration files and their corresponding mock haptic sound files. This API uses a promise to return the result. Before calling this interface, ensure that the incoming hapticUri actually exists in the system. Otherwise, exceptions and errors will occur, such as failure to play the matched haptic sound file. After obtaining the instance through this interface, actively call {@link RingtonePlayer#release} method of the ringtone player to release player resources when the service is terminated.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| hapticUri | string | 是 | Haptic uri to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RingtonePlayer \| null> | Promise used to return a ringtone player instance,  or null when an error happens. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 20700002 | Parameter verification failed. The hapticUri does not exist or is  incorrectly formatted. Ensure it is a JSON file and that it exists in the system's file system. |
| 5400103 | I/O error. The ringtone database access timed out or encountered an error.  It is recommended to restart your phone. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let systemRingtonePlayer: systemSoundManager.RingtonePlayer | null = null;
let hapticUri = 'file://data/test.json'; // 需更改为目标触觉文件URI。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getMockHapticRingtonePlayer(context, hapticUri).then((value: systemSoundManager.RingtonePlayer | null) => {
  if (value != null) {
    console.info('Succeeded in doing getMockHapticRingtonePlayer.');
    systemRingtonePlayer = value;
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to getMockHapticRingtonePlayer. Code: ${err.code}, message: ${err.message}`);
});

```

## getMockHapticRingtonePlayer

```TypeScript
getMockHapticRingtonePlayer(context: BaseContext, type: RingtoneType, ringtoneUri: string): Promise<RingtonePlayer | null>
```

Obtains a mock haptic ringtone player for playing vibration files and their corresponding mock haptic sound files. This API uses a promise to return the result. Before calling this interface, ensure that the incoming ringtoneUri actually exists in the system. Otherwise, exceptions and errors will occur, such as failure to play the matched haptic sound file. After obtaining the instance through this interface, actively call {@link RingtonePlayer#release} method of the ringtone player to release player resources when the service is terminated.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |
| ringtoneUri | string | 是 | Ringtone uri to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RingtonePlayer \| null> | Promise used to return a ringtone player instance,  or null when an error happens. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 20700002 | Parameter verification failed. Possible causes:  1.The type exceeds the valid range, please use the RingtoneType enum for input.  2.The ringtoneUri does not exist or is incorrectly formatted, please use the ringtoneUri returned by  the {@link SystemSoundManager#addCustomizedTone}. |
| 5400103 | I/O error. The ringtone database access timed out or encountered an error.  It is recommended to restart your phone. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;
let systemRingtonePlayer: systemSoundManager.RingtonePlayer | null = null;
let ringtoneUri = 'file://data/test.json'; // 需更改为目标铃音文件URI。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getMockHapticRingtonePlayer(context, type, ringtoneUri).then((value: systemSoundManager.RingtonePlayer | null) => {
  if (value != null) {
    console.info('Succeeded in doing getMockHapticRingtonePlayer.');
    systemRingtonePlayer = value;
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to getMockHapticRingtonePlayer. Code: ${err.code}, message: ${err.message}`);
});

```

## getRingtoneAttrList

```TypeScript
getRingtoneAttrList(context: BaseContext, type: RingtoneType): Promise<ToneAttrsArray>
```

Gets attribute list of ringtones.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneAttrsArray> | Promise used to return attribute list of ringtone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getRingtoneAttrList(context, type).then((value: systemSoundManager.ToneAttrsArray) => {
  console.info('Succeeded in doing getRingtoneAttrList.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getRingtoneAttrList. Code: ${err.code}, message: ${err.message}`);
});

```

## getRingtonePlayer

```TypeScript
getRingtonePlayer(context: BaseContext, type: RingtoneType): Promise<RingtonePlayer>
```

Gets the ringtone player.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RingtonePlayer> | Promise used to return a ringtone player instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;
let systemRingtonePlayer: systemSoundManager.RingtonePlayer | undefined = undefined;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getRingtonePlayer(context, type).then((value: systemSoundManager.RingtonePlayer) => {
  console.info('Succeeded in doing getRingtonePlayer.');
  systemRingtonePlayer = value;
}).catch((err: BusinessError) => {
  console.error(`Failed to getRingtonePlayer. Code: ${err.code}, message: ${err.message}`);
});

```

## getRingtonePlayer

```TypeScript
getRingtonePlayer(context: BaseContext, type: RingtoneType): Promise<RingtonePlayer | null>
```

Gets the ringtone player.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RingtonePlayer \| null> | Promise used to return a ringtone player instance,  or null when an error happens. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

## getRingtoneUri

```TypeScript
getRingtoneUri(context: BaseContext, type: RingtoneType): Promise<string>
```

Gets the ringtone uri.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the ringtone uri maintained in system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getRingtoneUri(context, type).then((value: string) => {
  console.info('Succeeded in doing getRingtoneUri.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getRingtoneUri. Code: ${err.code}, message: ${err.message}`);
});

```

## getSystemRingtonePlayer

```TypeScript
getSystemRingtonePlayer(context: Context, type: RingtoneType, callback: AsyncCallback<RingtonePlayer>): void
```

Gets the ringtone player.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** systemSoundManager.SystemSoundManager#getRingtonePlayer

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |
| callback | AsyncCallback&lt;RingtonePlayer> | 是 | Callback used to return a ringtone player instance. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_DEFAULT;
let systemRingtonePlayer: systemSoundManager.RingtonePlayer | undefined = undefined;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getSystemRingtonePlayer(context, type, (err: BusinessError, value: systemSoundManager.RingtonePlayer) => {
  if (err) {
    console.error(`Failed to get system ringtone player. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate the value of the system ringtone player is obtained.`);
  systemRingtonePlayer = value;
});

```

## getSystemRingtonePlayer

```TypeScript
getSystemRingtonePlayer(context: Context, type: RingtoneType): Promise<RingtonePlayer>
```

Gets the ringtone player.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** systemSoundManager.SystemSoundManager#getRingtonePlayer

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RingtonePlayer> | Promise used to return a ringtone player instance. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_DEFAULT;
let systemRingtonePlayer: systemSoundManager.RingtonePlayer | undefined = undefined;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getSystemRingtonePlayer(context, type).then((value: systemSoundManager.RingtonePlayer) => {
  console.info('Succeeded in doing getSystemRingtonePlayer.');
  systemRingtonePlayer = value;
}).catch((err: BusinessError) => {
  console.error(`Failed to getSystemRingtonePlayer. Code: ${err.code}, message: ${err.message}`);
});

```

## getSystemRingtoneUri

```TypeScript
getSystemRingtoneUri(context: Context, type: RingtoneType, callback: AsyncCallback<string>): void
```

Gets the ringtone uri.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** systemSoundManager.SystemSoundManager#getRingtoneUri

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the ringtone uri maintained in system. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_DEFAULT;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getSystemRingtoneUri(context, type, (err: BusinessError, value: string) => {
  if (err) {
    console.error(`Failed to get system ringtone uri. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate the value of the system ringtone uri is obtained ${value}.`);
});

```

## getSystemRingtoneUri

```TypeScript
getSystemRingtoneUri(context: Context, type: RingtoneType): Promise<string>
```

Gets the ringtone uri.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** systemSoundManager.SystemSoundManager#getRingtoneUri

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Current application context. |
| type | RingtoneType | 是 | Ringtone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the ringtone uri maintained in system. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_DEFAULT;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getSystemRingtoneUri(context, type).then((value: string) => {
  console.info('Succeeded in doing getSystemRingtoneUri.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getSystemRingtoneUri. Code: ${err.code}, message: ${err.message}`);
});

```

## getSystemToneAttrList

```TypeScript
getSystemToneAttrList(context: BaseContext, type: SystemToneType): Promise<ToneAttrsArray>
```

Gets attribute list of alarm tones.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | SystemToneType | 是 | System tone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneAttrsArray> | Promise used to return attribute list of system tone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.SystemToneType = systemSoundManager.SystemToneType.SYSTEM_TONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getSystemToneAttrList(context, type).then((value: systemSoundManager.ToneAttrsArray) => {
  console.info('Succeeded in doing getSystemToneAttrList.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getSystemToneAttrList. Code: ${err.code}, message: ${err.message}`);
});

```

## getSystemTonePlayer

```TypeScript
getSystemTonePlayer(context: BaseContext, type: SystemToneType): Promise<SystemTonePlayer>
```

Gets the system tone player.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | SystemToneType | 是 | System tone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SystemTonePlayer> | Promise used to return the SystemTonePlayer. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.SystemToneType = systemSoundManager.SystemToneType.SYSTEM_TONE_TYPE_SIM_CARD_0;
let systemTonePlayer: systemSoundManager.SystemTonePlayer | undefined = undefined;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getSystemTonePlayer(context, type).then((value: systemSoundManager.SystemTonePlayer) => {
  console.info('Succeeded in doing getSystemTonePlayer.');
    systemTonePlayer = value;
}).catch((err: BusinessError) => {
  console.error(`Failed to getSystemTonePlayer. Code: ${err.code}, message: ${err.message}`);
});

```

## getSystemTonePlayer

```TypeScript
getSystemTonePlayer(context: BaseContext, type: SystemToneType): Promise<SystemTonePlayer | null>
```

Gets the system tone player.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | SystemToneType | 是 | System tone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SystemTonePlayer \| null> | Promise used to return the SystemTonePlayer, or  null when an error happens. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

## getSystemToneUri

```TypeScript
getSystemToneUri(context: BaseContext, type: SystemToneType): Promise<string>
```

Gets the system tone uri.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | SystemToneType | 是 | System tone type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the system tone maintained in system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.SystemToneType = systemSoundManager.SystemToneType.SYSTEM_TONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getSystemToneUri(context, type).then((value: string) => {
  console.info('Succeeded in doing getSystemToneUri.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getSystemToneUri. Code: ${err.code}, message: ${err.message}`);
});

```

## getToneHapticsList

```TypeScript
getToneHapticsList(context: BaseContext, isSynced: boolean): Promise<ToneHapticsAttrsArray>
```

Get haptics list.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| isSynced | boolean | 是 | The queried haptics is synchronized with tone or not. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneHapticsAttrsArray> | Promise used to return ToneHapticsAttrsArray. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |
| 20700003 | Unsupported operation. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getToneHapticsList(context, false).then((value: systemSoundManager.ToneHapticsAttrsArray) => {
  console.info('Succeeded in doing getToneHapticsList.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getToneHapticsList. Code: ${err.code}, message: ${err.message}`);
});

```

## getToneHapticsSettings

```TypeScript
getToneHapticsSettings(context: BaseContext, type: ToneHapticsType): Promise<ToneHapticsSettings>
```

Get haptics settings.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | ToneHapticsType | 是 | Tone haptics type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToneHapticsSettings> | Promise used to return results of this call. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |
| 20700003 | Unsupported operation. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.ToneHapticsType = systemSoundManager.ToneHapticsType.CALL_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.getToneHapticsSettings(context, type).then((value: systemSoundManager.ToneHapticsSettings) => {
  console.info('Succeeded in doing getToneHapticsSettings.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getToneHapticsSettings. Code: ${err.code}, message: ${err.message}`);
});

```

## openAlarmTone

```TypeScript
openAlarmTone(context: BaseContext, uri: string): Promise<int>
```

Open alarm tone file.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| uri | string | 是 | Uri of alarm tone to open. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return fd. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |
| 20700001 | Tone type mismatch, e.g. tone of uri is notification instead of alarm. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uri = 'file://data/test.wav'; // 需更改为目标铃声文件的uri。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.openAlarmTone(context, uri).then((value: number) => {
  console.info('Succeeded in doing openAlarmTone.');
}).catch((err: BusinessError) => {
  console.error(`Failed to openAlarmTone. Code: ${err.code}, message: ${err.message}`);
});

```

## openToneHaptics

```TypeScript
openToneHaptics(context: BaseContext, hapticsUri: string): Promise<int>
```

Open haptics.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| hapticsUri | string | 是 | Uri of haptics to open. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return fd. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. For example, the input URI is not one for haptics. |
| 5400103 | I/O error. |
| 20700003 | Unsupported operation. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let hapticsUri = '/data/storage/el2/base/haptics/synchronized/alarms/test.json'; // 需更改为目标统铃音的振动的uri。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.openToneHaptics(context, hapticsUri).then((value: number) => {
  console.info('Succeeded in doing openToneHaptics.');
}).catch((err: BusinessError) => {
  console.error(`Failed to openToneHaptics. Code: ${err.code}, message: ${err.message}`);
});

```

## openToneList

```TypeScript
openToneList(uriList: Array<string>): Promise<Array<[string, long, SystemSoundError]>>
```

Open tone list in batch.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uriList | Array&lt;string> | 是 | List of uri to open. The length must be no more than 1024. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[string, long, SystemSoundError]>> | Promise used to return results of this  operation. In each returned array number, the first item is uri of tone, the second item is fd, and the  third item is error code. If the uri open failed, the fd will be -1, and the reason is indicated by the  error code. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Calleris not a system application. |
| 20700007 | Parameter is invalid, e.g. the length of uriList is too long. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;
let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();

systemSoundManagerInstance.getCurrentRingtoneAttribute(type).then((toneAttrs) => {
  console.info('Succeeded in getting current ringtone attribute.');
  systemSoundManagerInstance.openToneList([toneAttrs.getUri()]).then((value) => {
    console.info('Succeeded in opening tone list.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to open tone list. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to get current ringtone attribute. Code: ${err.code}, message: ${err.message}`);
});

```

## removeCustomizedTone

```TypeScript
removeCustomizedTone(context: BaseContext, uri:string): Promise<void>
```

Remove customized tone in ringtone library.

**起始版本：** 12

**需要权限：** 

 ohos.permission.WRITE_RINGTONE

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| uri | string | 是 | Tone uri. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return removing result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation is not allowed, e.g. ringtone of this uri is not customized. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uri = 'file://data/test.wav'; // 需更改为目标铃声文件的uri。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.removeCustomizedTone(context, uri).then(() => {
  console.info('Succeeded in doing removeCustomizedTone.');
}).catch((err: BusinessError) => {
  console.error(`Failed to removeCustomizedTone. Code: ${err.code}, message: ${err.message}`);
});

```

## removeCustomizedToneList

```TypeScript
removeCustomizedToneList(uriList: Array<string>): Promise<Array<[string, SystemSoundError]>>
```

Remove customized tone list in batch.

**起始版本：** 20

**需要权限：** 

 ohos.permission.WRITE_RINGTONE

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uriList | Array&lt;string> | 是 | Uri list to remove. The length must be no more than 1024. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[string, SystemSoundError]>> | Promise used to return removing result array.  In each array memeber, the first item is the tone uri, and the second item is the error code. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 20700007 | Prameter is invalid, e.g. the length of uriList is too long. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;
let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();

systemSoundManagerInstance.getCurrentRingtoneAttribute(type).then((toneAttrs) => {
  console.info('Succeeded in getting current ringtone attribute.');
  systemSoundManagerInstance.removeCustomizedToneList([toneAttrs.getUri()]).then((value) => {
    console.info('Succeeded in using removeCustomizedToneList function.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to use removeCustomizedToneList function. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to get current ringtone attribute. Code: ${err.code}, message: ${err.message}`);
});

```

## setAlarmToneUri

```TypeScript
setAlarmToneUri(context: BaseContext, uri: string): Promise<void>
```

Sets uri of the current alarm tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| uri | string | 是 | Alarm tone uri. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return result of set alarm tone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |
| 20700001 | Tone type mismatch, e.g. tone of input uri is not an alarm tone. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uri = 'file://data/test.wav'; // 需更改为目标铃声文件的uri。

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.setAlarmToneUri(context, uri).then(() => {
  console.info('Succeeded in doing setAlarmToneUri.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setAlarmToneUri. Code: ${err.code}, message: ${err.message}`);
});

```

## setRingtoneUri

```TypeScript
setRingtoneUri(context: BaseContext, uri: string, type: RingtoneType): Promise<void>
```

Sets the ringtone uri to system.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| uri | string | 是 | Ringtone uri to set. |
| type | RingtoneType | 是 | Ringtone type to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the set uri result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uri = 'file://data/test.wav'; // 需更改为目标铃声文件的uri。
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.setRingtoneUri(context, uri, type).then(() => {
  console.info('Succeeded in doing setRingtoneUri.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setRingtoneUri. Code: ${err.code}, message: ${err.message}`);
});

```

## setSystemRingtoneUri

```TypeScript
setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType, callback: AsyncCallback<void>): void
```

Sets the ringtone uri to system.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** systemSoundManager.SystemSoundManager#setRingtoneUri

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Current application context. |
| uri | string | 是 | Ringtone uri to set. |
| type | RingtoneType | 是 | Ringtone type to set. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the set uri result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uri = 'file://data/test.wav'; // 需更改为目标铃声文件的uri。
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_DEFAULT;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.setSystemRingtoneUri(context, uri, type, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to set system ringtone uri. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate a successful setting of the system ringtone uri.`);
});

```

## setSystemRingtoneUri

```TypeScript
setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType): Promise<void>
```

Sets the ringtone uri to system.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** systemSoundManager.SystemSoundManager#setRingtoneUri

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Current application context. |
| uri | string | 是 | Ringtone uri to set. |
| type | RingtoneType | 是 | Ringtone type to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the set uri result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uri = 'file://data/test.wav'; // 需更改为目标铃声文件的uri。
let type: systemSoundManager.RingtoneType = systemSoundManager.RingtoneType.RINGTONE_TYPE_DEFAULT;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.setSystemRingtoneUri(context, uri, type).then(() => {
  console.info('Succeeded in doing setSystemRingtoneUri.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setSystemRingtoneUri. Code: ${err.code}, message: ${err.message}`);
});

```

## setSystemToneUri

```TypeScript
setSystemToneUri(context: BaseContext, uri: string, type: SystemToneType): Promise<void>
```

Sets the system tone uri to system.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| uri | string | 是 | Ringtone uri to set. |
| type | SystemToneType | 是 | System tone type to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result of set system tone uri. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400103 | I/O error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let uri = 'file://data/test.wav'; // 需更改为目标铃声文件的uri。
let type: systemSoundManager.SystemToneType = systemSoundManager.SystemToneType.SYSTEM_TONE_TYPE_SIM_CARD_0;

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.setSystemToneUri(context, uri, type).then(() => {
  console.info('Succeeded in doing setSystemToneUri.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setSystemToneUri. Code: ${err.code}, message: ${err.message}`);
});

```

## setToneHapticsSettings

```TypeScript
setToneHapticsSettings(context: BaseContext, type: ToneHapticsType, settings: ToneHapticsSettings): Promise<void>
```

Set haptics settings.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | BaseContext | 是 | Current application context. |
| type | ToneHapticsType | 是 | Tone haptics type. |
| settings | ToneHapticsSettings | 是 | Tone haptics settings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return results of this call. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. For example, the input URI is not valid. |
| 5400103 | I/O error. |
| 20700003 | Unsupported operation. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let type: systemSoundManager.ToneHapticsType = systemSoundManager.ToneHapticsType.CALL_SIM_CARD_0;
let toneHapticsSettings: systemSoundManager.ToneHapticsSettings = {
  mode: systemSoundManager.ToneHapticsMode.NON_SYNC,
  hapticsUri: '/data/storage/el2/base/haptics/synchronized/alarms/test.json', // 需更改为通过getToneHapticsList获取的Uri。
}

let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();
systemSoundManagerInstance.setToneHapticsSettings(context, type, toneHapticsSettings).then(() => {
  console.info('Succeeded in doing setToneHapticsSettings.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setToneHapticsSettings. Code: ${err.code}, message: ${err.message}`);
});

```

