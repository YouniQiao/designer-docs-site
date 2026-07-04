# *next

```c
struct *next
```

## Overview

All key-value pairs of the headers of the request or response.

**Since**: 20
 */
typedef struct Http_HeaderEntry {
  /** Key. */
  char *key;
  /** Value, see {@link Http_HeaderValue}. */
  Http_HeaderValue *value;
  /** Points to the next key-value pair {@link Http_HeaderEntry}

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_http_type.h](capi-net-http-type-h.md)

