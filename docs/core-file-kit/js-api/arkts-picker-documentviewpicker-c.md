# DocumentViewPicker

文件选择器对象，用来支撑选择和保存各种格式文档。在使用前，需要先创建DocumentViewPicker实例。

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

创建DocumentViewPicker对象，不推荐使用该构造函数，会出现概率性失败问题。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Example**

```TypeScript
let documentPicker = new picker.DocumentViewPicker(); // Construction without parameter is not recommended. There is a possibility that the DocumentViewPicker instance fails to start.

```

## constructor

```TypeScript
constructor(context: Context)
```

创建DocumentViewPicker对象，推荐使用该构造函数，获取context参考 [getHostContext](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#gethostcontext12)。

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
            let documentPicker = new picker.DocumentViewPicker(context);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

## constructor

```TypeScript
constructor(context: Context, window: window.Window)
```

应用自行创建窗口中，可用通过该构造函数创建DocumentViewPicker对象。一般场景推荐使用constructor(context: Context)方法 创建DocumentViewPicker对象。 > **说明：** > > 从API version 19开始，2in1和Tablet设备支持该方法。

**Since:** 13

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文（仅支持UIAbilityContext）。Stage模型的应用Context定义见[Context]./app/context。 |
| window | window.Window | Yes | 应用创建的窗口实例。 |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { picker } from '@kit.CoreFileKit';
import { window } from '@kit.ArkUI';
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
            let windowClass: window.Window | undefined = undefined;
            windowClass = window.findWindow('test'); // Ensure that the window has been created. Here, 'test' is the value of the name parameter when the window is created.
            let documentPicker = new picker.DocumentViewPicker(context, windowClass);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

## getSelectedIndex

```TypeScript
getSelectedIndex(): int
```

获取保存成功后的文件后缀类型的下标。 该方法只在调用 [save()]picker.DocumentViewPicker.save(option?: DocumentSaveOptions)时使用生效， 其他场景下不适用。该方法需要配置参数[DocumentSaveOptions.fileSuffixChoices]picker.DocumentSaveOptions。 该方法返回的是所选后缀类型的下标(number)。所选的后缀类型是开发者所传的参数 [DocumentSaveOptions.fileSuffixChoices]picker.DocumentSaveOptions里的某个后缀类型。 如果没有传参，并且调用了getSelectedIndex()方法，返回值为-1。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService.FolderSelection

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回所选后缀类型在[DocumentSaveOptions.fileSuffixChoices]picker.DocumentSaveOptions  里的下标(number)。默认返回-1。 |

## save

```TypeScript
save(option?: DocumentSaveOptions): Promise<Array<string>>
```

通过保存模式拉起documentPicker界面，用户可以保存一个或多个文件。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | DocumentSaveOptions | No | documentPicker保存选项。若无此参数，  则拉起documentPicker界面后需用户自行输入保存的文件名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象。返回documentPicker保存后的结果集。  注意：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example10(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let documentSaveOptions = new picker.DocumentSaveOptions();
    documentSaveOptions.newFileNames = ['DocumentViewPicker01.txt'];
    let documentPicker = new picker.DocumentViewPicker(context);
    documentPicker.save(documentSaveOptions).then((documentSaveResult: Array<string>) => {
      console.info('DocumentViewPicker.save successfully, documentSaveResult uri: ' + JSON.stringify(documentSaveResult));
    }).catch((err: BusinessError) => {
      console.error(`DocumentViewPicker.save failed with err, code is: ${err.code}, message is: ${err.message}`);
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`DocumentViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## save

```TypeScript
save(option: DocumentSaveOptions, callback: AsyncCallback<Array<string>>): void
```

通过保存模式拉起documentPicker界面，用户可以保存一个或多个文件。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | DocumentSaveOptions | Yes | documentPicker保存选项。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回documentPicker保存后的结果集。  注意：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example11(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let documentSaveOptions = new picker.DocumentSaveOptions();
    documentSaveOptions.newFileNames = ['DocumentViewPicker02.txt'];
    let documentPicker = new picker.DocumentViewPicker(context);
    documentPicker.save(documentSaveOptions, (err: BusinessError, documentSaveResult: Array<string>) => {
      if (err) {
        console.error(`DocumentViewPicker.save failed with err, code is: ${err.code}, message is: ${err.message}`);
        return;
      }
      console.info('DocumentViewPicker.save successfully, documentSaveResult uri: ' + JSON.stringify(documentSaveResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`DocumentViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## save

```TypeScript
save(callback: AsyncCallback<Array<string>>): void
```

通过保存模式拉起documentPicker界面，用户可以保存一个或多个文件。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回documentPicker保存后的结果集。  注意：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example12(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let documentPicker = new picker.DocumentViewPicker(context);
    documentPicker.save((err: BusinessError, documentSaveResult: Array<string>) => {
      if (err) {
        console.error(`DocumentViewPicker.save failed with err, code is: ${err.code}, message is: ${err.message}`);
        return;
      }
      console.info('DocumentViewPicker.save successfully, documentSaveResult uri: ' + JSON.stringify(documentSaveResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`DocumentViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## select

```TypeScript
select(option?: DocumentSelectOptions): Promise<Array<string>>
```

通过选择模式拉起documentPicker界面，用户可以选择一个或多个文件。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | DocumentSelectOptions | No | documentPicker选择选项。若无此参数，则默认拉起documentPicker主界面。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象。返回documentPicker选择后的结果集。  注意：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example07(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let documentSelectOptions = new picker.DocumentSelectOptions();
    let documentPicker = new picker.DocumentViewPicker(context);
    documentPicker.select(documentSelectOptions).then((documentSelectResult: Array<string>) => {
      console.info('DocumentViewPicker.select successfully, documentSelectResult uri: ' + JSON.stringify(documentSelectResult));
    }).catch((err: BusinessError) => {
      console.error(`DocumentViewPicker.select failed with err, code is: ${err.code}, message is: ${err.message}`);
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`DocumentViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## select

```TypeScript
select(option: DocumentSelectOptions, callback: AsyncCallback<Array<string>>): void
```

通过选择模式拉起documentPicker界面，用户可以选择一个或多个文件。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | DocumentSelectOptions | Yes | documentPicker选择选项。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回documentPicker选择后的结果集。  注意：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example08(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let documentSelectOptions = new picker.DocumentSelectOptions();
    let documentPicker = new picker.DocumentViewPicker(context);
    documentPicker.select(documentSelectOptions, (err: BusinessError, documentSelectResult: Array<string>) => {
      if (err) {
        console.error(`DocumentViewPicker.select failed with err, code is: ${err.code}, message is: ${err.message}`);
        return;
      }
      console.info('DocumentViewPicker.select successfully, documentSelectResult uri: ' + JSON.stringify(documentSelectResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`DocumentViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

## select

```TypeScript
select(callback: AsyncCallback<Array<string>>): void
```

通过选择模式拉起documentPicker界面，用户可以选择一个或多个文件。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回documentPicker选择后的结果集。  注意：此接口返回的URI数组的具体使用方式参见用户文件URI介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example09(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let documentPicker = new picker.DocumentViewPicker(context);
    documentPicker.select((err: BusinessError, documentSelectResult: Array<string>) => {
      if (err) {
        console.error(`DocumentViewPicker.select failed with err, code is: ${err.code}, message is: ${err.message}`);
        return;
      }
      console.info('DocumentViewPicker.select successfully, documentSelectResult uri: ' + JSON.stringify(documentSelectResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`DocumentViewPicker failed with err, code is: ${err.code}, message is: ${err.message}`);
  }
}

```

