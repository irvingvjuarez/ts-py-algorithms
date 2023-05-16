from typing import List

def reverse_string(s: List[str]):
  string_size = len(s) - 1

  head = 0
  tail = string_size

  while head <= tail:
    if head % 2 == 0:
      s.insert(tail, s.pop(head))
      tail -= 1
    else:
      s.insert(head, s.pop(tail))
      head += 1

  return s