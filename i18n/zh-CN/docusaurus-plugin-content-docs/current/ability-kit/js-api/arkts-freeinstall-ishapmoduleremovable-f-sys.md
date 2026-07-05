# isHapModuleRemovable

## isHapModuleRemovable

```TypeScript
function isHapModuleRemovable(bundleName: string, moduleName: string, callback: AsyncCallback<boolean>): void
```

查询指定模块是否可以被移除。使用callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework.FreeInstall

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| moduleName | string | 是 | 应用程序模块名称。 |
| callback | AsyncCallback&lt;boolean> | 是 | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)。当获取成功时，err为undefined，data为bool值  ，true表示可以移除；false表示不可移除；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle name is not found. |
| 17700002 | The specified module name is not found. |

## isHapModuleRemovable

```TypeScript
function isHapModuleRemovable(bundleName: string, moduleName: string): Promise<boolean>
```

查询指定模块是否可以被移除。使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework.FreeInstall

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| moduleName | string | 是 | 应用程序模块名称。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示可以移除；返回false表示不可移除。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle name is not found. |
| 17700002 | The specified module name is not found. |

