# queryApn

## queryApn

```TypeScript
function queryApn(admin: Want, apnInfo: Record<string, string>): Array<string>
```

查询符合特定APN信息的APN ID。

**起始版本：** 20

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_APN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| apnInfo | Record&lt;string, string> | 是 | APN的查询条件。 - apnName：APN配置的名称标识符，可选。 - mcc：3位数字的移动国家代码，可选。 -  mnc：2-3位数字的移动网络代码，可选。 - apn：接入点名称，可选。 - type：APN的服务类型，可选。 - user：APN身份验证的用户名，可选。 - proxy：普通数据连接  的代理服务器地址，可选。 - mmsproxy：彩信服务的专用代理地址，可选。 - authType：APN的认证协议类型，可选。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | 满足要求的APN ID。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { networkManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility',
};
let apnInfo: Record<string, string> = {
  // 需根据实际情况进行替换
  "apnName": "CTNET",
  "apn": "CTNET",
  "mnc": "11",
  "mcc": "460",
};
try {
  let queryResult: Array<string> = networkManager.queryApn(wantTemp, apnInfo);
  console.info(`Succeeded in querying apn, result : ${JSON.stringify(queryResult)}`);
} catch (err) {
  console.error(`Failed to query apn. Code: ${err.code}, message: ${err.message}`);
}

```

## queryApn

```TypeScript
function queryApn(admin: Want, apnId: string): Record<string, string>
```

查询特定APN的APN参数信息。

**起始版本：** 20

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_APN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| apnId | string | 是 | 指定的APN ID。可以通过  [networkManager.queryApn]networkManager.queryApn(admin: Want, apnInfo: Record)获取设备信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Record&lt;string, string> | APN parameter information of the specified APN ID.  - apnName: APN identifier.  - mcc: 3-digit mobile country code (MCC).  - mnc: 2-digit or 3-digit mobile network code (MNC).  - apn: access point name.  - type: APN service type.  - user: user name for APN authentication.  - proxy: address of the proxy server for a common data connection.  - mmsproxy: dedicated proxy address of the MMS service.  - authType: authentication protocol type of the APN. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { networkManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility',
};
let apnId: string = "1"; // 需根据实际情况进行替换
try {
  let queryResult: Record<string, string> = networkManager.queryApn(wantTemp, apnId);
  console.info(`Succeeded in querying apn, result : ${JSON.stringify(queryResult)}`);
} catch (err) {
  console.error(`Failed to query apn. Code: ${err.code}, message: ${err.message}`);
}

```

