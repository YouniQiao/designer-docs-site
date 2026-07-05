# setAppClonePreference

## setAppClonePreference

```TypeScript
function setAppClonePreference(bundleName: string, appClonePreference: AppClonePreference): Promise<void>
```

Sets the application clone preference configuration.

**起始版本：** 26.1.0

**需要权限：** 

 ohos.permission.MANAGE_CLONE_BUNDLE_PREFERENCES

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Bundle name of the target application. |
| appClonePreference | AppClonePreference | 是 | Application clone preference configuration to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700061 | The specified app index is invalid. |
| 17700094 | The specified bundle did not create a clone. |

