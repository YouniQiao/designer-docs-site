# RenderContext

渲染上下文，定义所有渲染资源的上下文。同一渲染上下文中的资源可在该上下文内创建的场景间共享。

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## getRenderResourceFactory

```TypeScript
getRenderResourceFactory() : RenderResourceFactory
```

获取资源工厂.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| RenderResourceFactory | -- RenderResourceFactory实例 |

## loadPlugin

```TypeScript
loadPlugin(name: string): Promise<boolean>
```

加载外部插件

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 插件名称 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - 返回表示插件加载是否成功的Promise |

## registerResourcePath

```TypeScript
registerResourcePath(protocol: string, uri: string): boolean
```

注册资源路径

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| protocol | string | Yes | uri的协议 |
| uri | string | Yes | 要注册的路径 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - 注册成功返回true，false表示协议已被注册 |

