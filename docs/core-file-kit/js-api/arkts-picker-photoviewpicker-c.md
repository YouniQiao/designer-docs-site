# PhotoViewPicker

图库选择器对象，用来支撑选择图片/视频和保存图片/视频等用户场景。选择文件推荐使用 [PhotoAccessHelper的PhotoViewPicker](../../apis-media-library-kit/arkts-apis/arkts-file-photoaccesshelper.md#photoAccessHelper)。 在使用前，需要先创建PhotoViewPicker实例。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker

**System capability:** SystemCapability.FileManagement.UserFileService

## Modules to Import

```TypeScript
import { picker } from '@kit.CoreFileKit';
```

## constructor

```TypeScript
constructor()
```

**Since:** 12

**Deprecated since:** 18

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Example**

```TypeScript
let photoPicker = new picker.PhotoViewPicker(); // Construction without parameter is not recommended. There is a possibility that the PhotoViewPicker instance fails to start.

```

## constructor

```TypeScript
constructor(context: Context)
```

**Since:** 12

**Deprecated since:** 18

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文（仅支持UIAbilityContext）。  Stage模型的应用Context定义见[Context]./app/context。 |

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
            let photoPicker = new picker.PhotoViewPicker(context);
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
save(option?: PhotoSaveOptions): Promise<Array<string>>
```

通过保存模式拉起photoPicker界面，用户可以保存一个或多个图片/视频。接口采用Promise异步返回形式， 传入可选参数PhotoSaveOptions对象，返回保存文件的uri数组。

**Since:** 9

**Deprecated since:** 12

**Substitute:** SaveButton

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | PhotoSaveOptions | No | photoPicker保存图片或视频文件选项。若无此参数，  则拉起photoPicker界面后需用户自行输入保存的文件名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象。返回photoPicker保存图片或视频文件后的结果集。  注意：此接口会将文件保存在文件管理器，而不是图库。返回的uri数组的具体使用方式参见用户文件uri介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example04(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let photoSaveOptions = new picker.PhotoSaveOptions();
    photoSaveOptions.newFileNames = ['PhotoViewPicker01.jpg', 'PhotoViewPicker01.mp4'];
    let photoPicker = new picker.PhotoViewPicker(context);
    photoPicker.save(photoSaveOptions).then((photoSaveResult: Array<string>) => {
      console.info('PhotoViewPicker.save successfully, photoSaveResult uri: ' + JSON.stringify(photoSaveResult));
    }).catch((err: BusinessError) => {
      console.error('PhotoViewPicker.save failed with err: ' + JSON.stringify(err));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
      console.error('PhotoViewPicker failed with err: ' + JSON.stringify(err));
  }
}

```

## save

```TypeScript
save(option: PhotoSaveOptions, callback: AsyncCallback<Array<string>>): void
```

通过保存模式拉起photoPicker界面，用户可以保存一个或多个图片/视频。接口采用callback异步返回形式， 传入参数PhotoSaveOptions对象，返回保存文件的uri数组。

**Since:** 9

**Deprecated since:** 12

**Substitute:** SaveButton

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | PhotoSaveOptions | Yes | photoPicker保存图片或视频文件选项。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回photoPicker保存图片或视频文件后的结果集。  注意：此接口会将文件保存在文件管理器，而不是图库。返回的uri数组的具体使用方式参见用户文件uri介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example05(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let photoSaveOptions = new picker.PhotoSaveOptions();
    photoSaveOptions.newFileNames = ['PhotoViewPicker02.jpg','PhotoViewPicker02.mp4'];
    let photoPicker = new picker.PhotoViewPicker(context);
    photoPicker.save(photoSaveOptions, (err: BusinessError, photoSaveResult: Array<string>) => {
      if (err) {
        console.error('PhotoViewPicker.save failed with err: ' + JSON.stringify(err));
        return;
      }
      console.info('PhotoViewPicker.save successfully, photoSaveResult uri: ' + JSON.stringify(photoSaveResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error('PhotoViewPicker failed with err: ' + JSON.stringify(err));
  }
}

```

## save

```TypeScript
save(callback: AsyncCallback<Array<string>>): void
```

通过保存模式拉起photoPicker界面，用户可以保存一个或多个图片/视频。接口采用callback异步返回形式，返回保存文件的uri数组。

**Since:** 9

**Deprecated since:** 12

**Substitute:** SaveButton

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | callback 返回photoPicker保存图片或视频文件后的结果集。  注意：此接口会将文件保存在文件管理器，而不是图库。返回的uri数组的具体使用方式参见用户文件uri介绍中的  [文档类uri的使用方式](docroot://file-management/user-file-uri-intro.md#文档类uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example06(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let photoPicker = new picker.PhotoViewPicker(context);
    photoPicker.save((err: BusinessError, photoSaveResult: Array<string>) => {
      if (err) {
        console.error('PhotoViewPicker.save failed with err: ' + JSON.stringify(err));
        return;
      }
      console.info('PhotoViewPicker.save successfully, photoSaveResult uri: ' + JSON.stringify(photoSaveResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error('PhotoViewPicker failed with err: ' + JSON.stringify(err));
  }
}

```

## select

```TypeScript
select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>
```

通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。接口采用Promise异步返回形式， 传入可选参数PhotoSelectOptions对象，返回PhotoSelectResult对象。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(option?:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | PhotoSelectOptions | No | photoPicker选择选项。若无此参数，则默认选择媒体文件类型为图片和视频类型。  选择媒体文件数量的默认最大值为50。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoSelectResult> | Promise对象。返回photoPicker选择后的结果集。  注意：此接口返回的PhotoSelectResult对象中的photoUris只能通过临时授权的方式调用接口  [photoAccessHelper.getAssets]@ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback>)  去使用，具体使用方式参见用户文件URI介绍中的[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example01(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let photoSelectOptions = new picker.PhotoSelectOptions();
    photoSelectOptions.MIMEType = picker.PhotoViewMIMETypes.IMAGE_TYPE;
    photoSelectOptions.maxSelectNumber = 5;
    let photoPicker = new picker.PhotoViewPicker(context);
    photoPicker.select(photoSelectOptions).then((photoSelectResult: picker.PhotoSelectResult) => {
      console.info('PhotoViewPicker.select successfully, photoSelectResult uri: ' + JSON.stringify(photoSelectResult));
    }).catch((err: BusinessError) => {
      console.error('PhotoViewPicker.select failed with err: ' + JSON.stringify(err));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error('PhotoViewPicker failed with err: ' + JSON.stringify(err));
  }
}

```

## select

```TypeScript
select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void
```

通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。接口采用callback异步返回形式， 传入参数PhotoSelectOptions对象，返回PhotoSelectResult对象。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(option:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | PhotoSelectOptions | Yes | photoPicker选择选项。 |
| callback | AsyncCallback&lt;PhotoSelectResult> | Yes | callback返回photoPicker选择后的结果集。  注意：此接口返回的PhotoSelectResult对象中的photoUris只能通过临时授权的方式调用接口  [photoAccessHelper.getAssets]@ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback>)  去使用，具体使用方式参见用户文件URI介绍中的[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example02(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let photoSelectOptions = new picker.PhotoSelectOptions();
    photoSelectOptions.MIMEType = picker.PhotoViewMIMETypes.IMAGE_TYPE;
    photoSelectOptions.maxSelectNumber = 5;
    let photoPicker = new picker.PhotoViewPicker(context);
    photoPicker.select(photoSelectOptions, (err: BusinessError, photoSelectResult: picker.PhotoSelectResult) => {
      if (err) {
        console.error('PhotoViewPicker.select failed with err: ' + JSON.stringify(err));
        return;
      }
      console.info('PhotoViewPicker.select successfully, photoSelectResult uri: ' + JSON.stringify(photoSelectResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error('PhotoViewPicker failed with err: ' + JSON.stringify(err));
  }
}

```

## select

```TypeScript
select(callback: AsyncCallback<PhotoSelectResult>): void
```

通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。接口采用callback异步返回形式， 返回PhotoSelectResult对象。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(callback:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;PhotoSelectResult> | Yes | callback返回photoPicker选择后的结果集。  注意：此接口返回的PhotoSelectResult对象中的photoUris只能通过临时授权的方式调用接口  [photoAccessHelper.getAssets]@ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback>)  去使用，具体使用方式参见用户文件URI介绍中的[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import  { picker } from '@kit.CoreFileKit';
async function example03(context: common.UIAbilityContext) { // Ensure that context is converted from UIAbilityContext.
  try {
    let photoPicker = new picker.PhotoViewPicker(context);
    photoPicker.select((err: BusinessError, photoSelectResult: picker.PhotoSelectResult) => {
      if (err) {
        console.error('PhotoViewPicker.select failed with err: ' + JSON.stringify(err));
        return;
      }
      console.info('PhotoViewPicker.select successfully, photoSelectResult uri: ' + JSON.stringify(photoSelectResult));
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error('PhotoViewPicker failed with err: ' + JSON.stringify(err));
  }
}

```

