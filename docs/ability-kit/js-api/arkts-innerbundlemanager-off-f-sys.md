# off

## off('BundleStatusChange')

```TypeScript
function off(type: 'BundleStatusChange', callback: AsyncCallback<string>): void
```

取消注册Callback。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [off](arkts-bundlemonitor-off-f-sys.md#off-1) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleMonitor#off

**Required permissions:** 

 ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BundleStatusChange' | Yes | 指示应执行命令，只支持BundleStatusChange。 |
| callback | AsyncCallback&lt;string> | Yes | 程序启动作为入参的回调函数，返回正确结果或错误信息。 |

## off

```TypeScript
function off(type: 'BundleStatusChange'): Promise<string>
```

取消注册Callback。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [off](arkts-bundlemonitor-off-f-sys.md#off-1) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleMonitor#off

**Required permissions:** 

 ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BundleStatusChange' | Yes | 指示应执行命令，只支持BundleStatusChange。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise形式返回正确结果或错误信息。 |

