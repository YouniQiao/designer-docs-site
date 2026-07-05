# pick

## pick

```TypeScript
function pick(context: Context, mediaTypes: Array<PickerMediaType>, pickerProfile: PickerProfile): Promise<PickerResult>
```

Starts the camera picker and enters the corresponding mode based on the media type. This API uses a promise to return the result. > **NOTE** > > When an application is running on a widescreen foldable device and the camera picker is launched while the device > is unfolded, switching the device from unfolded to folded will automatically move the camera picker to the > background.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. |
| mediaTypes | Array&lt;PickerMediaType> | 是 | Media type. |
| pickerProfile | PickerProfile | 是 | Profile of the camera picker. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PickerResult> | Promise used to return the processing result (  [PickerResult]cameraPicker.PickerResult) of the camera picker. |

**示例：**

```TypeScript
import { cameraPicker } from '@kit.CameraKit';
import { camera } from '@kit.CameraKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function demo(context: Context) {
  try {
    let pickerProfile: cameraPicker.PickerProfile = {
      cameraPosition: camera.CameraPosition.CAMERA_POSITION_BACK
    };
    let pickerResult: cameraPicker.PickerResult = await cameraPicker.pick(context,
      [cameraPicker.PickerMediaType.PHOTO, cameraPicker.PickerMediaType.VIDEO], pickerProfile);
    console.info("the pick pickerResult is:" + JSON.stringify(pickerResult));
  } catch (error) {
    let err = error as BusinessError;
    console.error(`the pick call failed. error code: ${err.code}`);
  }
}

```

