# sendImage

## sendImage

```TypeScript
function sendImage(sessionId: int, image: image.PixelMap, quality?: int): Promise<void>
```

Send image data.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | int | 是 | Ability connection Session id. |
| image | image.PixelMap | 是 | image data to be sent. |
| quality | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**示例：**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { image } from '@kit.ImageKit';
import { fileIo } from '@kit.CoreFileKit';

try {
  let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
  photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;
  photoSelectOptions.maxSelectNumber = 5;
  let photoPicker = new photoAccessHelper.PhotoViewPicker();
  photoPicker.select(photoSelectOptions).then((photoSelectResult) => {
    if (!photoSelectResult) {
      hilog.error(0x0000, 'testTag', 'photoSelectResult = null');
    return;
    }

    let file = fileIo.openSync(photoSelectResult.photoUris[0], fileIo.OpenMode.READ_ONLY);
    hilog.info(0x0000, 'testTag', 'file.fd:' + file.fd);

    let sessionId = 100;
    let imageSourceApi: image.ImageSource = image.createImageSource(file.fd);
    if (imageSourceApi) {
      imageSourceApi.createPixelMap().then((pixelMap) => {
        abilityConnectionManager.sendImage(sessionId, pixelMap)
      });
    } else {
      hilog.info(0x0000, 'testTag', 'imageSourceApi is undefined');
    }
  })
} catch (error) {
  hilog.error(0x0000, 'testTag', 'photoPicker failed with error: ' + JSON.stringify(error));
}

```

