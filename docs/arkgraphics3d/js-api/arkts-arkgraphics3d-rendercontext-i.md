# RenderContext

Render context defines the context for all rendering resources. Resources within the same render context
may be shared between scenes created within the same render context.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## getRenderResourceFactory

```TypeScript
getRenderResourceFactory() : RenderResourceFactory
```

Get resource factory.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| RenderResourceFactory | -- RenderResourceFactory instance |

## loadPlugin

```TypeScript
loadPlugin(name: string): Promise<boolean>
```

Load external plugin

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the plugin |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise a boolean to show if the plugin load is successful |

## registerResourcePath

```TypeScript
registerResourcePath(protocol: string, uri: string): boolean
```

Register resource path

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| protocol | string | Yes | Protocol of the uri |
| uri | string | Yes | Path to register |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - True if registration success, false indicates the protocol has already been registered |

