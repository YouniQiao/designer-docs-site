# getBundleArchiveInfo

## getBundleArchiveInfo

```TypeScript
function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void
```

获取有关HAP中包含的应用程序包的信息，使用callback异步回调。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hapFilePath | string | 是 | HAP存放路径，支持当前应用程序的绝对路径和数据目录沙箱路径。 |
| bundleFlags | number | 是 | 用于指定要返回的BundleInfo对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中包信息相关  flag。 |
| callback | AsyncCallback&lt;BundleInfo> | 是 | 程序启动作为入参的回调函数，返回HAP中包含的应用程序包的信息。 |

## getBundleArchiveInfo

```TypeScript
function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number): Promise<BundleInfo>
```

获取有关HAP中包含的应用程序包的信息，使用Promise异步回调。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hapFilePath | string | 是 | HAP存放路径。支持当前应用程序的绝对路径和数据目录沙箱路径。 |
| bundleFlags | number | 是 | 用于指定要返回的BundleInfo对象中包含信息的标记。取值范围：参考[BundleFlag说明]bundle.BundleFlag中包信息相关  flag。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;BundleInfo> | - Returns the BundleInfo object. |

