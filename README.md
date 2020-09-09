# Discord Bot Template

This bit template is for easy setup by noobs  and is easy to use if your experienced.

# Add commands

To add command enter 'commands/' then if you add it in the correct folder and in a new command require the following code:

```
module.exports = {
    name: "Command name",
    aliases: ["cmd name","name"],
    category: "Command Category",
    description: "Returns command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        // Your Code HERE!
    }
  }
```

# Developers for this Template

| Name     | Position |       Notes      |
|----------|----------|------------------|
| DJ JR30  |   CEO    | Owns DJ & DevDex |
| DevDex   |   CEO    | Owns DJ & DevDex |
