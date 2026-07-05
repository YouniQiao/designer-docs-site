# getBundleInstaller

## getBundleInstaller

```TypeScript
function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void
```

获取用于安装包的接口，使用callback异步回调。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** null

**需要权限：** 

 ohos.permission.INSTALL_BUNDLE

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;BundleInstaller> | 是 | 回调函数，返回安装接口对象。 |

## getBundleInstaller

```TypeScript
function getBundleInstaller(): Promise<BundleInstaller>
```

获取用于安装包的接口，使用Promise异步回调，返回安装接口对象。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** null

**需要权限：** 

 ohos.permission.INSTALL_BUNDLE

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;BundleInstaller> | Promise对象，返回安装接口对象。 |

