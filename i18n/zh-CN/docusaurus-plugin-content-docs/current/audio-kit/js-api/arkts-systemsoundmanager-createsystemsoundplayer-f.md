# createSystemSoundPlayer

## createSystemSoundPlayer

```TypeScript
function createSystemSoundPlayer(): Promise<SystemSoundPlayer | null>
```

Creates a SystemSoundPlayer instance. This function uses a promise to return the result. This player can be used to play some system sounds for media or camera actions.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SystemSoundPlayer \| null> | Promise used to return the result.  If the operation is successful, a SystemSoundPlayer instance is returned.  Otherwise, null is returned. The instance is used for loading and playback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400101 | No memory. Return by promise. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let systemSoundPlayer: systemSoundManager.SystemSoundPlayer | null = null;

systemSoundManager.createSystemSoundPlayer().then((systemSoundPlayerInstance) => {
  console.info('Succeeded in creating the system sound player.');
  systemSoundPlayer = systemSoundPlayerInstance;
}).catch((err: BusinessError) => {
  console.error(`Failed to create the system sound player. Code: ${err.code}, message: ${err.message}`);
});

```

