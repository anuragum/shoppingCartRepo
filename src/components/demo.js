// Define the player object
const player = {
    name: "",
    health: 100,
    items: [],
    location: "start",
    inventoryLimit: 5,
    maxHealth: 100,
  };
  
  // Define locations and their descriptions
  const locations = {
    start: "You are in a dark room. There is a door to the north.",
    northRoom: "You are in a bright room. There is a key on the table.",
    southRoom: "You are in a dusty room. There is a rusty sword on the floor.",
    eastRoom: "You are in a cold room. There is a chest in the corner.",
  };
  
  // Define items and their descriptions
  const items = {
    key: "A shiny golden key.",
    sword: "A rusty sword, it looks like it's seen better days.",
    chest: "A locked chest. You need a key to open it.",
  };
  
  // Define actions that the player can take
  const actions = {
    north: () => {
      if (player.location === "start") {
        player.location = "northRoom";
        return "You go north.";
      } else {
        return "You can't go that way.";
      }
    },
    south: () => {
      if (player.location === "start") {
        player.location = "southRoom";
        return "You go south.";
      } else {
        return "You can't go that way.";
      }
    },
    east: () => {
      if (player.location === "start") {
        player.location = "eastRoom";
        return "You go east.";
      } else {
        return "You can't go that way.";
      }
    },
    pickUp: (item) => {
      if (player.items.length < player.inventoryLimit) {
        player.items.push(item);
        return `You picked up ${item}.`;
      } else {
        return "Your inventory is full.";
      }
    },
    use: (item) => {
      if (player.items.includes(item)) {
        if (item === "key" && player.location === "eastRoom") {
          return "You unlocked the chest and found a potion inside.";
        } else if (item === "sword" && player.location === "southRoom") {
          return "You picked up the sword.";
        } else {
          return "You can't use that here.";
        }
      } else {
        return "You don't have that item.";
      }
    },
    look: () => {
      return locations[player.location];
    },
    status: () => {
      return `Health: ${player.health}/${player.maxHealth}\nItems: ${player.items.join(", ")}`;
    },
  };
  
  // Game loop
  function gameLoop() {
    const userInput = prompt("Enter your action (north, south, east, pickUp [item], use [item], look, status, quit):");
    if (userInput === "quit") {
      alert("Game over. Thanks for playing!");
      return;
    }
    const [action, target] = userInput.split(" ");
    const result = actions[action](target);
    alert(result);
    gameLoop();
  }
  
  // Start the game
  player.name = prompt("Enter your name:");
  alert(`Welcome, ${player.name}!`);
  gameLoop();
  