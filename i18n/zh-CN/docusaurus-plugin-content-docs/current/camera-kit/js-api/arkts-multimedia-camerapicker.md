# @ohos.multimedia.cameraPicker

The module provides APIs for an application to use the system camera to take photos or record videos, depending on the media type specified by the application. The application must call these APIs within a UIAbility. Otherwise, the camera picker cannot be started.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { cameraPicker } from '@kit.CameraKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [pick](arkts-camerapicker-pick-f.md#pick-1) | Starts the camera picker and enters the corresponding mode based on the media type. This API uses a promise to return the result. > **NOTE** > > When an application is running on a widescreen foldable device and the camera picker is launched while the device > is unfolded, switching the device from unfolded to folded will automatically move the camera picker to the > background. |

### 类

| 名称 | 描述 |
| --- | --- |
| [PickerProfile](arkts-camerapicker-pickerprofile-c.md) | Defines the configuration information about the camera picker. |
| [PickerResult](arkts-camerapicker-pickerresult-c.md) | Defines the processing result of the camera picker. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [PickerMediaType](arkts-camerapicker-pickermediatype-e.md) | Enumerates the media types displayed in the camera picker. |

