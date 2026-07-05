# @ohos.security.securityGuard

Provides security event management and security model management. Based on event information, you will be able to analyze the running status of devices.

**起始版本：** 12

**系统能力：** SystemCapability.Security.SecurityGuard

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { securityGuard } from '@kit.SecurityGuardKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getModelResult](arkts-securityguard-getmodelresult-f-sys.md#getModelResult-1) | Request security model result from security guard. |
| <!--DelRow-->[off](arkts-securityguard-off-f-sys.md#off-1) | Unsubscribe the security event. |
| <!--DelRow-->[on](arkts-securityguard-on-f-sys.md#on-1) | Subscribe the security event. |
| <!--DelRow-->[querySecurityEvent](arkts-securityguard-querysecurityevent-f-sys.md#querySecurityEvent-1) | Query security event information from security guard. |
| <!--DelRow-->[reportSecurityEvent](arkts-securityguard-reportsecurityevent-f-sys.md#reportSecurityEvent-1) | Report security information to the security guard. |
| <!--DelRow-->[startSecurityEventCollector](arkts-securityguard-startsecurityeventcollector-f-sys.md#startSecurityEventCollector-1) | start the collector to collect data |
| <!--DelRow-->[stopSecurityEventCollector](arkts-securityguard-stopsecurityeventcollector-f-sys.md#stopSecurityEventCollector-1) | stop the collector. |
| <!--DelRow-->[updatePolicyFile](arkts-securityguard-updatepolicyfile-f-sys.md#updatePolicyFile-1) | Update the policy file. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[CollectorRule](arkts-securityguard-collectorrule-i-sys.md) | Provides the conditions of Collector. |
| <!--DelRow-->[ModelResult](arkts-securityguard-modelresult-i-sys.md) | Provides the ModelResult type. |
| <!--DelRow-->[ModelRule](arkts-securityguard-modelrule-i-sys.md) | Provides the ModelRule type. |
| <!--DelRow-->[PolicyFile](arkts-securityguard-policyfile-i-sys.md) | Provides policy file information. |
| <!--DelRow-->[Querier](arkts-securityguard-querier-i-sys.md) | Definition callback of receiving the query data. |
| <!--DelRow-->[SecurityEvent](arkts-securityguard-securityevent-i-sys.md) | Provides the SecurityEvent type, including the event id, version info, report content. |
| <!--DelRow-->[SecurityEventInfo](arkts-securityguard-securityeventinfo-i-sys.md) | Provides the conditions of on/off. |
| <!--DelRow-->[SecurityEventRule](arkts-securityguard-securityeventrule-i-sys.md) | Provides the conditions of querySecurityEvent. |

