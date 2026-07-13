# @ohos.security.securityGuard

Provides security event management and security model management.
Based on event information, you will be able to analyze the running status of devices.

**Since:** 12

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { securityGuard } from '@kit.SecurityGuardKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getModelResult](arkts-securityguard-getmodelresult-f-sys.md#getmodelresult-1) | Request security model result from security guard. |
| [off](arkts-securityguard-off-f-sys.md#off-1) | Unsubscribe the security event. |
| [on](arkts-securityguard-on-f-sys.md#on-1) | Subscribe the security event. |
| [querySecurityEvent](arkts-securityguard-querysecurityevent-f-sys.md#querysecurityevent-1) | Query security event information from security guard. |
| [reportSecurityEvent](arkts-securityguard-reportsecurityevent-f-sys.md#reportsecurityevent-1) | Report security information to the security guard. |
| [startSecurityEventCollector](arkts-securityguard-startsecurityeventcollector-f-sys.md#startsecurityeventcollector-1) | start the collector to collect data |
| [stopSecurityEventCollector](arkts-securityguard-stopsecurityeventcollector-f-sys.md#stopsecurityeventcollector-1) | stop the collector. |
| [updatePolicyFile](arkts-securityguard-updatepolicyfile-f-sys.md#updatepolicyfile-1) | Update the policy file. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CollectorRule](arkts-securityguard-collectorrule-i-sys.md) | Provides the conditions of Collector. |
| [ModelResult](arkts-securityguard-modelresult-i-sys.md) | Provides the ModelResult type. |
| [ModelRule](arkts-securityguard-modelrule-i-sys.md) | Provides the ModelRule type. |
| [PolicyFile](arkts-securityguard-policyfile-i-sys.md) | Provides policy file information. |
| [Querier](arkts-securityguard-querier-i-sys.md) | Definition callback of receiving the query data. |
| [SecurityEvent](arkts-securityguard-securityevent-i-sys.md) | Provides the SecurityEvent type, including the event id, version info, report content. |
| [SecurityEventInfo](arkts-securityguard-securityeventinfo-i-sys.md) | Provides the conditions of on/off. |
| [SecurityEventRule](arkts-securityguard-securityeventrule-i-sys.md) | Provides the conditions of querySecurityEvent. |
<!--DelEnd-->

