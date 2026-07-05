# on

## on('BundleStatusChange')

```TypeScript
function on(type: 'BundleStatusChange',
    bundleStatusCallback: BundleStatusCallback, callback: AsyncCallback<string>): void
```

注册Callback。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [on](arkts-bundlemonitor-on-f-sys.md#on-1) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleMonitor#on

**Required permissions:** 

 ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BundleStatusChange' | Yes | 指示应执行命令，只支持BundleStatusChange。 |
| bundleStatusCallback | BundleStatusCallback | Yes | 指示要注册的回调。 |
| callback | AsyncCallback&lt;string> | Yes | 程序启动作为入参的回调函数，返回正确结果或错误信息。 |

## on('BundleStatusChange')

```TypeScript
function on(type: 'BundleStatusChange', bundleStatusCallback: BundleStatusCallback): Promise<string>
```

注册Callback。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [on](arkts-bundlemonitor-on-f-sys.md#on-1) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleMonitor#on

**Required permissions:** 

 ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BundleStatusChange' | Yes | 指示应执行命令，只支持BundleStatusChange。 |
| bundleStatusCallback | BundleStatusCallback | Yes | 指示要注册的回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | - Promise形式返回正确结果或错误信息。 |

