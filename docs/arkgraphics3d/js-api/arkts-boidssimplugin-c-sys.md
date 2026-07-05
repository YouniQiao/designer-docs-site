# BoidsSimPlugin

群组模拟插件. 提供用于管理群组模拟组件的静态方法.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

## getDefaultBoidsSimWorld

```TypeScript
static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null
```

获取指定场景的默认群组模拟世界.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scene | Scene | Yes | 要获取群组模拟世界的场景 |

**Return value:**

| Type | Description |
| --- | --- |
| BoidsSimWorld | 群组模拟世界，如果插件未加载则返回null |

