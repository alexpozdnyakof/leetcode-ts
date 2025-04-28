export class ListNode {
  constructor(
    public val: number = 0,
    public next: ListNode | null = null
  ) {}
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let list_one = l1;
  let list_two = l2;
  let head!: ListNode;
  let result!: ListNode;
  let cache = 0;
  while (list_one !== null || list_two !== null) {
    const sum = (list_one?.val ?? 0) + (list_two?.val ?? 0) + cache;
    if (!head) {
      head = new ListNode(sum % 10);
      result = head;
    } else {
      result.next = new ListNode(sum % 10);
      result = result.next;
    }
    cache = Math.floor(sum / 10);
    list_one = list_one?.next ?? null;
    list_two = list_two?.next ?? null;
  }

  if (cache !== 0) {
    result.next = new ListNode(cache);
  }
  return head;
}
