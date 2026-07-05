# SceneDetectionQuery

Provides the scene detection and query capabilities.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isSceneFeatureSupported

```TypeScript
isSceneFeatureSupported(type: SceneFeatureType): boolean
```

Checks whether a scene feature is supported.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SceneFeatureType | 是 | Scene feature. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the scene feature. true if supported, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application, only throw in session usage. |
| 7400101 | Parameter missing or parameter type incorrect. |

**示例：**

```TypeScript
function isSceneFeatureSupported(photoSessionForSys: camera.PhotoSessionForSys, featureType: camera.SceneFeatureType): boolean {
  let isSupported: boolean = photoSessionForSys.isSceneFeatureSupported(featureType);
  return isSupported;
}

```

