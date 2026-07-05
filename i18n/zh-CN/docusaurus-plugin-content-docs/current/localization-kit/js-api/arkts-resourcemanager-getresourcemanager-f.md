# getResourceManager

## getResourceManager

```TypeScript
export function getResourceManager(callback: AsyncCallback<ResourceManager>): void
```

获取当前应用的资源管理对象，使用callback异步回调。

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Global.ResourceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;ResourceManager> | 是 | 回调函数，返回资源管理ResourceManager对象。 |

## getResourceManager

```TypeScript
export function getResourceManager(bundleName: string, callback: AsyncCallback<ResourceManager>): void
```

获取指定应用的资源管理对象，使用callback异步回调。

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Global.ResourceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用包名。 |
| callback | AsyncCallback&lt;ResourceManager> | 是 | 回调函数，返回应用包名对应的资源管理ResourceManager对象。 |

## getResourceManager

```TypeScript
export function getResourceManager(): Promise<ResourceManager>
```

获取当前应用的资源管理对象，使用Promise异步回调。

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Global.ResourceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResourceManager> | Promise对象，返回资源管理ResourceManager对象。 |

## getResourceManager

```TypeScript
export function getResourceManager(bundleName: string): Promise<ResourceManager>
```

获取指定应用的资源管理对象，使用Promise异步回调。

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Global.ResourceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用包名。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResourceManager> | Promise对象，返回应用包名对应的资源管理ResourceManager对象。 |

