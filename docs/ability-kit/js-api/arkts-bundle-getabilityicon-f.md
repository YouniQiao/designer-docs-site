# getAbilityIcon

## getAbilityIcon

```TypeScript
function getAbilityIcon(bundleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void
```

通过bundleName和abilityName获取对应Icon的[PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image)，使用callback异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| abilityName | string | Yes | 要查询的Ability组件名。 |
| callback | AsyncCallback&lt;image.PixelMap> | Yes | 程序启动作为入参的回调函数，返回指定  [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image)。 |

## getAbilityIcon

```TypeScript
function getAbilityIcon(bundleName: string, abilityName: string): Promise<image.PixelMap>
```

通过bundleName和abilityName获取对应Icon的[PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image)，使用Promise异步回调。 获取调用方自己的信息时不需要权限。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| abilityName | string | Yes | 要查询的Ability组件名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | Returns the PixelMap object representing the icon of the specified ability. |

