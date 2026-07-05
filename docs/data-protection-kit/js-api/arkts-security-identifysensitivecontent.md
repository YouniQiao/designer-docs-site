# @ohos.security.identifySensitiveContent

This module identifies sensitive information in a specified file based on the input [Policy](identifySensitiveContent.policy). The system matches the file content against the provided [Policy](identifySensitiveContent.policy) (including sensitive labels, keyword sets, and regular expressions) and returns the matched sensitive content.

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { identifySensitiveContent } from '@ohos.security.identifySensitiveContent';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [scanFile](arkts-dataprotection-scanfile-f.md#scanfile-1) | Identifies sensitive content in a specified file based on the configured policy and returns the identified result array, including the matched sensitivity labels, matched content, and number of matched items. This API uses a promise to return the result. |

### Interfaces

| Name | Description |
| --- | --- |
| [MatchResult](arkts-dataprotection-matchresult-i.md) | Displays the identification result of sensitive content. |
| [Policy](arkts-dataprotection-policy-i.md) | Defines the policy for sensitive content identification. In a single policy, keywords and regular expressions are combined in sequence, and two-level matching is performed. First, keyword matching is performed. If a keyword is matched, regular expression matching is performed within a scope of 100 bytes: from the position 50 bytes before the matched position of the keyword to that 50 bytes after the matched position. Multiple policies are independent of each other, and each policy is applied separately during scanning. sensitiveLabel is used to mark the matching result to identify the specific policy matched. |

