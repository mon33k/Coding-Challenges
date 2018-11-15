class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    add(data) {
        let addedNode = new Node(data)
        if (!this.head) {
            this.head = addedNode
            return this
        }
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = addedNode
        return this
    }

    showList() {
        let list = ''
        let current = this.head
        while (current.next) {
            list += current.data + " ➔ "
            current = current.next;
        }
        list += current.data
        console.log(list)
    }
}

let list1 = new LinkedList()
list1.add(2)
list1.add(3)
list1.add(4)
list1.add(5)
list1.add(7)
list1.add(8)
list1.add(9)
// console.log("list1",list1)
console.log("list1")
list1.showList()

let list2 = new LinkedList()
list2.add(1)
list2.add(2)
list2.add(4)
list2.add(6)
list2.add(10)
list2.add(11)
// console.log("list2",list2)
console.log("list2")
list2.showList()

function mergeTwoList(list1, list2) {
    var mergedList = new LinkedList()
    var cn1 = list1.head
    var cn2 = list2.head
    while (cn1 && cn2) {

        if (cn1.data < cn2.data) {
            mergedList = mergedList.add(cn1.data)
            cn1 = cn1.next
        } else {
            mergedList = mergedList.add(cn2.data)
            cn2 = cn2.next
        }
    }
    console.log("cn1", cn1, 'cn2' ,cn2)
    mergedList.showList()

    if (cn1) {
        // while (cn1) {
            mergedList.add(cn1)
        //     cn1 = cn1.next
        // }
    } else if (cn2) {
        // while (cn2) {
            mergedList.add(cn2)
        //     cn2 = cn2.next
        // }
    }
    // console.log("mergedList:")
    // mergedList.showList()
    return mergedList
}
console.log('thgdf', mergeTwoList(list1, list2).head.next.next.next.next.next.next.next.next.next)
