/* 4. write an arrow function where it will do the following 
i. I will take an array where the array elements will be the name of your friends
ii. Check it the length of each element is event element with event length to a new array return the result
*/ 

const filterFriendsByEvenLength = (friendsArray) => {
    return friendsArray.filter((friend) => friend.length % 2 === 0);
  };
  const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const result = filterFriendsByEvenLength(friends);
  console.log(result); 
  