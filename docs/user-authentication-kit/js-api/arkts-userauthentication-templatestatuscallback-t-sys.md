---
last_update:
  date: 2026-07-04
---

# TemplateStatusCallback (System API)

```TypeScript
type TemplateStatusCallback = (templateStatusList: TemplateStatus[]) => void
```

Defines the callback used to receive the template status.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateStatusList | TemplateStatus[] | Yes | Template status list. |

