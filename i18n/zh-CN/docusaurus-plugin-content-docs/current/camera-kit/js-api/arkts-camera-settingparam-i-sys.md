# SettingParam

Defines the effect parameters used to preheat an image.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## skinSmoothLevel

```TypeScript
skinSmoothLevel: int
```

Skin smoothing level, which is obtained through [Beauty.getSupportedBeautyRange]camera.BeautyQuery.getSupportedBeautyRange. For example, the value **1** indicates level-1 smoothing.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## faceSlender

```TypeScript
faceSlender: int
```

Face slimming level, which is obtained through [Beauty.getSupportedBeautyRange]camera.BeautyQuery.getSupportedBeautyRange. For example, the value **1** indicates level-1 slimming.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## skinTone

```TypeScript
skinTone: int
```

Skin tone perfection level, which is obtained through [Beauty.getSupportedBeautyRange]camera.BeautyQuery.getSupportedBeautyRange. For example, the value **0xBF986C** indicates a specific color.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

