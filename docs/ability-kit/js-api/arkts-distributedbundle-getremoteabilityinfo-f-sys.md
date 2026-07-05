# getRemoteAbilityInfo

## getRemoteAbilityInfo

```TypeScript
function getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>): void
```

根据给定的ElementName获取有关远程设备AbilityInfo信息，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.DistributedBundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | 获得的ElementName信息。 |
| callback | AsyncCallback&lt;RemoteAbilityInfo> | Yes | 程序启动作为入参的回调函数，返回远程基本能力信息。 |

## getRemoteAbilityInfo

```TypeScript
function getRemoteAbilityInfo(elementName: ElementName): Promise<RemoteAbilityInfo>
```

根据给定的ElementName获取有关远程设备AbilityInfo信息，使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.DistributedBundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | 获得的ElementName信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RemoteAbilityInfo> | Promise形式返回远程基本能力信息。 |

