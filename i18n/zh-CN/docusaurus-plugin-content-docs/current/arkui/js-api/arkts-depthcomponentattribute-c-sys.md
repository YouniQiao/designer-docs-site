# DepthComponentAttribute

Style the DepthComponent.

**继承实现关系：** DepthComponentAttribute继承自：CommonMethod<DepthComponentAttribute>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## camera

```TypeScript
camera(camera: DepthCameraParams)
```

Camera parameters for depth rendering.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | DepthCameraParams | 是 | Camera parameters. |

## depthMap

```TypeScript
depthMap(depthMap: ResourceStr | PixelMap, callback?: DepthMapCallback)
```

Depth map for depth calculation and rendering.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| depthMap | ResourceStr \| PixelMap | 是 | Depth map path or PixelMap. |
| callback | DepthMapCallback | 否 |  |

## light

```TypeScript
light(light: DepthLightParams)
```

Lighting parameters for depth rendering.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| light | DepthLightParams | 是 | Lighting parameters including direction, color and intensity. |

## onComplete

```TypeScript
onComplete(callback: DepthComponentCompleteCallback)
```

Triggered when the background resource is loaded successfully.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | DepthComponentCompleteCallback | 是 |  |

## onError

```TypeScript
onError(callback: DepthComponentErrorCallback)
```

Triggered when an error occurs during background resource loading.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | DepthComponentErrorCallback | 是 |  |

