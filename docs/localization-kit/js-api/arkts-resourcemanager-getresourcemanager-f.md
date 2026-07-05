# getResourceManager

## getResourceManager

```TypeScript
export function getResourceManager(callback: AsyncCallback<ResourceManager>): void
```

获取当前应用的资源管理对象，使用callback异步回调。

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;ResourceManager> | Yes | 回调函数，返回资源管理ResourceManager对象。 |

## getResourceManager

```TypeScript
export function getResourceManager(bundleName: string, callback: AsyncCallback<ResourceManager>): void
```

获取指定应用的资源管理对象，使用callback异步回调。

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。 |
| callback | AsyncCallback&lt;ResourceManager> | Yes | 回调函数，返回应用包名对应的资源管理ResourceManager对象。 |

## getResourceManager

```TypeScript
export function getResourceManager(): Promise<ResourceManager>
```

获取当前应用的资源管理对象，使用Promise异步回调。

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResourceManager> | Promise对象，返回资源管理ResourceManager对象。 |

## getResourceManager

```TypeScript
export function getResourceManager(bundleName: string): Promise<ResourceManager>
```

获取指定应用的资源管理对象，使用Promise异步回调。

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResourceManager> | Promise对象，返回应用包名对应的资源管理ResourceManager对象。 |

