'use strict';

const LinkedList = require('./linked-list');

// list !== linked list

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(62);

linkedList.insertBefore(10,1);
linkedList.insertAfter(20,2);

linkedList.valueAtK(2);


linkedList.traverse();



