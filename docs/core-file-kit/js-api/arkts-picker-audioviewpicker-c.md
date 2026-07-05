# AudioViewPicker

音频选择器对象，用来支撑选择和保存音频类文件等用户场景。在使用前，需要先创建AudioViewPicker实例。

**Since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

## Modules to Import

```TypeScript
import { picker } from '@kit.CoreFileKit';
```

## constructor

```TypeScript
constructor()
```

创建AudioViewPicker对象，不推荐使用该构造函数，会出现概率性失败问题。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Example**

```TypeScript
let audioPicker = new picker.AudioViewPicker(); // Construction without parameter is not recommended. There is a possibility that the AudioViewPicker instance fails to start.

```

## constructor

```TypeScript
constructor(context: Context)
```

创建AudioViewPicker对象，推荐使用该构造函数，获取context参考 [getHostContext](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#gethostcontext12)。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文（仅支持UIAbilityContext）。Stage模型的应用Context定义见[Context]./app/context。 |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
@Entry
@Component
struct Index {
  @State message: string = 'hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(()=>{
            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // Ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
            let audioPicker = new picker.AudioViewPicker(context);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

## save

```TypeScript
save(option?: AudioSaveOptions): Promise<Array<string>>
```

通过保存模式拉起audioPicker界面（目前拉起的是documentPicker，audioPicker在规划中）， 用户可以保存一个或多个音频文件。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | AudioSaveOptions | No | audioPicker保存音频文件选项。若无此参数，  则拉起audioPicker界面后需用户自行输入保存的文件名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象。返回audioPicker保存音频文件后的结果集。  注意： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example16(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let audioSaveOptions = new picker.AudioSaveOptions();
    audioSaveOptions.newFileNames = ['AudioViewPicker01.mp3'];
    let audioPicker = new picker.AudioViewPicker(context);
    audioPicker.save(audioSaveOptions).then((audioSaveResult: Array<string>) => {
      console.info('AudioViewPicker.save successfully, audioSaveResult uri: ' + JSON.stringify(audioSaveResult))
    }).catch((err: BusinessError) => {
      console.error(`AudioViewPicker.save failed with err, code is: ${err.code}, message is: ${err.message}`);
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`AudioViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## save

```TypeScript
save(option: AudioSaveOptions, callback: AsyncCallback<Array<string>>): void
```

通过保存模式拉起audioPicker界面（目前拉起的是documentPicker，audioPicker在规划中）， 用户可以保存一个或多个音频文件。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | AudioSaveOptions | Yes | audioPicker保存音频文件选项。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回audioPicker保存音频文件后的结果集。  注意： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example17(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let audioSaveOptions = new picker.AudioSaveOptions();
    audioSaveOptions.newFileNames = ['AudioViewPicker02.mp3'];
    let audioPicker = new picker.AudioViewPicker(context);
    audioPicker.save(audioSaveOptions, (err: BusinessError, audioSaveResult: Array<string>) => {
      if (err) {
        console.error(`AudioViewPicker.save failed with err, code is: ${err.code}, message is: ${err.message}`);
        return;
      }
      console.info('AudioViewPicker.save successfully, audioSaveResult uri: ' + JSON.stringify(audioSaveResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`AudioViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## save

```TypeScript
save(callback: AsyncCallback<Array<string>>): void
```

通过保存模式拉起audioPicker界面（目前拉起的是documentPicker，audioPicker在规划中）， 用户可以保存一个或多个音频文件。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回audioPicker保存音频文件后的结果集。  注意： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example18(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let audioPicker = new picker.AudioViewPicker(context);
    audioPicker.save((err: BusinessError, audioSaveResult: Array<string>) => {
      if (err) {
        console.error(`AudioViewPicker.save failed with err, code is: ${err.code}, message is: ${err.message}`);
        return;
      }
      console.info('AudioViewPicker.save successfully, audioSaveResult uri: ' + JSON.stringify(audioSaveResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
        console.error(`AudioViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## select

```TypeScript
select(option?: AudioSelectOptions): Promise<Array<string>>
```

通过选择模式拉起audioPicker界面，用户可以选择一个或多个音频文件。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | AudioSelectOptions | No | audioPicker音频选择选项。若无此参数，则默认拉起audioPicker主界面。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象。返回audioPicker选择音频后的结果集。  注意： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [媒体类uri的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri介绍)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example13(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let audioSelectOptions = new picker.AudioSelectOptions();
    let audioPicker = new picker.AudioViewPicker(context);
    audioPicker.select(audioSelectOptions).then((audioSelectResult: Array<string>) => {
      console.info('AudioViewPicker.select successfully, audioSelectResult uri: ' + JSON.stringify(audioSelectResult));
    }).catch((err: BusinessError) => {
      console.error(`AudioViewPicker.select failed with err, code is: ${err.code}, message is: ${err.message}`);
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`AudioViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## select

```TypeScript
select(option: AudioSelectOptions, callback: AsyncCallback<Array<string>>): void
```

通过选择模式拉起audioPicker界面，用户可以选择一个或多个音频文件。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | AudioSelectOptions | Yes | audioPicker音频选择选项。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回audioPicker选择音频后的结果集。  注意： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [媒体类uri的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri介绍)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example14(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let audioSelectOptions = new picker.AudioSelectOptions();
    let audioPicker = new picker.AudioViewPicker(context);
    audioPicker.select(audioSelectOptions, (err: BusinessError, audioSelectResult: Array<string>) => {
      if (err) {
        console.error(`AudioViewPicker.select failed with err, code is: ${err.code}, message is: ${err.message}`);
        return;
      }
      console.info('AudioViewPicker.select successfully, audioSelectResult uri: ' + JSON.stringify(audioSelectResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`AudioViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## select

```TypeScript
select(callback: AsyncCallback<Array<string>>): void
```

通过选择模式拉起audioPicker界面，用户可以选择一个或多个音频文件。使用callback异步回调。 **系统能力**：SystemCapability.FileManagement.UserFileService

**Since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回audioPicker选择音频后的结果集。  注意： 此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [媒体类uri的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri介绍)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example15(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let audioPicker = new picker.AudioViewPicker(context);
    audioPicker.select((err: BusinessError, audioSelectResult: Array<string>) => {
      if (err) {
        console.error(`AudioViewPicker.select failed with err, code is: ${err.code}, message is: ${err.message}`);
        return;
      }
      console.info('AudioViewPicker.select successfully, audioSelectResult uri: ' + JSON.stringify(audioSelectResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`AudioViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

