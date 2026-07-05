# getAppClonePreference

## getAppClonePreference

```TypeScript
function getAppClonePreference(bundleName: string): Promise<AppClonePreference>
```

Obtains the application clone preference configuration based on the given bundle name.

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

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AppClonePreference> | Promise used to return the application clone preference configuration. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700095 | The specified bundle not found app clone preference. |

