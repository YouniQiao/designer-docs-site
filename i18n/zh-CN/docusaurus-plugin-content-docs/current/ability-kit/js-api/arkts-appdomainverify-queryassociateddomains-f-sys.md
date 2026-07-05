# queryAssociatedDomains

## queryAssociatedDomains

```TypeScript
function queryAssociatedDomains(bundleName: string): string[]
```

query domains verify associated with bundleName.

**起始版本：** 13

**需要权限：** 

 ohos.permission.GET_APP_DOMAIN_BUNDLE_INFO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BundleManager.AppDomainVerify

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | app bundleName. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string[] | Result domains. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API accessed by non-system app. |
| 401 | Parameter error. |
| 29900001 | Internal error. |

**示例：**

```TypeScript
import { appDomainVerify } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// 获取包名为"com.example.app1"的应用所关联的域名列表
let bundleName = "com.example.app1";
let domains = appDomainVerify.queryAssociatedDomains(bundleName);
domains.forEach(domain => {
  hilog.info(0x0000, 'testTag', `app:${bundleName} associate with domain:${domain}`);
});

```

