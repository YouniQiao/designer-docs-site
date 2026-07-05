# off

## off('readerMode')

```TypeScript
function off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>): void
```

Disable foreground reader mode settings explicitly.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'readerMode' | 是 | The callback type to be unregistered. |
| elementName | ElementName | 是 | The element name of application, must include the bundleName and abilityName. |
| callback | AsyncCallback&lt;TagInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100203 | The off() API can be called only when the on() has been called. |

## off('readerModeWithInterval')

```TypeScript
function off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>): void
```

Disable foreground reader mode settings explicitly.

**起始版本：** 23

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'readerModeWithInterval' | 是 | The callback type to be unregistered. |
| elementName | ElementName | 是 | The element name of application, must include the bundleName and abilityName. |
| callback | Callback&lt;TagInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100203 | The off() API can be called only when the on() has been called. |

**示例：**

```TypeScript
import { tag } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, UIAbility, Want, bundleManager } from '@kit.AbilityKit';

let discTech : number[] = [tag.NFC_A, tag.NFC_B]; // 用前台ability时所需要的技术代替
let elementName : bundleManager.ElementName;
let interval : number = 200;

function readerModeCb(tagInfo: tag.TagInfo) {
    if (tagInfo == null) {
      console.error('readerModeWithInterval tagInfo is invalid');
      return;
    }
    console.info("readerModeWithInterval: tag found tagInfo = ", JSON.stringify(tagInfo));
  // taginfo的其他操作
}

export default class MainAbility extends UIAbility {
    OnCreate(want : Want, launchParam : AbilityConstant.LaunchParam) {
        console.info("OnCreate");
        elementName = {
            bundleName: want.bundleName as string,
            abilityName: want.abilityName as string,
            moduleName: want.moduleName as string
        }
    }

    onForeground() {
        console.info("on start");
        try {
            tag.on('readerModeWithInterval', elementName, discTech, readerModeCb, interval);
        } catch (e) {
            console.error("tag.on error: " + (e as BusinessError).message);
        }
    }

    onBackground() {
        console.info("onBackground");
        try {
            tag.off('readerModeWithInterval', elementName, readerModeCb);
        } catch (e) {
            console.error("tag.off error: " + (e as BusinessError).message);
        }
    }

    onWindowStageDestroy() {
        console.info("onWindowStageDestroy");
        try {
            tag.off('readerModeWithInterval', elementName, readerModeCb);
        } catch (e) {
            console.error("tag.off error: " + (e as BusinessError).message);
        }
    }

  // ability生命周期内的其他功能
}

```

