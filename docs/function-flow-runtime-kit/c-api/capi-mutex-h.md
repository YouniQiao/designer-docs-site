# mutex.h

## Overview

Declares the mutex interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 10

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API int ffrt_mutexattr_init(ffrt_mutexattr_t* attr)](#ffrt_mutexattr_init) | Initializes a mutex attribute. |
| [FFRT_C_API int ffrt_mutexattr_settype(ffrt_mutexattr_t* attr, int type)](#ffrt_mutexattr_settype) | Sets the type of a mutex attribute. |
| [FFRT_C_API int ffrt_mutexattr_gettype(ffrt_mutexattr_t* attr, int* type)](#ffrt_mutexattr_gettype) | Gets the type of a mutex attribute. |
| [FFRT_C_API int ffrt_mutexattr_destroy(ffrt_mutexattr_t* attr)](#ffrt_mutexattr_destroy) | Destroys a mutex attribute, the user needs to invoke this interface. |
| [FFRT_C_API int ffrt_mutex_init(ffrt_mutex_t* mutex, const ffrt_mutexattr_t* attr)](#ffrt_mutex_init) | Initializes a mutex. |
| [FFRT_C_API int ffrt_mutex_lock(ffrt_mutex_t* mutex)](#ffrt_mutex_lock) | Locks a mutex. |
| [FFRT_C_API int ffrt_mutex_unlock(ffrt_mutex_t* mutex)](#ffrt_mutex_unlock) | Unlocks a mutex. |
| [FFRT_C_API int ffrt_mutex_trylock(ffrt_mutex_t* mutex)](#ffrt_mutex_trylock) | Attempts to lock a mutex. |
| [FFRT_C_API int ffrt_mutex_destroy(ffrt_mutex_t* mutex)](#ffrt_mutex_destroy) | Destroys a mutex, the user needs to invoke this interface. |

## Function description

### ffrt_mutexattr_init()

```c
FFRT_C_API int ffrt_mutexattr_init(ffrt_mutexattr_t* attr)
```

**Description**

Initializes a mutex attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutexattr_t](capi-ffrt-ffrt-mutexattr-t.md)* attr | Indicates a pointer to the mutex attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex attribute is initialized;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_mutexattr_settype()

```c
FFRT_C_API int ffrt_mutexattr_settype(ffrt_mutexattr_t* attr, int type)
```

**Description**

Sets the type of a mutex attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutexattr_t](capi-ffrt-ffrt-mutexattr-t.md)* attr | Indicates a pointer to the mutex attribute. |
| int type | Indicates an int to the mutex type. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex attribute type is set successfully;<br>         <b>ffrt_error_inval</b> if attr is a null pointer or<br>         the mutex attribute type is not ffrt_mutex_normal or ffrt_mutex_recursive. |

### ffrt_mutexattr_gettype()

```c
FFRT_C_API int ffrt_mutexattr_gettype(ffrt_mutexattr_t* attr, int* type)
```

**Description**

Gets the type of a mutex attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutexattr_t](capi-ffrt-ffrt-mutexattr-t.md)* attr | Indicates a pointer to the mutex attribute. |
| int* type | Indicates a pointer to the mutex type. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex attribute type is retrieved successfully;<br>         <b>ffrt_error_inval</b> if attr or type is a null pointer. |

### ffrt_mutexattr_destroy()

```c
FFRT_C_API int ffrt_mutexattr_destroy(ffrt_mutexattr_t* attr)
```

**Description**

Destroys a mutex attribute, the user needs to invoke this interface.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutexattr_t](capi-ffrt-ffrt-mutexattr-t.md)* attr | Indicates a pointer to the mutex attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex attribute is destroyed;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_mutex_init()

```c
FFRT_C_API int ffrt_mutex_init(ffrt_mutex_t* mutex, const ffrt_mutexattr_t* attr)
```

**Description**

Initializes a mutex.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutex_t](capi-ffrt-ffrt-mutex-t.md)* mutex | Indicates a pointer to the mutex. |
| [const ffrt_mutexattr_t](capi-ffrt-ffrt-mutexattr-t.md)* attr | Indicates a pointer to the mutex attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex is initialized;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_mutex_lock()

```c
FFRT_C_API int ffrt_mutex_lock(ffrt_mutex_t* mutex)
```

**Description**

Locks a mutex.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutex_t](capi-ffrt-ffrt-mutex-t.md)* mutex | Indicates a pointer to the mutex. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex is locked;<br>         <b>ffrt_error_inval</b> or blocks the calling thread otherwise. |

### ffrt_mutex_unlock()

```c
FFRT_C_API int ffrt_mutex_unlock(ffrt_mutex_t* mutex)
```

**Description**

Unlocks a mutex.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutex_t](capi-ffrt-ffrt-mutex-t.md)* mutex | Indicates a pointer to the mutex. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex is unlocked;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_mutex_trylock()

```c
FFRT_C_API int ffrt_mutex_trylock(ffrt_mutex_t* mutex)
```

**Description**

Attempts to lock a mutex.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutex_t](capi-ffrt-ffrt-mutex-t.md)* mutex | Indicates a pointer to the mutex. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex is locked;<br>         <b>ffrt_error_inval</b> or <b>ffrt_error_busy</b> otherwise. |

### ffrt_mutex_destroy()

```c
FFRT_C_API int ffrt_mutex_destroy(ffrt_mutex_t* mutex)
```

**Description**

Destroys a mutex, the user needs to invoke this interface.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_mutex_t](capi-ffrt-ffrt-mutex-t.md)* mutex | Indicates a pointer to the mutex. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the mutex is destroyed;<br>         <b>ffrt_error_inval</b> otherwise. |


