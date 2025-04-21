import { test, expect } from "vitest";
import { ListNode, addTwoNumbers } from "./02-add-two-numbers";


function toList(arr: Array<number>): ListNode {
	return arr.reduceRight((acc, curr, i, a) => {
		if (i === a.length-1) return (acc.val = curr, acc);
		return new ListNode(curr, acc); 
	}, new ListNode())
}

function toArray(node: ListNode) {
	const arr = [];
	let n = node;
	while(n) {
		arr.push(n.val);
		n = n.next;
	}

	return arr;
}


function print(node: ListNode) {
	let n = node;
	while(n) {
		console.log(n.val);
		n = n.next;
	}
}

test("should return [7,0,8]", () => {
		const l1 = toList([2,4,3]);
		const l2 = toList([5,6,4]);
    const result = addTwoNumbers(l1, l2);
		expect(toArray(result)).toStrictEqual([7,0,8]);
})

test("should return [0]", () => {
		const l1 = toList([0]);
		const l2 = toList([0]);
		const result = addTwoNumbers(l1, l2)
		expect(toArray(result)).toStrictEqual([0]);
})

test("should return [8,9,9,9,0,0,0,1]", () => {
	const l1 = toList([9,9,9,9,9,9,9]);
	const l2 = toList([9,9,9,9]);
	const result = addTwoNumbers(l1, l2);
	expect(toArray(result)).toStrictEqual([8,9,9,9,0,0,0,1]);
})

