# Camera

定义相机.

**Inheritance:** Cameraextends: Node.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## getProjectionMatrix

```TypeScript
getProjectionMatrix(): Mat4x4
```

获取相机的投影矩阵.

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| Mat4x4 | -- 相机的投影矩阵 |

## getViewMatrix

```TypeScript
getViewMatrix(): Mat4x4
```

获取相机的视图矩阵.

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| Mat4x4 | -- 相机的视图矩阵 |

## raycast

```TypeScript
raycast(viewPosition: Vec2, params: RaycastParameters): Promise<RaycastResult[]>
```

向屏幕上的位置投射射线并列出射线击中的对象.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| viewPosition | Vec2 | Yes | 在归一化设备坐标中投射的位置. |
| params | RaycastParameters | Yes | 执行射线检测使用的选项. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RaycastResult[]> | - 返回命中结果数组的Promise，按从近到远排序. 数组可能为空. |

## effects

```TypeScript
readonly effects: Container<Effect>
```

应用于相机输出的特效.

**Type:** Container<Effect>

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## clearColor

```TypeScript
clearColor: Color | null
```

背景清除颜色（环境背景会覆盖此颜色, 需要BACKGROUND_NONE才能实际生效).

**Type:** Color | null

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## farPlane

```TypeScript
farPlane: double
```

相机远平面, 单位为世界坐标系下的场景单位（例如cm、m、km等）.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## renderingPipeline

```TypeScript
renderingPipeline?: RenderingPipelineType
```

控制渲染管线. 请注意，如果选择了FORWARD_LIGHTWEIGHT管线，某些功能将不可用.

**Type:** RenderingPipelineType

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## msaa

```TypeScript
msaa?: boolean
```

控制是否启用MSAA.

**Type:** boolean

**Since:** 22

**System capability:** SystemCapability.ArkUi.Graphics3D

## nearPlane

```TypeScript
nearPlane: double
```

相机近平面, 单位为世界坐标系下的场景单位（例如cm、m、km等）.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## fov

```TypeScript
fov: double
```

相机视场, 单位为弧度.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## postProcess

```TypeScript
postProcess: PostProcessSettings | null
```

相机的后处理设置.

**Type:** PostProcessSettings | null

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

相机是否启用.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

