// https://github.com/zubair3319/Assignment-3


// Problem-1

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(2);
console.log(result);


// Problem-2


function budgetCalculator(clock, phone, laptop) {

    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    var totalCost = clockPrice + phonePrice + laptopPrice;
    return clockPrice, phonePrice, laptopPrice, totalCost;
}

var amount = budgetCalculator(2, 2, 2);
console.log(clockPrice, phonePrice, laptopPrice);
console.log(totalCost);


// problem-4


const friends = 'Robin Foyej Emon Julkarnain';

const megaFriend = (friends) => {

    const friendsArray = friends.split(' ');
    const SortedFriendsArray = friendsArray.sort((friendsArray, friendsB) => {
        return friendsB.length - friendsArray.length;
    }
    );
    return (SortedFriendsArray[0].length);
}

console.log(megaFriend(friends));

