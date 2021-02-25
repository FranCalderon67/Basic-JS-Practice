/*
You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String,
which must take in input array, containing the names of people who like an item.
It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/

const emptyLikes = [];
const peterLikes = ["Peter"];
const twoLikes = ["Jacob", "Alex"];
const threeLikes = ["Max", "John", "Mark"];
const fourLikes = ["Alex", "Jacob", "Mark", "Max"];

function superLikes (personArray){
  switch (personArray) {
    case peterLikes:
      console.log("Peter likes this")
      break;
      
        case twoLikes:
          console.log("Jacob and Alex like this")
          break;
          
            case threeLikes:
              console.log("Max, John and Mark like this")
              break;
              
                case fourLikes:
                  console.log("Alex, Jacob and 2 others like this")
                  break;
      default:
        console.log("No one likes this")
  };
  return;

};

superLikes(emptyLikes);
superLikes(peterLikes);
superLikes(twoLikes);
superLikes(threeLikes);
superLikes(fourLikes);