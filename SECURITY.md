# Security — geolocated box

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Sample Madrid-area point | inside |
| Origin | outside |
| Inverted box | not inside |
| Date line | not wrapped |

## Attack angles

1. Treating a true result as a signed drop claim.  
2. Reading device GPS inside the unit test.  
3. Wrapping longitude and still citing these tests.

## Honesty limits

Integer box only. No transaction.
